"use strict";
window.CurrieTechnologies = window.CurrieTechnologies || {};
window.CurrieTechnologies.Blazor = window.CurrieTechnologies.Blazor || {};
window.CurrieTechnologies.Blazor.Vibration = window.CurrieTechnologies.Blazor.Vibration || {};
window.CurrieTechnologies.Blazor.Vibration.Vibrate = function (pattern) {
    return window.navigator.vibrate(pattern);
};
