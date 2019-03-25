import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retryWhen, delay, take, map, catchError, concatMap, scan, delayWhen } from 'rxjs/operators';
import { throwError, Observable, concat, of, timer, BehaviorSubject } from 'rxjs';
import { Post } from '../../interfaces/post.interface';




@Injectable()
export class DiscussionBoardService {
    static readonly BASE_URL: string = document.getElementById('baseurl-asp').innerHTML;

    constructor(private http: HttpClient) {
    }

    retrievePosts(discussionboard_id: number): Observable<Post[]> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
          };

          let httpHeaders = new HttpHeaders();
          httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
          httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');


          let params_opt = new HttpParams();
          params_opt = params_opt.set('DiscussionBoardID', '' + discussionboard_id);
        return this.http.get<Post[]>(DiscussionBoardService.BASE_URL + '/api/dashboard/posts', {headers: httpHeaders, params: params_opt})
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
                map((response: Post[]) => {
                    console.log('Status:' + JSON.stringify(response));
                    return response;
                }),

                catchError((err: any) => { console.log(err.status); return this.errorHandler(err); })
            );
    }


    createPost(discussionboard_id: number, subject: string, content: string): Observable<Post[]> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
          };

          let httpHeaders = new HttpHeaders();
          httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
          httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');


          let params_opt = new HttpParams();
          params_opt = params_opt.set('discussionBoardid', '' + discussionboard_id);
          params_opt = params_opt.set('subject', subject);
          params_opt = params_opt.set('content', content);
        return this.http.post<Post[]>(DiscussionBoardService.BASE_URL + '/api/dashboard/createpost', params_opt, {headers: httpHeaders})
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
                map((response: Post[]) => {
                    console.log('Status:' + JSON.stringify(response));
                    return response;
                }),

                catchError((err: any) => { console.log(err.status); return this.errorHandler(err); })
            );
    }





    private errorHandler(err: any) {
        if (err) {
          return throwError(err);
        }
        return throwError('Server Error');
      }

}


