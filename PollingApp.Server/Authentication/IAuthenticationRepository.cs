
namespace PollingApp.Server.Authentication
{
    public interface IAuthenticationRepository
    {
        Task<bool> AddUser(StoredUserSignIn user);
        Task<StoredUserSignIn?> GetStoredUserSignIn(string username);
    }
}