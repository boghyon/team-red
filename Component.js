sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
], function(UIComponent, Device) {
  "use strict";

  return UIComponent.extend("demo.Component", {
    metadata: {
      manifest: "json" 
    },

    init: function() {
      UIComponent.prototype.init.apply(this, arguments);
      this.getModel("device").setData(Device);
      this.getRouter().initialize();
    },

  });
});