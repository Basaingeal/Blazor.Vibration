declare var DotNet: any;

interface Window {
  CurrieTechnologies: any;
}

window.CurrieTechnologies = window.CurrieTechnologies || {};
window.CurrieTechnologies.Blazor = window.CurrieTechnologies.Blazor || {};
window.CurrieTechnologies.Blazor.Vibration = window.CurrieTechnologies.Blazor.Vibration || {};

window.CurrieTechnologies.Blazor.Vibration.Vibrate = (pattern: number | number[]): boolean => {
  return window.navigator.vibrate(pattern);
};

window.CurrieTechnologies.Blazor.Vibration.VibrationSupported = (): boolean => {
  return window.navigator.vibrate !== undefined;
};
