using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HajósTeszt.JokeModels
{
    public partial class FunnyDatabaseContext : DbContext
    {
        public FunnyDatabaseContext()
        {
        }

        public FunnyDatabaseContext(DbContextOptions<FunnyDatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Joke> Jokes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Hungarian_CI_AS");

            modelBuilder.Entity<Joke>(entity =>
            {
                entity.HasKey(e => e.JokeSk);

                entity.ToTable("Joke");

                entity.Property(e => e.JokeSk).HasColumnName("JokeSK");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
