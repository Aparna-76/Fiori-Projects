/*global QUnit*/

sap.ui.define([
	"employeedetails/controller/employee.controller"
], function (Controller) {
	"use strict";

	QUnit.module("employee Controller");

	QUnit.test("I should test the employee controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
