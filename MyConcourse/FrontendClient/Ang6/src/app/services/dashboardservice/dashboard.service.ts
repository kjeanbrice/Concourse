import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retryWhen, delay, take, map, catchError, concatMap, scan, delayWhen } from 'rxjs/operators';
import { throwError, Observable, concat, of, timer } from 'rxjs';
import {Group, GroupResponse} from '../../interfaces/group.interface';

@Injectable()
export class DashboardService {

    static readonly BASE_URL: string = document.getElementById('baseurl-asp').innerHTML;

    constructor(private http: HttpClient) {
    }

    retrieveGroups(): Observable<Group[]> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
          };

        return this.http.get<Group[]>(DashboardService.BASE_URL + '/api/dashboard', httpOptions)
            .pipe(
                retryWhen((errors) => {
                    return errors.pipe(
                        delay(3000),
                        concatMap((error, index) => {
                            if (index === 1) {
                                return throwError(error);
                            }
                            return of(null);
                        })

                    );
                }
                ),
                map((response: Group[]) => {
                    console.log('Status:' + JSON.stringify(response));
                    return response;
                }),

                catchError((err: any) => { console.log(err.status); return this.errorHandler(err); })
            );
    }

    createGroup(_title: string, _description: string, _coursecode: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
          };
        let params_opt = new HttpParams();
        params_opt.set('title', _title);
        params_opt = params_opt.set('description', _description);
        params_opt = params_opt.set('coursecode', _coursecode);
        //
        return this.http.post(DashboardService.BASE_URL + '/api/dashboard/creategroup', {headers: httpOptions, params: params_opt})
            .pipe(
                retryWhen((errors) => {
                    return errors.pipe(
                        delay(3000),
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
                    console.log('Status:' + response);
                    return response;
                }),

                catchError((err: any) => { console.log(err.status); return this.errorHandler(err); })
            );
    }


    joinGroup(_groupID: number, _coursecode: string): Observable<boolean> {
        return of(true);
    }

    deleteGroup(_itemID: string): Observable<boolean> {
        return of(true);
    }

    editGroup(_newtitle: string, _newdescription: string, _newcoursecode: string): Observable<boolean> {
        return of(true);
    }

    private errorHandler(err: any) {
        if (err) {
          return throwError(err);
        }
        return throwError('Server Error');
      }

}
