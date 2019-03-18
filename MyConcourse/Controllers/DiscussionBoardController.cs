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
using MyConcourse.Models;

namespace MyConcourse.Controllers
{
    //[Authorize]
    [RoutePrefix("api/Dashboard")]
    public class DiscussionBoardController : ApiController
    {   
        [HttpGet]
        [Route("")]
        public List<spGetDiscussionBoardsByUserId_Result> Get()
        {
            List<spGetDiscussionBoardsByUserId_Result> boards = new List<spGetDiscussionBoardsByUserId_Result>();
            String user_id = User.Identity.GetUserId();
           // if( user_id == null || user_id.Length == 0)
            //{
              //  return new List<spGetDiscussionBoardsByUserId_Result>();
            //}
            using (ConcourseEntities entities = new ConcourseEntities())
            {
                try
                {
                    var temp = entities.spGetDiscussionBoardsByUserId(user_id);
                    boards = temp.ToList<spGetDiscussionBoardsByUserId_Result>();
                }
                catch(Exception ex)
                {

                    Exception inner_ex = ex.InnerException;
                    HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                    if (inner_ex == null)
                    {     
                        message.Content = new StringContent("Server error, please try again later.");
                        throw new HttpResponseException(message);
                    }

                    switch (inner_ex.Message.ToLower())
                    {
                        case "invalid_request_null":
                            break;
                        case "invalid_request_user":
                            message.Content = new StringContent("Invalid User");
                            break;
                        default:
                            message.Content = new StringContent("Server error, please try again later");
                            break;
                    }

                    throw new HttpResponseException(message);
                }
        
            }

            return boards;        
        }


        [HttpPost]
        [Route("creategroup")]
        public IHttpActionResult CreateDiscussionBoard([FromBody]DiscussionBoardAPIModel group)
        {
            string user_id = User.Identity.GetUserId();

            if(user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.Unauthorized);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }


            if(group.Title == null || group.Title.Trim().Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("The group title must have at least one character");
                throw new HttpResponseException(message);
            }

            if (group.Groupcode == null || group.Groupcode.Trim().Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("The group code cannot be empty.");
                throw new HttpResponseException(message);
            }

            if (group.Description == null || group.Description.Trim().Length == 0)
            {
                group.Description = "";
            }


            int result = 0;
            try
            {
                using(ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    result = entities.spCreateDiscussionBoard(user_id, group.Title.Trim(), group.Groupcode.Trim(), group.Description.Trim());
                   
                }
            }
            catch(Exception ex)
            {
                //Handle Errors 
                Exception inner_ex = ex.InnerException;
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                if (inner_ex == null)
                {
                    message.Content = new StringContent("Server error, please try again later.");
                    throw new HttpResponseException(message);
                }

                switch (inner_ex.Message.ToUpper())
                {
                    case "INVALID_REQUEST_NULL":
                    case "INVALID_REQUEST_INVALID":
                        message.Content = new StringContent("Invalid User");
                        break;
                    case "INVALID_REQUEST_ALREADY_EXISTS":
                        message.Content = new StringContent("A board with the same title already exists in your account.");
                        break;
                    default:
                        message.Content = new StringContent("Server error, please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

         
            return Ok();

        }

        [HttpPost]
        [Route("join")]
        public IHttpActionResult JoinDiscussionBoard([FromBody]int groupID, [FromBody]string groupCode)
        {
            String user_id = User.Identity.GetUserId();
            if(user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.Unauthorized);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            int result = 0;
            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    result = entities.spJoinDiscussionBoard(groupID, groupCode, user_id);
                }

            }
            catch(Exception ex)
            {
                //Handle Errors 
                Exception inner_ex = ex.InnerException;
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                if (inner_ex == null)
                {
                    message.Content = new StringContent("Server error, please try again later.");
                    throw new HttpResponseException(message);
                }

                switch (inner_ex.Message.ToUpper())
                {
                    case "INVALID_REQUEST_NULL":
                    case "INVALID_REQUEST_INVALID":
                        message.Content = new StringContent("Invalid User");
                        break;
                    case "INVALID_REQUEST_ALREADY_EXISTS":
                        message.Content = new StringContent("A board with the same title already exists in your account.");
                        break;
                    case "INVALID_REQUEST_CODE":
                        message.Content = new StringContent("Invalid Group Code and/or ID");
                        break;
                    case "INVALID_REQUEST_USER_BANNED":
                        message.Content = new StringContent("You have been banned from this group.");
                        break;
                    case "INVALID_REQUEST_ALREADY_ENROLLED":
                        message.Content = new StringContent("You're already enrolled in this group.");
                        break;
                    default:
                        message.Content = new StringContent("Server error, please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            if (result != 1)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("An error occured while processing your request. Please try again later");
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
            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    result = entities.spDeleteDiscussionBoard(user_id, discussionBoardID);
                }

                if (result != 1)
                {
                    HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                    message.Content = new StringContent("An error occured. Please try again later");
                    throw new HttpResponseException(message);
                }
            }
            catch
            {
                //Add Error Handling
            }

            return Ok();
        }


        [HttpPost]
        [Route("updategroup")]
        public IHttpActionResult UpdateGroup([FromBody]int discussionBoardID,string newTitle, string newDescription, string newGroupCode)
        {
            string user_id = User.Identity.GetUserId();
            if(user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            int group_info_result = 0;
            int code_info_result = 0;
            try
            {
                 using(ConcourseEntities entities = new ConcourseEntities())
                {
                    group_info_result = entities.spUpdateDiscussionBoard(user_id, discussionBoardID, newTitle, newDescription);
                    code_info_result = entities.spUpdateDiscussionBoardCode(user_id, discussionBoardID, newGroupCode);

                }
            }
            catch
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.InternalServerError);
                message.Content = new StringContent("Error: Please try again later.");
                throw new HttpResponseException(message);

                //Add additional error handling
            }
       
            return Ok();
        }

    }
}