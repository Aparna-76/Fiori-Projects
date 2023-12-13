sap.ui.define(
    [
       "sap/ui/core/format/NumberFormat",
       "sap/ui/core/format/DateFormat"
    ],
    function(NumberFormat, DateFormat) {
      "use strict";
  
      return {
        myFormatter:function(_IDGenText2) {
            if(_IDGenText2){
                return _IDGenText2.toUpperCase();
            }
        },
        myFormatterCurrency:function(_IDGenText3,_IDGenText4){
            if(_IDGenText3){
                var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                    currencyCode: false}
                );
                oCurrencyFormat=oCurrencyFormat.format(_IDGenText3, _IDGenText4);
                return oCurrencyFormat;
            }
        }
        // myFormatterDate:function(_IDGenText3,_IDGenText4){
        //     if(_IDGenText3){
        //         var oCurrencyFormat = NumberFormat.getCurrencyInstance({
        //             currencyCode: false}
        //         );
        //         oCurrencyFormat=oCurrencyFormat.format(_IDGenText3, _IDGenText4);
        //         return oCurrencyFormat;
            // }
        //}
    }
});
   
  
  