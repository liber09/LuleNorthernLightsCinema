window.onload = function(){
    const canvas = document.querySelector('#seatPlanCanvas');
    if (canvas.getContext) {
    var context = canvas.getContext('2d');
    //Seat columns
    for (let i = 0; i < 12; i++) {
      //Seat rows
      for (let j = 0; j < 6; j++) {
        context.fillRect(25+(i*60),100+(j*90),20,20) //Each seat
      }

      
    }
    
  }
}
