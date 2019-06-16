using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProjektZespolowy.Dtos;
using ProjektZespolowy.Models;
using ProjektZespolowy.Services;

namespace ProjektZespolowy.Conntrolers
{
    [Route("api/user")]
    public class UserController : Controller
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var usersFromRepo = _userService.GetUserList();
            var results = Mapper.Map<IEnumerable<UserDto>>(usersFromRepo);

            return Ok(results);
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] UserForCreationDto userForCreationDto)
        {
            if (!ModelState.IsValid)
            {
                BadRequest(ModelState);
            }

            var userToAdd = Mapper.Map<User>(userForCreationDto);
            _userService.AddUser(userToAdd);

            return Ok(userToAdd);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, [FromBody] UserForUpdateDto userForUpdateDto)
        {
            var userFromRepo = _userService.GetUserById(id);
            if (userFromRepo == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var updatedUser = Mapper.Map(userForUpdateDto, userFromRepo);
            _userService.UpdateUser(userFromRepo);

            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var userToDelete = _userService.GetUserById(id);
            if (userToDelete == null)
            {
                return BadRequest();
            }

            _userService.DeleteUser(id);

            return NoContent();
        }
    }
}
