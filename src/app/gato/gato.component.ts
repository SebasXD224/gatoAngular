import { Component } from '@angular/core';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrl: './gato.component.css'
})
export class GatoComponent {
  turno = "X"
  ganador = ""
  mostrarGanador = this.ganador == "X" || this.ganador == "O"
  gato = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"]
  ]

  comprobarGanador = (turno:string)=>{
    //Comprobar Filas
    for(let i=0;i < this.gato.length;i++){
      let filaActual = this.gato[i]
      if (filaActual.every(value=>value === turno)){
        this.ganador = turno
        this.mostrarGanador = true
        return true
      }
    }

    //Comprobar Columnas
    for(let i=0;i < 3;i++){
      if (this.gato[0][i] == turno && this.gato[1][i] == turno && this.gato[2][i] == turno){
        this.ganador = turno
        this.mostrarGanador = true
        return true
      }
    }

    //Comprobar Diagonales
    if (this.gato[0][0] == turno && this.gato[1][1] == turno && this.gato[2][2] == turno){
      this.ganador = turno
      this.mostrarGanador = true
      return true
    }
    else if (this.gato[0][2] == turno && this.gato[1][1] == turno && this.gato[2][0] == turno){
      this.ganador = turno
      this.mostrarGanador = true
      return true
    }

    return false
  }

  //Funcion para colocar el simbolo de la X o O en la celda seleccionada
  colocarSimbolo = (celda:number)=>{
    for (let i=0;i < this.gato.length;i++){ //Iterar dentro de matriz (gato)
      for (let j=0;j < this.gato[i].length;j++){ //Iterar dentro de arrays dentro de la matriz (gato)
        if (this.gato[i][j] == String(celda)){ //Si la celda seleccionada esta en la iteracion actual entonces:
          this.gato[i][j] = this.turno //Valor de celda al turno actual
          this.comprobarGanador(this.turno)
          this.turno = this.turno == "X" ? "O":"X" //Cambiar de turno
          return
        }
      }
    }
    alert("Celda ocupada, elige otra")
  }

  reiniciarJuego = ()=>{
    this.turno = "X"
    this.mostrarGanador = false

    this.gato = [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"]
    ]
  }
}
