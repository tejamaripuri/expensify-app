export default (expenses = []) => {
    if(expenses.length === 0){
        return 0;
    } else {
        return expenses.reduce(
            (totalExpense, currentExpense) => totalExpense + currentExpense.amount, 0
        );
    }
};