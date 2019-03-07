import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retryWhen, delay, take, map, catchError, concatMap, scan, delayWhen} from 'rxjs/operators';
import { throwError, Observable, concat, of, timer } from 'rxjs';

@Injectable()
export class DashboardService {

    static readonly BASE_URL: string = document.getElementById('baseurl-asp').innerHTML;

    constructor(private http: HttpClient) {
    }

    createGroup(_title: string, _description_: string, _coursecode: string): Observable<any> {
        return of(null);
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


}
