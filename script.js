const get_credit = document.getElementById("get_credit");
const exchange = document.getElementById("exchange");
const fullname_p = document.getElementById("fullname_p");
const credit_p = document.getElementById("credit_p");
const month_p = document.getElementById("month_p");
const total_p = document.getElementById("total_p");
const monthly_pay_p = document.getElementById("monthly_pay_p");
const credit_container = document.querySelector(".credit-container");
const main_container = document.querySelector(".main-container");
const home = document.getElementById("home");
const exchange_money = document.getElementById("exchange_money");
const exchange_container = document.querySelector(".exchange-container");

credit_container.style.display = "none";
home.style.display = "none";
exchange_container.style.display = "none";

let fullname1 = "Humay Mirsiyabova";
let credit1 = "10000";
let month1 = "12";
let total1 = (credit1 * 1.33).toFixed(2);
let monthly_pay1 = (total1 / month1).toFixed(2);

get_credit.onclick = () => {
  if (confirm("Do you want to get credit?")) {
    let fullname = prompt("What is your fullname?");
    let credit = prompt("How much money do you want?");
    let month = prompt("How many months?");

    fullname_p.innerText = "Fullname: " + fullname;
    credit_p.innerText = "Credit: " + credit + "AZN";
    month_p.innerText = "Month: " + month;
    total_p.innerText = "Total: " + credit * 1.33 + "AZN";
    monthly_pay_p.innerText = "Monthly pay: " + monthly_pay1 + "AZN";

    credit_container.style.display = "block";
    main_container.style.display = "none";
    home.style.display = "block";

    home.onclick = () => {
      document.location = "index.html";
    };
  }
};

exchange.onclick = () => {
  let exchange = prompt("How much AZN do you want to exchange?");

  exchange_money.innerText =
    "Exchanged money: " + (exchange / 1.7).toFixed(2) + "$";

  exchange_container.style.display = "block";
  credit_container.style.display = "none";
  main_container.style.display = "none";
  home.style.display = "block";

  home.onclick = () => {
    document.location = "index.html";
  };
};
