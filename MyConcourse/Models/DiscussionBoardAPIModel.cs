using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyConcourse.Models
{
    public class DiscussionBoardAPIModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string GroupCode { get; set; }
        public string GroupID { get; set; }
        public string DiscussionBoardID { get; set; }
    }
}