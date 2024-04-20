namespace PollingApp.Server.Authentication
{
    public record StoredUserSignIn(int StoredUserSignInId, string Username, string HashedPassword);
}
