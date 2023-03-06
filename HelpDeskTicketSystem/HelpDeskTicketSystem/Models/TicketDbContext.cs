using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HelpDeskTicketSystem.Models;

public partial class TicketDbContext : DbContext
{
    public TicketDbContext()
    {
    }

    public TicketDbContext(DbContextOptions<TicketDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=TicketDB; Integrated Security=SSPI;Encrypt=false;TrustServerCertificate=True;");
    //=> optionsBuilder.UseSqlServer("Server=localhost,1433; Initial Catalog=TicketDB; User ID=SA; Password=EnterPasswordHere1; TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3214EC27B92F3069");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DateAdded).HasColumnType("date");
            entity.Property(e => e.Uid)
                .HasMaxLength(20)
                .HasColumnName("UID");

            entity.HasOne(d => d.Ticket).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.TicketId)
                .HasConstraintName("FK__Favorites__Ticke__4D94879B");
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ticket__3214EC2793C9D3F8");

            entity.ToTable("Ticket");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DateCompleted).HasColumnType("date");
            entity.Property(e => e.DateSubmitted).HasColumnType("date");
            entity.Property(e => e.Email).HasMaxLength(30);
            entity.Property(e => e.FullIssue).HasMaxLength(700);
            entity.Property(e => e.SubjectBrief).HasMaxLength(100);
            entity.Property(e => e.UserId).HasMaxLength(20);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
