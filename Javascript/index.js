//setInterval(updatePretoriaTime, 1000);

function updatePretoriaTime() {
  // for Pretoria
  let pretoriaElement = document.querySelector("#pretoria");
  let pretoriaDateElement = pretoriaElement.querySelector(".date");
  let pretoriaTimeElement = pretoriaElement.querySelector(".time");
  let pretoriaTime = moment().tz("Africa/Johannesburg");

  pretoriaDateElement.innerHTML = pretoriaTime.format("MMMM Do YYYY");
  pretoriaTimeElement.innerHTML = pretoriaTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}
//setInterval(updatePretoriaTime, 1000);




function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date" id="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>

      <div class="time" id="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
  `;
}


updatePretoriaTime();
setInterval(Time, 1000);
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
