import Daemon from '../Daemon';

test('Атака 100 на вторую клетку', () => {
  const daemon = new Daemon();
  daemon.attack = 2;
  expect(daemon.attack).toBe(90);
});

test('Атака 100 на вторую клетку c дурманом', () => {
  const daemon = new Daemon();
  daemon.stoned = 2;
  expect(daemon.stoned).toBe(85);
});

test('урон меньше 0', () => {
  const daemon = new Daemon();
  daemon.attack = 13;
  expect(daemon.attack).toBe(0);
});

test('урон меньше 0', () => {
  const daemon = new Daemon();
  daemon.stoned = 13;
  expect(daemon.stoned).toBe(0);
});
