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

        [HttpGet()]
        public List<Ticket> GetTickets()
        {
            return dbContext.Tickets.ToList();
        }

        [HttpPost()]
        public Ticket CreateTicket(string _UserId, string _Email, string _Priority, DateTime _DateSubmitted, DateTime _DateCompleted, string _SubjectBrief, string _FullIssue, bool _Open)
        {
            Ticket newTicket = new Ticket()
            {
                UserId = _UserId,
                Email = _Email,
                Priority= _Priority,
                DateSubmitted = _DateSubmitted,
                DateCompleted = _DateCompleted,
                SubjectBrief = _SubjectBrief,
                FullIssue = _FullIssue,
                Open = _Open

            };
            dbContext.Tickets.Add(newTicket);
            dbContext.SaveChanges();

            return newTicket;
        }


        [HttpDelete("delete/{id}")]
        public Ticket DeleteTicket(int id) //, int userId
        {
            Ticket result = null;
            List<Favorite> test1 = null;

            result = dbContext.Tickets.FirstOrDefault(t => t.Id == id);
            test1 = dbContext.Favorites.Where(f => f.TicketId == id).ToList();
            
            foreach (Favorite f in test1)
            {

            dbContext.Favorites.Remove(f);
            }


            dbContext.Tickets.Remove(result);
            dbContext.SaveChanges();

            return result;

        }

        [HttpPost("Favorite/{ticketId}")]
        public Favorite BookmarkTicket(int _id, string _UserId)
        {
            Favorite newFavorite = new Favorite();
            dbContext.Favorites.Where(t => t.Uid == _UserId);
            dbContext.Favorites.Add(newFavorite);
            dbContext.SaveChanges();

            return newFavorite;

        }


    }
}
