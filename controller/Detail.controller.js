sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";

	return Controller.extend("demo.controller.Detail", {
		onInit: function () {
			const router = this.getOwnerComponent().getRouter();
			const route = router.getRoute("masterDetail");
			route.attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function (event) {
			const { pokeName } = event.getParameter("arguments");
			this.getView().bindElement(`/trainer/partyMembers/${pokeName.toLowerCase()}`);
		},
	});
});