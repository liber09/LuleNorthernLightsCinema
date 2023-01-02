let seatPlan = document.querySelector("#seatPlanCanvas");

async function showSeats() {

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      let seat = document.createElement("div");
      seat.classList.add("seat");
      seatPlan.appendChild(seat);
      console.log(seat.top);
      console.log(seat.right);
      console.log(seat.bottom);
      console.log(seat.right);
    }
  }
}
  showSeats();