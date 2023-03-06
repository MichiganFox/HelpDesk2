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

    }
}
