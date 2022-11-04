import Team from '../game';
import Character from '../character';

test('Создание команды', () => {
  const char = new Character('Bowman');
  const team = new Team();
  team.add(char);

  const expected = new Set();
  expected.add(char);

  expect(team.members).toEqual(expected);
});

test('Добавление персонажа повторно', () => {
  const char = new Character('Bowman');
  const team = new Team();
  team.add(char);

  expect(() => team.add(char)).toThrowError(new Error(`Персонаж ${char.name} уже есть в команде`));
});

test('Добавление нескольких персонажей в команду', () => {
  const char1 = new Character('Bowman');
  const char2 = new Character('Knight');
  const char3 = new Character('Undead');

  const team = new Team();
  team.addAll(char1, char2, char3);

  const expected = new Set();
  expected.add(char1);
  expected.add(char2);
  expected.add(char3);

  expect(team.members).toEqual(expected);
});

test('Возвращение массива', () => {
  const characterOne = new Character('Bowman');
  const characterTwo = new Character('Knight');
  const characterThree = new Character('Undead');

  const team = new Team();
  team.addAll(characterOne, characterTwo, characterThree);

  const expected = [
    { health: 100, level: 1, name: 'Bowman' },
    { health: 100, level: 1, name: 'Knight' },
    { health: 100, level: 1, name: 'Undead' },
  ];

  expect(team.toArray()).toEqual(expected);
});
