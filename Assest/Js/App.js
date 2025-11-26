//let apiKey = "ea5c7376";

let movie = document.getElementById("search");
movie.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    apicall(movie.value);
  }
});

let apicall = (movie) => {
  fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey} `)
    .then((res) => res.json())
    .then((data) => {
      searchMovies(data);
    });
};

let searchMovies = (data) => {
  let movieName = document.getElementById("m-name");
  let plot = document.getElementById("plot");
  let actore = document.getElementById("actore");
  let rate = document.getElementById("rate");
  let year = document.getElementById("year");
  let directore = document.getElementById("directore");
  let runTime = document.getElementById("time");
  let genre = document.getElementById("genre");
  let language = document.getElementById("language");

  movieName.innerText = data.Title;
  searchImage.src = data.Poster;
  plot.innerText = data.Plot;
  actore.innerText = data.Actors;
  rate.innerText = data.imdbRating;
  year.innerText = data.Year;
  directore.innerText = data.Director;
  runTime.innerText = data.Runtime;
  genre.innerText = data.Genre;
  language.innerText = data.Language;
};

const topMovieId = [
  "tt0111161", "tt0068646", "tt0468569", "tt0071562", "tt0050083",
  "tt0108052", "tt0167260", "tt0110912", "tt0120737", "tt0060196",
  "tt0109830", "tt0137523"
  
  
];

async function loadTopRatedMovies() {
  let container = document.getElementById("topRatedMovies");

  for (let id of topMovieId) {
    let url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;
    let res = await fetch(url);
    let movie = await res.json();

    container.insertAdjacentHTML("beforeend", `
     <div class="col-6 col-md-4 col-lg-2">
                <div class="movie-card">
                  <img src="${movie.Poster}" alt="">
                  <div class="overlay">
                    <h4 class="fw-bold text-light ">${movie.Title}</h4>
                    <div class="row ">
                      <div class="col-9">
                        
                         <h6 class="  ">${movie.Genre}</h6>
                        <h6><i class="fa-brands fa-imdb mx-1 "></i>IMDB: ${movie.imdbRating}</h6>
                        <h6><i class="fa-solid fa-clock mx-1"></i>${movie.Runtime}</h6>
                        
                        <button class="btn btn-light  addbtnfont rounded-5"><a href="#"><i
                              class="fa-solid fa-plus text-dark "></i></a></button>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>  
        `);
  }
}

loadTopRatedMovies();

//------------------------ popular Movies card


const PopularMovieId = [
  "tt14846026",
  "tt27543578",  
  "tt10016180", 
  "tt10676052",   
  "tt34276058",   
  "tt9603208",   
  
  
];
async function LoadPopularMovies() {
  let container = document.getElementById("popularMovies");

  for (let id of PopularMovieId ) {
    let url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;
    let res = await fetch(url);
    let movie = await res.json();

    container.insertAdjacentHTML("beforeend", `
     <div class="col-6 col-md-4 col-lg-2">
                <div class="movie-card">
                  <img src="${movie.Poster}" alt="">
                  <div class="overlay">
                    <h4 class="fw-bold text-light ">${movie.Title}</h4>
                    <div class="row ">
                      <div class="col-9">
                        
                         <h6 class="  ">${movie.Genre}</h6>
                        <h6><i class="fa-brands fa-imdb mx-1 "></i>IMDB: ${movie.imdbRating}</h6>
                        <h6><i class="fa-solid fa-clock mx-1"></i>${movie.Runtime}</h6>
                        
                        <button class="btn btn-light  addbtnfont rounded-5"><a href="#"><i
                              class="fa-solid fa-plus text-dark "></i></a></button>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>  
        `);
  }
}

LoadPopularMovies();




/*<div class="movie-card">
              <img src="${movie.Poster}" alt="">
              <div class="overlay">
                <div class="row">
                  <div class="col">
                    <h4 class="fw-bold">${movie.Title}</h4>
                    <h6><i class="fa-brands fa-imdb mx-1 "></i>IMDB:${movie.imdbRating}</h6>
                    <h6><i class="fa-solid fa-clock mx-1"></i>${movie.Runtime}</h6>
                  </div>
                  <div class="col fs-1 text-end">
                    <h6 class="border border-light text-center p-1">${movie.Genre}</h6>
                    <button class="btn btn-light rounded-pill "><a href="#"><i
                          class="fa-solid fa-plus text-dark"></i></a></button>
                  </div>
                </div>
              </div>
            </div>   */