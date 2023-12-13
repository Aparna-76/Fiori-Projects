sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,models,formatter) {
        "use strict";

        return Controller.extend("tablecontrol.controller.table", {
            formatter: formatter,
            onInit: function () {
                let oModel = models.load();
                this.getView().setModel(oModel);
                console.log(oModel);
            },
            onSelect: function(oEvent) {
                var oRow = oEvent.getParameter('rowContext');
                var sPath = oRow.getPath();
                var oSimpleForm = this.getView().byId('form');
                oSimpleForm.bindElement({
                path: sPath
                });
            }
        });
    });
