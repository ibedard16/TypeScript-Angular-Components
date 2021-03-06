'use strict';

import * as angular from 'angular';

import { services } from 'typescript-angular-utilities';
import __genericSearchFilter = services.genericSearchFilter;

import { IDataSource } from '../dataSources/dataSource';
import { CardContainerController } from '../cardContainer';

export let moduleName: string = 'rl.ui.components.cardContainer.cardSearch';
export let componentName: string = 'rlCardSearch';
export let controllerName: string = 'CardSearchController';

export let defaultSearchPlaceholder: string = 'Search';
export let defaultSearchDelay: number = 1000;

export interface ICardSearchBindings {
	delay: number;
}

export class CardSearchController {
	// bindings
	delay: number;

	searchPlaceholder: string;
	searchText: string;
	searchLengthError: boolean = false;
	minSearchLength: number;
	hasSearchFilter: boolean = true;
	minSearchError: string;
	private cardContainer: CardContainerController;
	private searchFilter: __genericSearchFilter.IGenericSearchFilter;

	static $inject: string[] = ['$scope', '$timeout'];
	constructor(private $scope: angular.IScope
			, private $timeout: angular.ITimeoutService) {}

	$onInit(): void {
		if (this.cardContainer == null) {
			return;
		}

		this.minSearchError = 'You must enter at least {{cardSearch.minSearchLength}} characters to perform a search';

		if (this.searchFilter == null) {
			let filter: __genericSearchFilter.IGenericSearchFilter = this.cardContainer.searchFilter;
			this.searchFilter = filter;

			if (filter == null) {
				this.hasSearchFilter = false;
			}
		}

		if (this.hasSearchFilter) {
			this.searchPlaceholder = defaultSearchPlaceholder;

			let dataSource: IDataSource<any> = this.cardContainer.dataSource;

			let delay: number = this.delay != null
				? this.delay
				: defaultSearchDelay;

			let timer: angular.IPromise<void>;

			this.$scope.$watch((): string => { return this.searchText; }, (search: string): void => {
				this.searchFilter.searchText = search;
				this.minSearchLength = this.searchFilter.minSearchLength;

				this.validateSearchLength(search, this.minSearchLength);

				if (timer != null) {
					this.$timeout.cancel(timer);
				}

				timer = this.$timeout<void>(dataSource.refresh.bind(dataSource), delay);
			});
			this.$scope.$watch(():string => {
				return this.searchFilter.searchText;
			},():void =>{
				this.searchText = this.searchFilter.searchText;
			});
		}
	}

	private validateSearchLength(search: string, minLength: number): void {
		// show error if search string exists but is below minimum size
		this.searchLengthError = search != null
								&& search.length > 0
								&& search.length < minLength;
	}
}

let cardSearch: angular.IComponentOptions = {
	require: { cardContainer: '?^^rlCardContainer' },
	template: require('./cardSearch.html'),
	controller: controllerName,
	controllerAs: 'cardSearch',
	bindings: {
		delay: '<?searchDelay',
		searchFilter: '<?',
	},
};

angular.module(moduleName, [])
	.component(componentName, cardSearch)
	.controller(controllerName, CardSearchController);
