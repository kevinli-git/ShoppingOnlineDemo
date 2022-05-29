using System;
using Xunit;
using ShoppingOnlineDemo.Controllers;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ShoppingOnlineDemo.Models;

namespace ShoppingOnlineDemo.Test
{
    public class OrderControllerTest
    {
        OrderController _controller;

        public OrderControllerTest()
        {
            _controller = new OrderController();

        }
        [Fact]
        public void PostTest()
        {
            Order order = null;
            var badRequestResult = _controller.Post(order);

            Assert.IsType<BadRequestResult>(badRequestResult);


            order = new Order
            {
                Items = new List<Item> {
                    new Item{
                        Product = new Product{ Name = "Apple"},
                        Quantity = 1
                    }
                }
            };
            var okResult = _controller.Post(order);
            Assert.IsType<OkResult>(okResult);
        }
    }
}
