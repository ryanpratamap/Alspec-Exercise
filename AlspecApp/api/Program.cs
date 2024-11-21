using api.Interfaces;
using api.Models;
using api.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

DBConnection dbConnection = builder.Configuration.GetSection("DBConnection").Get<DBConnection>();
builder.Services.AddDbContext<alspecContext>(
    options => options.UseSqlServer(
        "server=" + dbConnection.Server + ";user=" + dbConnection.User + ";password=" + dbConnection.Password + ";database=" + dbConnection.Database
    ));

builder.Services.AddScoped<IJobService, JobService>();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
