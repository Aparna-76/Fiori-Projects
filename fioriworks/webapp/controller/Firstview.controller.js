sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.fioriworks.controller.Firstview", {
            onInit: function () {

            },
            onPress: function () {
                this.getView().byId("productInput1").setValue(Math.floor(Math.random()*100));
                this.getView().byId("productInput2").setValue(Math.random());
                this.getView().byId("productInput3").setValue(8);
                this.getView().byId("productInput4").setValue(Math.random());
            }
        });
    });
