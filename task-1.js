let numTo = Number(prompt(`Введіть число, до якого буде рахуватись сума:`));
let sum = 0;

for (let i = 1; i <= numTo; i += 1) {
  sum += i;
}

alert(`Сумма: ${sum}`);
