//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DiscussionDataAccess
{
    using System;
    
    public partial class spGetCommentsByPostId_Result
    {
        public int CommentID { get; set; }
        public int PostID { get; set; }
        public int DiscussionBoardID { get; set; }
        public string OwnerId { get; set; }
        public string Content { get; set; }
        public Nullable<int> UserRole { get; set; }
        public string DateCreated { get; set; }
        public string TimeCreated { get; set; }
    }
}
