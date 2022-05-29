using System;
using Xunit;
using ShoppingOnlineDemo.Controllers;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ShoppingOnlineDemo.Models;

namespace ShoppingOnlineDemo.Test
{
    public class ProductsControllerTest
    {
        ProductsController _controller;

        public ProductsControllerTest()
        {
            _controller = new ProductsController();

        }
        [Fact]
        public void GetTest()
        {
            var result = _controller.Get();

            Assert.IsType<OkObjectResult>(result.Result);

            var list = result.Result as OkObjectResult;

            Assert.IsType<List<Product>>(list.Value);

            var products = list.Value as List<Product>;

            Assert.Equal(5, products.Count);
        }
    }
}
