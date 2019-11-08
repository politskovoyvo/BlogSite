using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace Childrens.Models
{
    public class SeedData
    {
        public static void EnsurePopulated(IApplicationBuilder app)
        {
            var context = app.ApplicationServices.GetRequiredService<ApplicationDbContex>();
            context.Database.Migrate();

            if (!context.LinkItems.Any())
            {
                context.AddRange(new Item { Link = "link", Image = "image", Name = "title1" });
                context.SaveChanges();
            }
        }
    }
}
