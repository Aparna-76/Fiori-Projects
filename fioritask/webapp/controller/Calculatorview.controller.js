sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.fioritask.controller.Calculatorview", {
            onInit: function () {
                this._currentInput = "";
                this._currentOperator = "";

            },
            onPress: function(event) {
                var currentInput = this.getView().byId("display").getValue();
                var input = event.getSource().getText();
                this.getView().byId("display").setValue(currentInput + input);
                },
                
                onOperatorPress: function(event) {
                this._currentOperator = event.getSource().getText();
                this._currentInput = this.getView().byId("display").getValue();
                this.getView().byId("display").setValue("");
                },
                onClear: function() {
                    this.getView().byId("display").setValue("");
                    this._currentInput = "";
                    this._currentOperator = "";
                    },
                    
                onCalculate: function() {
                    var result = this.calculateResult();
                    this.getView().byId("display").setValue(result);
                    this._currentInput = result;
                    this._currentOperator = "";
                    },
                    

                    calculateResult: function() {
                        var num1 = parseFloat(this._currentInput);
                        var num2 = parseFloat(this.getView().byId("display").getValue());
                        var operator = this._currentOperator;
                        
                        switch (operator) {
                        case "+":
                        return num1 + num2;
                        case "-":
                        return num1 - num2;
                        case "*":
                        return num1 * num2;
                        case "/":
                        return num1 / num2;
                        default:
                        return num2;
                        }
                        }
                    });
                    });
                   
  
