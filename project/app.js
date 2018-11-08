const base = {
    income: [],
    expenses: []
};
let inputPrice = (document.getElementsByClassName('add__value')[0]);
let inputDescription = (document.getElementsByClassName('add__description')[0]);
let btn = (document.getElementsByClassName('add__btn')[0]);
let budgetIncome = (document.getElementsByClassName('budget__income--value')[0]);
let budgetExpence = (document.getElementsByClassName('budget__expenses--value')[0]);
let yourBudget = (document.getElementsByClassName('budget__value')[0]);
let incomeList = (document.getElementsByClassName('income__list')[0]);
let expenceList = (document.getElementsByClassName('expenses__list')[0]);
let incomeVal = (document.getElementsByClassName('income')[0]);
let expenceVal  = (document.getElementsByClassName('expenses')[0]);
function deleteItemIncome(id){
    for(let i = 0; i < base.income.length; i++){
        if (base.income[i].id === id){
            yourBudget.textContent = parseFloat(yourBudget.textContent) - base.income[i].price;
            yourBudget.textContent = parseFloat(yourBudget.textContent).toFixed(2);
            budgetIncome.textContent = parseFloat(budgetIncome.textContent) - base.income[i].price;
            budgetIncome.textContent = parseFloat(budgetIncome.textContent).toFixed(2);
            incomeBudgetSum -= base.income[i].price;;
            base.income.splice(i, 1);
            break;
        } 
    }
}
function deleteItemExpence(id){
    for(let i = 0; i < base.expenses.length; i++){
        if (base.expenses[i].id === id){
            yourBudget.textContent = parseFloat(yourBudget.textContent) + base.expenses[i].price;
            yourBudget.textContent = parseFloat(yourBudget.textContent).toFixed(2);
            budgetExpence.textContent = parseFloat(budgetExpence.textContent) - base.expenses[i].price;
            budgetExpence.textContent = parseFloat(budgetExpence.textContent).toFixed(2);
            expencesBudgetSum -= base.expenses[i].price;
            base.expenses.splice(i, 1);
            break;
        } 
    }
}
function fun1(){
    let select = (document.getElementsByClassName('add__type')[0].selectedIndex);
    let option = (document.getElementsByClassName('add__type')[0].options);
    let selected = option[select].text;
    return selected;
}
const generateId = () => {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let newId = '';
    for(let i = 0; i <= 10; i++){
        item = Math.floor(Math.random() * words.length);
        newId += words[item];
    }
    return newId;
}
let counterIncome = 0;
let counterExpence = 0;
let incomeBudgetSum = 0;
let expencesBudgetSum = 0;
btn.addEventListener('click', (e) => {
    if (fun1() === '+'){
    const newIncome = {description: inputDescription.value, price: parseFloat(inputPrice.value), id: generateId()};
    base.income.push(newIncome);
    if (counterIncome === 0){
    budgetIncome.textContent = base.income[counterIncome].price;
        budgetIncome.textContent =  parseFloat(budgetIncome.textContent).toFixed(2);
    incomeBudgetSum += base.income[counterIncome].price;
    } else {
        incomeBudgetSum += base.income[counterIncome].price;
        budgetIncome.textContent = incomeBudgetSum;
        budgetIncome.textContent =  parseFloat(budgetIncome.textContent).toFixed(2);
    }
    yourBudget.textContent = parseFloat(yourBudget.textContent) +  base.income[counterIncome].price;
        yourBudget.textContent = parseFloat(yourBudget.textContent).toFixed(2);
         let inc = `<div class="item clearfix" id="${base.income[counterIncome].id}">
                            <div class="item__description">${base.income[counterIncome].description}</div>
                            <div class="right clearfix">
                                <div class="item__value">+${parseFloat(base.income[counterIncome].price).toFixed(2)}</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline delete-icon"></i></button>
                                </div>
                            </div>
                        </div>
                        `
         incomeList.insertAdjacentHTML('beforebegin',inc); 
    counterIncome += 1;
    } else {
    const newExpence = {description: inputDescription.value, price: parseFloat(inputPrice.value), id: generateId()};
    base.expenses.push(newExpence);
    if (counterExpence === 0){
    budgetExpence.textContent = base.expenses[counterExpence].price;
        budgetExpence.textContent = parseFloat(budgetExpence.textContent).toFixed(2);
    expencesBudgetSum += base.expenses[counterExpence].price;
    } else {
        expencesBudgetSum += base.expenses[counterExpence].price;
        budgetExpence.textContent = expencesBudgetSum;
        budgetExpence.textContent = parseFloat(budgetExpence.textContent).toFixed(2);
    }
    yourBudget.textContent = parseFloat(yourBudget.textContent) -  base.expenses[counterExpence].price;
         yourBudget.textContent = parseFloat(yourBudget.textContent).toFixed(2);
         let exp = ` <div class="item clearfix" id="${base.expenses[counterExpence].id}">
                            <div class="item__description">${base.expenses[counterExpence].description}</div>
                            <div class="right clearfix">
                                <div class="item__value">-${parseFloat(base.expenses[counterExpence].price).toFixed(2)}</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline delete-icon"></i></button>
                                </div>
                            </div>
                        </div>
                        `
         expenceList.insertAdjacentHTML('beforebegin',exp); 
    counterExpence += 1;
    }
    inputDescription.value = '';
    inputPrice.value = '';
});
incomeVal.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-icon')){
       let elementId = e.target.closest('.item');
       const id = elementId.id;
       deleteItemIncome(id);
       elementId.remove();
       counterIncome -= 1;
   }
});
expenceVal.addEventListener('click', (e) => {
   if (e.target.classList.contains('delete-icon')){
       let elementId = e.target.closest('.item');
       const id = elementId.id;
       deleteItemExpence(id);
       elementId.remove();
       counterExpence -= 1;
   }
});