// https://api.openweathermap.org/data/2.5/weather?lat=37.4931456&lon=126.926848&appid=240b1ca7b5ef6307bee589dbd1d8adbe&lang=kr
const API_KEY = "240b1ca7b5ef6307bee589dbd1d8adbe";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather .temp");
      const city = document.querySelector("#weather .city");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}°C`;
    });
}
function onGeoError() {
  alert("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
