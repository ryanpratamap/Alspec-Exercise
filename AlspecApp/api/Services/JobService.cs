using api.Interfaces;
using api.Models;

namespace api.Services
{
    public class JobService : IJobService
    {
        private alspecContext _context;

        public JobService(alspecContext context)
        {
            _context = context;
        }

        public IEnumerable<Job> GetAll()
        {
            return _context.Jobs;
        }
    }
}