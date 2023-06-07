//your JS code here. If required.
var browserInfoElement = document.getElementById("browser-info");
var browserName = navigator.appName;
var version = navigator.appVersion;
browserInfoElement.textContent = "You are using " + browserName + " version " + version;