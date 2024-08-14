const exchangeRates = {
  USD: { EUR: 0.91, GBP: 0.77, JPY: 144.96, AUD: 1.55 },
  EUR: { USD: 1.10, GBP: 0.85, JPY: 159.52, AUD: 1.71 },
  GBP: { USD: 1.30, EUR: 1.18, JPY: 187.11, AUD: 2.01 },
  JPY: { USD: 0.007, EUR: 0.0063, GBP: 0.0053, AUD: 0.0107 },
  AUD: { USD: 0.65, EUR: 0.58, GBP: 0.50, JPY: 93.52 }
};

document.getElementById('convertBtn').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  
  if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = amount * rate;
  
  document.getElementById('result').value = `${convertedAmount.toFixed(2)} ${toCurrency}`;
});