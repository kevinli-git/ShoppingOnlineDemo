using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingOnlineDemo.Models
{
    public class Order
    {
        public string Id { get; set; }
        public List<Item> Items { get; set; }
    }
}
