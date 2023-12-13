/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comapplexus/fioriworks/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
