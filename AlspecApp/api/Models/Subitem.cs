namespace api.Models
{
    public class Subitem
    {
        public string ItemId { get; set; } = null!;
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Status { get; set; } = null!;
        public string JobId { get; set; } = null!;
        public virtual Job? JobNavigation { get; set; }
    }
}
