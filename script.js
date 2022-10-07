setInterval(() => {
    let now = new Date();
  
    let currentTime = document.querySelector("date");
    let hour = now.getHours();
    if (hour < 10) {
      hour = `0` + hour;
    }
    let minute = now.getMinutes();
    if (minute < 10) {
      minute = `0` + minute;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let day = days[now.getDay()];
    const time = `${day} ${hour}:${minute}`;
    date.innerHTML = time;
  });
  
  function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
  
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#pressure").innerHTML = response.data.main.pressure;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
  }
  
  function searchCity(city) {
    let apiKey = "3f6be1c407b0d9d1933561808db358ba";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#input-city").value;
    searchCity(city);
  }
  let searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", handleSubmit);
  
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let city = document.querySelector("#city-input").value;
  //   searchCity(city);
  // }
  //
  
  function searchLocation(position) {
    let apiKey = "3f6be1c407b0d9d1933561808db358ba";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  
  searchCity("New York");
  
  // write your code here
  