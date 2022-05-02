function getPoke() {
  return fetch("https://pokeapi.co/api/v2/pokemon");
}

getPoke()
  .then((data) => data.json())
  .then((data) => console.log(data));

// fetch is undefined because its a browser api
