// BUDGET CONTROLLER
const budgetController = (function () {
    const Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
    };

    return {
        addItem: function (type, des, val) {
            // Create new id
            const ID = data.allItems[type].length ? data.allItems[type][data.allItems[type].length - 1].id + 1 : 0;
            const newItem = type === 'exp' ? new Expense(ID, des, val) : new Income(ID, des, val);

            data.allItems[type].push(newItem);
            return newItem;
        },
    };

})();

// UI CONTROLLER
const UIController = (function () {
    const DOMclasses = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    };

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
        const newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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
