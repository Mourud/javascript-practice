window.addEventListener("load", () => {
  let long;
  let lat;

  let tempDesc = document.querySelector(".temp-description");
  let tempVal = document.querySelector(".temp-degree-sec-val");
  let timeZone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        long +
        "&exclude=minutely,hourly,daily&appid=00987239bc1f7c9a97331ecd15f9099e";

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const temperature = Math.round(data.current.temp - 273.15);
          const desc = data.current.weather[0].description;
          const icon = data.current.weather[0].icon;
          const timezone = data.timezone;
          tempVal.textContent = temperature;
          tempDesc.textContent = desc;
          timeZone.textContent = timezone;
          // setIcons(icon, document.querySelector(".icon"));
        });
    });
  } else {
    h1.textContent = "Please enable location for this webpage to work";
  }
});
