import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retryWhen, delay, take, map, catchError, concatMap, scan, delayWhen} from 'rxjs/operators';
import { throwError, Observable, concat, of, timer } from 'rxjs';
import { makeBindingParser } from '@angular/compiler';


@Injectable()
export class UserService {

  static readonly ACCESS_TOKEN_KEY: string = 'ACCESS TOKEN';
  static readonly BASE_URL: string = document.getElementById('baseurl-asp').innerHTML;



  constructor(private http: HttpClient) {

  }


  private getRequestVerificationToken(): string {
    const token_node = document.getElementsByName('__RequestVerificationToken')[0];
    if (token_node === null || token_node === undefined) {
      return null;
    }

    const token = token_node.getAttribute('value');
    return token;
  }

  isAuth(): Observable<boolean> {


    let token: string;


    token = window.sessionStorage.getItem('access_token');
    if (token === undefined || token === null) {
      return of(false);
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
      })
    };

    const auth_check = this.http.get(UserService.BASE_URL + '/api/account/userinfo', httpOptions).pipe(
      retryWhen(errors => {
        return errors.pipe(
          delay(5000),
          concatMap((error, index) => {
            if (index === 3) {
              return throwError(error);
            }
            return null;
          })

        );
      }),
      map((response: Response) => {

        console.log('isAuth method inside User.Service class: ' + JSON.stringify(response));
        if (sessionStorage.getItem('email') === undefined) {
          return false;
        }

        const response_email: string = response['Email'];
        const first_name: string = response['FirstName'];
        const last_name:  string = response['LastName'];

        sessionStorage.setItem('firstname', first_name);
        sessionStorage.setItem('lastname', last_name);



        const test_email: string = sessionStorage.getItem('email').trim();
        console.log('isAuth method inside User.Service class: test_email: ' + test_email + ' Respone email: ' +
        response_email + 'FirstName: ' + first_name + ' LastName: ' + last_name);


        if (response['Email'] === sessionStorage.getItem('email').trim()) {
          return true;
        } else {
          console.log('isAuth method inside User.Service class: false');
          return false;

        }

      })
    );

    return auth_check;
  }

  register(_firstname: string, _lastname: string, _email: string, _password: string, _confirmpassword): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let params: HttpParams = new HttpParams();
    params = params.set('firstname', _firstname);
    params = params.set('lastname', _lastname);
    params = params.set('email', _email);
    params = params.set('password', _password);
    params = params.set('confirmpassword', _confirmpassword);

    console.log('Inside Register');

    return this.http.post(UserService.BASE_URL + '/api/account/register', params).pipe(
      retryWhen((errors) => {
        return errors.pipe(
          delay(5000),
          concatMap((error, index) => {
            if (index === 2) {
              console.log('Inside Register: ' + index);
              return throwError(error);
            }
            return of(null);
          })

        );
      }
      ),
      map((response: Response) => {
        console.log('Register Success');
        console.log(response);
        return response;
      }
      )
    );
  }

  login(_username: string, _password: string): Observable<any> {
    //
    const request_verification_token = this.getRequestVerificationToken();
    if (request_verification_token === null) {
      of(null);
    }

    console.log(UserService.BASE_URL);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let params: HttpParams = new HttpParams();
    params = params.set('username', _username);
    params = params.set('password', _password);
    params = params.set('__RequestVerificationToken', request_verification_token);
    params = params.set('grant_type', 'password');

    const body = {
      grant_type: 'password',
      username: _username,
      passowrd: _password
    };

    console.log('Params: ' + params.toString());
    const test = params.toString();

    return this.http.post(UserService.BASE_URL + '/token', params.toString())
      .pipe(
        retryWhen((errors) => {
          return errors.pipe(
            delay(5000),
            concatMap((error, index) => {
              if (index === 1) {
                return throwError(error);
              }
              return of(null);
            })

          );
        }
        ),
        map((response: Response) => {
          console.log('Status:' + response['access_token']);
          window.sessionStorage.setItem('access_token', response['access_token']);
          window.sessionStorage.setItem('email', response['userName']);
          return response;
        }),

        catchError((err: any) => { console.log(err.status); return this.errorHandler(err); })
      );

  }


  public logout(): void {
    window.sessionStorage.removeItem('access_token');
    window.sessionStorage.removeItem('email');
  }

  private errorHandler(err: any) {

    if (err) {
      return throwError(err);
    }

    return throwError('Server Error');
  }



}
