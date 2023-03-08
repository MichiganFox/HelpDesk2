using HelpDeskTicketSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDeskTicketSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        TicketDbContext dbContext = new TicketDbContext();

        [HttpGet()]
        public List<Favorite> GetFavorites()
        {

            return dbContext.Favorites.ToList();
        }

        [HttpPost()]
        public Favorite CreateFavorite(string _uid,int _ticketId)
        {
            DateTime dateTime= DateTime.Now;
            Favorite newFavorite = new Favorite()
            {
                Uid = _uid,
                DateAdded = dateTime,
                TicketId = _ticketId,
            };
            dbContext.Favorites.Add(newFavorite);
            dbContext.SaveChanges();
            return newFavorite;
        }
        [HttpGet("Login")]
        public List<string> Login()
        {
            //distinct by gets unique list of favorites by user id
            //select grabs all user ids, distinct deletes duplicates
            //create method in service to talk to this endpoint, fav component
            //fav component onInit needs to call said method and populate the dropdown menu with the result 
            return dbContext.Favorites.Select(f => f.Uid).Distinct().ToList();
        }


        [HttpGet("GetUserFavorites")]
        public List<Ticket> GetUserTicketFavorites(string _uid)
        {
            List<Ticket> fList = new List<Ticket>();
            //click event to call the list of tickets when someone selects the user from the dropdown list
            //make method to call this endpoint, favorite service

            foreach (Favorite f in dbContext.Favorites.Where(f => f.Uid == _uid))
            {
                fList.Add(dbContext.Tickets.FirstOrDefault(t => t.Id == f.TicketId));
            }

            return fList;
        }

    }
}
