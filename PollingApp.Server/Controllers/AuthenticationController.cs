using Microsoft.AspNetCore.Mvc;
using PollingApp.Server.Authentication;
using Microsoft.AspNetCore.Authentication;

namespace PollingApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : Controller
    {
        private IPollAuthenticationService _pollAuthenticationService;
        public AuthenticationController(IPollAuthenticationService pollAuthenticationService)
        {
            _pollAuthenticationService = pollAuthenticationService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] AuthAttemptRequest request)
        {
            bool result = await _pollAuthenticationService.TryLogin(request);

            if (result)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateUser([FromBody] CreateAccountRequest request)
        {
            bool result = await _pollAuthenticationService.CreateAccount(request);

            if (result)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}
