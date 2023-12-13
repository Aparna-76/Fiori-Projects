sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],  
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,models) {
        "use strict";

        return Controller.extend("simpleform.controller.form", {
            onInit: function () {
                let oModel = models.load();
                this.getView().setModel(oModel);
                console.log(oModel);
            },
            
            onPress: function(oevent){

                if (oevent.getSource().getPressed()) {

                    this.getView().byId("name").bindValue("/JSONModel/0/EmployeeName");

                    this.getView().byId("age").bindValue("/JSONModel/0/Age");

                    this.getView().byId("country").bindValue("/JSONModel/0/Country");

                }

                else {

                    this.getView().byId("name").bindValue("/JSONModel/1/EmployeeName");

                    this.getView().byId("age").bindValue("/JSONModel/1/Age");

                    this.getView().byId("country").bindValue("/JSONModel/1/Country");
                }


            }
        
    
            });
    
        });

                