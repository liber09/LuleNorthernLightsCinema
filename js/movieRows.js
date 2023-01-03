const ul = document.getElementById("ul");

async function movieRows() {

    const res = await fetch("../src/movies.json");
    const data = await res.json();
    
    
    data.movies.forEach(element => { 
        
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = element.posterImageUrl;
        
        const title = document.createElement("h2");
        title.innerHTML = element.title;

        const tickets = document.createElement("a");
        tickets.innerText = "Biljetter";
        tickets.href = "#";

        const moreInfo = document.createElement("a"); 
        moreInfo.innerText = "Mer info";
        moreInfo.href = "#";

        li.append(img, title, tickets, moreInfo);
        
        ul.appendChild(li);
        
    });
        
}

movieRows();

