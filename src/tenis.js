
class TennisGame {
  obtenerScore(ptj1, ptj2) {
    let j1 = "Love";
    let j2 = "Love";
    if (ptj1 === 4 && ptj2 === 3) {
      return "Advantaje for Player 1";
    }else if (ptj1 === 3 && ptj2 === 4) {
      return "Advantaje for Player 2";
    }else if (ptj1 === 3 && ptj2 === 3) {
      return "deuce";
    }else if (ptj1 === 4) {
      return "Game for Player 1";
    }else if (ptj2 === 4) {
      return "Game for Player 2";
    }
    if (ptj1 === 1) {
      j1 = "15";
    }
    if (ptj1 === 2) {
      j1 = "30";
    }
    if (ptj1 === 3) {
      j1 = "40";
    }
    if (ptj2 === 1) {
      j2 = "15";
    }
    if (ptj2 === 2) {
      j2 = "30";
    }
    if (ptj2 === 3) {
      j2 = "40";
    }
    if(ptj1 > ptj2 && ptj1 >= 4 && ptj1 - ptj2 >= 2) {
      return "Game for Player 1";
    } 
    if(ptj2 > ptj1 && ptj2 >= 4 && ptj2 - ptj1 >= 2) {
      return "Game for Player 2";
    } 
    return j1 + "-" + j2;
  }
}

export default TennisGame;