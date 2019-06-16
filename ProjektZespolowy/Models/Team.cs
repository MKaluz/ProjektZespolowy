using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjektZespolowy.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Description { get; set; }

        public List<User> TeamMembers { get; set; } = new List<User>();
        public User User { get; set; }

    }
}
