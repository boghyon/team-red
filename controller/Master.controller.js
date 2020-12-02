sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";

	return Controller.extend("demo.controller.Master", {
		navToDetailOf: async function (clickedItem) {
			const rootView = await this.getOwnerComponent().getRootControl().loaded();
			const container = rootView.byId("flexibleColumnLayout");
			container.setLayout("TwoColumnsMidExpanded");
		},
	});
});