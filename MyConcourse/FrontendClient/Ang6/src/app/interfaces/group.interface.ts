export interface Group {
    AdminId: string;
    DiscussionBoardId: number;
    Title: string;
    BoardDescription: string;
    IsConfirmed: number;
    IsBanned: number;
    Code: string;
    CodeId: number;
    IsOwner: number;
    FirstName: string;
    LastName: string;
}

export interface GroupResponse {
    groups: Group[];
}
