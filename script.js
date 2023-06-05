let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
    let secondQuestion = +prompt("Во сколько обойдется?");

    if (typeof(firstQuestion) == "string" && typeof(firstQuestion) != null && typeof(secondQuestion) != null && firstQuestion != '' && secondQuestion != '') {
        console.log ("done");
        appData.expenses[firstQuestion] = secondQuestion;
    } else {
        console.log("wrong input. --i");
        i -= 1;
    }

}

dailyBudget = appData.budget/30;

if (dailyBudget < 100) {
    alert("Ваш уровень дохода минимальный. Составляет в день " + dailyBudget);
} else if (dailyBudget > 100 && dailyBudget < 2000) {
    alert("Ваш уровень дохода средний. Составляет в день " + dailyBudget);

} else if (dailyBudget >= 2000) {
    alert("Ваш уровень дохода максимальный. Составляет в день " + dailyBudget);
} else {
    alert("Что-то пошло не так!");
}
console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);