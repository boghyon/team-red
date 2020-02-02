sap.ui.define([], function() {
    "use strict";
    
    const conditionMap = {
      "PAR": "Warning",
      "BRN": "Error",
      "FZR": "Information",
      "SLP": "None",
    };
    
    return function(condition) {
      return conditionMap[condition];
    };
  })