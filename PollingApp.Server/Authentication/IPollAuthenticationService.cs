
namespace PollingApp.Server.Authentication
{
    public interface IPollAuthenticationService
    {
        Task<bool> CreateAccount(CreateAccountRequest request);
        Task<bool> TryLogin(AuthAttemptRequest request);
    }
}