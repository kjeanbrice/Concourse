export interface Comment {
    PostID: number;
    DiscussionBoardId: number;
    CommentId: number;
    UserRole: number;
    OwnerId: number;
    Content: string;
    ContentDelta: string;
    FirstName: string;
    LastName: string;
    Username: string;
    DateCreated: string;
    TimeCreated: string;
}
