const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9afc0f107923b2b648c5af033cf74905&lang=en&units=imperial"

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currentConditions').innerText = jsObject.weather[0].description;
    document.getElementById('currentTemp').innerText = Math.round(jsObject.main.temp);
    document.getElementById('windSpeed').innerText = jsObject.wind.speed;
    document.getElementById('humidity').innerText = jsObject.main.humidity;
  });

  let temperature = document.getElementById("currentTemp").innerText;
  let wind = document.getElementById("windSpeed").innerText;
  
  if (temperature <= 50 && wind >= 4.8) {
      f = Math.round(35.74 + 0.6215 * temperature - 35.75 * (Math.pow(wind, 0.16)) + 0.4275 * temperature * (Math.pow(wind, 0.16)));
      document.getElementById("windChill").innerText = f.text('\u00B0'); }
      else {
          document.getElementById("windChill").innerText = "N/A"
      }

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=9afc0f107923b2b648c5af033cf74905&lang=en&units=imperial"

fetch(forecastURL)
.then((response) => response.json())
.then((jsonObject) => {
    console.log(jsonObject);

    const domForecastOutput = document.getElementById("forecastContent");
    const forecast = jsonObject.list.filter(item => item.dt_txt.includes("18:00:00")).forEach(item => {
        const d = new Date(0);
        d.setUTCSeconds(item.dt)
        const weekday = d.toLocaleDateString("en-US", {weekday: "short"});

        domForecastOutput.insertAdjacentHTML("beforeend", `
        <div class="grid_item">
                <h3>${weekday}</h3>
                <img class="forecast_img" src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="sunny">
                <h4 class="weatherDescription">${item.weather[0].description}</h4>
                <h4 class="forecastTemperature">${Math.round(item.main.temp)}\u00B0</h4>
            </div>
        `)
        // return {
        //     ...item, 
        //     weekday
        // }
    });


    
            // document.getElementById('forecastDay1').textContent = jsonObject.list[0].clouds.dt_txt;

    

    // const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';  // note the concatenation
    // const desc = jsonObject.weather[0].description;  // note how we reference the weather array
    // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);
});