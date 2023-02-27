let deliveryСountry = prompt(
  `Вкажіть країну, до якої ви хочете отримати посилку:`
);
let countryLowerCase = deliveryСountry.toLowerCase();

switch (countryLowerCase) {
  case "китай":
    alert(`Доставка в Китай буде коштувати 100 кредитів`);
    break;
  case "чилі":
    alert(`Доставка в Чилі буде коштувати 250 кредитів`);
    break;
  case "австралія":
    alert(`Доставка в Австралію буде коштувати 170 кредитів`);
    break;
  case "індія":
    alert(`Доставка в Індію буде коштувати 90 кредитів`);
    break;
  case "ямайка":
    alert(`Доставка в Ямайку буде коштувати 120 кредитів`);
    break;
  default:
    alert(`В вашу країну ще немає доставки!`);
    break;
}
