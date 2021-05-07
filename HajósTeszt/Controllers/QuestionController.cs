using HajósTeszt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajósTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpGet]
        [Route("questions/count")]

        public int M1() 
        {
            HajostesztContext context = new HajostesztContext();
            int kerdesekSzama = context.Questions.Count();
            return kerdesekSzama;
        }
    }
}
