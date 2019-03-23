import {Component, OnInit} from '@angular/core';
import { DiscussionBoardService } from '../../services/discussionboardservice/discussionboard.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-discussionboard',
    templateUrl: './discussionboard.component.html',
    styleUrls: ['./discussionboard.component.css']
})

export class DiscussionBoardComponent implements OnInit {

    discussionboard_id: number;
    constructor(private discussionboard_service: DiscussionBoardService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.discussionboard_id = Number(this.route.snapshot.paramMap.get('id'));
        if (!this.discussionboard_id) {
            this.router.navigate(['/error']);
        }
    }

}
