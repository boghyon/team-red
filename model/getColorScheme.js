sap.ui.define([], function () {
	"use strict";

	const colorSchemeMap = {
		Fire: 3, // red
		Water: 5, // blue
		Psychic: 4, // purple
		Electric: 1, // yellow
		Normal: 9, // lame
		Grass: 8, // green
		Flying: 6, // sky
		Ice: 7 // snowy
	};

	return function (type) {
		return colorSchemeMap[type];
	};
});
