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

            if (group.GroupCode == null || group.GroupCode.Trim().Length == 0)
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
                    result = entities.spCreateDiscussionBoard(user_id, group.Title.Trim(), group.GroupCode.Trim(), group.Description.Trim());
                   
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
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

         
            return Ok();

        }

        [HttpPost]
        [Route("joingroup")]
        public IHttpActionResult JoinDiscussionBoard([FromBody]DiscussionBoardAPIModel group)
        {
            String user_id = User.Identity.GetUserId();
            if(user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.Unauthorized);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }


            if(group.GroupCode == null || group.GroupCode.Length == 0 || group.GroupId == null || group.GroupId.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("The Group Code and/or Group ID are incorrect.");
                throw new HttpResponseException(message);
            }

            int result_groupid;
            bool valid = int.TryParse(group.GroupId, out result_groupid);
            if (!valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("The Group Code and/or Group ID are incorrect.");
                throw new HttpResponseException(message);
            }

            int result;
 
            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    result = entities.spJoinDiscussionBoard(result_groupid,group.GroupCode, user_id);
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
                        message.Content = new StringContent("Unauthorized User");
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
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return Ok();

        }


        [HttpPost]
        [Route("deletegroup")]
        public IHttpActionResult DeleteGroup([FromBody]DiscussionBoardAPIModel group)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            int discussion_board_id;
            bool is_valid = int.TryParse(group.DiscussionBoardId, out discussion_board_id);
            if (!is_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }

            int result = 0;
            
            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    result = entities.spDeleteDiscussionBoard(user_id, discussion_board_id);
                }

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

                switch (inner_ex.Message.ToUpper())
                {
                    case "INVALID_REQUEST_NULL":
                    case "INVALID_REQUEST_INVALID":
                        message.Content = new StringContent("Unauthorized User");
                        break;
                    case "INVALID_REQUEST_ID":
                    case "INVALID_REQUEST_PERMISSONS":
                        message.Content = new StringContent("You are not unauthorized to perform this request. Please try agian later.");
                        break;
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return Ok();
        }


        [HttpPost]
        [Route("updategroup")]
        public IHttpActionResult UpdateGroup([FromBody]DiscussionBoardAPIModel group)
        {
            string user_id = User.Identity.GetUserId();

            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.Unauthorized);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }


            if (group.Title == null || group.Title.Trim().Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("The group title must have at least one character");
                throw new HttpResponseException(message);
            }

            if (group.GroupCode == null || group.GroupCode.Trim().Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("The group code cannot be empty.");
                throw new HttpResponseException(message);
            }

            if (group.Description == null || group.Description.Trim().Length == 0)
            {
                group.Description = "";
            }


            int discussion_board_id;
            bool is_valid = int.TryParse(group.DiscussionBoardId, out discussion_board_id);
            if (!is_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transaction for you. Please try again later.");
                throw new HttpResponseException(message);
            }


            int result = 0;
            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    result = entities.spUpdateDiscussionBoard(user_id, discussion_board_id, group.Title, group.Description);
                    result = entities.spUpdateDiscussionBoardCode(user_id, discussion_board_id, group.GroupCode);

                }
            }
            catch (Exception ex)
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
                    case "INVALID_REQUEST_PERMISSONS":
                        message.Content = new StringContent("Hmm, it seems we can't do that transaction for you. Please try again later.");
                        break;
                    case "INVALID_REQUEST_ALREADY_EXISTS":
                        message.Content = new StringContent("A board with the same title already exists in your account.");
                        break;
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }


            return Ok();

        }

        [HttpGet]
        [Route("posts")]
        public List<spGetPosts_Result> GetPosts([FromUri]DiscussionBoardAPIModel group)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            int discussion_board_id;
            bool is_valid = int.TryParse(group.DiscussionBoardId, out discussion_board_id);
            if (!is_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }

            List<spGetPosts_Result> results = new List<spGetPosts_Result>();

            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    var temp = entities.spGetPosts(discussion_board_id, user_id);
                    results = temp.ToList<spGetPosts_Result>();
                }

            }
            catch (Exception ex)
            {
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
                        message.Content = new StringContent("Unauthorized User");
                        break;
                    case "INVALID_REQUEST_ID":
                    case "INVALID_REQUEST_PERMISSONS":
                        message.Content = new StringContent("You are not unauthorized to perform this request. Please try agian later.");
                        break;
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return results;

        }


        [HttpPost]
        [Route("createpost")]
        public IHttpActionResult CreatePost([FromBody]PostAPIModel post)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }


            if (post.Subject == null || post.Subject.Trim().Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("The subject of your post cannot be empty.");
                throw new HttpResponseException(message);
            }

            if (post.Content == null || post.Content.Trim().Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("The content of your post cannot be empty.");
                throw new HttpResponseException(message);
            }


            int discussion_board_id;
            bool is_valid = int.TryParse(post.DiscussionBoardId, out discussion_board_id);
            if (!is_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transaction for you. Please try again later.");
                throw new HttpResponseException(message);
            }

            int results = -1;

            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    results = entities.spCreatePost(discussion_board_id, user_id,post.Subject.Trim(),post.Content.Trim(),post.ContentDelta);
                    
                }

            }
            catch (Exception ex)
            {
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
                    case "INVALID_REQUEST_USER":
                        message.Content = new StringContent("Unauthorized User");
                        break;
                    case "INVALID_REQUEST_ID":
                    case "INVALID_REQUEST_PERMISSONS":
                    case "INVALID_REQUEST_NOT_CONFIRMED":
                        message.Content = new StringContent("You are not unauthorized to perform this request. Please try agian later.");
                        break;
                    case "INVALID_REQUEST_GROUP":
                        message.Content = new StringContent("You are not a member of this group. Please join this group and try again.");
                        break;
                    
                        
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return Ok();

        }

        [HttpPost]
        [Route("createcomment")]
        public IHttpActionResult CreateComment([FromBody]CommentAPIModel comment)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }


            if (comment.Content == null || comment.Content.Trim().Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("The content of your comment cannot be empty.");
                throw new HttpResponseException(message);
            }

            if (comment.PostId == null || comment.PostId.Trim().Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Hmm, haven't a hard time connecting this comment to this post. Please try again later.");
                throw new HttpResponseException(message);
            }

            if(comment.DiscussionBoardId == null)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Hmm, we're having trouble putting this reply somewhere. Please try again later.");
                throw new HttpResponseException(message);
            }

            int discussion_board_id;
            bool is_discussionid_valid = int.TryParse(comment.DiscussionBoardId, out discussion_board_id);

            int post_id;
            bool is_postid_valid = int.TryParse(comment.PostId, out post_id);

            if (!is_discussionid_valid || !is_postid_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transaction for you. Please try again later.");
                throw new HttpResponseException(message);
            }

            int results = -1;

            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    results = entities.spCreateComment(user_id, discussion_board_id ,post_id, comment.Content.Trim(), comment.ContentDelta);

                }

            }
            catch (Exception ex)
            {
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
                    case "INVALID_REQUEST_USER":
                        message.Content = new StringContent("Unauthorized User");
                        break;
                    case "INVALID_REQUEST_ID":
                    case "INVALID_REQUEST_PERMISSONS":
                    case "INVALID_REQUEST_NOT_CONFIRMED":
                        message.Content = new StringContent("You are not unauthorized to perform this request. Please try agian later.");
                        break;
                    case "INVALID_REQUEST_GROUP":
                        message.Content = new StringContent("You are not a member of this group. Please join this group and try again.");
                        break;
                    case "INVALID_REQUEST_POST":
                        message.Content = new StringContent("Hmm, the post associated with this request cannot be found, or is in the process of being deleted. Please try again later");
                        break;
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return Ok();

        }


        [HttpGet]
        [Route("comments")]
        public List<spGetComments_Result> GetComments([FromUri]DiscussionBoardAPIModel group)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }


            if (group.DiscussionBoardId == null)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Hmm, we're having trouble locating these comments. Please try again later.");
                throw new HttpResponseException(message);
            }

            int discussion_board_id;
            bool is_valid = int.TryParse(group.DiscussionBoardId, out discussion_board_id);
            if (!is_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }

            List<spGetComments_Result> results = new List<spGetComments_Result>();

            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    var temp = entities.spGetComments(discussion_board_id, user_id);
                    
                    results = temp.ToList<spGetComments_Result>();
                }

            }
            catch (Exception ex)
            {
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
                        message.Content = new StringContent("Unauthorized User");
                        break;
                    case "INVALID_REQUEST_ID":
                    case "INVALID_REQUEST_PERMISSONS":
                        message.Content = new StringContent("You are not unauthorized to perform this request. Please try agian later.");
                        break;
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return results;

        }

        [HttpPost]
        [Route("deletepost")]
        public IHttpActionResult DeletePost([FromBody]PostAPIModel post)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            if(post.DiscussionBoardId == null || post.PostId == null)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }

            int discussion_board_id;
            int post_id;
            bool is_discussionboardid_valid = int.TryParse(post.DiscussionBoardId, out discussion_board_id);
            bool is_postid_valid = int.TryParse(post.PostId, out post_id);

            if (!is_postid_valid || !is_discussionboardid_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }




            int result = 0;

            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    result = entities.spDeletePost(discussion_board_id,user_id,post_id);
                }

            }
            catch (Exception ex)
            {
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
                        message.Content = new StringContent("Unauthorized User");
                        break;
                    case "INVALID_REQUEST_ID":
                    case "INVALID_REQUEST_PERMISSONS":
                        message.Content = new StringContent("You are not unauthorized to perform this request. Please try agian later.");
                        break;
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return Ok();
        }


        [HttpPost]
        [Route("updatepost")]
        public IHttpActionResult UpdatePost([FromBody]PostAPIModel post)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            if(post.Content == null || post.Content.Trim().Length == 0 || post.ContentDelta == null)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("The content of this post cannot empty.");
            }

            if (post.Subject == null || post.Subject.Trim().Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("The subject of this post cannot empty.");
            }

       
            if (post.DiscussionBoardId == null || post.PostId == null)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }

            int discussion_board_id;
            int post_id;
            bool is_discussionboardid_valid = int.TryParse(post.DiscussionBoardId, out discussion_board_id);
            bool is_postid_valid = int.TryParse(post.PostId, out post_id);

            if (!is_postid_valid || !is_discussionboardid_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }




            int result = 0;

            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    result = entities.spUpdatePost(discussion_board_id, user_id, post_id,post.Subject.Trim(),post.Content,post.ContentDelta);
                }

            }
            catch (Exception ex)
            {
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
                        message.Content = new StringContent("Unauthorized User");
                        break;
                    case "INVALID_REQUEST_ID":
                    case "INVALID_REQUEST_PERMISSONS":
                        message.Content = new StringContent("You are not unauthorized to perform this request. Please try agian later.");
                        break;
                    case "INVALID_REQUEST_GROUP":
                        message.Content = new StringContent("You are not a member of this group. You are not authorized to make this request.");
                        break;
                    case "INVALID_REQUEST_NOT_CONFIRMED":
                        message.Content = new StringContent("The adminstrator of this group has yet to confirm your idenity. Please try again later ");
                        break;
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return Ok();
        }


        [HttpPost]
        [Route("updatecomment")]
        public IHttpActionResult UpdateComment([FromBody]CommentAPIModel comment)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            if (comment.Content == null || comment.Content.Trim().Length == 0 || comment.ContentDelta == null)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("The content of this comment cannot empty.");
            }



            if (comment.DiscussionBoardId == null || comment.CommentId == null)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }

            int discussion_board_id;
            int comment_id;
            bool is_discussionboardid_valid = int.TryParse(comment.DiscussionBoardId, out discussion_board_id);
            bool is_commentid_valid = int.TryParse(comment.CommentId, out comment_id);

            if (!is_commentid_valid || !is_discussionboardid_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }




            int result = 0;

            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    result = entities.spUpdateCommentById(user_id, comment_id, discussion_board_id, comment.Content, comment.ContentDelta);
                }

            }
            catch (Exception ex)
            {
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
                        message.Content = new StringContent("Unauthorized User");
                        break;
                    case "INVALID_REQUEST_ID":
                    case "INVALID_REQUEST_PERMISSONS":
                        message.Content = new StringContent("You are not unauthorized to perform this request. Please try agian later.");
                        break;
                    case "INVALID_REQUEST_GROUP":
                        message.Content = new StringContent("You are not a member of this group. You are not authorized to make this request.");
                        break;
                    case "INVALID_REQUEST_NOT_CONFIRMED":
                        message.Content = new StringContent("The adminstrator of this group has yet to confirm your idenity. Please try again later ");
                        break;
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return Ok();
        }


        [HttpPost]
        [Route("deletecomment")]
        public IHttpActionResult DeleteComment([FromBody]CommentAPIModel comment)
        {
            string user_id = User.Identity.GetUserId();
            if (user_id == null || user_id.Length == 0)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Not logged in");
                throw new HttpResponseException(message);
            }

            if (comment.DiscussionBoardId == null || comment.CommentId == null)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.NotFound);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }

            int discussion_board_id;
            int comment_id;
            bool is_discussionboardid_valid = int.TryParse(comment.DiscussionBoardId, out discussion_board_id);
            bool is_commentid_valid = int.TryParse(comment.CommentId, out comment_id);

            if (!is_commentid_valid || !is_discussionboardid_valid)
            {
                HttpResponseMessage message = new HttpResponseMessage(HttpStatusCode.BadRequest);
                message.Content = new StringContent("Hmm, it seems we can't do that transacation for you. Please try again later.");
                throw new HttpResponseException(message);
            }




            int result = 0;

            try
            {
                using (ConcourseEntities entities = new ConcourseEntities())
                {
                    entities.Configuration.EnsureTransactionsForFunctionsAndCommands = false;
                    result = entities.spDeleteCommentById(user_id,discussion_board_id , comment_id);
                }

            }
            catch (Exception ex)
            {
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
                        message.Content = new StringContent("Unauthorized User");
                        break;
                    case "INVALID_REQUEST_ID":
                    case "INVALID_REQUEST_PERMISSONS":
                        message.Content = new StringContent("You are not unauthorized to perform this request. Please try agian later.");
                        break;
                    case "INVALID_REQUEST_COMMENT":
                        message.Content = new StringContent("We're having trouble locating this comment. It may have already been deleted. Please try agian later");
                        break;
                    default:
                        message.Content = new StringContent("An error occured while processing your request. Please try again later");
                        break;
                }

                throw new HttpResponseException(message);
            }

            return Ok();
        }

    }
}