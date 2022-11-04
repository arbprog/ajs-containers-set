import Character from '../character';

test('Новый персонаж', () => {
  const char = new Character('Имя', 100, 1);
  expect(char).toBeDefined();
  expect(char.health).toEqual(100);
  expect(char.level).toEqual(1);
});

test.each([Number()])(
  'Если имя персонажа не строка',
  (num) => {
    const textErr = 'Имя персонажа должно быть строкой';
    expect(() => new Character(num)).toThrowError(new Error(textErr));
  },
);

test.each([String()])(
  'Если имя персонажа меньше 2 или больше 10 символов',
  (str) => {
    const textErr = 'Имя меньше 2 или больше 10 симоволов';
    expect(() => new Character(str)).toThrowError(new Error(textErr));
  },
);
