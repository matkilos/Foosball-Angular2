using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace WebApi
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRoutingFromIndexHtml();
            app.UseStaticFiles();
            app.UseMvc(routes =>
            {
                routes.MapRoute("default", "api/{controller=Home}/{action=Index}/{id?}");
            });
        }
    }

    public static class SpaMiddlewareExtensions
    {
        public static void UseRoutingFromIndexHtml(this IApplicationBuilder app)
        {
            app.Use(async (context, next) =>
            {
                if (!context.Request.Path.Value.StartsWith("/api/") && 
                !context.Request.Path.Value.StartsWith("/node_modules/") &&
                !context.Request.Path.Value.StartsWith("/app/"))
                {
                    context.Request.Path = "/index.html";
                }

                await next();
            });
        }
    }
}
