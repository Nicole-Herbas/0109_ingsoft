
class TennisGame {
  obtenerScore(ptj1, ptj2) {
    let j1 = "Love";
    let j2 = "Love";

    if (ptj1 === 1) {
      j1 = "15";
    }
    if (ptj1 === 2) {
      j1 = "30";
    }
    if (ptj1 === 3) {
      j1 = "40";
    }
    if (ptj1 === 4) {
      return "Game for Player 1";
    }

    return j1 + "-" + j2;
  }
}

export default TennisGame;