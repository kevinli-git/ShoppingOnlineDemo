using Xunit;
using ShoppingOnlineDemo.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingOnlineDemo.Test
{
    public class ShippingCostControllerTest
    {
        ShippingCostController _controller;

        public ShippingCostControllerTest()
        {
            _controller = new ShippingCostController();

        }
        [Fact]
        public void GetCostTest()
        {
            var value = 60;

            var result = _controller.Get(value);

            Assert.IsType<OkObjectResult>(result.Result);

            var cost = result.Result as OkObjectResult;

            Assert.IsType<decimal>(cost.Value);

            var costValue = (decimal)cost.Value;

            Assert.Equal(20, costValue);
        }
    }
}
