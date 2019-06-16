using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjektZespolowy.Models;

namespace ProjektZespolowy.Services
{
    public interface ITeamService
    {
        ICollection<Team> GetTeamsList();
        Team GetTeamById(int id);
        void AddTeam(Team team);
        void UpdateTeam(Team team);
        void DeleteTeam(int id);
    }
}
