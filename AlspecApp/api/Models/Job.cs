namespace api.Models
{
    public class Job
    {
        public Job()
        {
            Subitems = new HashSet<Subitem>();
        }

        public string Id { get; set; } = null!;
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public virtual ICollection<Subitem> Subitems { get; set; }

    }
}
