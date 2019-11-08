using Microsoft.EntityFrameworkCore;

namespace Childrens.Models
{
    public class ApplicationDbContex : DbContext
    {
        public ApplicationDbContex(DbContextOptions<ApplicationDbContex> options) : base(options) { }

        public DbSet<Item> LinkItems { get; set; }

        public DbSet<Folder> Folders { get; set; }
    }
}
