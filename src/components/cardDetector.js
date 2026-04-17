// cardDetector.js
export function getCardType(cardNumber) {
  cardNumber = cardNumber.replace(/\s+/g, '');
  switch (true) {
    case cardNumber.startsWith('4'): return 'Visa';
    case ['51', '52', '53', '54', '55'].includes(cardNumber.substring(0, 2)): return 'MasterCard';
    case ['34', '37'].includes(cardNumber.substring(0, 2)): return 'American Express';
    case cardNumber.startsWith('35'): return 'JCB';
    case cardNumber.startsWith('6011'): return 'Discover';
    case cardNumber.startsWith('38'): return 'Diners Club';
    default: return 'Неизвестный тип';
  }
}
