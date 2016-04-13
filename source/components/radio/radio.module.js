'use strict';
var angular = require('angular');
var typescript_angular_utilities_1 = require('typescript-angular-utilities');
var __object = typescript_angular_utilities_1.services.object;
var radioGroup_1 = require('./radioGroup');
exports.radioGroupDirectiveName = radioGroup_1.directiveName;
exports.radioGroup = radioGroup_1.radioGroup;
exports.radioGroupControllerName = radioGroup_1.controllerName;
exports.RadioGroupController = radioGroup_1.RadioGroupController;
var radio_1 = require('./radio');
exports.radioComponentName = radio_1.componentName;
exports.radio = radio_1.radio;
exports.radioControllerName = radio_1.controllerName;
exports.RadioController = radio_1.RadioController;
exports.moduleName = 'rl21.components.radio';
angular.module(exports.moduleName, [__object.moduleName])
    .directive(radioGroup_1.directiveName, radioGroup_1.radioGroup)
    .controller(radioGroup_1.controllerName, radioGroup_1.RadioGroupController)
    .component(radio_1.componentName, radio_1.radio)
    .controller(radio_1.controllerName, radio_1.RadioController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLDZDQUF5Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3hELElBQU8sUUFBUSxHQUFHLHVDQUFRLENBQUMsTUFBTSxDQUFDO0FBRWxDLDJCQUtPLGNBQWMsQ0FBQyxDQUFBO0FBU3JCLCtCQUF1QjtBQUN2QixrQkFBVTtBQUNWLGdDQUF3QjtBQUN4Qiw0QkFBb0I7QUFYckIsc0JBS08sU0FBUyxDQUFDLENBQUE7QUFPaEIsMEJBQWtCO0FBQ2xCLGFBQUs7QUFDTCwyQkFBbUI7QUFDbkIsdUJBQWU7QUFHTCxrQkFBVSxHQUFXLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMvQyxTQUFTLENBQUMsMEJBQXVCLEVBQUUsdUJBQVUsQ0FBQztLQUM5QyxVQUFVLENBQUMsMkJBQXdCLEVBQUUsaUNBQW9CLENBQUM7S0FDMUQsU0FBUyxDQUFDLHFCQUFrQixFQUFFLGFBQUssQ0FBQztLQUNwQyxVQUFVLENBQUMsc0JBQW1CLEVBQUUsdUJBQWUsQ0FBQyxDQUFDIn0=