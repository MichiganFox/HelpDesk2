using HelpDeskTicketSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDeskTicketSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        TicketDbContext dbContext = new TicketDbContext();

        [HttpGet("GetTickets")]
        public List<Ticket> GetTickets()
        {
            return dbContext.Tickets.ToList();
        }

        [HttpPost("CreateTicket")]
        public Ticket CreateTicket(string _UserId, string _Email, string _Priority, DateTime _DateSubmitted, DateTime _DateCompleted, string _SubjectBrief, string _FullIssue, bool _Open)
        {
            Ticket newTicket = new Ticket()
            {
                UserId = _UserId,
                Email = _Email,
                Priority = _Priority,
                DateSubmitted = _DateSubmitted,
                DateCompleted = _DateCompleted,
                SubjectBrief = _SubjectBrief,
                FullIssue = _FullIssue,
                Open = true,

            };
            dbContext.Tickets.Add(newTicket);
            dbContext.SaveChanges();

            return newTicket;
        }

       

    }
}
