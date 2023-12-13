sap.ui.define(
    [
       "tablecontrol/controller/BaseController",
	      "sap/ui/model/Filter",
       	"sap/ui/model/FilterOperator"
    ],
    function(BaseController,Filter,FilterOperator) {
      "use strict";
  
      return BaseController.extend("tablecontrol.controller.list", {
        onInit() {
          this.router = this.getOwnerComponent().getRouter();
        },
        onFilterInvoices : function (oEvent) {
    
          // build filter array
          var aFilter = [];
          var sQuery = oEvent.getSource().getValue();
          if (sQuery) {
            let filter_name = new Filter("name", FilterOperator.Contains, sQuery);
            let filter_taste = new Filter("taste", FilterOperator.Contains, sQuery);
            let filter_price = new Filter("price", FilterOperator.Contains, sQuery)
            aFilter.push(filter_name);
            aFilter.push(filter_price);
            aFilter.push(filter_taste);
          }
          var masterfilter = new Filter({
            filters : aFilter,
            and : false
           })
          var oList = this.byId("_IDGenList1");
          var oBinding = oList.getBinding("items");
          oBinding.filter(masterfilter);
       },
       
      onDelete : function(){

        var oList = this.byId("_IDGenList1");

        var items =oList.getSelectedItems();

        for(var i = 0;i<items.length;i++)

        {

            oList.removeItem(items[i]);
          
        }
        this.onDisplay();

   

    },
    onNavPress : function(oEvent) {
      let sPath = oEvent.oSource.oBindingContexts.undefined.sPath;
      let index = sPath.split("/")[2];
       this.router.navTo("Route2",{index : index});
    },
    
    // onFruitSelect : function(oEvent){
    //   var oSelecteditem = oEvent.getParameter("listItem");
    //   var sPath = oSelecteditem.getBindingContextPath();
    //   console.log(sPath);
    //   this.Router.navTo(Route2);
    // }
         
      });
    }
  );
  