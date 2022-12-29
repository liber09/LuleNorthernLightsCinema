// adding cards to frontpage
let movies;

let ul = document.querySelector(".class");
let li;

async function displayCards() {
  let res = await fetch("src/movies.json");
  let data = await res.json();

  li = data.movies;

  li.forEach(function (movieAll) {
    let img = document.createElement("img");
    img.setAttribute("src", movieAll.posterImageUrl);
    img.setAttribute("alt", "Hej");
    img.classList.add("cards");
    ul.append(img);
    console.log(img);
  });
}
displayCards();
