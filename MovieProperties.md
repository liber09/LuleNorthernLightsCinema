2022-12-21

Vi bestämde att jag skulle undersöka på förhand och föreslå vilka egenskaper vi vill visa upp på en film på biografsidan.
Här är mitt förslag. Väljer vi att hämta in data via API kan vi ju kanske ha mer info, det blir väldigt jobbigt att själv skriva en JSON fil med massa olika properties för alla filmer.
Kravet var väl dock att vi skulle ha en JSON fil som datakälla, tänker då att vi kan ha visningstider för filmerna i JSON fil

- Titel
- Bild omslag/bio reklam bild
- Kategori
- Årtal
- Längd
- Åldersgräns
- Beskrivning

- Optional
    - Skådespelare
    - Regissör
    - Språk
    - Betyg

IMDB Har många olika API:er att välja på.
https://rapidapi.com/blog/how-to-use-imdb-api/
Gratisvarianten tillåter 1000 requests om dagen.
ID/Title endpointen ger oss det vi vill ha och en massa mera.

{  
   "Title":"Avengers: Endgame",
   "Year":"2019",
   "Rated":"N/A",
   "Released":"26 Apr 2019",
   "Runtime":"N/A",
   "Genre":"Action, Adventure, Fantasy, Sci-Fi",
   "Director":"Anthony Russo, Joe Russo",
   "Writer":"Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)",
   "Actors":"Bradley Cooper, Brie Larson, Chris Hemsworth, Chris Evans",
   "Plot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
   "Language":"English",
   "Country":"USA",
   "Awards":"N/A",
   "Poster":"https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
   "Ratings":[  

   ],
   "Metascore":"N/A",
   "imdbRating":"N/A",
   "imdbVotes":"N/A",
   "imdbID":"tt4154796",
   "Type":"movie",
   "DVD":"N/A",
   "BoxOffice":"N/A",
   "Production":"Marvel Studios",
   "Website":"N/A",
   "Response":"True"
}