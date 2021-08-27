const countries = () => {
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data => eachCountry(data))
}
countries();

const eachCountry = countries => {
     const allCountriesCon = document.getElementById('allCountries');
     countries.forEach(country => {
          // console.log(country);
          const div = document.createElement('div')
          div.classList.add('design');
          div.innerHTML = `
               <h2>${country.name}</h2>
               <p>${country.capital}</p>
               <button onclick="buttonClick('${country.name}')">Details</button>
          `
          allCountriesCon.appendChild(div);
     });
}

const buttonClick = countryName => {
     const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
     fetch(url)
     .then(res => res.json())
     .then(data => displayButton(data[0]))
}

const displayButton = show => {
     console.log(show);
     const detailsAddCon = document.getElementById('detailsAdd');
     detailsAddCon.innerHTML = `
          <h2>Country: ${show.name}</h2>
          <h4>Language: ( ${show.languages[0].name} )</h4>
          <h4>Region: ${show.region} </h4>
          <h4>Population: ${show.population}</h4>
          National Flag_: <br>
          <img width="250px" src="${show.flag}">
     `
}