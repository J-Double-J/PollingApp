using Microsoft.EntityFrameworkCore;
using PollingApp.Server.Services.Database;

namespace PollingApp.Server.Authentication
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        IApplicationDbContext _dbContext;

        public AuthenticationRepository(IApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<StoredUserSignIn?> GetStoredUserSignIn(string username)
        {
            StoredUserSignIn? storedUser = await _dbContext.StoredUserSignIn.FirstOrDefaultAsync(user => user.Username == username);

            return storedUser;
        }

        public async Task<bool> AddUser(StoredUserSignIn user)
        {
            try
            {
                _dbContext.StoredUserSignIn.Add(user);
                await _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }

            return true;
        }
    }
}
