using Microsoft.Extensions.DependencyInjection;

namespace CurrieTechnologies.Blazor.Vibration
{
    public static class ExtensionMethods
    {
        public static IServiceCollection AddVibration(this IServiceCollection services)
        {
            return services.AddSingleton<VibrationService>();
        }
    }
}
