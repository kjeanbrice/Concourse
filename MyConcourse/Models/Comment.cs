//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyConcourse.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Comment
    {
        public int CommentID { get; set; }
        public int PostID { get; set; }
        public string OwnerId { get; set; }
        public string Content { get; set; }
        public Nullable<int> IsDeleted { get; set; }
    
        public virtual AspNetUser AspNetUser { get; set; }
        public virtual Post Post { get; set; }
    }
}