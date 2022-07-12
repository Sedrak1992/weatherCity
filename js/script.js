const modalInput = document.querySelector(".modal__content--input");
const cardsWrapper = document.querySelector(".content__cards");
const INPUT_MAX_CHARACTERS = 3;

document.addEventListener("keypress", enterCity);

function validate() {
  if (!modalInput.value || modalInput.value.length < INPUT_MAX_CHARACTERS) {
    alert("Try something longer! ");
  }
}

function enterCity(e) {
  if (e.code === "Enter") {
    validate();
    getWeather(modalInput.value.trim()).then(function (data) {
      if (data.error) {
        console.error(data.error.message);
        return alert(data.error.message,"2222222");
      } 
      modalInput.value = "";
      
       createWeatherCard(data);
    });
  }
}

function createWeatherCard(data) {
  console.log(data);
  const div = document.createElement("div");
  div.className = "content__cards__card";
  div.innerHTML = `
        <div class="content__cards__card__top-bar">
          <img
            src="https:${data.current.condition.icon}"
            alt=""
            class="content__cards__card--icon"
          />
          <div class="content__cards__card__text">
            <h5 class="content__cards__card--location">${data.location.name}</h5>

            <h6 class="content__cards__card--date">${data.location.localtime}</h6>
          </div>
        </div>

        <div class="content__cards__card__weather">
          <div class="content__cards__card__weather--number celcius">
            ${data.current.temp_c}
          </div>
          <div class="content__cards__card__weather--condition">${data.current.condition.text}</div>
          <h1>${data.location.country}</h1>
        </div>

        <div class="content__cards__card__information">
          <div class="content__cards__card__information--item">
            Feels like:  ${data.current.feelslike_c}
          </div>
          <div class="content__cards__card__information--item">

            Wind:
            ${data.current.wind_mph}
            KM/H
          </div>
        </div>
        `;
  closeModal();
  cardsWrapper.appendChild(div);
}

function addCity(event) {
  event.preventDefault();
}
