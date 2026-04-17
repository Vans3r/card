const { getCardType } = require('../src/components/cardDetector');

test('определяет Visa', () => {
  expect(getCardType('4111111111111111')).toBe('Visa');
});

test('определяет Мир', () => {
  expect(getCardType('6011123456789012')).toBe('Discover');
});
