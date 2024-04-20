using Microsoft.EntityFrameworkCore;
using PollingApp.Server.Authentication;

namespace PollingApp.Server.Services.Database
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<StoredUserSignIn> StoredUserSignIn { get; set; }

        public new async Task<int> SaveChanges()
        {
            return await base.SaveChangesAsync();
        }
    }
}
