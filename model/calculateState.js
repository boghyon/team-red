sap.ui.define([], function() {
    "use strict";
    
    // sorted progress
    const stateMap = {
      30: "Error",
      60: "Warning",
      100: "Success",
    };
    
    return function(hp, hpMax) {
      const absolute = parseInt(hp / hpMax * 100, 10);
      const key = Object.keys(stateMap).find(k => k > absolute - 1);
      return stateMap[key];
    };
  });