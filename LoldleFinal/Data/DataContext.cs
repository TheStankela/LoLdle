using LoldleFinal.Models;
using Microsoft.EntityFrameworkCore;

namespace LoldleFinal.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Champion> Champion { get; set; }
    }
}
