
class TennisGame {
  obtenerScore(ptj1, ptj2) {
    let j1 = "Love";
    let j2 = "Love";

    if (ptj1 === 1) {
      j1 = "15";
    }

    return j1 + "-" + j2;
  }
}

export default TennisGame;