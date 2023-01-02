// adding cards to frontpage
let movies;

let div = document.querySelector(".picture-container");
let li;
let modal = document.querySelector(".cinema-modal");

async function displayCards() {
  let res = await fetch("src/movies.json");
  let data = await res.json();

  li = data.movies;

  li.forEach(function (movieAll) {
    let img = document.createElement("img");
    img.setAttribute("src", movieAll.posterImageUrl);
    img.setAttribute("alt", "Hej");
    img.classList.add("cards");
    div.append(img);

    //elements in modal

    img.addEventListener("click", function () {
      document.querySelector(".modal-container").classList.add("show");

      modalPoster = document.createElement("img");
      modalPoster.setAttribute("src", movieAll.posterImageUrl);
      modalPoster.classList.add("cards-modal");
      modalScenePoster = document.createElement("img");
      modalScenePoster.setAttribute("src", movieAll.movieSceneImageUrl);

      let textContainer1 = document.createElement("div");
      textContainer1.classList.add("text-container");
      let textContainer2 = document.createElement("div");
      textContainer2.classList.add("text-container");
      let textContainer3 = document.createElement("div");
      textContainer3.classList.add("text-container");
      let textContainer4 = document.createElement("div");
      textContainer4.classList.add("text-container");
      let textContainer5 = document.createElement("div");
      textContainer5.classList.add("text-container");
      let textContainer6 = document.createElement("div");
      textContainer6.classList.add("text-container");
      let textContainer7 = document.createElement("div");
      textContainer7.classList.add("text-container");
      let textContainer8 = document.createElement("div");
      textContainer8.classList.add("text-container");
      let textContainer9 = document.createElement("div");
      textContainer9.classList.add("text-container");
      let textContainer10 = document.createElement("div");
      textContainer10.classList.add("text-container");
      modal.append(
        modalPoster,
        modalScenePoster,
        textContainer1,
        textContainer2,
        textContainer3,
        textContainer4,
        textContainer5,
        textContainer6,
        textContainer7,
        textContainer8,
        textContainer9,
        textContainer10
      );

      let title = (document.createElement("div").innerText = movieAll.title);

      let genre = (document.createElement("div").innerText =
        "genre: " + movieAll.genre);
      let year = (document.createElement("div").innerText =
        "År: " + movieAll.year);
      let length = (document.createElement("div").innerText =
        "Längd (minuter): " + movieAll.length);
      let ageLimit = (document.createElement("div").innerText =
        "Åldersgräns: " + movieAll.ageLimit);
      let description = (document.createElement("div").innerText =
        movieAll.description);

      let actors = (document.createElement("div").innerText =
        "Skådespelare: " + movieAll.actors);
      let director = (document.createElement("div").innerText =
        "Regissör: " + movieAll.director);
      let language = (document.createElement("div").innerText =
        "Språk: " + movieAll.language);
      let rating = (document.createElement("div").innerText =
        "Betyg: " + movieAll.rating);

      let button = document.createElement("button");
      button.innerText = "Boka";
      button.setAttribute("href", "/htmlbooking.html"); // Tror det ska vara rätt html fil här.
      button.classList.add("book-movie");

      textContainer1.append(title);
      textContainer2.append(genre);
      textContainer3.append(year);
      textContainer4.append(length);
      textContainer5.append(ageLimit);
      textContainer6.append(description);
      textContainer7.append(actors);
      textContainer8.append(director);
      textContainer9.append(language);
      textContainer10.append(rating);
      modal.append(button);
    });

    window.addEventListener("click", function (ev) {
      if (ev.target === document.querySelector(".modal-container")) {
        document.querySelector(".modal-container").classList.remove("show");
      }
    });
  });
}
displayCards();
