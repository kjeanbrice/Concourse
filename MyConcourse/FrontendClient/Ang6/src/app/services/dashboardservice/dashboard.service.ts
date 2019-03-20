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

    createGroup(_title: string, _description: string, _groupcode: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
          };
        let params_opt = new HttpParams();
        params_opt = params_opt.set('title', _title);
        params_opt = params_opt.set('description', _description);
        params_opt = params_opt.set('groupcode', _groupcode);
        //
        return this.http.post(DashboardService.BASE_URL + '/api/dashboard/creategroup', params_opt , httpOptions)
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


    joinGroup(_groupid: string, _groupcode: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
          };
        let params_opt = new HttpParams();
        params_opt = params_opt.set('groupid', _groupid);
        params_opt = params_opt.set('groupcode', _groupcode);

        return this.http.post(DashboardService.BASE_URL + '/api/dashboard/joingroup', params_opt, httpOptions).pipe(
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

    deleteGroup(_itemID: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
          };
        let params_opt = new HttpParams();
        params_opt = params_opt.set('discussionboardid', _itemID);

        return this.http.post(DashboardService.BASE_URL + '/api/dashboard/deletegroup', params_opt, httpOptions).pipe(
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

    editGroup(_newtitle: string, _newdescription: string, _newgroupcode: string, _itemID: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
          };
        let params_opt = new HttpParams();
        params_opt = params_opt.set('newtitle', _newtitle);
        params_opt = params_opt.set('newdesription', _newdescription);
        params_opt = params_opt.set('newcoursecode', _newgroupcode);
        params_opt = params_opt.set('discussionboardid', _itemID);

        return this.http.post(DashboardService.BASE_URL + '/api/dashboard/editgroup', params_opt, httpOptions).pipe(
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

    private errorHandler(err: any) {
        if (err) {
          return throwError(err);
        }
        return throwError('Server Error');
      }

}
