
function showAddressDetails(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const AddressInfo = document.getElementById('AddressInfo');
      AddressInfo.innerHTML = `<h2>Adress in ${data.name}</h2>`;
      const varcity = data.name;
      document.getElementById('city').value = varcity;
      document.getElementById('weatherForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const AddressInfo = document.getElementById('AddressInfo');
        AddressInfo.innerHTML = `<p>Failed to fetch address. Please try again.</p>`;
      });
}

document.getElementById('AddressForm').addEventListener('submit',showAddressDetails);

function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
