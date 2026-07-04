setInterval(updatePretoriaTime, 1000);

function updatePretoriaTime() {
  // for Pretoria
  let pretoriaElement = document.querySelector("#pretoria");
  let pretoriaDateElement = pretoriaElement.querySelector(".date");
  let pretoriaTimeElement = pretoriaElement.querySelector(".time");
  let pretoriaTime = moment().tz("Africa/Johannesburg");

  pretoriaDateElement.innerHTML = pretoriaTime.format("MMMM Do YYYY");
  pretoriaTimeElement.innerHTML = pretoriaTime.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updatePretoriaTime, 1000);




function updateLosAngelesTime() {
  // for Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss  [<small>]A[</small>]",
  );
}
setInterval(updateLosAngelesTime, 1000);



function updateParisTime() {
  //for Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

setInterval(updateParisTime, 1000);
