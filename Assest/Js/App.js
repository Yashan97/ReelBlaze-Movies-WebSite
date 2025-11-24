fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=Inception`)
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML += `
      <img src="http://img.omdbapi.com/?apikey=${apiKey}&i=${data.imdbID}">
    `;
  });