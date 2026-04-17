// index.js
import { validateCreditCardNumber } from './components/validator.js';
import { getCardType } from './components/cardDetector.js';

document.addEventListener('DOMContentLoaded', () => {
  const cardInput = document.getElementById('card-number');
  const validateBtn = document.getElementById('validate-btn');
  const resultDiv = document.getElementById('result');

  // Обработчик клика по кнопке
  validateBtn.addEventListener('click', () => {
    const cardNumber = cardInput.value;

    if (!cardNumber.trim()) {
      resultDiv.textContent = 'Пожалуйста, введите номер карты';
      resultDiv.style.color = 'red';
      return;
    }

    const isValid = validateCreditCardNumber(cardNumber);
    const cardType = getCardType(cardNumber);

    if (isValid) {
      resultDiv.textContent = `Карта валидна! Тип: ${cardType}`;
      resultDiv.style.color = 'green';
    } else {
      resultDiv.textContent = 'Номер карты невалиден';
      resultDiv.style.color = 'red';
    }
  });
});
