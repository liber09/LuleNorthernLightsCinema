/* let data = fetch("src/movies.json")
  .then((response) => response.json())
  .then((jsonMovies) => console.log(jsonMovies)); */
let movies;
let val = document.querySelector("hello");

val.innerHTML = ' <h1 class="majs"></h1>';

function showCards() {
  async function display(movies) {
    let res = await fetch("src/movies.json");
    let data = await res.json();

    movies = data.movies[0];
    console.log(movies);
    return movies;
  }
}

showCards(title);
