using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ShoppingOnlineDemo.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShoppingOnlineDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        // POST api/<OrderController>
        [HttpPost]
        public IActionResult Post([FromBody] Order order)
        {
            if (order == null || order.Items == null || order.Items.Count == 0)
                return BadRequest();

            return Ok();
        }


    }
}
