using MyConcourse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyConcourse.Controllers
{
    /*[Authorize]*/
    [RoutePrefix("api/Dashboard")]
    public class DiscussionBoardController : ApiController
    {   
        [HttpGet]
        [Route("")]
        public List<DiscussionBoard> Get()
        {
            using(ConcourseEntities entities = new ConcourseEntities())
            {
                DiscussionBoard board = new DiscussionBoard();
                board.AdminId = "set";
                board.BoardDescription = "new";
                board.Title = "New board";
                List<DiscussionBoard> boards = new List<DiscussionBoard>();
                boards.Add(board);
                return boards;

            }

            
        }
    }
}