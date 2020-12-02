sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/Sorter",
  ], function(Controller, Filter, Sorter) {
    "use strict";
  
    return Controller.extend("demo.controller.Master", {
        navToDetailOf: function(clickedItem) {
            const router = this.getOwnerComponent().getRouter();
            router.navTo("masterDetail", {
              pokeName: clickedItem.getBindingContext().getProperty("name"),
            });
        },

        onListUpdateFinished: function(event) {
            const listSize = event.getSource().getBinding("items").getLength();
            this.byId("pokeSize").setValue(listSize);
        },

        searchBy: function(searchQuery) {
            const listBinding = this.byId("masterList").getBinding("items");
            const filterObj = new Filter({
                path: "name",
                operator: "Contains",
                value1: searchQuery.trim(),
            });
            listBinding.filter(filterObj);
        },
        
        sortBy: function(sorterPath) {
            const listBinding = this.byId("masterList").getBinding("items");
            const filterObj = new Sorter({
                path: sorterPath,
                descending: false,
            });
            listBinding.sort(filterObj);
        },
    });
}); 