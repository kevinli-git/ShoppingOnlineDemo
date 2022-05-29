using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ShoppingOnlineDemo.Models;

namespace ShoppingOnlineDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> products = new List<Product>
        {
            new Product{ Id = "1", Name = "Apples Rose", Unit = "1kg", Price = 4.5M},
            new Product{ Id = "2", Name = "Bananas Yellow", Unit = "1kg",  Price = 3.5M},
            new Product{ Id = "3", Name = "Carrots", Unit = "1kg", Price = 3.0M},
            new Product{ Id = "4", Name = "Onions Brown", Unit = "1kg", Price = 3.0M},
            new Product{ Id = "5", Name = "Broccoli Head", Unit = "Each",  Price = 1.6M},
        };

        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return Ok(products);
        }
    }
}
