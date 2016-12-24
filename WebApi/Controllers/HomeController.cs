using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Index()
        {
            return new[] { "value1", "value2" };
        }
    }
}
