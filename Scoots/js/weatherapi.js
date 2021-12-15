const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=9afc0f107923b2b648c5af033cf74905&lang=en&units=imperial"

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currentConditions').innerText = jsObject.weather[0].description;
    document.getElementById('currentTemp').innerText = Math.round(jsObject.main.temp);
    document.getElementById('humidity').innerText = jsObject.main.humidity;
  });

  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=9afc0f107923b2b648c5af033cf74905&lang=en&units=imperial"

  fetch(forecastURL)
  .then((response) => response.json())
  .then((jsonObject) => {
      console.log(jsonObject);
  
      const domForecastOutput = document.getElementById("forecastContent");
      const forecast = jsonObject.list.filter(item => item.dt_txt.includes("12:00:00")).forEach(item => {
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
        });
    });