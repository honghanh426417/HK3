using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using demonetcore.Models;

    public class MovieDataContext : DbContext
    {
        public MovieDataContext (DbContextOptions<MovieDataContext> options)
            : base(options)
        {
        }

        public DbSet<demonetcore.Models.Movie> Movie { get; set; } = default!;
    }
