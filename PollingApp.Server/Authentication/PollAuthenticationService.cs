using Microsoft.AspNetCore.Identity;

namespace PollingApp.Server.Authentication
{
    public class PollAuthenticationService : IPollAuthenticationService
    {
        readonly IAuthenticationRepository _authRepo;

        public PollAuthenticationService(IAuthenticationRepository authenticationRepository)
        {
            _authRepo = authenticationRepository;
        }
        public async Task<bool> TryLogin(AuthAttemptRequest request)
        {
            PasswordHasher<AuthAttemptRequest> hasher = new();

            StoredUserSignIn? storedUser = await _authRepo.GetStoredUserSignIn(request.Username);

            if (storedUser == null) { return false; }

            PasswordVerificationResult result = hasher.VerifyHashedPassword(request, storedUser.HashedPassword, request.Password);

            return result switch
            {
                PasswordVerificationResult.Success or PasswordVerificationResult.SuccessRehashNeeded => true,
                _ => false,
            };
        }

        public async Task<bool> CreateAccount(CreateAccountRequest request)
        {
            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            {
                return false;
            }

            PasswordHasher<CreateAccountRequest> hasher = new();

            string hashedPassword = hasher.HashPassword(request, request.Password);

            StoredUserSignIn newAccount = new(0, request.Username, hashedPassword);

            return await _authRepo.AddUser(newAccount);
        }
    }
}
