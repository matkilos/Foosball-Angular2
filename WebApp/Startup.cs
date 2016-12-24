using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;

namespace WebApp
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseStaticFiles(MapNodeModulesPathOptions(env));
        }

        private static StaticFileOptions MapNodeModulesPathOptions(IHostingEnvironment env)
        {
            return new StaticFileOptions
            {
                RequestPath = new PathString("/node_modules"),
                FileProvider = new PhysicalFileProvider(Path.GetFullPath(Path.Combine(env.WebRootPath, @"..\node_modules\")))
            };
        }
    }
}