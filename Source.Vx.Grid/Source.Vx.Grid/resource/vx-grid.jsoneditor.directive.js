// Header directive

(function () {
    "use strict";

    var jsonDirective = function (JSONEditor, $timeout) {
        return {
            replace: true,
            scope: {
                onChange: '&',
                jsonData: '=',
                options: '='
            },
            compile: function (elem, attrs) {              

                var link = function (scope, elem, attrs) {                   
                    var options = {
                        mode: 'tree',
                        // modes: ['tree', 'code'],
                        change: changedJSONFun
                    };
                    options = angular.extend(options, scope.options);
                    var editor = new JSONEditor(elem[0], options);
                  
                    // set json
                    scope.$watch("jsonData", function (json) {
                        editor.set(json);
                    });
    
                    function changedJSONFun() {
                        $timeout(function () {
                            try {
                                // get json
                                var json = editor.get();
                                    scope.onChange({ json: json });
                            }
                            catch (err) {
                                var json = editor.getText();
                                scope.onChange({ json: json });
                            }
                        });
                    };                
                };                
                return link;
            },
            template: '<div style="width: 100%; height: 100%;"></div>'
        }
    };

    angular
        .module("angular-json-editor",[])
        .provider('JSONEditor', function () {
            var configuration = {
                defaults: {
                    options: {
                        indentation: 2,
                        search: false,
                        name: 'vxgrid',
                        mode: 'code'
                    }
                }
            };

            this.configure = function (options) {
                extendDeep(configuration, options);
            };

            this.$get = ['$window', function ($window) {
                // configure JSONEditor using provider's configuration
                var JSONEditor = $window.JSONEditor;
                extendDeep(JSONEditor, configuration);
                return $window.JSONEditor;
            }];

            // Helper method for merging configuration objects
            function extendDeep(dst) {
                angular.forEach(arguments, function (obj) {
                    if (obj !== dst) {
                        angular.forEach(obj, function (value, key) {
                            if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
                                extendDeep(dst[key], value);
                            } else {
                                dst[key] = value;
                            }
                        });
                    }
                });
                return dst;
            }

        })
        .directive("jsonEditor", ["JSONEditor", "$timeout", jsonDirective]);

})();