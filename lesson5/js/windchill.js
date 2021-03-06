//f=35.74 + 0.6215 t − 35.75 s^0.16 + 0.4275 t s^0.16//

let temperature = document.getElementById("currentTemp").innerText;
let wind = document.getElementById("windSpeed").innerText;

if (temperature <= 50 && wind >= 4.8) {
    f = Math.round(35.74 + 0.6215 * temperature - 35.75 * (Math.pow(wind, 0.16)) + 0.4275 * temperature * (Math.pow(wind, 0.16)));
    document.getElementById("windChill").innerText = f;
}