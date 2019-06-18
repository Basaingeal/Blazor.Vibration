using System.Collections.Generic;
using System.Threading.Tasks;

namespace CurrieTechnologies.Blazor.Vibration
{
    interface IAsyncVibrationService
    {
        Task<bool> VibrateAsync(int duration);
        Task<bool> VibrateAsync(IEnumerable<int> pattern);
    }
}
