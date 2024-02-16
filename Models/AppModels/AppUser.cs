using Microsoft.AspNetCore.Identity;

namespace TestIdentity.Models.AppModels
{
    public class AppUser : IdentityUser
    {
        public required string HospitalId { get; set; }
        public string? Description { get; set; }
    }
}
