const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        
        for (let i = 0; i < towns.length; i++ ) {
            if (towns[i].name === 'Preston') {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                p1.className = 'motto';
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');
                h2.textContent = towns[i].name;
                p1.textContent = '"' + towns[i].motto + '"';
                p2.textContent = 'Year Founded: ' + towns[i].yearFounded;
                p3.textContent = 'Population: ' + towns[i].currentPopulation;
                p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                image.setAttribute('src', 'images/preston_hero400.jpg');
                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(p4);
                card.appendChild(image);
                document.querySelector('div.cards').appendChild(card);
                }

            if (towns[i].name === 'Soda Springs') {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                p1.className = 'motto';
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');
                h2.textContent = towns[i].name;
                p1.textContent = '"' + towns[i].motto + '"';
                p2.textContent = 'Year Founded: ' + towns[i].yearFounded;
                p3.textContent = 'Population: ' + towns[i].currentPopulation;
                p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                image.setAttribute('src', 'images/soda_springs_hero400.jpg');
                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(p4);
                card.appendChild(image);
                document.querySelector('div.cards').appendChild(card);
                }

            if (towns[i].name === 'Fish Haven') {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                p1.className = 'motto';
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');
                h2.textContent = towns[i].name;
                p1.textContent = '"' + towns[i].motto + '"';
                p2.textContent = 'Year Founded: ' + towns[i].yearFounded;
                p3.textContent = 'Population: ' + towns[i].currentPopulation;
                p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                image.setAttribute('src', 'images/fish_haven_hero400.jpg');
                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(p4);
                card.appendChild(image);
                document.querySelector('div.cards').appendChild(card);
                }
        }
      });