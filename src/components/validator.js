
export function validateCreditCardNumber(cardNumber) {
  cardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');
  if (!/^\d+$/.test(cardNumber)) return false;
  if (cardNumber.length < 13 || cardNumber.length > 19) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return (sum % 10) === 0;
}
