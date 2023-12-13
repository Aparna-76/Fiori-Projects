sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("tablecontrol.controller.BaseController", {
        onInit() {
        },
        onDisplay : function(){
            alert("Successfully Deleted");
        }
      });
    }
  );
  