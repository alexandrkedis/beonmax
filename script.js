let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
let secondQuestion = prompt("Во сколько обойдется?");
let thirdQuestion = prompt("Введите обязательную статью расходов в этом месяце");
let fourthQuestion = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [firstQuestion]: secondQuestion,
        [thirdQuestion]: fourthQuestion,
    },
    optionalExpenses:{},
    income:[],
    savings: false,
}

alert(appData.budget/30);
console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);