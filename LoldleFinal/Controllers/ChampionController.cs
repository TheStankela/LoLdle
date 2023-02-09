using LoldleFinal.Interface;
using LoldleFinal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LoldleFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChampionController : ControllerBase
    {
        private readonly IChampionRepository _championRepository;

        public ChampionController(IChampionRepository championRepository)
        {
            _championRepository = championRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(Champion))]
        public IActionResult GetChampion()
        {
            var championToBeGuessed = _championRepository.GetChampion();

            return Ok(championToBeGuessed);

        }
        [HttpGet ("All")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Champion>))]
        public IActionResult GetChampions()
        {
            var champions = _championRepository.GetChampions();

            return Ok(champions);

        }

    }
}
