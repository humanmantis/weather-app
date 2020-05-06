const search = (query) => {
  return fetch(
    `http://api.weatherapi.com/v1/search.json?key=f73b87dc3a67465db6d163545200405&q=${query}`
  ).then((response) => response.json());
};

export default search;
