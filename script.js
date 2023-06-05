let money, time;

function start() {

    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: true,
};

function chooseExpenses() {
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
}
chooseExpenses();

detectDayBudget = () => appData.budget/30;

function detectLevel(sum) {
    if (sum < 100) {
        alert("Ваш уровень дохода минимальный. Составляет в день " + sum);
    } else if (sum > 100 && sum < 2000) {
        alert("Ваш уровень дохода средний. Составляет в день " + sum);

    } else if (sum >= 2000) {
        alert("Ваш уровень дохода максимальный. Составляет в день " + sum);
    } else {
        alert("Что-то пошло не так!");
    }
}
detectLevel(detectDayBudget());

function checkSavings() {
    if (appData.savings){
        let save = +prompt("Какова сумма накоплений?");
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;

        alert("Доход в месяц с депозита " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    
    for(let i=0; i < 3; i++){
        appData.optionalExpenses[i + 1] = prompt("Статья необязательных расходов?");
    }
}

chooseOptExpenses();