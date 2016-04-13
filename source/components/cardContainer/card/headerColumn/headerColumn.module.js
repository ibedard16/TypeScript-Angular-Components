'use strict';
var angular = require('angular');
var typescript_angular_utilities_1 = require('typescript-angular-utilities');
var headerColumn_1 = require('./headerColumn');
var sizeForBreakpoints_1 = require('./sizeForBreakpoints');
exports.moduleName = 'rl.ui.components.cardContainer.card.headerColumn';
angular.module(exports.moduleName, [
    typescript_angular_utilities_1.services.string.moduleName,
])
    .directive(sizeForBreakpoints_1.sizeForBreakpointsName, sizeForBreakpoints_1.sizeForBreakpoints)
    .directive(headerColumn_1.directiveName, headerColumn_1.headerColumn)
    .controller(headerColumn_1.controllerName, headerColumn_1.HeaderColumnController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyQ29sdW1uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlckNvbHVtbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkMsNkNBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFFeEQsNkJBQW9GLGdCQUFnQixDQUFDLENBQUE7QUFDckcsbUNBQTJELHNCQUFzQixDQUFDLENBQUE7QUFFdkUsa0JBQVUsR0FBVyxrREFBa0QsQ0FBQztBQUVuRixPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFVLEVBQUU7SUFDMUIsdUNBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVTtDQUMxQixDQUFDO0tBQ0EsU0FBUyxDQUFDLDJDQUFzQixFQUFFLHVDQUFrQixDQUFDO0tBQ3JELFNBQVMsQ0FBQyw0QkFBYSxFQUFFLDJCQUFZLENBQUM7S0FDdEMsVUFBVSxDQUFDLDZCQUFjLEVBQUUscUNBQXNCLENBQUMsQ0FBQyJ9