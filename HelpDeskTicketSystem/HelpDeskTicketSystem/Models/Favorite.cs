using System;
using System.Collections.Generic;

namespace HelpDeskTicketSystem.Models;

public partial class Favorite
{
    public int Id { get; set; }

    public string Uid { get; set; } = null!;

    public DateTime? DateAdded { get; set; }

    public int? TicketId { get; set; }

    public virtual Ticket? Ticket { get; set; }
}
