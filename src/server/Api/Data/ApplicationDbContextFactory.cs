using Api.Settings;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Api.Data
{
    // Этот класс будет вызываться ситемой миграций принудительно, в обход Program.cs
    public class ApplicationDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApplicationDbContext CreateDbContext(string[] args)
        {
            // Собираем конфигурацию, которая умеет заглядывать в секреты пользователя
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false)
                .AddJsonFile("appsettings.Development.json", optional: true)
                .Build();

            var appSettings = new AppSettings();
            configuration.Bind(appSettings);
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();

            optionsBuilder.UseNpgsql(appSettings.Db.ConnectionString);

            return new ApplicationDbContext(optionsBuilder.Options);
        }
    }
}
