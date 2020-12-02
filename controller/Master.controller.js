sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/Sorter",
], function (Controller, Filter, Sorter) {
	"use strict";

	return Controller.extend("demo.controller.Master", {
		navToDetailOf: async function (clickedItem) {
			const rootView = await this.getOwnerComponent().getRootControl().loaded();
			const container = rootView.byId("flexibleColumnLayout");
			const clickedContext = clickedItem.getBindingContext();
			const detailPage = sap.ui.getCore().byId(container.getInitialMidColumnPage());
			detailPage.bindElement(clickedContext.getPath());
			container.setLayout("TwoColumnsMidExpanded");
		},

		onListUpdateFinished: function (event) {
			const listSize = event.getSource().getBinding("items").getLength();
			this.byId("pokeSize").setValue(listSize);
		},

		searchBy: function (searchQuery) {
			const listBinding = this.byId("masterList").getBinding("items");
			const filterObj = new Filter({
				path: "name",
				operator: "Contains",
				value1: searchQuery.trim(),
			});
			listBinding.filter(filterObj);
		},

		sortBy: function (sorterPath) {
			const listBinding = this.byId("masterList").getBinding("items");
			const filterObj = new Sorter({
				path: sorterPath,
				descending: this._isDescending = !this._isDescending,
			});
			listBinding.sort(filterObj);
		},
	});
}); 