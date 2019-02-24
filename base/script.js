let money = prompt ("Enter your budget", ""),
    time = prompt("Enter date in format YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let a1 = prompt ("Most important expenses title", ""),
    a2 = prompt ("How match?", ""),
    a3 = prompt ("Most important expenses title", ""),
    a4 = prompt ("How match?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert (appData.budget / 30);