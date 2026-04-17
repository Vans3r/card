const { validateCreditCardNumber } = require('../src/components/validator');

test('валидный номер карты проходит проверку Луна', () => {
  expect(validateCreditCardNumber('4532015112830366')).toBe(true);
});

test('невалидный номер карты не проходит проверку Луна', () => {
  expect(validateCreditCardNumber('1234567890123456')).toBe(false);
});
