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

  it('debería imprimir "30-Love" cuando el jugador 1 tiene 2 puntos y el jugador 2 tiene 0 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(2, 0)).toEqual('30-Love');
  });

  it('debería imprimir "40-Love" cuando el jugador 1 tiene 3 puntos y el jugador 2 tiene 0 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(3, 0)).toEqual('40-Love');
  });

  it('debería imprimir "Game for Player 1" cuando el jugador 1 tiene 4 puntos y el jugador 2 tiene 0 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(4, 0)).toEqual('Game for Player 1');
  });

  it('debería imprimir "Love-15" cuando el jugador 1 tiene 0 puntos y el jugador 2 tiene 1 punto', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(0, 1)).toEqual('Love-15');
  });

  it('debería imprimir "Love-30" cuando el jugador 1 tiene 0 puntos y el jugador 2 tiene 2 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(0, 2)).toEqual('Love-30');
  });

  it('debería imprimir "Love-40" cuando el jugador 1 tiene 0 puntos y el jugador 2 tiene 3 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(0, 3)).toEqual('Love-40');
  });

  it('debería imprimir "Game for Player 2" cuando el jugador 1 tiene 0 puntos y el jugador 2 tiene 4 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(0, 4)).toEqual('Game for Player 2');
  });

  it('debería imprimir "15-15" cuando el jugador 1 tiene 1 punto y el jugador 2 tiene 1 punto', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(1, 1)).toEqual('15-15');
  });
    
  it('debería imprimir "15-15" cuando el jugador 1 tiene 1 punto y el jugador 2 tiene 1 punto', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(1, 1)).toEqual('15-15');
  });

  it('debería imprimir "deuce" cuando el jugador 1 tiene 3 puntos y el jugador 2 tiene 3 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(3, 3)).toEqual('deuce');
  });
  it('debería imprimir "Advantaje for Player 1" cuando el jugador 1 tiene 4 puntos y el jugador 2 tiene 3 puntos', () => {
    let tennisGame = new TennisGame();
    expect(tennisGame.obtenerScore(4, 3)).toEqual('Advantaje for Player 1');
  });

});
