/*global QUnit*/

sap.ui.define([
	"comapplexus/fioritask/controller/Calculatorview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Calculatorview Controller");

	QUnit.test("I should test the Calculatorview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
