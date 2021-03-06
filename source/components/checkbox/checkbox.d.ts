import './checkbox.css';
import * as angular from 'angular';
export declare let moduleName: string;
export declare let componentName: string;
export declare let controllerName: string;
export interface IToggleParams {
    value: boolean;
}
export interface ICheckboxBindings {
    ngDisabled?: boolean;
    active?: boolean;
    onToggle?: {
        (params: IToggleParams): void;
    };
}
export declare class CheckboxController implements ICheckboxBindings {
    useDefaultTheme: boolean;
    ngDisabled: boolean;
    active: boolean;
    onToggle: {
        (params: IToggleParams): void;
    };
    ngModel: angular.INgModelController;
    checked: boolean;
    toggle(): void;
    static $inject: string[];
    constructor(useDefaultTheme: boolean);
    $onInit(): void;
}
export declare let checkbox: angular.IComponentOptions;
