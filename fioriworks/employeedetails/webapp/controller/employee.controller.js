sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,models,) {
        "use strict";

        return Controller.extend("employeedetails.controller.employee", {
            onInit: function () {
                let oModel = models.load("../model/emp.json");
                this.getView().setModel(oModel);
                let oModel2 = models.load("../model/emp2.json");
                this.getView().setModel(oModel2, 'got');
                console.log(oModel);
            },
            onPress: function(oevent){

                if (oevent.getSource().getPressed()) {

                    this.getView().byId("id").bindValue("/employees/0/Employee Id");

                    this.getView().byId("name").bindValue("/employees/0/Employee Name");

                    this.getView().byId("salary").bindValue("/employees/0/Salary");

                    this.getView().byId("currency").bindValue("/employees/0/Currency");
                    this.getView().byId("smoker").bindValue("/employees/0/Smoker");
                    this.getView().byId("gender").bindValue("/employees/0/Gender");
                    this.getView().byId("maritalstatus").bindValue("/employees/0/Marital Status");
                    this.getView().byId("rating").bindValue("/employees/0/Rating");

                }

                else {

                    this.getView().byId("id").bindValue("got>/employees/1/Employee Id");

                    this.getView().byId("name").bindValue("got>/employees/1/Employee Name");

                    this.getView().byId("salary").bindValue("got>/employees/1/Salary");

                    this.getView().byId("currency").bindValue("got>/employees/1/Currency");
                    this.getView().byId("smoker").bindValue("got>/employees/0/Smoker");
                    this.getView().byId("gender").bindValue("got>/employees/0/Gender");
                    this.getView().byId("maritalstatus").bindValue("got>/employees/0/Marital Status");
                    this.getView().byId("rating").bindValue("got>/employees/0/Rating");
                }


            }
        
        });
    });
