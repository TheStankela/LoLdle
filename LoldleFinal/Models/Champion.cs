using System.ComponentModel.DataAnnotations;

namespace LoldleFinal.Models
{
    public class Champion
    {
        [Key]
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Position { get; set; }
        public string Species { get; set; }
        public string Resource { get; set; }
        public string RangeType { get; set; }
        public string Region { get; set; }
        public string ReleaseYear { get; set; }
        public int ChampId { get; set; }
    }
}
