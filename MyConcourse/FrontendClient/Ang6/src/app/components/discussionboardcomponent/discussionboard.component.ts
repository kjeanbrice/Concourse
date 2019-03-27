import { Component, OnInit } from '@angular/core';
import { DiscussionBoardService } from '../../services/discussionboardservice/discussionboard.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { Comment } from '../../interfaces/comment.interface';
import { ERROR_NAME_NOT_VALID, ERROR_SERVER } from '../../constants/constants.export';




@Component({
    selector: 'app-discussionboard',
    templateUrl: './discussionboard.component.html',
    styleUrls: ['./discussionboard.component.css']
})

export class DiscussionBoardComponent implements OnInit {


    editorContent: string;

    MAX_SUBJECT_LIMIT = 200;
    MAX_CONTENT_LIMIT = 2000;


    error_createpost_subject = '';
    error_createpost_content = '';
    error_createpost_server = '';

    error_createcomment_content = '';
    error_createcomment_server = '';

    css_loading_createpost = 'dimmer';
    css_loading_editpost = 'dimmer';
    css_loading_deletepost = 'dimmer';
    css_loading_createcomment = 'dimmer';

    createpost_subject_count: string = null;
    createpost_content_count: string = null;

    valid_createpost_subject = false;
    valid_createpost_content = false;
    valid_createpost_data = false;

    valid_createcomment_data = false;
    valid_createcomment_content = false;

    initial_load = true;

    createpost_subject: string = null;
    createpost_content: string = null;
    createcomment_content: string = null;

    alert_success_settings = 'hide-item';
    alert_success_message = '';
    comment_input_settings = 'hide-item';


    discussionboard_id: number;
    posts_navigation_subsection: string[];
    current_posts: Post[] = [];
    current_postid: number = null;

    current_comments: Comment[] = [];

    createpost_editor: any = null;
    createcomment_editor: any = null;

    viewing_area_config = {
        toolbar: false
    };

    edit_area_config = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            ['code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }]
        ]

    };

    viewing_area_styles = {
        border: 'none',
        fontSize: 'inherit',
        fontFamily: 'inherit'
    };

    default_post_area_text = 'Post Section';

    constructor(private discussionboard_service: DiscussionBoardService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.discussionboard_id = Number(this.route.snapshot.paramMap.get('id'));
        if (!this.discussionboard_id) {
            this.router.navigate(['/error']);
        }

        this.hideCommentInput();
        this.resetFormFields();
        this.loadPosts(0);
        this.loadComments(0);
    }

    populateEditor(event: any, option: string, delta: any) {

        const editors = document.getElementsByClassName('ql-editor');

        for (let i = 0; i < editors.length; i++) {
            const val = editors[i].getAttribute('contenteditable');
            if (val === 'false') {
                editors[i].classList.add('q1-editor-settings-view');
            }

            if (val === 'true') {
                editors[i].classList.add('q1-editor-settings-edit');
            }
        }
        switch (option) {
            case 'createpost':
                this.createpost_editor = event;
                break;
            case 'createcomment':
                this.createcomment_editor = event;
                break;
            default:
                event.setContents(JSON.parse(delta));
                break;
        }
    }


    onChangePost(_postid: number) {
        this.current_postid = _postid;
        for (let i = 0; i < this.current_posts.length; i++) {
            if (this.current_posts[i].PostId === _postid) {
                document.getElementById('post-option' + this.current_posts[i].PostId).classList.add('activepost');
            } else {
                document.getElementById('post-option' + this.current_posts[i].PostId).classList.remove('activepost');
            }
            this.current_posts[i].Active = '';
        }
    }

    showCommentInput() {
        this.comment_input_settings = '';
    }

    hideCommentInput() {
        this.comment_input_settings = 'hide-item';
    }

    changeAlertSuccessMessage(message: string): void {
        this.alert_success_message = message;
    }

    onAlertSuccessClose(event: any): void {
        this.alert_success_settings = 'hide-item';
    }

    onAlertSuccessOpen(): void {
        if (this.alert_success_settings === 'hide-item') {
            this.alert_success_settings = '';
        } else {
            this.alert_success_settings = 'hide-item';
            this.alert_success_settings = '';
        }
    }

    loadPosts(period: number): void {
        if (period > 0) {

        } else {
            this.discussionboard_service.retrievePosts(this.discussionboard_id).subscribe(
                data => {
                    const isSetup = this.setupPosts(data);
                    if (isSetup) {
                        console.log('Posts have been updated (DiscussionBoard).');
                        this.setupPostNavigation(data);
                        if (this.initial_load) {
                            this.initial_load = false;
                            if (this.current_posts.length > 0) {
                                this.current_postid = this.current_posts[0].PostId;
                                this.current_posts[0].Active = 'activepost';
                                this.showCommentInput();
                            }

                        }
                    }
                    console.log('Results: DiscussionBoard ' + JSON.stringify(data));
                },
                errors => {
                    console.log('An error occured while attempting to load data. Error DiscussionBoard: ' + errors);
                }
            );

        }
    }

    setupPosts(new_posts: Post[]): boolean {
        const new_posts_length = new_posts.length;
        const curr_posts_length = this.current_posts.length;
        if (new_posts_length !== curr_posts_length) {
            this.current_posts = new_posts;
            return true;
        }

        let isChanged = false;
        for (let i = 0; i < new_posts.length; i++) {
            const isEqual = this.isPostEqual(new_posts[i], this.current_posts[i]);
            if (!isEqual) {
                isChanged = true;
                break;
            }
        }

        if (isChanged) {
            this.current_posts = new_posts;
            return true;
        }

        return false;
    }





    loadComments(period: number): void {
        if (period > 0) {

        } else {
            this.discussionboard_service.retrieveComments(this.discussionboard_id).subscribe(
                data => {
                    const isSetup = this.setupComments(data);
                    if (isSetup) {
                        console.log('Comments have been updated (DiscussionBoard).');
                    }
                    console.log('Results: DiscussionBoard Comments' + JSON.stringify(data));
                },
                errors => {
                    console.log('An error occured while attempting to load data. Error DiscussionBoard Comments: ' + errors);
                }
            );

        }
    }

    setupComments(new_comments: Comment[]): boolean {
        const new_comments_length = new_comments.length;
        const curr_comments_length = this.current_comments.length;
        if (new_comments_length !== curr_comments_length) {
            this.current_comments = new_comments;
            return true;
        }

        let isChanged = false;
        for (let i = 0; i < new_comments.length; i++) {
            const isEqual = this.isCommentEqual(new_comments[i], this.current_comments[i]);
            if (!isEqual) {
                isChanged = true;
                break;
            }
        }

        if (isChanged) {
            this.current_comments = new_comments;
            return true;
        }

        return false;
    }

    setupPostNavigation(posts: Post[]) {
        if (posts === undefined || posts === null || posts.length === 0) {
            this.posts_navigation_subsection = [];
        }

        this.posts_navigation_subsection = new Array(posts.length);
        for (let i = 0; i < posts.length; i++) {

            let post_content = posts[i].Content;
            if (post_content.trim().length < 150) {
                this.posts_navigation_subsection[i] = post_content;
                continue;
            }

            post_content = post_content.substring(0, 150).trim() + '...';
            this.posts_navigation_subsection[i] = post_content;

        }
    }

    isPostEqual(firstPost: Post, secondPost: Post): boolean {

        if (firstPost === null || firstPost === undefined || secondPost === null || secondPost === undefined) {
            return false;
        }

        let isEqual = false;
        if (firstPost.Content === secondPost.Content
            && firstPost.DateCreated === secondPost.DateCreated
            && firstPost.DiscussionBoardId === secondPost.DiscussionBoardId
            && firstPost.FirstName === secondPost.FirstName
            && firstPost.LastName === secondPost.LastName
            && firstPost.OwnerId === secondPost.OwnerId
            && firstPost.PostId === secondPost.PostId
            && firstPost.TimeCreated === secondPost.TimeCreated
            && firstPost.Title === secondPost.Title
            && firstPost.UserRole === secondPost.UserRole
            && firstPost.Username === secondPost.Username) {
            isEqual = true;
        }

        return isEqual;
    }


    isCommentEqual(firstComment: Comment, secondComment: Comment): boolean {

        if (firstComment === null || firstComment === undefined || secondComment === null || secondComment === undefined) {
            return false;
        }

        let isEqual = false;
        if (firstComment.Content === secondComment.Content
            && firstComment.DateCreated === secondComment.DateCreated
            && firstComment.DiscussionBoardId === secondComment.DiscussionBoardId
            && firstComment.FirstName === secondComment.FirstName
            && firstComment.LastName === secondComment.LastName
            && firstComment.OwnerId === secondComment.OwnerId
            && firstComment.PostID === secondComment.PostID
            && firstComment.CommentId === secondComment.CommentId
            && firstComment.TimeCreated === secondComment.TimeCreated
            && firstComment.UserRole === secondComment.UserRole
            && firstComment.Username === secondComment.Username) {
            isEqual = true;
        }

        return isEqual;
    }

    onSubmit(event: any): void {
        switch (event.target.id) {
            case 'btn-createpost':
                this.css_loading_createpost = 'dimmer active';
                if (this.valid_createpost_data === true) {
                    this.discussionboard_service.createPost(this.discussionboard_id, this.createpost_subject,
                        this.createpost_content, this.createpost_editor.getContents()).subscribe(
                            data => {
                                document.getElementById('createmodal-close').click();
                                if (this.createpost_editor !== null) {
                                    this.createpost_editor.deleteText(0, this.createpost_editor.getLength());
                                }
                                this.changeAlertSuccessMessage('You have successfully created a new post!');
                                this.onAlertSuccessOpen();
                                this.resetFormFields();
                                document.getElementById('error-createpost-server').style.display = 'none';
                                this.loadPosts(0);
                            },
                            errors => {
                                if (errors.error) {
                                    this.error_createpost_server = errors.error;
                                } else {
                                    this.error_createpost_server = ERROR_SERVER;
                                }
                                document.getElementById('error-createpost-server').style.display = 'block';
                                this.css_loading_createpost = 'dimmer';
                            });
                } else {
                    this.css_loading_createpost = 'dimmer';
                    console.log('DiscussionBoard: CreatePost Error');
                }
                break;
            case 'btn-deletepost':
                break;
            case 'btn-updatepost':
                break;
            case 'btn-createcomment':
                this.css_loading_createcomment = 'dimmer active';
                if (this.valid_createcomment_data) {
                    this.discussionboard_service.createComment(this.discussionboard_id, this.current_postid + '',
                    this.createcomment_content, this.createcomment_editor.getContents()).subscribe(
                        data => {
                            if (this.createcomment_editor !== null) {
                                this.createcomment_editor.deleteText(0, this.createcomment_editor.getLength());
                            }
                            this.changeAlertSuccessMessage('You have successfully created a new comment!');
                            this.onAlertSuccessOpen();
                            this.resetFormFields();
                            document.getElementById('error-createcomment-server').style.display = 'none';
                            this.loadComments(0);
                        },
                        errors => {
                            if (errors.error) {
                                this.error_createcomment_server = errors.error;
                            } else {
                                this.error_createcomment_server = ERROR_SERVER;
                            }
                            document.getElementById('error-createcomment-server').style.display = 'block';
                            this.css_loading_createcomment = 'dimmer';
                            }
                    );
                }

                break;
            case 'btn-deletecomment':
                break;
            case 'btn-updatecomment':
                break;
            default:
                console.log('OnSubmit Error');
                break;
        }
    }

    onUpdateCreatePost(event: any, name: string): void {
        let comment: any = null;
        switch (name) {
            case 'createpost-subject':
                const title = event.target.value;
                if (title === null || title.trim().length === 0) {
                    this.error_createpost_subject = ERROR_NAME_NOT_VALID;
                    document.getElementById('error-createpost-subject').style.display = 'block';
                    this.valid_createpost_subject = false;
                } else {
                    this.createpost_subject = title.trim();
                    this.valid_createpost_subject = true;
                    document.getElementById('error-createpost-subject').style.display = 'none';
                }

                this.createpost_subject_count = event.target.value.length + '/' + this.MAX_SUBJECT_LIMIT;
                break;
            case 'createpost-content':
                const content = event.editor.getText();
                if (content === null || content.trim().length === 0) {
                    this.error_createpost_content = ERROR_NAME_NOT_VALID;
                    document.getElementById('error-createpost-content').style.display = 'block';
                    this.valid_createpost_content = false;
                } else {
                    this.createpost_content = content.trim();
                    document.getElementById('error-createpost-content').style.display = 'none';
                    this.valid_createpost_content = true;
                }

                if (event.editor.getLength() > this.MAX_CONTENT_LIMIT) {
                    event.editor.deleteText(this.MAX_CONTENT_LIMIT + 1, event.editor.getLength());
                }
                this.createpost_content_count = event.editor.getText().trim().length + '/' + this.MAX_CONTENT_LIMIT;
                break;
            case 'createcomment-content':
                comment = event.editor.getText();
                if (comment === null || content.trim().length === 0) {
                    this.error_createpost_content = ERROR_NAME_NOT_VALID;
                    document.getElementById('error-createpost-content').style.display = 'block';
                    this.valid_createpost_content = false;
                } else {
                    this.createpost_content = content.trim();
                    document.getElementById('error-createpost-content').style.display = 'none';
                    this.valid_createpost_content = true;
                }

                if (event.editor.getLength() > this.MAX_CONTENT_LIMIT) {
                    event.editor.deleteText(this.MAX_CONTENT_LIMIT + 1, event.editor.getLength());
                }
                break;
            default:
                console.log('OnUpdate: Not Found');
                break;
        }

        if (this.valid_createpost_subject && this.valid_createpost_content) {
            this.valid_createpost_data = true;
            document.getElementById('btn-createpost').removeAttribute('disabled');
        } else {
            this.valid_createpost_data = false;
            document.getElementById('btn-createpost').setAttribute('disabled', '');
        }



    }

    onUpdateCreateComment(event: any, name: string): void {
        let comment: any = null;
        switch (name) {
            case 'createcomment-content':
                comment = event.editor.getText();
                if (comment === null || comment.trim().length === 0) {
                    // this.error_createcomment_content = ERROR_NAME_NOT_VALID;
                    // document.getElementById('error-createcomment-content').style.display = 'block';
                    this.valid_createcomment_content = false;
                } else {
                    this.createcomment_content = comment.trim();
                    this.valid_createcomment_content = true;
                    document.getElementById('error-createcomment-content').style.display = 'none';
                }

                if (event.editor.getLength() > this.MAX_CONTENT_LIMIT) {
                    event.editor.deleteText(this.MAX_CONTENT_LIMIT + 1, event.editor.getLength());
                }
                break;
            default:
                console.log('OnUpdateCreateComment: Not Found');
                break;
        }

        if (this.valid_createcomment_content) {
            this.valid_createcomment_data = true;
            document.getElementById('btn-createcomment').removeAttribute('disabled');
        } else {
            this.valid_createcomment_data = false;
            document.getElementById('btn-createcomment').setAttribute('disabled', '');


        }

    }

    resetFormFields(): void {

        (<HTMLInputElement>document.getElementById('createpost-subject')).value = '';

        document.getElementById('error-createpost-subject').style.display = 'none';
        document.getElementById('error-createpost-content').style.display = 'none';
        document.getElementById('error-createpost-server').style.display = 'none';

        document.getElementById('error-createcomment-server').style.display = 'none';
        document.getElementById('error-createcomment-content').style.display = 'none';

        this.createpost_subject_count = 0 + '/' + this.MAX_SUBJECT_LIMIT;
        this.createpost_content_count = 0 + '/' + this.MAX_CONTENT_LIMIT;

        document.getElementById('btn-createpost').setAttribute('disabled', '');
        document.getElementById('btn-createcomment').setAttribute('disabled', '');
        // document.getElementById('btn-deletepost').setAttribute('disabled', '');

        this.valid_createpost_subject = false;
        this.valid_createpost_content = false;
        this.valid_createpost_data = false;

        this.css_loading_createpost = 'dimmer';
        this.css_loading_createcomment = 'dimmer';
        this.css_loading_editpost = 'dimmer';
        this.css_loading_deletepost = 'dimmer';


        // this.css_loading_createcomment = 'dimmer';
        // this.css_loading_editcomment = 'dimmer';
        // this.css_loading_deletecomment = 'dimmer';

    }

}
