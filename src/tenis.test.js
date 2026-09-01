import TennisGame from './tenis';

describe('Tennis Game', () => {
  it('debería imprimir "Love-Love" cuando ambos jugadores tienen 0 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore()).toEqual('Love-Love');
  });
});

