using Microsoft.EntityFrameworkCore;
using Api.Data;
using Api.Settings;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

//builder.Services.AddOpenApi();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.MapOpenApi();
//}

var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false)
    .AddJsonFile("appsettings.Development.json", optional: true)
    .Build();
var appSettings = new AppSettings();
configuration.Bind(appSettings);

builder.Services.AddSingleton(appSettings);

builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseNpgsql(appSettings.Db.ConnectionString));
var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
