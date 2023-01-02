window.onload = function(){
    const canvas = document.querySelector('#seatPlanCanvas');
    if (canvas.getContext) {
    var context = canvas.getContext('2d');
    for (let i = 0; i < 12; i++) {
      context.fillRect(25+(i*60),100,20,20)
    }
    
  }
}
