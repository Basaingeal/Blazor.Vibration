using System.Collections.Generic;

namespace CurrieTechnologies.Blazor.Vibration
{
    interface ISyncVibrationService
    {
        bool Vibrate(int duration);
        bool Vibrate(IEnumerable<int> pattern);
    }
}
