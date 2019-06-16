using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjektZespolowy.Models;

namespace ProjektZespolowy
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) 
            :base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Team> Teams { get; set; }
    }
}
