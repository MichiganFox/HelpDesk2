using System;
using System.Collections.Generic;

namespace HelpDeskTicketSystem.Models;

public partial class Ticket
{
    public int Id { get; set; }

    public string UserId { get; set; } = null!;

    public string Email { get; set; } = null!;

    public DateTime? DateSubmitted { get; set; }

    public DateTime? DateCompleted { get; set; }

    public string? SubjectBrief { get; set; }

    public string? FullIssue { get; set; }

    public bool? Open { get; set; }

    public virtual ICollection<Favorite> Favorites { get; } = new List<Favorite>();
}
