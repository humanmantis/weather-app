export default (city) => {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=5243339d81f541c2bbd104505200505&q=${city}&days=3`
  ).then((response) => response.json());
};
