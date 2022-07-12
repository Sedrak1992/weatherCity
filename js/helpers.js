function getQueryParam(query) {
  let params = new URL(window.location).searchParams;
  return params.get(query);
}
function getWeather(city) {
  const apiEndpoint = `https://api.weatherapi.com/v1/current.json?key=0698f3aa6b9d4f09a7c111107220507&q=${city}`;
  return fetch(apiEndpoint)
    .then((response) => response.json())
    .catch(function (error) {
      console.error(error);
    });
}
