let mood = prompt(`Введіть який у вас настрій: щасливий, сумний, злюсь`);

switch (mood) {
  case "щасливий":
    alert(`😊`);
    break;
  case "сумний":
    alert(`😢`);
    break;
  case "злюсь":
    alert(`😠`);
    break;
  default:
    alert(`Ви не ввели свій настрій, повторіть ще раз!`);
    break;
}
