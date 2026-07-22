using System.ComponentModel.DataAnnotations;

namespace Api.Data.Models
{
    public class User
    {
        public int UserId { get; set; }

        [StringLength(100)]
        public string Email { get; set; } = string.Empty;

        [StringLength(100)]
        public string Password { get; set; } = string.Empty;
    }
}
