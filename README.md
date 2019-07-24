# CurrieTechnologies.Blazor.Vibration
This package provides Blazor applications with access to the browser's [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)

## This package is deprecated. Use [CurrieTechnologies.Razor.Vibration](https://github.com/Basaingeal/Razor.Vibration).

## Usage
1) In your Blazor app, add the `CurrieTechnologies.Blazor.Vibration` [NuGet package](https://www.nuget.org/packages/CurrieTechnologies.Blazor.Vibration/)

    ```
    Install-Package CurrieTechnologies.Blazor.Vibration
    ```

1) In your Blazor app's `Startup.cs`, register the 'VibrationService'.

    ```
    public void ConfigureServices(IServiceCollection services)
    {
        ...
        services.AddVibration();
        ...
    }
    ```

2) Now you can inject the VibrationService into any Blazor page and use it like this:

    ```
    @using CurrieTechnologies.Blazor.Vibration
    @inject VibrationService vibrationService
    
    <button @onclick="@(async e => await vibrationService.VibrateAsync(1000))">Vibrate for 1 second</button>
    <button @onclick="@(async e => await vibrationService.VibrateAsync(new int[] { 200, 100, 200 }))">
      Vibrate on and off
    </button>
    ```

`Vibrate()` and `VibrateAsync()` are both available.
