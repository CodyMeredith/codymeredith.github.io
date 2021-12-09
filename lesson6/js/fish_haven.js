//PRESTON//
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=9afc0f107923b2b648c5af033cf74905&lang=en&units=imperial"

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

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=9afc0f107923b2b648c5af033cf74905&lang=en&units=imperial"

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
    });
});

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        
        for (let i = 0; i < towns.length; i++ ) {
            if (towns[i].name === 'Fish Haven') {                
                let card = document.createElement('div');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
               
                h2.textContent = "Coming Events";
                p1.textContent = towns[i].events[0];
                p2.textContent = towns[i].events[1];
                p3.textContent = towns[i].events[2];
                
                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                
                document.querySelector('div.eventsDiv').appendChild(card);
        }
    }   
    });
