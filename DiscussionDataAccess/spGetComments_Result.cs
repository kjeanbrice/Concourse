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
    
    public partial class spGetComments_Result
    {
        public int CommentId { get; set; }
        public int PostId { get; set; }
        public int DiscussionBoardId { get; set; }
        public string OwnerId { get; set; }
        public string Content { get; set; }
        public string ContentDelta { get; set; }
        public Nullable<int> UserRole { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DateCreated { get; set; }
        public string TimeCreated { get; set; }
    }
}
