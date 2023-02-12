const form = document.getElementById("form");
const city = document.querySelector(".city");
const res = document.querySelector(".res");
const resContainer = document.querySelector(".res-container");
const img = document.querySelector(".icon");
const main = document.querySelector(".main");
const error = document.querySelector(".error");

city.focus();

form.onsubmit = (e) => {
  e.preventDefault();
  city.value && fetchTemperature(city.value);
  city.value = "";
};

const fetchTemperature = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc2551d5d489362e129abe7390a5e3a8`;
  const response = await fetch(url);
  try {
    if (!response.ok) {
      resContainer.classList.add("hidden");
      error.innerText = "Please enter correct city Name";
      setTimeout(() => {
        error.innerText = "";
      }, 3000);
      return;
    }
    const data = await response.json();
    resContainer.classList.remove("hidden");
    res.innerText = `${(data.main.temp - 273.15).toFixed(2)} °C`;
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    main.innerText =
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1);
  } catch (error) {
    console.log(error);
  }
};
