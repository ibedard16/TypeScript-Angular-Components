/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/sinon/sinon.d.ts' />
/// <reference path='../../../typings/chaiAssertions.d.ts' />

'use strict';

import { services } from 'typescript-angular-utilities';
import test = services.test;
import __parentChild = services.parentChildBehavior;

import {
	moduleName,
	controllerName,
	TypeaheadListController,
	ITypeaheadListBehavior,
} from './typeaheadList';

import * as angular from 'angular';
import 'angular-mocks';

import * as _ from 'lodash';

interface ITestObject {
	id: number;
	prop?: number;
}

describe('TypeaheadListController', () => {
	let scope: angular.IScope;
	let typeaheadList: TypeaheadListController;
	let $q: angular.IQService;
	let parentChild: __parentChild.IParentChildBehaviorService;
	let items: ITestObject[];

	beforeEach(() => {
		angular.mock.module(moduleName);

		items = [
			{ id: 1, prop: 2 },
			{ id: 2, prop: 5 },
			{ id: 3, prop: 3 },
			{ id: 4, prop: 7 },
			{ id: 5, prop: 4 },
		];

		let services: any = test.angularFixture.inject('$q', __parentChild.serviceName);
		$q = services.$q;
		parentChild = services[__parentChild.serviceName];
	});

	describe('loadItems', (): void => {
		it('should filter out items that are already selected', (done: MochaDone): void => {
			let selections: ITestObject[] = [items[0], items[2]];
			buildController(selections);

			typeaheadList.loadItems().then((data: ITestObject[]): void => {
				expect(data).to.have.length(3);
				expect(data[0].id).to.equal(2);
				expect(data[1].id).to.equal(4);
				expect(data[2].id).to.equal(5);
				done();
			});
			scope.$digest();
		});
	});

	describe('add', (): void => {
		it('should remove the item from the typeahead and add it to the list', (): void => {
			let list: ITestObject[] = [];
			buildController(list);
			let removeSpy: Sinon.SinonSpy = sinon.spy();
			let addEventSpy: Sinon.SinonSpy = sinon.spy();
			parentChild.registerChildBehavior(typeaheadList.typeaheadLink, <any>{
				remove: removeSpy,
			});
			typeaheadList.add = addEventSpy;

			typeaheadList.addItem(items[0]);
			scope.$digest();

			expect(list).to.have.length(1);
			expect(list[0].id).to.equal(1);
			sinon.assert.calledOnce(removeSpy);
			expect(removeSpy.firstCall.args[0].id).to.equal(1);
			sinon.assert.calledOnce(addEventSpy);
			expect(addEventSpy.firstCall.args[0].item.id).to.equal(1);
		});
	});

	describe('remove', (): void => {
		it('should add the item back to the typeahead and remove it from the list', (): void => {
			let list: ITestObject[] = [items[0]];
			buildController(list);
			let addSpy: Sinon.SinonSpy = sinon.spy();
			let removeEventSpy: Sinon.SinonSpy = sinon.spy();
			parentChild.registerChildBehavior(typeaheadList.typeaheadLink, <any>{
				add: addSpy,
			});
			typeaheadList.remove = removeEventSpy;

			typeaheadList.removeItem(list[0]);
			scope.$digest();

			expect(list).to.be.empty;
			sinon.assert.calledOnce(addSpy);
			expect(addSpy.firstCall.args[0].id).to.equal(1);
			sinon.assert.calledOnce(removeEventSpy);
			expect(removeEventSpy.firstCall.args[0].item.id).to.equal(1);
		});
	});

	describe('behavior', (): void => {
		it('should provide an add function for the parent to trigger an item to be added', (): void => {
			buildController();
			let addSpy: Sinon.SinonSpy = sinon.spy();
			typeaheadList.addItem = addSpy;
			typeaheadList.$onInit();
			let item: ITestObject = { id: 13 };
			parentChild.triggerChildBehavior(typeaheadList.childLink, (behavior: ITypeaheadListBehavior): void => {
				behavior.add(item);
			});

			sinon.assert.calledOnce(addSpy);
			sinon.assert.calledWith(addSpy, item);
		});

		it('should provide a remove function for the parent to trigger an item to be removed', (): void => {
			buildController();
			let removeSpy: Sinon.SinonSpy = sinon.spy();
			typeaheadList.removeItem = removeSpy;
			typeaheadList.$onInit();
			let item: ITestObject = { id: 13 };
			parentChild.triggerChildBehavior(typeaheadList.childLink, (behavior: ITypeaheadListBehavior): void => {
				behavior.remove(item);
			});

			sinon.assert.calledOnce(removeSpy);
			sinon.assert.calledWith(removeSpy, item);
		});
	});

	function buildController(list?: ITestObject[]): void {
		let ngModel: any = {
			$viewValue: list,
			$setViewValue: (value: any): void => { ngModel.$viewValue = value; },
		};

		let bindings: any = {
			childLink: {},
			ngModel: ngModel,
		};

		let locals: any = { $element: {}, $transclude: {} };

		let controllerResult: test.IControllerResult<TypeaheadListController> =
			test.angularFixture.controllerWithBindings<TypeaheadListController>(controllerName, bindings, locals);

		scope = controllerResult.scope;
		typeaheadList = controllerResult.controller;
		typeaheadList.typeaheadLink = <any>{};
		(<any>typeaheadList).$transclude = {
			isSlotFilled(): boolean { return true; },
		};
		typeaheadList.getItems = sinon.spy((): angular.IPromise<ITestObject[]> => {
			return $q.when(items);
		});
		typeaheadList.$onInit();
	}
});
