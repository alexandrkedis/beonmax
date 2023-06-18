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
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ваш дневной доход составляет " + appData.moneyPerDay);
    },
    chooseExpenses: function() {
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
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            alert("Ваш уровень дохода минимальный. Составляет в день " + appData.moneyPerDay());
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert("Ваш уровень дохода средний. Составляет в день " + appData.moneyPerDay);
    
        } else if (appData.moneyPerDay >= 2000) {
            alert("Ваш уровень дохода максимальный. Составляет в день " + sappData.moneyPerDay);
        } else {
            alert("Что-то пошло не так!");
        }
    },

    checkSavings: function() {
        if (appData.savings){
            let save = +prompt("Какова сумма накоплений?");
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
    
            alert("Доход в месяц с депозита " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function() {

        for(let i=0; i < 3; i++){
            appData.optionalExpenses[i + 1] = prompt("Статья необязательных расходов?");
        }
    },

    chooseIncome: function() {
        let items, additionalItems;
        while(typeof items != "string" || items == "" || items == null){
            items = prompt("Какие у вас есть источники дополнительного дохода?","");
        }
        this.income = items.split(",");
        while(typeof additionalItems != "string" || additionalItems == "" || additionalItems == null){
            additionalItems = prompt("Что-то еще?", "");
        }
        this.income.push(additionalItems);
        this.income.sort();

        this.income.forEach(function(elem, index){
            alert("Способы доп. заработка " + (index + 1) + ": " + elem);
        });
        console.log("Наша программа включает в себя данные:");
        for (key in appData){
            console.log(key + ": " + appData[key]);
        }

}
};