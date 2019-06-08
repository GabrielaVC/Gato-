
let turno = "X";
let casillas = document.querySelectorAll('.row section');
casillas.forEach(casilla => {
  casilla.addEventListener('click', function(){
    if(turno === "X"){
      this.querySelector('.cross').style.display = 'block';
      turno = "O";
      document.querySelector('h2').innerHTML="Usuario 2";
    }
    else if(turno === "O"){
      this.querySelector('.circle').style.display = 'block';
      turno = "X";
      document.querySelector('h2').innerHTML="Usuario 1";
    }
  })
})
