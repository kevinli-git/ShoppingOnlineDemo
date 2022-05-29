using Microsoft.AspNetCore.Mvc;
using System;

namespace ShoppingOnlineDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShippingCostController : ControllerBase
    {

        // GET api/<ShippingCostController>/5
        [HttpGet("{value}")]
        public ActionResult<decimal> Get(decimal value)
        {
            if (value <= 0)
                return BadRequest();
            if (value > 50)
                return Ok(20.0M);
            return Ok(10.0M);
        }
    }
}
