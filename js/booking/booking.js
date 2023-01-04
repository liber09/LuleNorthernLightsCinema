let seatPlan = document.querySelector("#seatPlanCanvas");
let seats;
let li;

async function showSeats() {

  let res = await fetch("../src/seats.json");
  let data = await res.json();

  li = data.seats;
  li.forEach(function () {
  let seat = document.createElement("div");
    seat.classList.add("seat");
    seatPlan.appendChild(seat);
  })
}
  showSeats();