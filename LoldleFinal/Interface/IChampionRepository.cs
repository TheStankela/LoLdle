using LoldleFinal.Models;

namespace LoldleFinal.Interface
{
    public interface IChampionRepository
    {
        public Champion GetChampion();
        public ICollection<Champion> GetChampions();
    }
}
