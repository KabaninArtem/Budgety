// BUDGET CONTROLLER
const budgetController = (function () {
// some code
})();

// UI CONTROLLER
const UIController = (function () {
// some code

})();

// GLOBAL APP CONTROLLER
const controller = (function (budgetCtrl, UICtrl) {
    const addItemCtrl = function () {
        // 1. Get the input data
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };

    document.querySelector('.add__btn').addEventListener('click', () => {
        addItemCtrl();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            addItemCtrl();
        }
    })
})(budgetController, UIController);
