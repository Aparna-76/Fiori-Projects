sap.ui.define([
    "sap/ui/core/mvc/Controller",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("tablecontrol.controller.detail", {
          
            onInit: function () {
                this.router = this.getOwnerComponent().getRouter();
                this.router.getRoute("Route2").attachPatternMatched(this.herculis, this);
            },
            herculis : function(oEvent){
                var fruitId = oEvent.getParameter("arguments").index;
                var sPath = "/fruit/"+fruitId;
                this.getView().bindElement(sPath);
              },
            //   onSelect: function(oEvent) {
            //     var oRow = oEvent.getParameter('rowContext');
            //     var sPath = oRow.getPath();
            //     var oSimpleForm = this.getView().byId('form');
            //     oSimpleForm.bindElement({
            //     path: sPath
            //     });
            // },

              onFilterSelect: function (oEvent) {

                var source = oEvent.getSource();
        
                var selectedKey = source.mProperties.selectedKey;
        
                console.log(selectedKey);
    
              }
         
        });
    });
