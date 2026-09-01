import TennisGame from './tenis';

describe('Tennis Game', () => {
  it('debería imprimir "Love-Love" cuando ambos jugadores tienen 0 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(0, 0)).toEqual('Love-Love');
  });

  it('debería imprimir "15-Love" cuando el jugador 1 tiene 1 punto y el jugador 2 tiene 0 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(1, 0)).toEqual('15-Love');
  });
});

