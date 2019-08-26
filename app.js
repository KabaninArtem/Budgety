// BUDGET CONTROLLER
const budgetController = (function () {
// some code
})();

// UI CONTROLLER
const UIController = (function () {
    const DOMclasses = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    };
// some code
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMclasses.inputType).value,
                description: document.querySelector(DOMclasses.inputDescription).value,
                value: document.querySelector(DOMclasses.inputValue).value,
            }
        },

        getDOMclasses: function () {
            return DOMclasses;
        }
    }

})();

// GLOBAL APP CONTROLLER
const controller = (function (budgetCtrl, UICtrl) {
    const setupEventListeners = function () {
        const DOM = UIController.getDOMclasses();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', () => {
            addItemCtrl();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                addItemCtrl();
            }
        })
    };
    const addItemCtrl = function () {
        // 1. Get the input data
        const input = UIController.getInput();
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };
    
    return {
        init: function () {
            console.log('test');
            setupEventListeners();
        }
    }
})(budgetController, UIController);

controller.init();
