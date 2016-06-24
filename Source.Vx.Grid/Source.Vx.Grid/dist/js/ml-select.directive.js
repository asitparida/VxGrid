(function () {
    angular.module('ui.ml.select', ['ui.bootstrap']);
})();
(function () {
    'use strict';

    /// <summary>GENERATE GUID LIKE STRING UISNG MATH PROPERTIES</summary>
    function _GUID() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
        }
        return s4() + "_" + s4();
    }

    angular
        .module('ui.ml.select')
        .directive('mlSelect', [mlSelectDirective]);

    function mlSelectDirective() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            priority: 1001,
            scope: {
                'config': '=',
                'ngDisabled': '='
            },
            controller: ['$scope', function ($scope) {
                var self = this;
                self.options = [];
                self.selectedOptions = [];
                self.initialized = false;
                self.ddShow = false;
                self.headerText = '';
                self._id = _GUID();
                self._allSelected = false;
                self.optionToggle = function (option, e) {
                    console.log(self);
                    self.selectedOptions = [];
                    angular.forEach(self.options, function (_origOption) {
                        if (_origOption._guid === option._guid) {
                            _origOption._selected = !_origOption._selected;
                        }
                        if (_origOption._selected)
                            self.selectedOptions.push(_origOption);
                    });
                    if (typeof self.config.selectCallback !== 'undefined' && typeof self.config.selectCallback === 'function') {
                        self.config.selectCallback(self.selectedOptions);
                    }
                    self.processForSelectAll();
                    self.getHeaderText();
                    e.preventDefault();
                    e.stopPropagation();
                }
                self.processForSelectAll = function () {
                    var _toggle = true;
                    angular.forEach(self.options, function (_origOption) {
                        _toggle = _toggle && _origOption._selected;
                    });
                    self._allSelected = _toggle;
                }
                self.optionToggleAll = function (e) {
                    self.selectedOptions = [];
                    self._allSelected = !self._allSelected;
                    angular.forEach(self.options, function (_origOption) {
                        _origOption._selected = self._allSelected;
                        if (_origOption._selected)
                            self.selectedOptions.push(_origOption);
                    });
                    if (typeof self.config.selectCallback !== 'undefined' && typeof self.config.selectCallback === 'function') {
                        self.config.selectCallback(self.selectedOptions);
                    }
                    self.getHeaderText();
                }
                self.getHeaderText = function () {
                    if (self.selectedOptions.length == 0) {
                        self.headerText = 'None';
                    }
                    else if (self.selectedOptions.length == self.options.length) {
                        self.headerText = 'All';
                    }
                    else if (self.selectedOptions.length == 1) {
                        self.headerText = self.selectedOptions[0].name;
                    }
                    else if (self.selectedOptions.length >= 1 && self.selectedOptions.length < self.options.length) { self.headerText = 'Multiple'; }
                    angular.element(document.getElementById(self._id + '_header_text')).text(self.headerText);
                }

                self.resetOptionSelection = function () {
                    angular.forEach(self.options, function (_origOption) {
                        _origOption._selected = false;
                    });
                    self.selectedOptions = [];
                }
                self.checkOptionsAgain = function () {
                    self.resetOptionSelection();
                    angular.forEach(self.config.selectedOptions, function (_origOption) {
                        var option = self.options.find(function (item) { return item.id === _origOption.id });
                        if (typeof option !== 'undefined' && option != null) {
                            option._selected = true;
                            self.selectedOptions.push(option);
                        }
                    });
                    self.getHeaderText();
                    self.processForSelectAll();
                }
                self.open = function () {
                    if (self.ddShow == false)
                        self.ddShow = true;
                }
                self.init = function () {
                    self.options = [];
                    self.selectedOptions = [];
                    self.config.dropup = self.config.dropup || false;
                    angular.forEach(self.config.options, function (_origOption) {
                        var option = angular.copy(_origOption);
                        option._guid = _GUID();
                        option._selected = false;
                        self.options.push(option);
                    });
                    self.checkOptionsAgain();
                    if (self.initialized == false) {
                        $scope.$watch('multiSelectCtrl.config.selectedOptions', function (newvalue, oldvalue) {
                            if ($scope.multiSelectCtrl.initialized)
                                $scope.multiSelectCtrl.checkOptionsAgain();
                        }, false);
                        $scope.$watch('multiSelectCtrl.config.options', function (newvalue, oldvalue) {
                            if ($scope.multiSelectCtrl.initialized)
                                $scope.multiSelectCtrl.init();
                        }, false);
                        self.initialized = true;
                    }
                }
            }],
            controllerAs: 'multiSelectCtrl',
            bindToController: true,
            templateUrl: 'ml-select.tmpl.html',
            link: function (scope, elem, attrs) {
                scope.multiSelectCtrl.init();
            }

        };
    }

})();
