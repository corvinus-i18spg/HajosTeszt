using HajósTeszt.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajósTeszt.Controllers
{
    [Route("api/Ember")]
    [ApiController]
    public class AdatokController : ControllerBase
    {
        // GET: api/<AdatokController>
        [HttpGet]
        public IEnumerable<Ember> Get()
        {
            AdatokContext context = new AdatokContext();
            return context.Embers.ToList();
        }

        // GET api/<AdatokController>/5
        [HttpGet("{id}")]
        public Ember Get(int id)
        {
            AdatokContext context = new AdatokContext();
            var adatKeres = (from x in context.Embers
                             where x.Id == id
                             select x).FirstOrDefault();
            return adatKeres;
        }

        // POST api/<AdatokController>
        [HttpPost]
        public void Post([FromBody] Ember újEmber)
        {
            AdatokContext context = new AdatokContext();
            context.Embers.Add(újEmber);
            context.SaveChanges();
        }

        // PUT api/<AdatokController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AdatokController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            AdatokContext context = new AdatokContext();
            var törlés = (from x in context.Embers
                          where x.Id == id
                          select x).FirstOrDefault();
            context.Remove(törlés);
            context.SaveChanges();
        }
    }
}
