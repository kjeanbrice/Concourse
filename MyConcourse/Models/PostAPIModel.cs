using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyConcourse.Models
{
    public class PostAPIModel
    {
        public string DiscussionBoardId { get; set; }
        public string PostId { get; set; }
        public string Content { get; set; }
        public string ContentDelta { get; set; }
        public string Subject { get; set; }

    }
}