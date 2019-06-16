using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjektZespolowy.Models;

namespace ProjektZespolowy.Services
{
    public class TeamService : ITeamService
    {

        private AppContext _context;

        public TeamService(AppContext context)
        {
            _context = context;
        }
        public ICollection<Team> GetTeamsList()
        {
            var teamsFromRepo = _context.Teams.ToList();

            return teamsFromRepo;
        }

        public Team GetTeamById(int id)
        {
            var teamFromRepo = _context.Teams.FirstOrDefault(t => t.TeamId == id);

            return teamFromRepo;
        }

        public void AddTeam(Team team)
        {
            _context.Add(team);
            _context.SaveChanges();
        }

        public void UpdateTeam(Team team)
        {
            _context.Teams.Update(team);
            _context.SaveChanges();
        }

        public void DeleteTeam(int id)
        {
            var userToDelete = GetTeamById(id);
            _context.Remove(userToDelete);
            _context.SaveChanges();
        }


    }
}
