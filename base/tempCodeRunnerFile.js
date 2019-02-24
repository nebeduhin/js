let money, time;

function start () {
    money = +prompt ("Enter your budget", "");
    time = prompt("Enter date in format YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("You shoud enter your budget", "");
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function choosExpenses () {
    for(i = 0; i < 3; i++) {
        let a = prompt ("Most important expenses title", ""),
            b = +prompt ("How match?", "");
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50 ) {
            console.log ("it's works!");
            appData.optionalExpenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
            
    }
    
}
choosExpenses ();


function chooseOptExpenses () {
    for(i = 0; i < 3; i++) {
        let a = prompt ("Your optional expenses?", ""),
            b = +prompt ("How match?", "");
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50 ) {
            console.log ("it's works!");
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
            
    }
    
}
chooseOptExpenses ();


// let i = 0;

// do {
//     let a = prompt ("Most important expenses title", ""),
//         b = +prompt ("How match?", "");
//         if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50 ) {
//             console.log ("it's works! - while loop");
//             appData.expenses[a] = b;
//         }
    
//     i++;
// } while ( i < 2);

// while (i < 2) {
//     let a = prompt ("Most important expenses title", ""),
//         b = +prompt ("How match?", "");
//         if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50 ) {
//             console.log ("it's works! - while loop");
//             appData.expenses[a] = b;
//         }
    
//     i++;
// }
function detectDayBudget (){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Budget per day " + appData.moneyPerDay);

}
detectDayBudget ()

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log ("too low");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("average");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Krasavez!");
    } else {
        console.log ("ERROR!");
    }

}
detectLevel();

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt ("How your saving?"),
            percend = +prompt ("What saving interest?");

        appData.monthIncome = (save/100/12*percend).toFixed();
        alert("Your income per month " + appData.monthIncome);
    }
}

checkSavings();