const budgetController = (function () {
    let x = 23;

    const add = function (a) {
        return x + a;
    }

    return {
        publicTest: function (b) {
            return add(b);
        }
    }
})();

const UIController = (function () {

})();

const controller = (function (budgetCtrl, UICtrl) {
    const z = budgetCtrl.publicTest(10);
    return {
        anotherPublic: function () {
            console.log('z', z);
        }
    }
})(budgetController, UIController);
