sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";

	return Controller.extend("demo.controller.Master", {
		navToDetail: function () {
			const rootView = this.getOwnerComponent().getRootControl();
			const container = rootView.byId("flexibleColumnLayout");
			container.setLayout("TwoColumnsMidExpanded");
		},
	});
});