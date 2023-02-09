using LoldleFinal.Data;
using LoldleFinal.Interface;
using LoldleFinal.Models;

namespace LoldleFinal.Repository
{
    public class ChampionRepository : IChampionRepository
    {
        private readonly DataContext _dataContext;

        public ChampionRepository(DataContext dataContext) 
        {
            _dataContext = dataContext;
        }

        public Champion GetChampion()
        {
            
            Random rnd = new Random();
            var id = rnd.Next(1, 162);
            var champion = _dataContext.Champion.Where(c => c.ChampId == id).FirstOrDefault();

            return champion;
        }

        public ICollection<Champion> GetChampions()
        {
            List<Champion> champions = _dataContext.Champion.ToList();
            
            return champions;
        }
    }
}
