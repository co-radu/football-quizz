import { Player } from './player';

describe('Player', () => {
  it('should create an instance', () => {
    expect(new Player(
      2,
      "Olivier",
      "Giroud",
      [
        "Olivier",
        "Giroud",
        "Olivier Giroud"
      ],
      "http://olivier.giroud.com"
    )).toBeTruthy();
  });
});
