import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retryWhen, delay, take, map, catchError, concatMap, scan, delayWhen } from 'rxjs/operators';
import { throwError, Observable, concat, of, timer, BehaviorSubject } from 'rxjs';



@Injectable()
export class DiscussionBoardService {
    private discussionboard_id_source = new BehaviorSubject<number>(-1);
    current_discussion_board = this.discussionboard_id_source.asObservable();

    constructor(private http_service: HttpClient) {
    }

    setDiscussionBoardID(new_discussionboard_id: number) {
        this.discussionboard_id_source.next(new_discussionboard_id);
    }

}
