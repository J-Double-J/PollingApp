using Microsoft.EntityFrameworkCore;
using PollingApp.Server.Authentication;

namespace PollingApp.Server.Services.Database
{
    public interface IApplicationDbContext
    {
        DbSet<StoredUserSignIn> StoredUserSignIn { get; set; }

        Task<int> SaveChanges();
    }
}