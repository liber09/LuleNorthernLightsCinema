import { repAncs, salAncs, specAncs, liveAncs, barBistAncs } from "./anchors.js"

const salons = document.querySelector('#salons');
const specials = document.querySelector('#specials');
const liveOnCinema = document.querySelector('#liveOnCinema');
const barAndBistro = document.querySelector('#barAndBistro');

salons.appendChild(appendDropdown(salAncs));

function appendDropdown(arr) {
    const dropDown = document.createElement('div');
    dropDown.className = "secNav-dropdown";

    for (let i = 0; i < arr.length; i++) {
        const a = document.createElement('a');
        a.innerHTML = arr[i][0];
        a.setAttribute('href', arr[i][1]);
        dropDown.append(a);
    }
    return dropDown;
}




// <nav class="secNav">
// <menu class="secNav-menu">
// <li class="secNav-menu-item">
//   <button onclick="myFunction()" class="dropBtn" id="myDropdown">Repertoar</button>
//   <div class="secNav-dropdown">
//     <a href="#">Link 1</a>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div>
// </li>
// <li class="secNav-menu-item"><button class="dropBtn" id="salons">Salonger</button></li>
// <li class="secNav-menu-item"><button class="dropBtn" id="specials">Specialvisningar</button></li>
// <li class="secNav-menu-item"><button class="dropBtn" id="liveOnCinema">Live på bio</button></li>
// <li class="secNav-menu-item"><button class="dropBtn" id="barAndBistro">Bar & Bistro</button></li>
// </menu>
// </nav>