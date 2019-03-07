//using MyConcourse.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DiscussionDataAccess;
using Microsoft.AspNet.Identity;

namespace MyConcourse.Controllers
{
    [Authorize]
    [RoutePrefix("api/Dashboard")]
    public class DiscussionBoardController : ApiController
    {   
        [HttpGet]
        [Route("")]
        public List<spGetDiscussionBoardsByUserId_Result> Get()
        {
            List<spGetDiscussionBoardsByUserId_Result> boards = new List<spGetDiscussionBoardsByUserId_Result>();
            String user_id = User.Identity.GetUserId();
            if( user_id == null | user_id.Length == 0)
            {
                return new List<spGetDiscussionBoardsByUserId_Result>();
            }
            using (ConcourseEntities entities = new ConcourseEntities())
            {
                try
                {
                    var temp = entities.spGetDiscussionBoardsByUserId(user_id);
                    boards = temp.ToList<spGetDiscussionBoardsByUserId_Result>();
                }
                catch(Exception ex)
                {
                    String message = ex.InnerException.Message;
                    System.Diagnostics.Debug.WriteLine("Exception: " + message);
                }
        
            }

            return boards;        
        }

        [HttpPost]
        [Route("join")]
        public IHttpActionResult JoinDiscussionBoard([FromBody]int groupID, [FromBody]string groupCode)
        {
            String user_id = User.Identity.GetUserId();
            if(user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            int result = 0;
            using (ConcourseEntities entities = new ConcourseEntities())
            {
               result = entities.spJoinDiscussionBoard(groupID, groupCode, user_id);
            }

            if(result != 1)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Already joined, please wait for a confirmation.");
                throw new HttpResponseException(message);
            }

            return Ok();

        }


        [HttpPost]
        [Route("deletegroup")]
        public IHttpActionResult DeleteGroup([FromBody]int discussionBoardID)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            int result = 0;
            using(ConcourseEntities entities = new ConcourseEntities())
            {
                result = entities.spDeleteDiscussionBoard(user_id, discussionBoardID);
            }

            if(result != 1)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("An error occured. Please try again later");
                throw new HttpResponseException(message);
            }

            return Ok();
        }


        [HttpPost]
        [Route("updategroup")]
        public IHttpActionResult UpdateGroup([FromBody]int discussionBoardID,string newTitle, string newDescription, string newGroupCode)
        {
            return Ok();
        }

    }
}