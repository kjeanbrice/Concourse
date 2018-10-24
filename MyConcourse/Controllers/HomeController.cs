using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyConcourse.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.BaseUrl = Request.Url.GetLeftPart(UriPartial.Authority);
            return View();
        }
    }
}
