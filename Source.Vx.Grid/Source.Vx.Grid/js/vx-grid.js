(function () {
    "use strict";

    /*  VX GRID 
        LAST UPDATE - 29-10-2015 16:38 
        LAST UPDATE BY - ASPARIDA
        
        VX GRID CONFIG (BOUND TO 'config=') IN DIRECTIVE CALL
        -----------------------------------------------------------       
        <CONFIG>.enableDropdownsInHeader        <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE TO ENABLE DROPDOWNS ON C0LUMNS, ELSE DEFAULT SORT ON HEADER CLICK
        <CONFIG>.selectionEnabled               <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLE ROW SELECTION
        <CONFIG>.allRowsSelectionEnabled        <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLE ALL ROWS SELECTION
        <CONFIG>.multiSelectionEnabled          <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLE MULTI ROW SELECTION - DEPENDENT ON 
        <CONFIG>.showGridStats                  <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLE ROW SELECTION
        <CONFIG>.showGridOptions                <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLE ROW SELECTION
        <CONFIG>.selectAllOnRenderAll           <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLE SELECT ONLY WHEN ALL ROWS ARE RENDERED
        <CONFIG>.multiSelectionDependentCol     <SUPPORTED : Y>    :   <STRING>         SET TO COLUMN ON WHICH MULTI SELECTION IS DEPENDENT OR SET TO '' OR NULL
        <CONFIG>.onSelectionReturnCol           <SUPPORTED : Y>    :   <STRING>         SET TO COLUMN WHICH POPERTY IS RETURNED ON ROW SELECTION CHANGE
        <CONFIG>.showTable                      <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLE SELECT ONLY WHEN ALL ROWS ARE RENDERED
        <CONFIG>.data                           <SUPPORTED : Y>    :   <ARRAY>
        <CONFIG>.xsRowTitleTemplate             <SUPPORTED : Y>    :   <STRING>         SET TO XS ONLY TEMPLATE - DEFAULTS TO PRIMARY COLUMN HEADER
		<CONFIG>.virtualization					<SUPPORTED : Y>    :   <BOOLEAN>        SET TO FALSE TO DISABLE VIRTUALIZATION AND ENABLE PAGINATION
        <CONFIG>.pagination					    <SUPPORTED : Y>    :   <BOOLEAN>        SET TO FALSE TO DISABLE PAGINATION AND ENABLE PAGINATION
		<CONFIG>.pageLength						<SUPPORTED : Y>    :   <NUMBER>	        SET PAGINATION LENGTH AND DEFUALTS TO 20
        <CONFIG>.inlineEditingEnabled			<SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLING INLINE EDITING OPTION
        <CONFIG>.inlineDeletingEnabled			<SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLING INLINE DELETING OPTION
        <CONFIG>.inlineAddRowEnabled			<SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLING ADDING ROW
        <CONFIG>.inlineSaveOverrideEnabled		<SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLING SAVE ROW OVEVRRIDE
        <CONFIG>.inlineDeleteOverrideEnabled	<SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLING SAVE DELETE OVEVRRIDE
        <CONFIG>.allRowsInDefaultEdit	        <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE FOR ENABLING OPENING ALL ROWS IN EDIT MODE BY DEFAULT
        <CONFIG>.newRowTemplate			        <SUPPORTED : Y>    :   <STRING>         SET TO NEW TEMPLATE
        <CONFIG>.jsonEditorEnabled			    <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE TO ENABLE JSON EDITOR
        <CONFIG>.sortPredicate			        <SUPPORTED : Y>    :   <STRING>         SET TO COLUMN_DEF_ID FOR DEFAULT SORTING BY THAT COLUMN
        <CONFIG>.reverseSortDirection			<SUPPORTED : Y>    :   <STRING>         SET TO TRUE/FALSE TO SET DEFAULT SORTING DIRECTION
        <CONFIG>.emptyFill			            <SUPPORTED : Y>    :   <STRING>         CONTENTS TO SHOW FOR EMPTY GRID
        <CONFIG>.loaderGifSrc                   <SUPPORTED : Y>    :   <STRING>         LOADER GIF PATH
        <CONFIG>.ariaPrimary                    <SUPPORTED : Y>    :   <STRING>         COLUMN IDENTIFYING ARIA PRIMARY
        <CONFIG>.xsTemplate                     <SUPPORTED : Y>    :   <BOOLEAN>        ENABLE XS SPECIFIC TEMPLATE
        <CONFIG>.initialRowClasses              <SUPPORTED : Y>    :   <MAP<OBJECT>>    PROVIDE KEY VALUE PAIRS FOR INITIAL ROW CLASSES
        <CONFIG>.rowClassFn                     <SUPPORTED : Y>    :   <FUNCTION>       PROVIDE FUNCTION REFERENCE TO SELF INVOKE WITH ONE PARAM - VX_ROW : FUNCTION VX_SAMPLE_ROWCLASS_FUNC(ROW){}
        <CONFIG>.bindOnce                       <SUPPORTED : Y>    :   <BOOLEAN>        ENABLE BIND ONCE ROW TMPL
        <CONFIG>.hybrid                         <SUPPORTED : Y>    :   <BOOLEAN>        ENABLE ZEN MODE - JS ONLY
        
        VX GRID COLUMN CONFIG (BOUND TO EACH ITEM IN  'vxConfig.columnDefConfigs') IN DIRECTIVE DEFINTION
        -----------------------------------------------------------------------------------------------------
        <COLUMN>.dropDownEnabled                <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE COLUMN DROPDOWN
        <COLUMN>.ddSort                         <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ADD SORT OPTION TO COLUMN DROPDOWN
        <COLUMN>.ddFilters                      <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ADD FILTERS TO COLUMN DROPDOWN
        <COLUMN>.ddFiltersWithSearch            <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ADD FILTERS SEARCH OPTION
        <COLUMN>.ddGroup                        <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ADD GROUP OPTION TO COLUMN DROPDOWN
        <COLUMN>.hidden                         <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO HIDE COLUMN ON DEFAULT
        <COLUMN>.xsHidden                       <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO HIDE COLUMN ON DEFAULT ON XS RESOLUTION
        <COLUMN>.locked                         <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO FIX COLUMN VISIBILITY, COLUMN ORDER, COLUMN WIDTH
        <COLUMN>.primary                        <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE THIS COLUMN AS PRIMARY
        <COLUMN>.width                          <SUPPORTED : Y>    :   <STRING>    SET WIDTH FOR COLUMN - DEFUALT '200'
        <COLUMN>.renderDefn                     <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE ENABLE CUSTOM TEMEPLATE
        <COLUMN>.headerDefn                     <SUPPORTED : N>    :   <STRING>    SET CUSTOM HEADER TEMPLATE
        <COLUMN>.cellDefn                       <SUPPORTED : Y>    :   <STRING>    SET CUSTOM CELL TEMPLATE - USE 'VX_ROW_POINT' FOR ROW LEVEL PROPERTY & 'VX_DATA_POINT' FOR ROW CELL LEVEL PROPERTY
        <COLUMN>.filterCellDefn                 <SUPPORTED : Y>    :   <STRING>    SET CUSTOM FILTER CELL TEMPLATE - USE 'VX_DATA_POINT' FOR FILTER CELL LEVEL PROPERTY
        <COLUMN>.inlineEditOnColumnEnabled      <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE COLUMN INLINE EDITING
        <COLUMN>.editDefn                       <SUPPORTED : Y>    :   <STRING>    SET CUSTOM CELL TEMPLATE - USE 'VX_ROW_POINT' FOR ROW LEVEL PROPERTY & 'VX_DATA_POINT' FOR ROW CELL LEVEL PROPERTY
        <COLUMN>.editDefnTemplate               <SUPPORTED : Y>    :   <STRING>    SET EDIT TEMPLATE TYPE - USE 'VX_ROW_POINT' FOR ROW LEVEL PROPERTY & 'VX_DATA_POINT' FOR ROW CELL LEVEL PROPERTY - SUPPORTED TYPES - 'INPUT', 'TEXTAREA'
        <COLUMN>.columnIsDate                   <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE NATIVE DATE SUPPORT; SET <CONFIG>.renderDefn TO TRUE FOR THIS COLUMN
        <COLUMN>.columnDatePipe                 <SUPPORTED : Y>    :   <STRING>    SET TO THE DATE FORMAT; USE VALUE FROM ANGULAR DATE FILTER PIPE 

        VX GRID EVENTS
        ----------------------
        'vxGridRowSelectionChange'                  <OUT>   EVENT ON ROW SELECTION CHANGE EMITING DATA :   {'key': <ROW_VALUE_'onSelectionReturnCol'>, 'value': <BOOLEAN_NEW_SELECTION_STATE>, '_pKey': <PRIMARY_ID_VXGRID> }
        'vxGridRowMultiSelectionChange'             <OUT>   EVENT ON MULTIROW SELECTION CHANGE EMITING DATA COLLECTION OF :   {'key': <ROW_VALUE_'onSelectionReturnCol'>, 'value': <BOOLEAN_NEW_SELECTION_STATE>, '_pKey': <PRIMARY_ID_VXGRID> }
        'vxGridRowAllSelectionChange'               <OUT>   EVENT ON ALL ROW SELECTION
        'vxPartiallyRendered'                       <OUT>   EVENT ON VX GRID PARTIAL RENDERED
        'vxCompletelyRendered'                      <OUT>   EVENT ON VX GRID COMPLETE RENDERED
        'vxPartiallyRenderedSelectAllDisabled'      <OUT>   EVENT ON VX GRID PARTIAL RENDERED AND SELECT ALL DISABLED - ONLY ON  <CONFIG>.selectAllOnRenderAll SET TO TRUE
        'vxCompletelyRenderedSelectAllEnabled'      <OUT>   EVENT ON VX GRID COMPLETE RENDERED AND SELECT ALL ENABLED - ONLY ON  <CONFIG>.selectAllOnRenderAll SET TO TRUE
        'vxGridSettingsChanged'                     <OUT>   EVENT ON VX GRID SETTINGS CHANGED
        'vxGridSettingsBuilt'                       <OUT>   EVENT ON VX GRID COL SETTINGS BUILT
        'vxGridRowsDeleted'                         <OUT>   EVENT ON VX GRID ROWS DELETION
        'vxGridRowSaved'                            <OUT>   EVENT ON VX GRID ROW SAVING
        'vxGridChangeRowClass'                      <IN>    ON EVENT, ROW CLASS CHANGED AS PER PARAMETER - ACCPETS { ID : VXGRID_ID, DATA : []} , DATA IS COLLECTION OF {'key': 'ROW PRIMARY ID VALUE', 'value', '<NEW ROW CLASS NAMES>'}
        'vxGridResetRowClass'                       <IN>    ON EVENT, RESETS ALL CLASS NAMES ADDED AS PART OF 'vxGridChangeRowClass'
        'vxGridDisableRowSelection'                 <IN>    ON EVENT, ENABLES/DISABLES ROW SELECTION - ACCEPTS { ID : VXGRID_ID, DATA : []} , DATA IS COLLECTION OF {'key': 'ROW PRIMARY ID VALUE', 'value': <BOOLEAN>}
        'vxGridResetDisableRowSelection'            <IN>    ON EVENT, ENABLES ALL ROW FOR SELECTION
        'vxGridOpenManageColumns',                  <IN>    ON EVENT, OPENS MANAGE COLUMNS MODAL
        'vxGridResetVxInstance',                    <IN>    ON EVENT, RESETS THE TABLE INSTANCE 
        'vxGridClearFilters',                       <IN>    ON EVENT, CLEARS ALL FILTERS APPLIED
        'vxGridSelectAllFiltered',                  <IN>    ON EVENT, SELECTS ALL ROWS WITH FILTES APPLIED 
        'vxGridClearSelection',                     <IN>    ON EVENT, CLEARS SELECTION OF ALL ROWS
        'vxGridRevealWrapToggle'                    <IN>    ON EVENT, TOGGLES WRAP ON COLUMNS

        VX GRID CONFIG EXTENSIONS
        ----------------------------
        <CONFIG>.getVxCounts()                  <NO PARAMS>                             RETURNS COUNT - {'vxAllDataLength': <LENGTH OF ALL DATA> , 'vxFilteredDataLength' : <LENGTH OF FILTERED DATA SET>, 'vxSelectedDataLength' : <LENGTH OF SELECTED DATA SET>
        <CONFIG>.getData()                      <NO PARAMS>                             RETURNS CURRENT GRID DATA SET - WITHOUT DIRTY MAPS
        <CONFIG>.getFilteredDataSet()           <NO PARAMS>                             RETURNS ACTIVELY FILTERED DATA
        <CONFIG>.getActiveDataSet()             <NO PARAMS>                             RETURNS CURRENT ACTIVE DATA STATE
        <CONFIG>.setRowFieldValidation()        <ID, COL, VALID>                        SETS ROW AND FEILD VALIDATION TO 'VALID' VALUE
        <CONFIG>.getSelectedRows()              <NO PARAMS>                             GET IDs FOR ROWS BEING SELECTED
        <CONFIG>.getRowsBeingEdited()           <NO PARAMS>                             GET IDs FOR ROWS BEING EDITED
        <CONFIG>.changeRowClass()               <NO PARAMS>                             ROW CLASS CHANGED AS PER PARAMETER - ACCPETS { ID : VXGRID_ID, DATA : []} , DATA IS COLLECTION OF {'key': 'ROW PRIMARY ID VALUE', 'value', '<NEW ROW CLASS NAMES>'}
        <CONFIG>.openJsonEditor()               <NO PARAMS>                             OPENS JSON EDITOR IF CONFIGURED TO TRUE
        <CONFIG>.openManageColumns()            <NO PARAMS>                             OPENS MANAGE COLUMNS MODAL
        <CONFIG>.resetVxInstance()              <NO PARAMS>                             RESETS THE TABLE INSTANCE 
        <CONFIG>.clearFilters()                 <NO PARAMS>                             CLEARS ALL FILTERS APPLIED
        <CONFIG>.selectAllFiltered()            <NO PARAMS>                             SELECTS ALL ROWS WITH FILTES APPLIED 
        <CONFIG>.clearSelection()               <NO PARAMS>                             CLEARS SELECTION OF ALL ROWS
        <CONFIG>.revealWrapToggle()             <NO PARAMS>                             TOGGLES WRAP ON COLUMNS
        <CONFIG>.selectRows()                   <ARRAY OF IDs>                          TOGGLE ROW STATES TO TRUE
        <CONFIG>.deselectRows()                 <ARRAY OF IDs>                          TOGGLE ROW STATES TO FALSE
        <CONFIG>.sortByColumn()                 <COLUMN ID, SORT DIRECTION>             SORT BY COLUMN BASED ON DIRECTION     
        <CONFIG>.resetColumnFilters()           <ARRAY OF IDs>                          RESET FILTERS ON COLUMNS PROVIDED BY IDS
        <CONFIG>.modifyRows()                   <ARRAY OF ROWS, ARRAY OF FIELDS>        MODIFY ROW DATA PROGRAMATICALLY - IF FIELDS ARRAY EMPTY, UPDATES ALL FIELDS, ELSE ONLY FIELDS SUPPLIED THROUGH PARAMS

    */

    /// <summary>CAPITALISE FIRST LETTER OF STRING</summary>
    /// <returns type="String" />
    String.prototype.capitalizeFirstLetter = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    /// <summary>REPLACE ALL INSTNACES USING REGEX</summary>
    /// <param name="find" type="String">PATTERN TO LOOK FOR</param>
    /// <param name="replaceWith" type="String">STRING TO REPLACE WITH</param>
    /// <returns type="String" />
    String.prototype.replaceAll = function (find, replaceWith) {
        var regex = new RegExp(find, 'g');
        return this.replace(regex, replaceWith);
    }

    /// <summary>GENERATE GUID LIKE STRING UISNG MATH PROPERTIES</summary>
    /// <returns type="String" />
    function _GUID() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
        }
        return s4() + s4() + "_" + s4();
    }

    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (/* function */ callback, /* DOMElement */ element) {
              window.setTimeout(callback, 1000 / 60);
          };
    })();

    /// <summary>DEPEDENCIES</summary>
    /// <summary module="ngSanitize">TO ENABLE/SANITIZE TEMPLATES</summary>
    /// <summary module="ui.bootstrap">USING ANGULAR BOOTSTRAP MODALS</summary>
    /// <summary module="vs-repeat">TO ENABLE DOM VIRTUALIZATION</summary>
    /// <summary module="angular-json-editor">TO ENABLE JSON EDITOR FOR DATA</summary>
    /// <summary module="duScroll">TO ENABLE ON DEMAND HEADERS AND OTHER SCROLL BASED CAPABILITIES</summary>
    angular.module('vx.grid.modules', ['ngSanitize', 'ui.bootstrap', 'vs-repeat', 'angular-json-editor', 'duScroll'])
    .directive("vxGrid", function () {
        return {
            restrict: 'E', // ONLY ENABLE DIRECTIVE DECLARATION AS ELEMENT
            scope: {
                config: '=', // EXPECTS DIRECTIVE SCOPED OBJECT FOR CONFIG MAPS AND DRIVE GRID BEHAVIOUR ACCORDINGLY
                scrollParent: '=' // EXEPECTS DIRECTIVE SCOPED OBJECT FOR NOTIFYING WHICH DIV TO TRIGGER VIRTULIZED SCROLL ON
            },
            controller: ["$scope", "$uibModal", "$sce", "$timeout", "$rootScope", "$window", "$filter", "$q", "$compile", VxGridController],
            controllerAs: 'vxGridCtrl',
            replace: true,
            templateUrl: 'template/vx-grid/vx-grid.html',
            link: function ($scope, element, attributes) {
                $scope.vxGridCtrl.selfEle = element;

                /// <summary>GRID WATCH : LISTEN TO CHANGES IN DATA AND ACCORDINGLY RESET INSTANCE</summary>
                $scope.$watchCollection('config.data', function (n) {
                    var dt = new Date();
                    //console.log('before start', dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ':' + dt.getMilliseconds());
                    if (typeof n !== 'undefined' && n.length == 0) {
                        n = [{ 'fillEmptyElement': true }];
                        $scope.config.noData = true;
                        if ($scope.config.hybrid == true && typeof $scope.vxGridCtrl.vxConfig !== 'undefined')
                            angular.element(document.getElementById('_vxHybrid' + $scope.vxGridCtrl.vxConfig.id)).empty();
                    }
                    else
                        $scope.config.noData = false;
                    if ($scope.config.hybrid == true) {
                        $scope.config.vxData = _.clone(n);
                        $scope.vxGridCtrl._origData = _.clone(n);
                    }
                    else
                        $scope.config.vxData = angular.copy(n);
                    dt = new Date();
                    //console.log('start', dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ':' + dt.getMilliseconds());
                    delete $scope.vxGridCtrl.vxConfig;
                    $scope.vxGridCtrl.resetVxInstance();
                });

                /// <summary>GRID WATCH : LISTEN TO CHANGES IN FILTERED DATA COLLECTION AN ACCODRIDNGLY RESET PAGES IF PAGINATION ENABLED</summary>
                if ($scope.config.hybrid != true) {
                    $scope.$watchCollection(function () {
                        return $scope.vxGridCtrl.vxConfig.vxFilteredData;
                    }, function (n) {
                        if (n.length >= 0) {
                            /* PROCESS FOR PAGINATION IF VIRTUALIZATION IS FALSE */
                            if ($scope.vxGridCtrl.vxConfig.pagination == true) {
                                $scope.vxGridCtrl.vxColSettings.pages = _.range(Math.ceil(n.length / parseInt($scope.vxGridCtrl.vxConfig.pageLength)));
                                $scope.vxGridCtrl.vxColSettings.vxPageEnabled = $scope.vxGridCtrl.vxColSettings.pages.length > 1;
                                $scope.vxGridCtrl.vxColSettings.activePage = 0;
                                $scope.vxGridCtrl.vxColSettings.vxPageStartPosition = 0;
                            }
                        }
                    });
                }

                $scope.vxGridCtrl.getvxTableContainerWidth = function () {
                    var elem = angular.element($(element).find('.vx-scroller')[0]);
                    return elem.width() + 'px';
                }

                $scope.vxGridCtrl.getNonHiddenColCount = function () {
                    var result = 1;
                    if (typeof $scope.vxGridCtrl.vxConfig.columnDefConfigs !== 'undefined' && $scope.vxGridCtrl.vxConfig.columnDefConfigs.length > 0)
                        result = _.filter($scope.vxGridCtrl.vxConfig.columnDefConfigs, function (header) { return header.hidden == false }).length;
                    return result;
                }
            }
        };
    })
        /// <summary>GRID DIRECTIVE : COMPILE CONTENTS ON RUNTIME AND ASSOCIATE SCOPE</summary>
    .directive("vxCompile", ["$compile", function ($compile) {
        return function (scope, element, attrs) {
            scope.$watch(
                function (scope) {
                    return scope.$eval(attrs.vxCompile);
                },
          function (value) {
              element.html(value);
              $compile(element.contents())(scope);
          }
            );
        }
    }])
        /// <summary>GRID DIRECTIVE : COMPILE CONTENTS ON RUNTIME USING MEMOIZATION AND ASSOCIATE SCOPE</summary>
    .directive("vxCompileCloneLink", ["$compile", function ($compile) {
        var compileCache = {};
        var evalCache = {};
        return function (scope, element, attrs) {
            var forEvaled = null;
            if (attrs.vxCompileCloneLink in compileCache) {
                forEvaled = evalCache[attrs.vxCompileCloneLink];
            }
            else {
                evalCache[attrs.vxCompileCloneLink] = scope.$eval(attrs.vxCompileCloneLink);
                forEvaled = evalCache[attrs.vxCompileCloneLink];
            }
            var forLink = null;
            if (forEvaled in compileCache) {
                forLink = compileCache[forEvaled];
            }
            else {
                compileCache[forEvaled] = $compile(forEvaled);
                forLink = compileCache[forEvaled];
            }
            forLink(scope, function (clonedElement, scope) {
                element.append(clonedElement);
            })
        }
    }])
        /// <summary>GRID DIRECTIVE : DISABLE ALL CONTENTS INSIDE A DIV AND PREVENT KEYBOARD ENTRY WHEN THEN DIV IS IN A DISBALED STATE</summary>
    .directive("vxEditFocusDisable", ['$rootScope', '$parse', function ($rootScope, $parse) {
        var _focusDisables = {};
        var _focuProps = {};
        var _focusTypes = ['input', 'select', 'button', 'textarea', 'object'];
        return {
            restrict: 'AEC',
            link: function ($scope, elem, attr) {
                var ifEdit = $parse(attr['vxEditFocusDisable']);
                var _rowId = $(elem).attr('id');
                $scope.$watch(attr['vxEditFocusDisable'], function (newValue) {
                    if (newValue) {
                        _focuProps[_rowId] = { 'available': true, 'stack': [] };
                        /* GET LIST OF ALL ELEMENTS AS DEFINED IN _focusTypes */
                        _.each(_focusTypes, function (type) {
                            var elements = $(elem).find(type);
                            if (elements.length > 0) {
                                _.each(elements, function (element) {
                                    var _eid = $(element).attr('id');
                                    if (typeof _eid == 'undefined' || _eid == null || _eid == '') {
                                        $(element).attr('id', _.uniqueId('elemid'));
                                        _eid = $(element).attr('id');
                                    }
                                    _focuProps[_rowId].stack.push(_eid);
                                });
                            }
                        });
                        /* PROCESS FOR TAGS WITH TABINDEX VALUE OTHER THAN -1 AND NOT A PART OF _focusTypes */
                        var elements = $(elem).find('[tabindex]');
                        if (elements.length > 0) {
                            _.each(elements, function (element) {
                                var _tbindex = $(element).attr('tabindex');
                                if (_tbindex != -1 && _.contains(_focusTypes, element.nodeName.toUpperCase()) == false && _.contains(_focuProps[_rowId].stack, _eid) == false) {
                                    var _eid = $(element).attr('id');
                                    if (typeof _eid == 'undefined' || _eid == null || _eid == '') {
                                        $(element).attr('id', _.uniqueId('elemid'));
                                        _eid = $(element).attr('id');
                                    }
                                    _focuProps[_rowId].stack.push(_eid);
                                }
                            });
                        }
                        /* GET CURRENT TABINDEX STATE AND SERIALIZE IT */
                        _.each(_focuProps[_rowId].stack, function (_eid) {
                            _focusDisables[_eid] = $('#' + _eid).attr('tabindex') || 0;
                            $('#' + _eid).attr('tabindex', -1);
                        });
                    }
                    else if (newValue == false) {
                        if (typeof _focuProps[_rowId] !== 'undefined' && typeof _focuProps[_rowId].available !== 'undefined' && _focuProps[_rowId].available == true) {
                            _.each(_focuProps[_rowId].stack, function (eid) {
                                var _origTabIndex = _focusDisables[eid];
                                $('#' + eid).attr('tabindex', _origTabIndex);
                            });
                            _focuProps[_rowId].available = false;
                        }
                    }
                });
            }
        };
    }])
        /// <summary>GRID DIRECTIVE : ADD KEYBOARD SUPPORT FOR CLICK EVENTS ON DIVS</summary>
    .directive("axKey", ['$rootScope', '$parse', function ($rootScope, $parse) {
        return {
            restrict: 'A',
            compile: function ($element, attr) {
                var fn = $parse(attr['axKey']);
                return function axKeyHandler(scope, element) {
                    if (!element.attr('role')) {
                        element.attr('role', 'button');
                    }
                    if (!element.attr('tabindex')) {
                        element.attr('tabindex', 0);
                    }
                    var _watchListeners = [];
                    var _origTabindex = 0;
                    _watchListeners.push(scope.$watch(attr['axDisabled'] || attr['ngDisabled'], function (value) {
                        if (value) {
                            _origTabindex = element.attr('tabindex');
                            element.attr('tabindex', -1);
                            element.attr('aria-disabled', true);
                        }
                        else {
                            element.attr('tabindex', 0);
                            element.attr('aria-disabled', false);
                        }
                    }));
                    element.on('click', function (e) {
                        if (scope.$eval(attr['axDisabled']) || scope.$eval(attr['ngDisabled']))
                            return;
                        axKeyHandlerCallback(e)
                    });
                    element.on('keyup', function (e) {
                        if (scope.$eval(attr['axDisabled']) || scope.$eval(attr['ngDisabled']))
                            return;
                        if (e.keyCode == 13 || e.keyCode == 32) {
                            axKeyHandlerCallback(e);
                        }
                    });
                    function axKeyHandlerCallback(e) {
                        var callback = function () {
                            fn(scope, { $event: e });
                        };
                        if ($rootScope.$$phase) {
                            scope.$evalAsync(callback);
                        } else {
                            scope.$apply(callback);
                        }
                    }
                    scope.$on("$destroy", function () {
                        while (_watchListeners.length) {
                            _watchListeners.shift()();
                        }
                    });
                }
            }
        };
    }])
        /// <summary>GRID DIRECTIVE : KEEP WATCH ON EDIT FIELDS AN FIRE EVENTS AS NEEDED</summary>
    .directive("vxKeepWatch", function () {
        return {
            restrict: 'AEC',
            link: function ($scope, elem, attr) {
                var field = attr.vxKeepWatch;
                var init = false;
                $scope.$watch(attr[field], function (newValue) {
                    if (init)
                        $scope.$emit('vxInlineEditFieldChange', { 'field': attr.vxKeepWatchField, 'value': newValue, 'rowId': attr.vxKeepWatchRowId });
                    else
                        init = true;
                });
            }
        };
    })
        /// <summary>GRID FILTER : IMPLEMENT MULTI COLUMN CONTEXT FILTERING FOR THE GRID WHEN FILTERS ARE APPLIED ACCROSS COLUMNS</summary>
    .filter("vxGridMultiBoxFilters", function () {
        return function (items, criteria) {
            if (typeof criteria !== 'undefined' && criteria != null && criteria.length > 0) {
                var filtered = items;
                var copyOfItems = items;
                var filterGroups = _.groupBy(criteria, 'col');
                for (var columnFound in filterGroups) {
                    var matches = filterGroups[columnFound];
                    var unionedMatches = [];
                    _.each(matches, function (match) {
                        unionedMatches = _.union(unionedMatches, _.filter(copyOfItems, function (item) {
                            if (typeof match.label !== 'undefined' && match.label != null && match.label != {} && typeof item[match.col] !== 'undefined' && item[match.col] != null && item[match.col] != {}) {
                                if (match.type == 'date') {
                                    return item[match.col].getTime() == match.label;
                                }
                                if (match.type == 'object')
                                    return JSON.stringify(item[match.col]).localeCompare(JSON.stringify(match.label)) == 0;
                                else
                                    return item[match.col].toString().trim().localeCompare(match.label) == 0;
                            }
                            else
                                return item[match.col] == match.label;
                        }));
                    });
                    filtered = _.intersection(filtered, unionedMatches);
                }
                return filtered;
            }
            else
                return items;
        };
    })
    /// <summary>GRID DIRECTIVE : DIRECTIVE TO KEEP TRACK IF CLICK OUTSIDE WHEN A HEADER IS OPEN</summary>
    .directive('clickOutsideHeader', ['$document', '$parse', function ($document, $parse) {
        return {
            restrict: 'A',
            link: function ($scope, elem, attr) {
                var classList = (attr.outsideIfNot !== undefined) ? attr.outsideIfNot.replace(', ', ',').split(',') : [];
                if (attr.id !== undefined) classList.push(attr.id);
                var fn = $parse(attr.clickOutsideHeader);
                $document.on('click', function (e) {
                    try {
                        var targetHederCell = $(e.target).closest('th.vxHeadRowCell');
                        if (typeof targetHederCell == 'undefined' || targetHederCell == null || targetHederCell.length == 0) {
                            if ($scope.$eval(attr.checkClickOutside)) {
                                $scope.$eval(fn);
                            }
                        }
                    }
                    catch (e) {
                        //console.log(e);
                    }
                });
            }
        };
    }])
        /// <summary>GRID FILTER : IMPLEMENT FIXED LENGTH DISAPLY OF DIGITS BY PREPENDIG REQUIRED ZEROS</summary>
    .filter("vxNumberFixedLen", function () {
        return function (n, len) {
            var num = parseInt(n, 10);
            len = parseInt(len, 10);
            if (isNaN(num) || isNaN(len)) {
                return n;
            }
            num = '' + num;
            while (num.length < len) {
                num = '0' + num;
            }
            return num;
        };
    })
        /// <summary>GRID FILTER : IMPLEMENT GRID SLICING TO START CONTENT PAINTING FROM A SPECFIC INDEX</summary>
	.filter('vxStartFrom', function () {
	    return function (input, start) {
	        if (input) {
	            start = +start;
	            var ret = input.slice(start);
	            return ret;
	        }
	        return [];
	    };
	})

    function VxGridController($scope, $modal, $sce, $timeout, $rootScope, $window, $filter, $q, $compile) {
        var self = this;
        self.scope = $scope;
        self.timeout = $timeout;
        self.filter = $filter;
        self.compile = $compile;
        self.modal = $modal;
        self.sce = $sce;
        self.rootScope = $rootScope;
        self.window = $window;
        self.q = $q;
        self.vxColSettings = {};
        self.vxConfig = {};
        $scope.posLeft = 1;
        $scope.posTop = 0;
        self.lastScroll = {};

        /// <summary>GET THE ANGULAR SCOPED WINDOW OBJECT REFERENCE</summary>
        self.w = angular.element(self.window);

        /// <summary>GRID FUNCTION : SYNC DATA IN ALL MULTI SELECTED ROWS WHEN ONE OF THE SELECTED ROWS IS BEING EDITED</summary>
        /// <param name="event param" type="OBJECT">ROW ID WHERE THE EDIT ORGINATED, FIELD ID WHICH WAS EDITED, FIELD VALUE TO BE SYNCED</param>
        $scope.$on('vxInlineEditFieldChange', function (e, data) {
            if (self.vxConfig.inlineEditSyncEnabled == true) {
                var exists = _.filter(self.vxColSettings.multiSelected, function (uid) { return uid.localeCompare(data.rowId) == 0 });
                if (typeof exists !== 'undefined' && exists != null && exists.length > 0) {
                    _.each(self.vxColSettings.multiSelected, function (uid) {
                        var cRow = _.find(self.vxConfig.vxData, function (row) { return row[self.vxColSettings.primaryId] == uid; })
                        if (typeof cRow !== 'undefined' && cRow != null && self.vxColSettings.inlineEditState[uid] == true) {
                            cRow[data.field] = data.value;
                        }
                    });
                }
            }
        })

        /// <summary>GRID EVENT : LISTED TO PARTIAL RENDERING OF VIRTUAL DOM</summary>
        $scope.$on('vsRepeatCollectionPartiallyRendered', function (e, data) {
            /// <summary>GRID EVENT : EMIT EVENT WHEN GRID IS PARTIALLY RENDERED</summary>
            $scope.$emit('vxPartiallyRendered', { 'id': self.vxConfig.id, 'data': data });
            if (self.vxConfig.selectAllOnRenderAll == true) {
                self.vxColSettings.selectAllEnabled = false;
                /// <summary>GRID EVENT : EMIT EVENT WHEN GRID'S PATIAL RENDERING DISABLES ALL ROWS SELECTION AT ONCE</summary>
                $scope.$emit('vxPartiallyRenderedSelectAllDisabled', { 'id': self.vxConfig.id, 'data': data });
            }
        });

        /// <summary>GRID EVENT : LISTED TO COMPLETE RENDERING OF VIRTUAL DOM</summary>
        $scope.$on('vsRepeatCollectionCompletelyRendered', function (e, data) {
            /// <summary>GRID EVENT : EMIT EVENT WHEN GRID IS COMPLETEY RENDERED</summary>
            $scope.$emit('vxCompletelyRendered', { 'id': self.vxConfig.id, 'data': data });
            if (self.vxConfig.selectAllOnRenderAll == true) {
                self.vxColSettings.selectAllEnabled = true;
                /// <summary>GRID EVENT : EMIT EVENT WHEN GRID'S COMPLETE RENDERING ENABLES ALL ROWS SELECTION AT ONCE</summary>
                $scope.$emit('vxCompletelyRenderedSelectAllEnabled', { 'id': self.vxConfig.id, 'data': data });
            }
        });

        /// <summary>GRID EVENT : LISTEN TO ASKS FOR CHANGES IN ROW CLASSES</summary>
        $scope.$on('vxGridChangeRowClass', function (e, data) {
            if (data.id.localeCompare(self.vxConfig.id) == 0) {
                self.changeRowClass(data.data);
            }
        });

        /// <summary>GRID FUNCTION : CHANGE ROW CLASSES BASED ON ROW DATA RECIEVED</summary>
        self.changeRowClass = function (data) {
            for (var prop in data) {
                self.vxColSettings.vxRowClass[prop] = data[prop];
            }
            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$apply();
            }
        }

        /// <summary>GRID EVENT : LISTEN TO ASK FOR RESETTING OW CLASSES</summary>
        $scope.$on('vxGridResetRowClass', function (e, data) {
            if (data.id.localeCompare(self.vxConfig.id) == 0)
                self.vxColSettings.vxRowClass = {};
        });

        /// <summary>GRID EVENT : LISTEN TO ASK FOR DISABLING ROW SELECTION</summary>
        $scope.$on('vxGridDisableRowSelection', function (e, data) {
            if (data.id.localeCompare(self.vxConfig.id) == 0) {
                _.each(data.data, function (pair) {
                    self.vxColSettings.vxRowSelectionDisable[pair.key] = pair.value;
                });
            }
        });

        /// <summary>GRID EVENT : LISTEN TO ASK FOR RESETTING OF ROW SELECTION DISABLED</summary>
        $scope.$on('vxGridResetDisableRowSelection', function (e, data) {
            if (data.id.localeCompare(self.vxConfig.id) == 0) {
                for (var key in self.vxColSettings.vxRowSelectionDisable)
                    self.vxColSettings.vxRowSelectionDisable[key] = false;
            }
        });
    }

    /// <summary>GENERATE DIMENSIONS FOR THE CURRENT WINDOW OBJECT</summary>
    /// <returns type="OBJECT" />
    VxGridController.prototype.getWindowDimensions = function () {
        var self = this;
        return {
            'h': self.w.height(),
            'w': self.w.width()
        };
    };

    /// <summary>RESETS THE VX INSTANCE AND DEFUALTING ALL APPICABLE PROPERTIES</summary>
    VxGridController.prototype.resetVxInstance = function () {
        var self = this;
        console.log('resetVxInstance', self);
        self.lastScroll = {};
        /// <summary>RE-INITIALIZING ALL VXCOLSETTINGS PROPERTIES</summary>
        self.vxColSettings = {
            'primaryId': null, // COLUMN ID FOR COLUMN DESIGNATED AS PRIMARY 
            'dropdDownEnabled': {}, // STORES WHETHER THE DROPDOWN, TO ACCESS COLUMN OPERATIONS, IS ENABLED/DISABLED FOR COLUMNS IN GRID, USES COLUMN ID AS MAP
            'dropdDownLoaded': {}, // STORES WHETHER THE DROPDOWN, TO ACCESS COLUMN OPERATIONS, IS LOADED OR NOT FOR COLUMNS IN GRID, USES COLUMN ID AS MAP
            'dropdDownOpen': {}, // STORES WHETHER THE DPOPDOWN, TO ACCESS COLUMN OPERATIONS, IS OPENED OR CLOSED FOR COLUMNS IN GRID, USES COLUMN ID AS MAP
            'dropDownSort': {}, // STORES WHETHER THE SORT OPERATION IS ALLOWED IN A DROPDOWN FOR A COLUMN, USES COLUMN ID AS MAP
            'dropDownFilters': {}, // STORES WHETHER THE FILTER OPERATION IS ALLOWED IN A DROPDOWN FOR A COLUMN, USES COLUMN ID AS MAP 
            'dropDownGroup': {}, // STORES WHETHER THE GROUPING OPERATIONIS ALLOWED IN A DROPDOWN FOR A COLUMN, USES COLUMN ID AS MAP
            'colFiltersStatus': {}, //
            'colFilterPairs': {}, // STORES THE FILTER INFORMATION APPLICABLE FOR A SPECIFIC COLUMN
            'colFiltersActivated': {}, // STORES INFORMATION IN WHICH FILTERS ARE APPLIED ACROSS COLUMNS
            'lastProcessedForFilters': {}, //
            'multiSelected': [], // STORES THE REFERENCES FOR ALL ROWS WHICH HAVE BEEN CURRENLT SELECTED
            'multiSelColDependent': false, //
            'reverseSettings': {}, // STORES THE SORT DIRECTIONS CURRENTLY APPLIED FOR COLUMNS WITH BOOLEAN MAPS FOR ASCENDING AND DESCENDING
            'groupPredicate': {}, //
            'groupByColActivated': {}, //
            'rowSelected': {}, // STORES THE INDIVIDUAL ROW SELECTION STATES
            'vxRowClass': {}, // STORES THE CLASSES TO BE APPLIED FOR ROWS 
            'vxRowSelectionDisable': {}, // STORES THE STATES DESIGNATING IF A INDIVIDUAL ROW SELECTION CAN BE TOGGLED OR NOT
            'revealWrapRowData': false, // STORES WHETHER TO ENABLE WRAPPING FOR ROW CELLS
            'selectAllEnabled': true, // 
            'menu': false, //
            'xsViewEnabled': false, // STORES WHETHER THE XS VIEW IS ENABLED OR NOT
            'xsRowTitleTemplateAvailable': false, // STORES WHETHER THE ROW TITLE TEMPLATE IS AVAILABLE FOR XS VIEW
            'xsSearch': '', // STORES THE CURRENTLY TOKE AGAINST WHICH WE ARE SERACHING ACCROSS THE GRID IN XS VIEW
            'searchToken': '', // STORES THE CURRENTLY TOKE AGAINST WHICH WE ARE SERACHING ACCROSS THE GRID
            'inlineEditState': {}, // STORES CURRENT ROW EDIT STATE
            'colWithInlineEdits': [],
            'groupKeys': {},
            'allRowSelected': false, // STORES THE STATE FOR ALL ROW SELECTIONS COMPOSED TO ONE PLACE
            'allRowSelectionDisabled': false, // STORES WHETHER TO ALLOW OR INHIBIT ALL ROW SELECTIONS
            'filterSearchToken': {}, //
            'enteredSearchToken': {}, //
            'saveInProgress': {} // STORES WHETHER A CREATE/EDIT/DELETE OPERATION IS IN PROGRESS
        };
        var start = new Date();
        var end = new Date();
        var dt = new Date();
        //console.log('isnide method 1', dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ':' + dt.getMilliseconds());
        if (self.scope.config.hybrid == true)
            self.vxConfig = self.scope.config;
        else
            self.vxConfig = angular.copy(self.scope.config);
        end = new Date();
        dt = new Date();
        //console.log('isnide method 2', dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ':' + dt.getMilliseconds());
        //console.log(1, end.getTime() - start.getTime());

        /* GETTING / SETTING PRIMARY COLUMN*/
        var _primaryColDefn = _.find(self.vxConfig.columnDefConfigs, function (col) { return col.primary == true });
        var primaryId = '_uid';
        if (typeof _primaryColDefn !== 'undefined' && _primaryColDefn != null) {
            /* PRIMARY COLUMN EXISTS */
            _.each(self.vxConfig.vxData, function (row, index) {
                if (row.fillEmptyElement != true) {
                    row[_primaryColDefn.id] = row[_primaryColDefn.id].toString();
                    row[primaryId] = row[_primaryColDefn.id];
                }
                row['_vxCreated'] = new Date().getTime();
            });
            primaryId = _primaryColDefn.id;
        }
        else {
            /* PRIMARY COLUMN DOES NOT EXISTS */
            _.each(self.vxConfig.vxData, function (row, index) { row.primaryId = index });
        }
        self.vxColSettings.primaryId = primaryId;
        /* ENBALE ROW EDITING INLINE */ /* UNSUPPORTED IN HYBRID MODE */
        if (self.vxConfig.inlineEditingEnabled == true && self.vxConfig.hybrid != true) {
            /* ADDING CHECKBOX COLUMN DEFINITION */
            var col = _.find(self.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare('inlinediting') == 0 });
            if (typeof col === 'undefined' || col == null || col == {}) {
                var _selColDefn = {
                    id: 'inlinediting', columnName: 'Edit', renderDefn: true, renderHeadDefn: true, ddSort: false, ddGroup: false, ddFilters: false, width: '50', locked: true, headTabIndex: -1,
                    cellDefn:
                        '<div class="vx-row-edit icon-container" tabindex="0" ax-key="vxGridCtrl.editRow(VX_ROW_POINT)" ng-show="vxGridCtrl.vxColSettings.inlineEditState[VX_ROW_POINT] == false && vxGridCtrl.vxColSettings.saveInProgress[VX_ROW_POINT] != true" role="button" aria-labelledby="vx_row_edit vx_row_sel_{{::row[vxGridCtrl.vxColSettings.primaryId]}}" >'
                            + '<i class="icon icon-edit"></i>'
                      + '</div>'
                      + '<div class="vx-row-edit icon-container" ax-disabled="vxGridCtrl.vxConfig.invalidRows[row[vxGridCtrl.vxColSettings.primaryId]]" tabindex="0" ax-key="vxGridCtrl.saveRow(VX_ROW_POINT)" ng-show="vxGridCtrl.vxColSettings.inlineEditState[VX_ROW_POINT] == true && vxGridCtrl.vxColSettings.saveInProgress[VX_ROW_POINT] != true" role="button" aria-labelledby="vx_row_save vx_row_sel_{{::row[vxGridCtrl.vxColSettings.primaryId]}}" >'
                        + '<i class="icon icon-save"></i>'
                      + '</div>'
                      + '<div class="vx-row-edit icon-container loader" tabindex="0" ng-show="vxGridCtrl.vxColSettings.saveInProgress[VX_ROW_POINT] == true" role="button" aria-labelledby="vx_row_sel_row vx_row_sel_{{::row[vxGridCtrl.vxColSettings.primaryId]}}" >'
                        + '<img class="loader-row" src="/resource/loaderBlue30.GIF"></i>'
                      + '</div>'
                    , inlineEditOnColumnEnabled: false
                };
                self.vxConfig.columnDefConfigs.unshift(_selColDefn);
            }
            /* SEETING ALL ROW SELECTIONS TO FALSE */
            _.each(self.vxConfig.vxData, function (row, index) {
                var rowId = row[self.vxColSettings.primaryId];
                self.vxColSettings.inlineEditState[rowId] = self.scope.config.allRowsInDefaultEdit || false;
            });
        }
        end = new Date();
        //console.log(2, end.getTime() - start.getTime());
        /* ENBALE ROW SELECTION */
        if (self.vxConfig.selectionEnabled == true) {
            /* ADDING CHECKBOX COLUMN DEFINITION */
            var col = _.find(self.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare('checkbox') == 0 });
            if (typeof col === 'undefined' || col == null || col == {}) {
                var _selColDefn = {
                    id: 'checkbox', columnName: 'Row Selection', columnIsRowSelect: true, renderDefn: true, renderHeadDefn: true, ddSort: false, ddGroup: false, ddFilters: false, width: '50', locked: true, headTabIndex: -1,
                    headerDefn: '<div class="vx-row-select"><input class="vx-row-select-toggle" type="checkbox" ng-disabled="vxConfig.noData == true" ng-model="vxGridCtrl.vxColSettings.allRowSelected" ng-change="vxGridCtrl.allRowSelectionChanged()" ng-disabled="vxGridCtrl.vxColSettings.allRowSelectionDisabled" ng-if="vxConfig.allRowsSelectionEnabled" aria-labelledby="vx_row_sel_all_row"  /></div>',
                    cellDefn: '<div class="vx-row-select"><input class="vx-row-select-toggle" type="checkbox" ng-model="vxGridCtrl.vxColSettings.rowSelected[VX_ROW_POINT]" ng-change="vxGridCtrl.rowSelectionChanged(row)" ng-disabled="vxGridCtrl.vxColSettings.vxRowSelectionDisable[VX_ROW_POINT]" ng-attr-id="vx_row-sel_in{{::row[vxGridCtrl.vxColSettings.primaryId]}}" aria-labelledby="vx_row_sel_row vx_row_sel_{{::row[vxGridCtrl.vxColSettings.primaryId]}}" /></div>'
                };
                self.vxConfig.columnDefConfigs.unshift(_selColDefn);
            }
            /* SEETING ALL ROW SELECTIONS TO FALSE */
            _.each(self.vxConfig.vxData, function (row, index) {
                var rowId = row[self.vxColSettings.primaryId];
                self.vxColSettings.rowSelected[rowId] = false;
                self.vxColSettings.vxRowSelectionDisable[rowId] = false;
            });
        }
        end = new Date();
        //console.log(3, end.getTime() - start.getTime());
        self.multiBoxFilters = [];
        var _propDefns = [
            { prop: 'enableDropdownsInHeader', defValue: false },
            { prop: 'selectionEnabled', defValue: false },
            { prop: 'selectionAtMyRisk', defValue: false },
            { prop: 'multiSelectionEnabled', defValue: false },
            { prop: 'showGridStats', defValue: false },
            { prop: 'showGridOptions', defValue: false },
            { prop: 'selectAllOnRenderAll', defValue: false },
            { prop: 'virtualization', defValue: true },
            { prop: 'pagination', defValue: false },
            { prop: 'pageLength', defValue: 20 },
            { prop: 'data', defValue: [] },
            { prop: 'vxFilteredData', defValue: [] },
            { prop: 'xsRowTitleTemplate', defValue: '<div class="xsRowTemplate">{{row[vxGridCtrl.vxColSettings.primaryId]}}</div>' },
            { prop: 'inlineAddRowEnabled', defValue: false },
            { prop: 'inlineEditSyncEnabled', defValue: false },
            { prop: 'inlineDeletingEnabled', defValue: false },
            { prop: 'inlineSaveOverrideEnabled', defValue: false },
            { prop: 'inlineDeleteOverrideEnabled', defValue: false },
            { prop: 'allRowsInDefaultEdit', defValue: false },
            { prop: 'jsonEditorEnabled', defValue: false },
            { prop: 'allRowsSelectionEnabled', defValue: false },
            { prop: 'sortPredicate', defValue: self.vxColSettings.primaryId },
            { prop: 'reverseSortDirection', defValue: false },
            { prop: 'emptyFill', defValue: '<span>No records to display ...</span>' },
            { prop: 'loaderGifSrc', defValue: '/resource/loaderWhite36.GIF' },
            { prop: 'ariaPrimary', defValue: self.vxColSettings.primaryId },
            { prop: 'xsTemplate', defValue: false },
            { prop: 'bindOnce', defValue: false },
            { prop: 'hybrid', defValue: false },
            { prop: 'latchExcess', defValue: 5 },   // STORES THE NUMBER OF ROWS WHICH NEED TO BE BROUGHT TO THE VIEW AS A RESULT OF VIRTUALIZATION
        ];
        _.each(_propDefns, function (propDefn) {
            if (self.vxConfig[propDefn.prop] === 'undefined' || self.vxConfig[propDefn.prop] == null || self.vxConfig[propDefn.prop] == {})
                self.vxConfig[propDefn.prop] = propDefn.defValue;
        });
        self.vxColSettings.vxRowClass = self.vxConfig['initialRowClasses'] || {};
        // SETTING XS VIEW BASED PROPERTIES BASED ON WINDOW WIDTH
        if (self.getWindowDimensions().w < 768) {
            self.vxColSettings.xsViewEnabled = true && self.vxConfig.xsTemplate;
            self.vxConfig.latchExcess = 5;
        }
        end = new Date();
        //console.log(4, end.getTime() - start.getTime());
        self.vxColSettings.selectAllOnRenderAll = self.vxConfig.selectAllOnRenderAll;
        _.each(self.vxConfig.columnDefConfigs, function (col) {
            /* SET DEAFULTS FOR COLUMNS */
            var _propDefns = [
                { prop: 'renderDefn', defValue: false },
                { prop: 'renderHeadDefn', defValue: false },
                { prop: 'ddSort', defValue: false },
                { prop: 'ddGroup', defValue: false },
                { prop: 'ddFilters', defValue: false },
                { prop: 'ddFiltersWithSearch', defValue: false },
                { prop: 'dropDownEnabled', defValue: false },
                { prop: 'hidden', defValue: false },
                { prop: 'xsHidden', defValue: false },
                { prop: 'locked', defValue: false },
                { prop: 'primary', defValue: false },
                { prop: 'width', defValue: '200' },
                { prop: 'headerDefn', defValue: '' },
                { prop: 'cellDefn', defValue: '' },
                { prop: 'filterCellDefn', defValue: '' },
                { prop: 'inlineEditOnColumnEnabled', defValue: false },
                { prop: 'inlineEditValidation', defValue: false },
                { prop: 'editDefn', defValue: null },
                { prop: 'editDefnTemplate', defValue: null },
                { prop: 'headTabIndex', defValue: 0 },
                { prop: 'columnIsRowSelect', defValue: false },
                { prop: 'columnIsDate', defValue: false },
                { prop: 'columnDatePipe', defValue: 'dd/MM/yyyy' },
                { prop: 'renderHybridCellDefn', defValue: false },
                { prop: 'hybridCompile', defValue: false },
                { prop: 'filterLimit', defValue: 10 }
            ];
            _.each(_propDefns, function (propDefn) {
                if (col[propDefn.prop] === 'undefined' || col[propDefn.prop] == null || col[propDefn.prop] == {})
                    col[propDefn.prop] = propDefn.defValue;
            });
            col.effectiveWidth = col.width;
            col.idCollection = [];
            var _propDefnLocks = [
                { prop: 'orderLocked', defValue: false },
                { prop: 'widthLocked', defValue: false },
                { prop: 'visbilityLocked', defValue: false }
            ];
            _.each(_propDefnLocks, function (propDefn) {
                if (col[propDefn.prop] === 'undefined' || col[propDefn.prop] == null || col[propDefn.prop] == {})
                    col[propDefn.prop] = col['locked'];
                else
                    col[propDefn.prop] = col['locked'] || col[propDefn.prop];
            });
            self.vxColSettings.reverseSettings[col.id] = false;
            /* SETTING DROPDOWNS LOADED TO FALSE */
            if (typeof col.dropDownEnabled !== 'undefined' && col.dropDownEnabled != null && col.dropDownEnabled == true && self.vxConfig.enableDropdownsInHeader == true) {
                self.vxColSettings.dropdDownEnabled[col.id] = true;
            }
            else {
                self.vxColSettings.dropdDownEnabled[col.id] = false;
            }
            self.vxColSettings.dropdDownLoaded[col.id] = false;
            self.vxColSettings.dropdDownOpen[col.id] = false;
            if (typeof col.renderDefn !== 'undefined' && col.renderDefn != null && col.renderDefn != {} && col.renderDefn == true) {
                col.cellDefn = col.cellDefn.replaceAll("VX_ROW_POINT", "row[vxGridCtrl.vxColSettings.primaryId]");
                col.cellDefn = col.cellDefn.replaceAll("VX_DATA_POINT", "row[header.id]");
                col.cellDefn = col.cellDefn.replaceAll("VX_ROW", "row");
                col.cellDefn = col.cellDefn.replaceAll("VX_CONFIG", "vxConfig")
            }
            /* UNSUPPORTED IN HYBRID MODE */
            if (col.inlineEditOnColumnEnabled == true && self.vxConfig.hybrid != true) {
                if (col.editDefn == '' || col.editDefn == null)
                    col.editDefn = '<input class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />';
                col.editDefn = col.editDefn.replaceAll("VX_ROW_POINT", "row[vxGridCtrl.vxColSettings.primaryId]");
                col.editDefn = col.editDefn.replaceAll("VX_DATA_POINT", "row[header.id]");
                col.editDefn = col.editDefn.replaceAll("VX_ROW", "row");
                col.editDefn = col.editDefn.replaceAll("VX_CONFIG", "vxGridCtrl.vxConfig")
                self.vxColSettings.colWithInlineEdits.push(col.id);
                if (col.editDefn.indexOf('vx-keep-watch') != -1) {
                    col.editDefn = col.editDefn.replaceAll("vx-keep-watch", "vx-keep-watch-row-id=\"{{row[vxGridCtrl.vxColSettings.primaryId]}}\" vx-keep-watch-field=\"" + col.id + "\" vx-keep-watch");
                }

                if (col.inlineEditValidation == true) {
                    self.vxConfig.invalidRows = {};
                    self.vxConfig.invalidRowFields = {};
                    _.each(self.vxConfig.vxData, function (row, index) {
                        var rowId = row[self.vxColSettings.primaryId];
                        self.vxConfig.invalidRows[rowId] = false;
                        self.vxConfig.invalidRowFields[rowId] = {};
                    });
                    col.editDefn = col.editDefn.replaceAll("VX_INVALID_ROW", "vxGridCtrl.vxConfig.invalidRows[row[vxGridCtrl.vxColSettings.primaryId]] == true");
                    col.editDefn = col.editDefn.replaceAll("VX_INVALID_FIELD_ROW", "vxGridCtrl.vxConfig.invalidRowFields[row[vxGridCtrl.vxColSettings.primaryId]]." + col.id + " == true");
                }

            }
        });
        end = new Date();
        //console.log(5, end.getTime() - start.getTime());
        self.vxConfig.columnDefConfigs = self.calculateEffectiveWidths(self.vxConfig.columnDefConfigs);
        if (typeof self.vxConfig.multiSelectionDependentCol !== 'undefined'
            && self.vxConfig.multiSelectionDependentCol != null
            && self.vxConfig.multiSelectionDependentCol != {}
            && self.vxConfig.multiSelectionDependentCol != '')
            self.vxColSettings.multiSelColDependent = true;
        if (typeof self.vxConfig.xsRowTitleTemplate !== 'undefined'
                            && self.vxConfig.xsRowTitleTemplate != null
                            && self.vxConfig.xsRowTitleTemplate != {}
                            && self.vxConfig.xsRowTitleTemplate != '') {
            self.vxColSettings.xsRowTitleTemplateAvailable = true;
        }
        /* GENERATE TEMPLATE IF NOT AVAILBLE FOR NEW ROW */ /* UNSUPPORTED IN HYBRID MODE */
        if (self.vxConfig.inlineAddRowEnabled == true && self.vxConfig.hybrid != true) {
            if (typeof self.vxConfig.newRowTemplate === 'undefined' || self.vxConfig.newRowTemplate == null || self.vxConfig.newRowTemplate == {} || self.vxConfig.newRowTemplate == '') {
                var newRowTemplate = angular.copy(self.vxConfig.data[0]);
                _.each(self.vxConfig.columnDefConfigs, function (col) {
                    switch (typeof self.vxConfig.newRowTemplate[col.id]) {
                        case 'boolean':
                            self.vxConfig.newRowTemplate[col.id] = false;
                            break;
                        case 'number':
                            self.vxConfig.newRowTemplate[col.id] = 0;
                            break;
                        case 'string':
                            self.vxConfig.newRowTemplate[col.id] = '';
                            break;
                        default:
                            self.vxConfig.newRowTemplate[col.id] = null;
                    }
                });
                self.vxConfig.newRowTemplate = newRowTemplate;
            }
        }

        /// <summary>GRID FUNCTION : WATCH OVER THE WINDOW DIMENSIONS SO AS TO ENABLE XS VIEW WHEN WIDTH < 768PX </summary>

        var vxWindowsWidthDeregister = self.scope.$watch(angular.bind(this, function () {
            return this.getWindowDimensions()
        }), function (newValue, oldValue) {
            if (newValue.w < 768)
                self.vxColSettings.xsViewEnabled = true;
            else
                self.vxColSettings.xsViewEnabled = false;
        }, true);

        if (self.vxConfig.xsTemplate == false) {
            vxWindowsWidthDeregister();
        }
        self.w.bind('resize', function () {
            self.scope.$apply();
        });

        /* GENERATE VX INSTANCE ID AND SEND BACK*/
        self.scope.config.id = self.vxConfig.id = _.uniqueId('_vxUID_');

        /// <summary>CONFIG EXTENSION TO GET CURRENT STATE OF DIFFERENT COUNTS</summary>
        /// <returns type="OBJECT" />
        self.scope.config.getVxCounts = function () {
            if (typeof self.vxConfig !== 'undefined' && self.vxConfig != null && self.vxConfig != {} && self.vxConfig.id !== 'undefined' && self.vxConfig.id != null && self.vxConfig.id != {}) {
                var res = {
                    'id': self.vxConfig.id,
                    'data': {
                        'vxAllDataLength': self.getAllRowLength(),
                        'vxFilteredDataLength': self.multiBoxFilters.length > 0 ? (self.vxConfig.hybrid != true ? self.vxConfig.vxFilteredData.length : self.vxConfig.vxData.length) : 0,
                        'vxSelectedDataLength': self.vxColSettings.multiSelected.length
                    }
                }
                //console.log(res);
                return res;
            }
            else
                return undefined;
        }

        /// <summary>CONFIG EXTENSION TO GET CURRENT DATA SUPPLIED TO THE VX GRID</summary>
        /// <returns type="ARRAY OF OBJECT" />
        self.scope.config.getData = function () {
            return self.vxConfig.data;
        }

        /// <summary>CONFIG EXTENSION TO GET ACTIVE DATA BOUND TO THE VX GRID</summary>
        /// <returns type="ARRAY OF OBJECT" />
        self.scope.config.getActiveDataSet = function () {
            return self.vxConfig.vxData;
        }

        /// <summary>CONFIG EXTENSION TO GET ACTIVELY FILTERED DATA</summary>
        /// <returns type="ARRAY OF OBJECT" />
        self.scope.config.getFilteredDataSet = function () {
            return self.vxConfig.vxFilteredData;
        }

        /// <summary>CONFIG EXTENSION TO SET ROW VALIDATION PROPERTIES - INVALID ROWS/FILEDS</summary>
        /// <param name="id" type="String">ROW ID</param>
        /// <param name="field" type="String">FIELD NAME / COLUMN NAME</param>
        /// <param name="valid" type="Boolean">WHETHER TRUE OR FALSE</param>
        self.scope.config.setRowFieldValidation = function (id, field, valid) {
            if (typeof self.vxConfig.invalidRowFields[id] === 'undefined') {
                self.vxConfig.invalidRows[id] = false;
                self.vxConfig.invalidRowFields[id] = {};
            }
            if (self.vxConfig.inlineEditSyncEnabled == true) {
                var exists = _.filter(self.vxColSettings.multiSelected, function (uid) { return uid.localeCompare(id) == 0 });
                if (typeof exists !== 'undefined' && exists != null && exists.length > 0) {
                    _.each(self.vxColSettings.multiSelected, function (uid) {
                        self.vxConfig.invalidRows[uid] = !valid;
                        self.vxConfig.invalidRowFields[uid][field] = !valid;
                    });
                }
            }
            self.vxConfig.invalidRows[id] = !valid;
            self.vxConfig.invalidRowFields[id][field] = !valid;
        }

        /// <summary>CONFIG EXTENSION TO GET LIST OF ROW IDS WHICH ARE CURRENTLY SELECTED</summary>
        /// <returns type="ARRAY OF INT" />
        self.scope.config.getSelectedRows = function () {
            if (self.vxConfig.selectionAtMyRisk == true) {
                self.vxColSettings.multiSelected = [];
                for (var id in self.vxColSettings.rowSelected) {
                    if (self.vxColSettings.rowSelected[id] == true) {
                        self.vxColSettings.multiSelected.push(id);
                    }
                }
            }
            return self.vxColSettings.multiSelected;
        }

        /// <summary>CONFIG EXTENSION TO GET LIST OF ROW IDS WHICH ARE CURRENTLY BEING EDITED</summary>
        /// <returns type="ARRAY OF INT" />
        self.scope.config.getRowsBeingEdited = function () {
            var _beingEdited = [];
            if (typeof self.vxColSettings.inlineEditState !== 'undefined' && self.vxColSettings.inlineEditState != null) {
                for (var arg in self.vxColSettings.inlineEditState) {
                    if (self.vxColSettings.inlineEditState[arg] == true)
                        _beingEdited.push(arg);
                }
            }
            return _beingEdited;
        }

        /// <summary>CONFIG EXTENSION TO MODIFY ROW VALUES USING PROGRAMMATIC ACCESS</summary>
        /// <param name="rows" type="ARRAY OF OBJECT">LIST OF ROW WHICH NEED TO BE MONIFIED</param>
        /// <param name="fields" type="ARRAY OF STRING">LIST OF FIELDS WHICH NEED TO BE MODIFIED</param>
        /// <returns type="ARRAY OF OBJECT" />
        self.scope.config.modifyRows = function (rows, fields) {
            var _newStates = [];
            _.each(rows, function (_nrow) {
                var id = _nrow[self.vxColSettings.primaryId];
                var _vxdRow = _.find(self.vxConfig.vxData, function (row) { return row[self.vxColSettings.primaryId].localeCompare(id) == 0 });
                var _dRow = _.find(self.vxConfig.data, function (row) { return row[self.vxColSettings.primaryId].localeCompare(id) == 0 });
                if (typeof _vxdRow !== 'undefined' && typeof _dRow !== 'undefined') {
                    if (typeof fields === 'undefined' || fields.length == 0) {
                        for (var args in _nrow) {
                            if (args.localeCompare(self.vxColSettings.primaryId) != 0) {
                                _vxdRow[args] = _nrow[args];
                                _dRow[args] = _nrow[args];
                            }
                        }
                    }
                    else if (fields.length > 0) {
                        _.each(fields, function (_field) {
                            _vxdRow[_field] = _nrow[_field];
                            _dRow[_field] = _nrow[_field];
                        });
                    }
                    _newStates.push(_dRow);
                    if (self.vxConfig.hybrid == true) {
                        self.hybridUpdateRows(_newStates);
                    }
                }
            });
            return _newStates;
        }

        /// <summary>CONFIG EXTENSION TO SELETCT ROWS USING PROGRAMMTIC ACCESS</summary>
        /// <param name="ids" type="ARRAY OF INT">LIST OF ROW IDs TO BE SELECTED</param>
        /// <returns type="ARRAY OF INT" />
        self.scope.config.selectRows = function (ids) {
            var _modIds = [];
            _.each(ids, function (_id) {
                var _ostate = self.vxColSettings.rowSelected[_id];
                if (typeof _ostate === 'undefined' || _ostate == null || _ostate == false) {
                    self.vxColSettings.rowSelected[_id] = true;
                    self.vxColSettings.multiSelected.push(_id);
                    _modIds.push(_id);//vx_row-sel_in_XXX-XXXX-XXXX_0_0
                    if (self.vxConfig.hybrid == true) {
                        var _element = angular.element(document.getElementById('vx_row-sel_in_' + _id));
                        if (typeof _element !== 'undefined' && _element != null && _element.length > 0) {
                            $(_element).prop('checked', true);
                        }
                    }
                    if (self.vxConfig.hybrid == true) {
                        var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
                        if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                            $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
                        }
                    }
                }
            });
            return _modIds;
        }

        /// <summary>CONFIG EXTENSION TO DESELECT ROWS USING PROGRAMMTIC ACCESS</summary>
        /// <param name="ids" type="ARRAY OF INT">LIST OF ROW IDs TO BE DESELECTED</param>
        /// <returns type="ARRAY OF INT" />
        self.scope.config.deselectRows = function (ids) {
            var _modIds = [];
            _.each(ids, function (_id) {
                var _ostate = self.vxColSettings.rowSelected[_id];
                if (typeof _ostate !== 'undefined' && _ostate == true) {
                    self.vxColSettings.rowSelected[_id] = false;
                    self.vxColSettings.multiSelected = _.reject(self.vxColSettings.multiSelected, function (mid) { _id.localeCompare(mid) == 0 });
                    _modIds.push(_id);
                    if (self.vxConfig.hybrid == true) {
                        var _element = angular.element(document.getElementById('vx_row-sel_in_' + _id));
                        if (typeof _element !== 'undefined' && _element != null && _element.length > 0) {
                            $(_element).prop('checked', false);
                        }
                    }
                    if (self.vxConfig.hybrid == true) {
                        var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
                        if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                            $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
                        }
                    }
                }
            });
            return _modIds;
        }

        /// <summary>CONFIG EXTENSION TO SORT COLUMN USING PROGRAMMTIC ACCESS</summary>
        /// <param name="id" type="String">ID FOR COLUMN IN WHICH WE NEED TO SORT</param>
        /// <param name="direction" type="Boolean">SET TO TRUE TO SORT IN REVERSE ELSE SET TO FALSE</param>
        self.scope.config.sortByColumn = function (id, direction) {
            self.vxConfig.sortPredicate = id;
            self.vxConfig.reverseSortDirection = direction;
        }

        /// <summary>CONFIG EXTENSION TO RESET COLUMN FILTERS USING PROGRAMMTIC ACCESS</summary>
        /// <param name="ids" type="ARRAY OF INT">LIST OF COLUMN IDS FOR WHICH WE WOULD RESET THE FILTERS</param>
        self.scope.config.resetColumnFilters = function (ids) {
            _.each(ids, function (id) {
                self.vxColSettings.dropdDownLoaded[id] = false;
                self.vxColSettings.colFilterPairs[id] = {};
            });
        }

        self.buildFns();

        /// <summary>CONFIG EXTENSION TO CHANGE ROW CLASSES USING PROGRAMMATIC ACCESS</summary>
        self.scope.config.changeRowClass = self.scope.changeRowClass;

        self.scope.$emit('vxGridSettingsBuilt', {
            'id': self.vxConfig.id
        });
        end = new Date();
        //console.log(6, end.getTime() - start.getTime());

        /// <summary> STATIC MAPS FOR ENABLING HYBRID MODE SUPPORT</summary>
        self._hybridContainer = null;
        self._scrollContainer = null;
        self._rowHeight = 48;
        self._excess = self.vxConfig.latchExcess;
        self._lastIndexCount = 0;
        self._lastScrollDown = false;
        self._lastScrollTop = 0;

        self.scope.config.hybridDeleteRows = function (rowIds) {
            window.requestAnimFrame(function () {
                angular.forEach(rowIds, function (id) {
                    var rowElement = angular.element(document.getElementById(id));
                    rowElement.remove();
                    self.vxColSettings.inlineEditState[id] = false;
                    self.vxColSettings.rowSelected[id] = false;
                    self.vxColSettings.saveInProgress[id] = false;
                });
                self.vxColSettings.multiSelected = _.difference(self.vxColSettings.multiSelected, rowIds);
                if (self.vxConfig.hybrid == true) {
                    var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
                    if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                        $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
                    }
                }
            });

        }

        end = new Date();
        //console.log(7, end.getTime() - start.getTime());
        //console.log(self.vxConfig.vxFilteredData);
        if (self.vxConfig.hybrid == true) {
            //self.vxConfig.vxFilteredData = self.vxConfig.vxData;
            end = new Date();
            self.prepHybrid();
            //self.timeout(self.prepHybrid(), 100);
        }

    }

    /// <summary>GRID FUNCTION : UPDATE ROWS</summary>
    VxGridController.prototype.hybridUpdateRows = function (rows) {
        var self = this;
        angular.forEach(rows, function (row) {
            var _result = self.hybridGetRowTmpl(row);
            var rowElement = angular.element(document.getElementById(_result.rowId));
            rowElement.empty();
            rowElement.replaceWith(_result.rowTmpl);
            if (_result.compile) {
                self.compile(rowElement.contents())(self.scope);
            }
        });
    }

    /// <summary>GRID FUNCTION : TO RESET THE HYBRID SCROLL WHEN SORT OR FILTER OR GROUP AFFECTED</summary>
    VxGridController.prototype.resetHybridGrid = function () {
        var self = this;
        self._lastIndexCount = 0;
        self._lastScrollDown = false;
        self._lastScrollTop = 0;
        self.prepHybrid();

    }

    /// <summary>GRID FUNCTION : TO PREP THE GRID FOR FIRST TIME INITIATIONS FOR HYBRID MODE</summary>
    VxGridController.prototype.prepHybrid = function () {
        var self = this;
        self._hybridContainer = angular.element(document.getElementById('_vxHybrid' + self.vxConfig.id));
        self._scrollContainer = angular.element(document.getElementById('_vxScrollContainer' + self.vxConfig.id));
        self._hybridContainer.empty();
        var _height = self._scrollContainer.height();
        var _initRowCount = Math.ceil(_height / self._rowHeight) + self._excess;
        var _rows = _.first(self.vxConfig.vxData, _initRowCount);
        self.appendRows(_rows);
        self._lastIndexCount = self._lastIndexCount + _initRowCount;
        self._scrollContainer.on('scroll', function () {
            self.debPep();
        });

    }

    /// <summary>GRID FUNCTION : PREPEARE AND INSERT ROWS WHEN SCROLL DOWN WHEN IN HYBRID MODE</summary>
    VxGridController.prototype.prepForScrollInsertion = function () {
        var self = this;
        var diff = self._hybridContainer.height() - (self._scrollContainer.height() + self._scrollContainer.scrollTop());
        if (self._scrollContainer.scrollTop() > self._lastScrollTop) {
            if (diff < 0)
                diff = 0;
            if (diff < self._rowHeight && self._lastIndexCount < self.vxConfig.vxData.length) {
                var _initRowCount = self._excess;
                var _restRows = _.rest(self.vxConfig.vxData, self._lastIndexCount);
                var _rows = _.first(_restRows, _initRowCount);
                self._lastIndexCount = self._lastIndexCount + _initRowCount;
                self.appendRows(_rows);
                self._scrollContainer.scrollTo(0, self._scrollContainer.scrollTop() - 48);
            }
        }
        self._lastScrollTop = self._scrollContainer.scrollTop();
    }

    /// <summary>GRID FUNCTION : DEBOUNCED VERSION FOR THE PREPFORSCROLLINDERSTION</summary>
    VxGridController.prototype.debPep = _.debounce(VxGridController.prototype.prepForScrollInsertion, 10);

    /// <summary>GRID FUNCTION : APPEND ROWS WHEN TOGGLING COMPILATION</summary>
    VxGridController.prototype.compileAppend = function (rowTmpl, id, flag) {
        var self = this;
        $(document.getElementById('_vxHybrid' + self.vxConfig.id)).append(rowTmpl);
        if (flag) {
            var _row = angular.element(document.getElementById(id));
            self.compile(_row.contents())(self.scope);
        }
    }

    VxGridController.prototype.hybridGetRowTmpl = function (row) {
        var self = this;
        var rowTmpl = '<tr id="VX_ROW_ID" class="vxBodyRow vs-repeat-repeated-element VX_ROW_CLASSES ">VX_ALL_CELLS</tr>';
        var cellHolderTmpl = '<td class="vxBodyRowCell VX_TD_CLASS">VX_CELL_CONTENT</td>';
        var emptyRowTempl = '<td colspan="VX_NON_HIDDEN_COL_LEN" style="padding-left:15px;"><span>VX_EMPTYFILL</span></td>';
        var cellTmplContent = '<span title="VX_CELL_TMPL">VX_CELL_TMPL</span>';
        var cellTmplRowSelect = '<div class="vx-row-select"><input class="vx-row-select-toggle" rowid="VX_ROW_ID" type="checkbox" id="vx_row-sel_in_VX_ROW_ID" aria-labelledby="vx_row_sel_row vx_row_sel_VX_ROW_ID" /></div>';
        var allCells = '';
        var _classes = '';
        var rowId = row[self.vxColSettings.primaryId];
        var _compile = false;
        if (self.scope.config.noData != true) {
            angular.forEach(self.vxConfig.columnDefConfigs, function (col) {
                var _cellTmpl = '';
                var _cellHolder = cellHolderTmpl;
                var _cellClass = '';
                if (col.hidden != true) {
                    if (col.renderHybridCellDefn != true && col.columnIsRowSelect != true && col.columnIsDate != true) {
                        var _data = typeof row[col.id] !== 'undefined' && row[col.id] != null ? row[col.id] : '';
                        _cellTmpl = cellTmplContent;
                        _cellTmpl = _cellTmpl.replaceAll('VX_CELL_TMPL', _data);
                    }
                    else if (col.renderHybridCellDefn != true && col.columnIsDate == true) {
                        var _data = typeof row[col.id] !== 'undefined' && row[col.id] != null ? row[col.id] : null;
                        var _dtData = self.filter('date')(_data, col.columnDatePipe);
                        _cellTmpl = cellTmplContent;
                        _cellTmpl = _cellTmpl.replaceAll('VX_CELL_TMPL', typeof _dtData === 'undefined' || _dtData == null ? '' : _dtData);
                    }
                    else if (col.renderHybridCellDefn != true && col.columnIsRowSelect == true) {
                        var _data = typeof row[col.id] !== 'undefined' && row[col.id] != null ? row[col.id] : null;
                        //console.log(14);
                        var _rowSelectData = self.vxColSettings.rowSelected[rowId] || false;
                        _cellTmpl = cellTmplRowSelect;
                        _cellTmpl = _cellTmpl.replaceAll('VX_ROW_ID', rowId);
                        _cellTmpl = _cellTmpl.replace('VX_ROW_SEL_VAL', _rowSelectData);
                        //_compile = _compile || true;
                    }
                    else if (col.renderHybridCellDefn == true && typeof self.vxConfig.hybridCellDefn === 'function') {
                        _cellTmpl = self.vxConfig.hybridCellDefn(row, col) || '';
                        _compile = _compile || col.hybridCompile;
                    }
                    _cellHolder = _cellHolder.replace('VX_TD_CLASS', _cellClass);
                    _cellHolder = _cellHolder.replace('VX_CELL_CONTENT', _cellTmpl);
                    allCells = allCells + _cellHolder;
                }
            });
        }
        else {
            var _nonHiddenColLength = self.getNonHiddenColCount();
            emptyRowTempl = emptyRowTempl.replace('VX_NON_HIDDEN_COL_LEN', _nonHiddenColLength);
            emptyRowTempl = emptyRowTempl.replace('VX_EMPTYFILL', self.vxConfig.emptyFill);
            allCells = emptyRowTempl;
        }
        if (typeof self.vxConfig.hybridCellDefn === 'function') {
            _classes = _classes + self.vxConfig.rowClassFn(row);
        }
        _classes = _classes + ' ' + (typeof self.vxColSettings.vxRowClass[rowId] !== 'undefined' ? self.vxColSettings.vxRowClass[rowId] : '');
        _classes = _classes.trim();
        rowTmpl = rowTmpl.replace('VX_ROW_CLASSES', _classes);
        rowTmpl = rowTmpl.replace('VX_ROW_ID', rowId);
        rowTmpl = rowTmpl.replaceAll('VX_ALL_CELLS', allCells);
        return { 'rowTmpl': rowTmpl, 'rowId': rowId, 'compile': _compile };
    }

    /// <summary>GRID FUNCTION : PREP ROWS FOR APPEND ROWS TO CONTAINER WHEN IN HYBRID MODE</summary>
    VxGridController.prototype.appendRows = function (rows) {
        var self = this;
        angular.forEach(rows, function (row) {
            var _result = self.hybridGetRowTmpl(row);
            console.log(row);
            self.compileAppend(_result.rowTmpl, _result.rowId, _result.compile);
        });
        if (self.vxConfig.selectionEnabled == true) {
            var elements = document.getElementsByClassName('vx-row-select-toggle');
            _.each(elements, function (ele) {
                var _angElement = angular.element(ele);
                _angElement.on('click', function (e) {
                    var _rowId = $(e.target).attr('rowid');
                    console.log('click');
                    var _currentState = $(e.target).prop('checked');
                    self.vxColSettings.rowSelected[_rowId] = _currentState;
                    var result = { 'key': _rowId, 'value': self.vxColSettings.rowSelected[_rowId], '_pKey': _rowId };
                    if (self.vxConfig.selectionAtMyRisk == true) {
                        if (typeof self.scope.config.rowSelectionCallback === 'function') {
                            self.scope.config.rowSelectionCallback(result);
                        }
                    }
                    else
                        self.rowSelectionChanged(_rowId);
                });
            });
        }
    }


    /// <summary>GRID FUNCTION : SAVE ROWS ONCE EDITED OR CREATED</summary>
    /// <param name="id" type="String">ROW ID OF THE ROW BEING CREATED OR EDITED</param>
    VxGridController.prototype.savingRows = function (id) {
        var self = this;
        var cRow = _.find(self.vxConfig.vxData, function (row) { return row[self.vxColSettings.primaryId] == id; })
        if (typeof cRow !== 'undefined' && cRow.newRow == true) {
            if (self.vxConfig.inlineSaveOverrideEnabled == true) {
                self.vxColSettings.saveInProgress[id] = true;
                var defer = self.q.defer();
                defer.promise.then(function (data) {
                    if (typeof cRow.row !== 'undefined' && data.save == true) {
                        cRow.newRow = false;
                        _.each(self.vxConfig.columnDefConfigs, function (col) {
                            cRow[col.id] = data.row[col.id];
                        });
                    }
                    else {
                        self.vxConfig.data.unshift(cRow);
                    }
                    self.vxColSettings.inlineEditState[id] = typeof data.save !== 'undefined' && data.save != null && data.save == true ? false : true;
                    self.scope.$emit('vxGridRowSave', { 'id': self.vxConfig.id, 'data': cRow, 'save': !self.vxColSettings.inlineEditState[id] });
                    self.vxColSettings.saveInProgress[id] = false;
                }, function (data) {
                    /* FAILURE SAVE */
                    //console.log('Error : Save Failed');
                    //console.log(data);
                    self.vxColSettings.saveInProgress[id] = false;
                    self.vxColSettings.inlineEditState[id] = true;
                    cRow.newRow = true;
                });
                defer.resolve(self.scope.config.fnInlineSaveOverride(cRow, null));
            }
            else {
                if (typeof oRow !== 'undefined') {
                    _.each(self.vxConfig.columnDefConfigs, function (col) {
                        oRow[col.id] = cRow[col.id];
                    });
                }
                else {
                    self.vxConfig.data.unshift(cRow);
                }
                self.vxColSettings.inlineEditState[id] = false;
                self.$emit('vxGridRowSaved', { 'id': self.vxConfig.id, 'data': cRow });
            }
        }
        else {
            var oRow = _.find(self.vxConfig.data, function (row) { return row[self.vxColSettings.primaryId] == id; })
            if (typeof cRow !== 'undefined' && typeof oRow !== 'undefined') {
                if (self.vxConfig.inlineSaveOverrideEnabled == true) {
                    self.vxColSettings.saveInProgress[id] = true;
                    var defer = self.q.defer();
                    defer.promise.then(function (data) {
                        if (typeof data.row !== 'undefined' && data.save == true) {
                            _.each(self.vxColSettings.colWithInlineEdits, function (head) {
                                oRow[head] = data.row[head];
                            });
                        }
                        self.vxColSettings.inlineEditState[id] = typeof data.save !== 'undefined' && data.save != null && data.save == true ? false : true;
                        self.scope.$emit('vxGridRowSave', { 'id': self.vxConfig.id, 'data': cRow, 'save': !self.vxColSettings.inlineEditState[id] });
                        self.vxColSettings.saveInProgress[id] = false;
                    }, function (data) {
                        /* FAILURE SAVE */
                        //console.log('Error : Save Failed');
                        //console.log(data);
                        self.vxColSettings.saveInProgress[id] = false;
                        self.vxColSettings.inlineEditState[id] = true;
                    });
                    defer.resolve(self.scope.config.fnInlineSaveOverride(cRow, oRow));
                }
            }
        }
    }

    /// <summary>GRID FUNCTION : HANDLES SAVING FOR ALL MULTI SELECTED ROWS WHEN ONE OF THEM IS SELECTED</summary>
    /// <param name="id" type="String">ROW ID WHERE THE SAVE COMMAND ORIGINATED</param>
    VxGridController.prototype.saveRow = function (id) {
        var self = this;
        var saved = false;
        if (self.vxConfig.inlineEditSyncEnabled == true) {
            var exists = _.filter(self.vxColSettings.multiSelected, function (uid) { return uid.localeCompare(id) == 0 });
            if (typeof exists !== 'undefined' && exists != null && exists.length > 0) {
                _.each(self.vxColSettings.multiSelected, function (uid) {
                    self.scope.savingRows(uid);
                    saved = true;
                });
            }
        }
        if (!saved) {
            self.savingRows(id);
        }
    }

    /// <summary>GRID FUNCTION : HANDLES REVERTING EDITS FOR ROWS MULTI SELECTED </summary>
    VxGridController.prototype.revertEdits = function () {
        var self = this;
        if (typeof self.vxColSettings.multiSelected !== 'undefined' && self.vxColSettings.multiSelected != null & self.vxColSettings.multiSelected.length > 0) {
            _.each(self.vxColSettings.multiSelected, function (uid) {
                self.revertEditForRow(uid);
                self.vxColSettings.rowSelected[uid] = false;
                if (self.vxConfig.hybrid == true) {
                    var _element = angular.element(document.getElementById('vx_row-sel_in_' + uid));
                    if (typeof _element !== 'undefined' && _element != null && _element.length > 0) {
                        $(_element).prop('checked', false);
                    }
                }
            });
            self.vxColSettings.multiSelected = [];
            if (self.vxConfig.hybrid == true) {
                var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
                if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                    $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
                }
            }
        }
    }

    /// <summary>GRID FUNCTION : REVERTS EDIT STATE OF A ROW BY SHIFTING TO THE ERSTWHILE PRISTINE STATE</summary>
    /// <param name="id" type="String">ID FOR ROW WHOSE EDITS HAVE TO BE REVERTED</param>
    VxGridController.prototype.revertEditForRow = function (id) {
        var self = this;
        var cRow = _.find(self.vxConfig.vxData, function (row) { return row[self.vxColSettings.primaryId] == id; });
        if (typeof cRow !== 'undefined' && cRow.newRow == true) {
            self.vxColSettings.inlineEditState[id] = false;
            //console.log(11);
            self.vxColSettings.rowSelected[id] = false;
            if (self.vxConfig.hybrid == true) {
                var _element = angular.element(document.getElementById('vx_row-sel_in_' + id));
                if (typeof _element !== 'undefined' && _element != null && _element.length > 0) {
                    $(_element).prop('checked', false);
                }
            }
            self.vxColSettings.multiSelected = _.reject(self.vxColSettings.multiSelected, function (mid) { id.localeCompare(mid) == 0 });
            self.vxConfig.vxData = _.reject(self.vxConfig.vxData, function (row) { return row[self.vxColSettings.primaryId].localeCompare(id) == 0 });
            self.scope.$emit('vxGridRowEditRevert', { 'id': self.vxConfig.id, 'data': cRow });
            if (self.vxConfig.hybrid == true) {
                var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
                if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                    $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
                }
            }
        }
        else {
            var oRow = _.find(self.vxConfig.data, function (row) { return row[self.vxColSettings.primaryId] == id; })
            if (typeof cRow !== 'undefined' && typeof oRow !== 'undefined') {
                _.each(self.vxColSettings.colWithInlineEdits, function (head) {
                    cRow[head] = oRow[head];
                });
                self.vxColSettings.inlineEditState[id] = false;
                //console.log(10);
                self.vxColSettings.rowSelected[id] = false;
                if (self.vxConfig.hybrid == true) {
                    var _element = angular.element(document.getElementById('vx_row-sel_in_' + id));
                    if (typeof _element !== 'undefined' && _element != null && _element.length > 0) {
                        $(_element).prop('checked', false);
                    }
                }
                self.vxColSettings.multiSelected = _.reject(self.vxColSettings.multiSelected, function (mid) { id.localeCompare(mid) == 0 });
                self.scope.$emit('vxGridRowEditRevert', { 'id': self.vxConfig.id, 'data': oRow });
                if (self.vxConfig.hybrid == true) {
                    var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
                    if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                        $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
                    }
                }
            }
        }
    }

    /// <summary>GRID FUNCTION : ADD NEW ROW TO THE GRID</summary>
    VxGridController.prototype.addNewRow = function () {
        var self = this;
        self.vxConfig.sortPredicate = '_vxCreated';
        self.vxConfig.reverseSortDirection = true;
        var newRow = angular.copy(self.vxConfig.newRowTemplate);
        var _newGuid = _GUID();
        newRow[self.vxColSettings.primaryId] = _newGuid;
        newRow['newRow'] = true;
        newRow['_vxCreated'] = new Date().getTime();
        self.vxColSettings.inlineEditState[_newGuid] = true;
        self.vxConfig.vxData.unshift(newRow);
    }

    /// <summary>GRID FUNCTION : DELETE ROWS WHICH HAVE BEEN MULTI SELECTED IRRESPECTIVE OF STATE - NEW/EDITING/SAVING</summary>
    VxGridController.prototype.deleteRows = function () {
        var self = this;
        if (typeof self.vxColSettings.multiSelected !== 'undefined' && self.vxColSettings.multiSelected != null & self.vxColSettings.multiSelected.length > 0) {
            if (self.vxConfig.inlineDeleteOverrideEnabled == true) {
                _.each(self.vxColSettings.multiSelected, function (id) {
                    self.vxColSettings.saveInProgress[id] = true;
                });
                var defer = self.q.defer();
                var rows = angular.copy(_.filter(self.vxConfig.vxData, function (row) { return _.contains(self.vxColSettings.multiSelected, row[self.vxColSettings.primaryId]) == true }));
                defer.promise.then(function (data) {
                    if (data.rows.length > 0) {
                        var _processIDs = _.map(data.rows, function (row) { return row[self.vxColSettings.primaryId] });
                        self.vxConfig.vxData = _.reject(self.vxConfig.vxData, function (row) { return _.contains(_processIDs, row[self.vxColSettings.primaryId]) == true });
                        self.scope.$emit('vxGridRowsDeleted', { 'id': self.vxConfig.id, 'data': _processIDs });
                        _.each(_processIDs, function (id) {
                            self.vxColSettings.inlineEditState[id] = false;
                            //console.log(9);
                            self.vxColSettings.rowSelected[id] = false;
                            self.vxColSettings.saveInProgress[id] = false;
                        });
                        self.vxColSettings.multiSelected = _.difference(self.vxColSettings.multiSelected, _processIDs);
                        if (self.vxConfig.hybrid == true) {
                            var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
                            if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                                $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
                            }
                        }
                    }
                }, function (data) {
                    /* FAILURE SAVE */
                    //console.log('Error : Save Failed');
                    //console.log(data);
                }).then(function () {
                    _.each(self.vxColSettings.multiSelected, function (id) {
                        self.vxColSettings.saveInProgress[id] = false;
                    });
                });
                defer.resolve(self.scope.config.fnInlineDeleteOverride(rows));
            }
            else {
                self.vxConfig.vxData = _.reject(self.vxConfig.vxData, function (row) { return _.contains(self.vxColSettings.multiSelected, row[self.vxColSettings.primaryId]) == true });
                self.scope.$emit('vxGridRowsDeleted', { 'id': self.vxConfig.id, 'data': self.vxColSettings.multiSelected });
                _.each(self.vxColSettings.multiSelected, function (id) {
                    self.vxColSettings.inlineEditState[id] = false;
                    //console.log(8);
                    self.vxColSettings.rowSelected[id] = false;
                });
                self.vxColSettings.multiSelected = [];
                if (self.vxConfig.hybrid == true) {
                    var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
                    if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                        $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
                    }
                }
            }
        }
    }

    /// <summary>GRID FUNCTION : ACTIVATE A PARTICULAR PAGE OF THE GRID WHEN PAGINATION IS ENABLED</summary>
    /// <param name="page" type="int">PAGE NUMBER WHICH NEEDS TO BE ACTIVATED</param>
    VxGridController.prototype.activatePage = function (page) {
        var self = this;
        self.vxColSettings.activePage = page;
        self.vxColSettings.vxPageStartPosition = (page > 0 ? page * self.vxConfig.pageLength - 1 : 0);
    }

    /// <summary>GRID FUNCTION : DEBOUNCE THE SEARCH SO AS TO THROTTLE SEARCHING IN GRID AND PREVENT CLASHING OF DIGEST CYCLES</summary>
    VxGridController.prototype.debouncedSearch = _.debounce(function () {
        var self = this;
        self.vxColSettings.xsSearch = angular.copy(self.vxColSettings.searchToken);
    }, 50);

    /// <summary>GRID FUNCTION : SET SERACH TOKEN WHEN ACTIVATED THROUGH KEYBOARD EVENTS</summary>
    VxGridController.prototype.keyUpSearch = function ($event) {
        var self = this;
        if ($event.keyCode == 13) {
            self.vxColSettings.xsSearch = angular.copy(self.vxColSettings.searchToken);
        }
        else if ($event.keyCode == 8 && self.vxColSettings.searchToken == '') {
            self.vxColSettings.xsSearch = angular.copy(self.vxColSettings.searchToken);
        }
    }

    VxGridController.prototype.filtTokenChange = function (id) {
        var self = this;
        self.vxColSettings.filterSearchToken[id] = self.vxColSettings.enteredSearchToken[id];
    }

    VxGridController.prototype.debFiltTokenChange = _.debounce(VxGridController.prototype.filtTokenChange, 10);
    /// <summary>GRID FUNCTION : START THE PROCEDURE TO EDIT AN ROW</summary>
    /// <param name="id" type="String">ID FOR ROW TO BE EDITED</param>
    VxGridController.prototype.editRow = function (id) {
        var self = this;
        if (self.vxConfig.inlineEditSyncEnabled == true) {
            if (self.vxColSettings.multiSelected.length > 0) {
                var exists = _.filter(self.vxColSettings.multiSelected, function (uid) { return uid.localeCompare(id) == 0 });
                if (typeof exists !== 'undefined' && exists != null && exists.length > 0) {
                    _.each(self.vxColSettings.multiSelected, function (uid) {
                        self.vxColSettings.inlineEditState[uid] = true;
                    });
                }
            }
        }
        self.vxColSettings.inlineEditState[id] = true;
    }

    /// <summary>GRID FUNCTION : GET COUNT FOR NUMBER OF ROWS BEING EDITED</summary>
    VxGridController.prototype.editInProgressCount = function () {
        var self = this;
        var count = 0;
        if (typeof self.vxColSettings.inlineEditState !== 'undefined' && self.vxColSettings.inlineEditState != null) {
            for (var arg in self.vxColSettings.inlineEditState) {
                count = self.vxColSettings.inlineEditState[arg] == true ? count + 1 : count;
            }
        }
        return count;
    }

    VxGridController.prototype.filterTokenChnagedRapid = function (id) {
        var self = this;
        if (self.vxColSettings.enteredSearchToken[id] == '')
            self.vxColSettings.filterSearchToken[id] = '';
        else
            self.debFiltTokenChange(id);
    }

    VxGridController.prototype.filterAssignVar = function (id) {
        var self = this;
        var _input = angular.element(document.getElementById(id + '_searchfilters_' + self.vxConfig.id));
        if (typeof _input !== 'undefined' && _input.length > 0)
            self.vxColSettings.filterSearchToken[id] = _input[0].value;
    }

    VxGridController.prototype.filterKeyDown = function ($event, id) {
        var self = this;
        //console.log(id);
        //console.log($event.keyCode);
    }

    /// <summary>GRID FUNCTION : CHECK IF HEADER NAME IS VALID</summary>
    VxGridController.prototype.isValidHeaderName = function (header, name) {
        var self = this;
        return header.renderHeadDefn == false && typeof name !== 'undefined' && name != null && name != '';
    }

    /// <summary>GRID FUNCTION : INVOKED WHEN ANY HEADER ELEMENT IS CLICKED</summary>
    /// <summary>IF DROPDOWNS NOT ENBALED, IT WILL SORT ON THE COLUMN</summary>
    /// <summary>IF DROPDOWNS ENABLED, IT WILL START LOADING ITS CONTENT IF NOT ALREADY LOADED</summary>
    /// <param name="header" type="Object">HEADER OBJECT ASSOCIATED WITH THE CLICK</param>
    /// <param name="E" type="Event"></param>
    VxGridController.prototype.headerClick = function (header, e) {
        var self = this;
        console.log(header);
        var proceed = true;
        var target = $(e.target);
        if (typeof target !== 'undefined' && target != null & target.length > 0) {
            var ulTarget = target.closest('ul.dropdown-menu');
            if (typeof ulTarget !== 'undefined' && ulTarget != null & ulTarget.length > 0)
                proceed = false;
        }
        if (proceed == false)
            return;
        var _scrollContainer = self.selfEle.find('.vxTableScrollContainer');
        var _headerMenus = self.selfEle.find('.vxHeadRowCell .dropdown ul.dropdown-menu');
        var _windowHeight = self.getWindowDimensions().h / 2;
        _.each(self.selfEle.find('.vxHeadRowCell .dropdown ul.dropdown-menu'), function (_menu) {
            var _height = Math.min(Math.floor(_scrollContainer.height()) - 48, _windowHeight);
            $(_menu).css('max-height', _height + 'px');
        });
        _.each(self.vxConfig.columnDefConfigs, function (col) { if (col.id.localeCompare(header.id) != 0) self.vxColSettings.dropdDownOpen[col.id] = false; })
        var _colDefn = _.find(self.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare(header.id) == 0 });
        if (typeof _colDefn !== 'undefined' && _colDefn != null) {
            if (self.vxColSettings.dropdDownEnabled[_colDefn.id] == false) {
                /* ENABLING DEFUALT SORT */
                self.sortClick(header);
            }
            else {
                self.vxColSettings.dropdDownLoaded[_colDefn.id] = false;
                self.vxColSettings.dropdDownOpen[_colDefn.id] = !self.vxColSettings.dropdDownOpen[_colDefn.id];
                /* CHECK IF INTERSECTED FILTERS NEED TO BE SET TRUE */
                var _intersect = _.filter(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(_colDefn.id) != 0 });
                var processForIntersectedFilters = _intersect.length > 0;
                /* CHECK IF FILTERS LIST HAS BEEN POPULATED FOR COLUMN */
                var filterListForColAvailable = false;
                if (typeof self.vxColSettings.colFilterPairs[_colDefn.id] !== 'undefined' && self.vxColSettings.colFilterPairs[_colDefn.id] != null && self.vxColSettings.colFilterPairs[_colDefn.id] != {} && self.vxColSettings.colFilterPairs[_colDefn.id].length > 0) {
                    filterListForColAvailable = true;
                }
                /* RESET DISABLED PROPS FOR PREVIOUSLY INTERSECTED DATA SET*/
                if (processForIntersectedFilters == false && filterListForColAvailable == true) {
                    self.vxColSettings.dropdDownLoaded[_colDefn.id] = true;
                    _.each(self.vxColSettings.colFilterPairs[_colDefn.id], function (pair) { pair.disabled = false; });
                }
                else {
                    self.timeout(function () {
                        _colDefn.idCollection = [];
                        /* SORT OPERATION */
                        if (_colDefn.ddSort == true) {
                            self.vxColSettings.dropDownSort[_colDefn.id] = true;
                            _colDefn.idCollection.push(_colDefn.id + '_sort');
                        }
                        /* GROUP OPERATION */ /* UNSUPPORTED IN HYBRID MODE */
                        if (_colDefn.ddGroup == true && self.vxConfig.hybrid != true) {
                            self.vxColSettings.dropDownGroup[_colDefn.id] = true;
                            _colDefn.idCollection.push(_colDefn.id + '_group');
                            _colDefn.idCollection.push(_colDefn.id + '_ungroup');
                        }
                        /* FILTER OPERATION */
                        if (_colDefn.ddFilters == true) {
                            _colDefn.idCollection.push(_colDefn.id + '_clearfilters');
                            _colDefn.idCollection.push(_colDefn.id + '_searchfilters_' + self.vxConfig.id);
                            /*  POPULATE LIST OF FILTERS*/
                            if (filterListForColAvailable == false) {
                                self.vxColSettings.dropDownFilters[_colDefn.id] = true;
                                self.vxColSettings.colFilterPairs[_colDefn.id] = [];
                                var uniqed = _.uniq(_.map(self.vxConfig.vxData, function (item) {
                                    var ret = { 'value': item[_colDefn.id], 'type': '' };
                                    if (typeof ret.value !== 'undefined' && ret.value != null && ret.value != {} && typeof ret.value != 'object' && typeof ret.value != 'number' && typeof ret.value != 'boolean') {
                                        ret.value = ret.value.trim();
                                    }
                                    else if (typeof ret.value == 'boolean') {
                                        ret.value = ret.value.toString().trim();
                                    }
                                    else if (Object.prototype.toString.call(ret.value) === '[object Date]') {
                                        ret.value = ret.value.getTime();
                                        ret.type = 'date';
                                    }
                                    return ret;
                                }), function (item) { return item.value });
                                uniqed = _.reject(uniqed, function (item) { return typeof item.value === 'undefined' || item.value == {} });
                                _.each(uniqed.sort(), function (item, iterator) {
                                    var retKey = getKeyedUnique(item, _colDefn.id, 'col');
                                    var key = retKey.key;
                                    var type = retKey.type;
                                    var name = (item.value === '' || item.value === ' ' ? '< blank >' : item.value);
                                    name = item.value == null ? ' < null >' : name;
                                    var pair = { 'key': key, 'label': item.value, 'name': name, 'col': _colDefn.id, 'type': type, disabled: false, action: 'filter' };
                                    if (typeof _colDefn.filterCellDefn !== 'undefined' && _colDefn.filterCellDefn != null && _colDefn.filterCellDefn != {} && _colDefn.filterCellDefn != '') {
                                        pair.filterDefn = _colDefn.filterCellDefn.replaceAll("VX_DATA_POINT", "filter.name");
                                        pair.filterDefnAvailable = true;
                                    }
                                    else {
                                        pair.filterDefnAvailable = false;
                                    }
                                    self.vxColSettings.colFilterPairs[_colDefn.id].push(pair);
                                    _colDefn.idCollection.push(_colDefn.id + '_filter_' + iterator);
                                    self.vxColSettings.colFiltersStatus[key] = false;
                                });
                                self.vxColSettings.filterSearchToken[_colDefn.id] = '';
                                self.vxColSettings.colFiltersActivated[_colDefn.id] = false;
                            }
                            /* SET NON INTERSECTED FILTERS TO DISABLE TRUE*/
                            if (processForIntersectedFilters == true) {
                                /* GET INTERSECTED DATA SET BY LOOPING THROUGH MATCHES - vxConfig.vxFilteredData */
                                var lastCol = _.last(self.multiBoxFilters);
                                var uniqed = _.uniq(_.map(self.vxConfig.vxFilteredData, function (item) { return item[_colDefn.id] }));
                                if (lastCol.col.localeCompare(_colDefn.id) != 0) {
                                    _.each(self.vxColSettings.colFilterPairs[_colDefn.id], function (pair) {
                                        if (_.contains(uniqed, pair.label) != true)
                                            pair.disabled = true;
                                        else
                                            pair.disabled = false;
                                    });
                                }
                            }
                            self.lastScroll[_colDefn.id] = 0;
                            header.filterLimit = 10;
                            var _ddElement = angular.element(document.getElementById(self.vxConfig.id + '-dropdwon-menu-' + _colDefn.id));
                            _ddElement.on('scroll', function (e) {
                                var _colDefnId = _colDefn.id;
                                var _scrollTop = $(e.target).scrollTop();
                                if (_scrollTop > self.lastScroll[_colDefnId]) {
                                    self.debouncedIncrementFilter(_colDefnId);
                                    self.lastScroll[_colDefnId] = _scrollTop;
                                }
                            })
                        }
                        self.vxColSettings.dropdDownLoaded[_colDefn.id] = true;
                    }, 500);
                }
            }
        }
    }

    VxGridController.prototype.debouncedIncrementFilter = _.throttle(incrementFilterLimit, 500);

    function incrementFilterLimit(_colId) {
        var self = this;
        _.each(self.vxConfig.columnDefConfigs, function (col) {
            if (col.id == _colId) {
                col.filterLimit = col.filterLimit + 2;
            }
        });
        if (self.scope.$root.$$phase != '$apply' && self.scope.$root.$$phase != '$digest') {
            self.scope.$digest();
        }
    }

    /// <summary>GRID FUNCTION : GET UNIQUE KEY BASED ON ITEM, ID AND PHRASE FOR UNQIUELY IDENTIFYINGA FILTER</summary>
    /// <param name="item" type="String">Description</param>
    /// <param name="id" type="String">Description</param>
    /// <param name="phrase" type="String">Description</param>
    /// <returns type="Object" />
    function getKeyedUnique(item, id, phrase) {
        var self = this;
        var key = phrase + '_' + id + '_key_';
        var type = 'string';
        if (item.value == null) {
            key = key + 'null';
        }
        else {
            if (item.value == null)
                key = key + 'null';
            else if (typeof item.value != 'object') {
                key = key + item.value.toString().replace(/\s+/g, '_');
                type = item.type;
            }
            else {
                key = key + JSON.stringify(item.value).replace(/\s+/g, '_');
                type = 'object';
            }
        }
        return { 'key': key, 'type': type };
    }

    /// <summary>GRID FUNCTION : ENABLED SORT ON THE COLUMN WHILE TAKING INTO ACCOUNT THE DIRECTION</summary>
    /// <param name="header" type="Object">HEADER OBJECT ASSOCIATED WITH THE COLUMN</param>
    VxGridController.prototype.sortClick = function (header) {
        var self = this;
        var _colDefn = _.find(self.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare(header.id) == 0 });
        if (typeof _colDefn !== 'undefined' && _colDefn != null) {
            if (_colDefn.ddSort) {
                if (self.vxConfig.sortPredicate.localeCompare(_colDefn.id) != 0)
                    self.vxConfig.sortPredicate = _colDefn.id;
                self.vxColSettings.reverseSettings[_colDefn.id] = !self.vxColSettings.reverseSettings[_colDefn.id];
                self.vxConfig.reverseSortDirection = self.vxColSettings.reverseSettings[_colDefn.id];
                /// <summary>HYBRID MODE SUPPORT</summary>
                if (self.vxConfig.hybrid == true) {
                    self.vxConfig.vxData = _.sortBy(self.vxConfig.vxData, self.vxConfig.sortPredicate);
                    if (self.vxConfig.reverseSortDirection == true)
                        self.vxConfig.vxData.reverse();
                    self.resetHybridGrid();
                }
            }
        }
    }

    /// <summary>GRID FUNCTION : GET COUNT OF COLUMNS WHICH ARE NOT HIDDEN SO AS TO ESTABLISH CORRECT COLSPANS</summary>
    VxGridController.prototype.getVisibleHeaderCounts = function () {
        var self = this;
        return _.filter(self.vxConfig.columnDefConfigs, function (col) { return col.hidden != true }).length;
    }

    /// <summary>GRID FUNCTION : ENABLE GROUPING OF ROWS BASED ON THE COLUMN</summary>
    /// <param name="header" type="Object">HEADER OBJECT AASOCIATED WITH THE COLUMN</param>
    VxGridController.prototype.groupClick = function (header) {
        var self = this;
        self.clearFilters();
        //$scope.removeGroupings();
        if (self.vxColSettings.groupByColActivated[header.id] != true) {
            self.vxConfig.sortPredicate = null;
            var collection = [];
            var groupByProp = header.id;
            var groupColName = header.columnName;
            var groupPropValues = _.uniq(_.pluck(self.vxConfig.vxData, groupByProp));
            var groups = _.groupBy(_.sortBy(self.vxConfig.vxData, groupByProp), groupByProp);
            self.vxColSettings.groupKeys[groupByProp] = [];
            _.each(groupPropValues, function (value) {
                var key = (getKeyedUnique(value, groupByProp, 'groupcol')).key;
                self.vxColSettings.groupKeys[groupByProp].push(key);
                if (groups[value].length > 0) {
                    self.vxColSettings.groupPredicate[key] = false;
                    var rowDefn = { 'type': 'groupRow', 'colName': groupColName, 'col': groupByProp, 'value': value, 'groupId': key, 'cellDefn': '<div class="vx-row-select"><input class="vx-row-select-toggle" type="checkbox" ng-model="VX_ROW_POINT" ng-change="groupSelectionChanged(row)" /></div>' };
                    rowDefn.cellDefn = rowDefn.cellDefn.replaceAll("VX_ROW_POINT", "vxColSettings.groupPredicate[row.groupId]");
                    collection.push(rowDefn);
                    collection = _.union(collection, groups[value]);
                }
            });
            self.vxConfig.vxData = collection;
            self.vxColSettings.groupByColActivated[header.id] = true;
        }
    }

    /// <summary>GRID FUNCTION : REMOVE GROUPING IF ENABLED ON A COLUMN</summary>
    /// <param name="header" type="Object">HEADER OBJECT ASSOCIATED WITH COLUMN</param>
    VxGridController.prototype.unGroupClick = function (header) {
        var self = this;
        self.clearFilters();
        if (self.vxColSettings.groupByColActivated[header.id] == true) {
            self.vxConfig.sortPredicate = header.id;
            self.vxConfig.vxData = _.reject(self.vxConfig.vxData, function (row) {
                if (typeof row.type !== 'undefined' && row.type != null)
                    return row.type.localeCompare('groupRow') == 0
                else
                    return false
            });
            self.vxColSettings.groupByColActivated[header.id] = false;
        }
    }

    /// <summary>GRID FUNCTION : GET COUNT OF NUMBER OF ROWS IN THE GRID EXCEPT THE ROWS USED TO DENOTE GROUP HEADERS</summary>
    VxGridController.prototype.getAllRowLength = function () {
        var self = this;
        if (self.scope.config.noData)
            return 0;
        if (self.vxConfig.hybrid == true)
            return self._origData.length;
        var len = _.filter(self.vxConfig.vxData, function (row) {
            return typeof row.type == 'undefined' || row.type == null || row.type.localeCompare('groupRow') != 0 || row.fillEmptyElement == true
        }).length;
        return len;
    }

    /// <summary>GRID FUNCTION : REMOVE GROUPINGS FOR ANY OF THE COLUMNS ENABLED</summary>
    VxGridController.prototype.removeGroupings = function () {
        var self = this;
        _.each(self.vxConfig.columnDefConfigs, function (header) {
            self.unGroupClick(header);
        });
        self.vxColSettings.groupPredicate = {};
    }

    /// <summary>GRID FUNCION : HANDLE SELECTION TOGGLE EVENT ON A GROUP CHECKBOX</summary>
    VxGridController.prototype.groupSelectionChanged = function (group) {
        var self = this;
        self.emitArray = [];
        var toggledTo = self.vxColSettings.groupPredicate[group.groupId];
        var rows = _.filter(self.vxConfig.vxFilteredData, function (row) {
            return row.type != 'groupRow' && row[group.col].localeCompare(group.value) == 0
        });
        _.each(rows, function (row) {
            if (self.vxColSettings.multiSelColDependent == false || (self.vxColSettings.multiSelColDependent == true && row[self.vxConfig.multiSelectionDependentCol] == false)) {
                var pid = row[self.vxColSettings.primaryId];
                if (self.vxColSettings.rowSelected[pid] != toggledTo) {
                    //console.log(7);
                    self.vxColSettings.rowSelected[pid] = toggledTo;
                    var result = { 'key': row[self.vxConfig.onSelectionReturnCol], 'value': self.vxColSettings.rowSelected[pid], '_pKey': pid };
                    self.emitArray.push(pid);
                    if (toggledTo)
                        self.vxColSettings.multiSelected.push(pid);
                    else
                        self.vxColSettings.multiSelected = _.reject(self.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
                }
            }
        });
        if (self.vxConfig.hybrid == true) {
            var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
            if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
            }
        }
        self.scope.$emit('vxGridRwSelectionChange', { 'id': self.vxConfig.id, 'data': self.emitArray });
    }

    /// <summary>GRID FUCNTION : HANDLE SELECTION TOGGLE EVENT FOR THE ALL ROWS CHECKBOX</summary>
    VxGridController.prototype.allRowSelectionChanged = function () {
        var self = this;
        var toggleTo = self.vxColSettings.allRowSelected;
        if (toggleTo == true) {
            _.each(self.vxConfig.vxData, function (row) {
                if (row.fillEmptyElement != true) {
                    var pid = row[self.vxColSettings.primaryId];
                    if (self.vxColSettings.rowSelected[pid] == false && toggleTo == true) {
                        self.vxColSettings.rowSelected[pid] = true;
                        self.vxColSettings.multiSelected.push(pid);
                        if (self.vxConfig.hybrid == true) {
                            var _element = angular.element(document.getElementById('vx_row-sel_in_' + pid));
                            if (typeof _element !== 'undefined' && _element != null && _element.length > 0) {
                                $(_element).prop('checked', true);
                            }
                        }
                    }
                }
            });
            _.each(self.vxConfig.columnDefConfigs, function (header) {
                if (self.vxColSettings.dropDownGroup[header.id] == true && self.vxColSettings.groupByColActivated[header.id] == true) {
                    _.each(self.vxColSettings.groupKeys[header.id], function (key) {
                        self.vxColSettings.groupPredicate[key] = true;
                    });
                }
            });
            if (self.vxConfig.hybrid == true) {
                var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
                if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                    $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
                }
            }
            //$scope.$emit('vxGridRowMultiSelectionChange', { 'id': self.vxConfig.id, 'data': self.vxColSettings.multiSelected });
            self.scope.$emit('vxGridRowAllSelectionChange', { 'id': self.vxConfig.id, 'data': { 'toggledTo': toggleTo, 'array': self.vxColSettings.multiSelected } });
        }
        else if (toggleTo == false) {
            /* RESET GROUPS SELECTION */
            self.clearSelection();
            self.scope.$emit('vxGridRowAllSelectionChange', { 'id': self.vxConfig.id, 'data': { 'toggledTo': toggleTo, 'array': self.vxColSettings.multiSelected } });
        }
        if (self.vxConfig.hybrid == true) {
            var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
            if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
            }
        }
    }

    /// <summary>GRID FUNCTION : HANDLE SELECTION TOGGLE EVENT FOR A ROW CHECKBOX</summary>
    VxGridController.prototype.rowSelectionChanged = function (rowId) {
        var self = this;
        var pid = rowId;
        console.log('4456456456');
        var row = _.find(self.vxConfig.vxData, function (_row) { return _row[self.vxColSettings.primaryId] == rowId });
        var result = { 'key': row[self.vxConfig.onSelectionReturnCol], 'value': self.vxColSettings.rowSelected[pid], '_pKey': pid };
        var proceed = true;
        if (self.vxColSettings.rowSelected[pid] == true && self.vxColSettings.multiSelColDependent == true) {
            proceed = false;
            var colId = self.vxConfig.multiSelectionDependentCol;
            if (row[colId] == true && self.vxColSettings.multiSelected.length == 0)
                proceed = true;
            else if (row[colId] == false && self.vxColSettings.multiSelected.length >= 1) {
                var id = self.vxColSettings.multiSelected[0];
                var dataRow = _.find(self.vxConfig.vxData, function (i) { return i[self.vxColSettings.primaryId].localeCompare(id) == 0 });
                if (typeof dataRow !== 'undefined' && dataRow != null && dataRow != {} && dataRow[colId] == true) {
                    proceed = false;
                    //console.log(5);
                    self.vxColSettings.rowSelected[pid] = false;
                }
                else
                    proceed = true;
            }
            else if (row[colId] == false)
                proceed = true;
            else
                self.vxColSettings.rowSelected[pid] = false;
            //console.log(4);
        }
        else if (self.vxColSettings.rowSelected[pid] == false) {
            self.vxColSettings.multiSelected = _.reject(self.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
            proceed = false;
            self.vxColSettings.allRowSelected = false;
            self.scope.$emit('vxGridRowSelectionChange', { 'id': self.vxConfig.id, 'data': result });
        }
        if (proceed) {
            var item = _.find(self.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
            if (typeof item === 'undefined' || item == null)
                self.vxColSettings.multiSelected.push(pid);
            self.scope.$emit('vxGridRowSelectionChange', { 'id': self.vxConfig.id, 'data': result });
            /* PROCESS FOR MULTI SELECT FALSE */
            if (self.vxConfig.multiSelectionEnabled == false) {
                _.each(self.vxColSettings.multiSelected, function (rs) {
                    if (rs.localeCompare(pid) != 0) {
                        //console.log(3);
                        self.vxColSettings.rowSelected[rs] = false;
                    }
                });
                self.vxColSettings.multiSelected = _.reject(self.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) != 0 });
            }
        }
        if (self.vxConfig.hybrid == true) {
            //console.log('09876543234567890');
            var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
            if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                //console.log('6769767659856', _elem);
                $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
            }
        }
    }

    /// <summary>GRID FUNCTION : HANDLE CLICK EVENT WHEN A COLUMN FILTER IS CLICKED</summary>
    VxGridController.prototype.filterClick = function (header, filter) {
        var self = this;
        self.clearSelection();
        var filterValue = self.vxColSettings.colFiltersStatus[filter.key];
        if (filterValue == false) {
            self.multiBoxFilters = _.reject(self.multiBoxFilters, function (mbFilter) { return mbFilter.key.localeCompare(filter.key) == 0 });
            var colFilterActivatedAlready = _.find(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(filter.col) == 0 });
            if (typeof colFilterActivatedAlready === 'undefined' || colFilterActivatedAlready == null || colFilterActivatedAlready == {} || colFilterActivatedAlready.length == 0)
                self.vxColSettings.colFiltersActivated[header.id] = false;
        }
        else {
            var filterExists = _.find(self.multiBoxFilters, function (mbFilter) { return mbFilter.key.localeCompare(filter.key) == 0 });
            if (typeof filterExists === 'undefined' || filterExists == null || filterExists == {}) {
                self.multiBoxFilters.push(filter);
            }
            self.vxColSettings.colFiltersActivated[header.id] = true;
        }
        /// <summary>HYBRID MODE SUPPORT</summary>
        if (self.vxConfig.hybrid == true) {
            self.vxConfig.vxData = self.filter('vxGridMultiBoxFilters')(self._origData, self.multiBoxFilters);
            self.resetHybridGrid();
        }
    }

    /// <summary>GRID FUNCTION : HANDLE CLICK EVENT WHEN A COLUMN FILTER IS BEING CLEARED</summary>
    VxGridController.prototype.filterClearClick = function (header) {
        var self = this;
        if (self.vxColSettings.colFiltersActivated[header.id] == true) {
            self.clearSelection();
            var colFilterActivatedAlready = _.filter(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(header.id) == 0 });
            if (colFilterActivatedAlready.length > 0) {
                _.each(colFilterActivatedAlready, function (mbFilter) {
                    self.vxColSettings.colFiltersStatus[mbFilter.key] = false;
                });
            }
            self.multiBoxFilters = _.reject(self.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(header.id) == 0 });
            self.vxColSettings.colFiltersActivated[header.id] = false;
            self.vxColSettings.filterSearchToken[header.id] = '';
        }
        if (self.vxColSettings.filterSearchToken[header.id] != '') {
            self.vxColSettings.filterSearchToken[header.id] = '';
            var _input = angular.element(document.getElementById(header.id + '_searchfilters_' + self.vxConfig.id));
            if (typeof _input !== 'undefined' && _input.length > 0)
                _input[0].value = '';
        }
        /// <summary>HYBRID MODE SUPPORT</summary>
        if (self.vxConfig.hybrid == true) {
            self.vxConfig.vxData = self.filter('vxGridMultiBoxFilters')(self._origData, self.multiBoxFilters);
            self.resetHybridGrid();
        }
    }

    /// <summary>GRID FUNCTION : HANDLE CLICK EVENT WHEN ALL FILTERS ARE TO BE CLEARED</summary>
    VxGridController.prototype.clearFilters = function () {
        var self = this;
        if (self.multiBoxFilters.length > 0) {
            _.each(self.vxConfig.columnDefConfigs, function (col) {
                self.filterClearClick(col);
            });
        }
        self.multiBoxFilters = [];
    }

    /// <summary>GRID FUNCTION : SELECT ROWS WHICH ARE A PART OF THE FILTERED SUBSET</summary>
    VxGridController.prototype.selectAllFiltered = function () {
        var self = this;
        if (self.vxColSettings.multiSelected.length > 0) {
            self.clearSelection();
        }
        self.emitArray = [];
        var _set = '';
        if (self.vxConfig.hybrid != true) {
            _set = 'vxFilteredData';
        }
        else if (self.vxConfig.hybrid = true) {
            _set = 'vxData';
        }
        _.each(self.vxConfig[_set], function (row) {
            if (self.vxColSettings.multiSelColDependent == false || (self.vxColSettings.multiSelColDependent == true && row[self.vxConfig.multiSelectionDependentCol] == false)) {
                //console.log(2);
                self.vxColSettings.rowSelected[row[self.vxColSettings.primaryId]] = true;
                if (self.vxConfig.hybrid == true) {
                    var _element = angular.element(document.getElementById('vx_row-sel_in_' + row[self.vxColSettings.primaryId]));
                    if (typeof _element !== 'undefined' && _element != null && _element.length > 0) {
                        $(_element).prop('checked', true);
                    }
                }
                var pid = row[self.vxColSettings.primaryId];
                var result = { 'key': row[self.vxConfig.onSelectionReturnCol], 'value': self.vxColSettings.rowSelected[pid], '_pKey': pid };
                self.emitArray.push(result);

                /* MAINTAIN LIST OF SELECTED ROWS */
                if (self.vxColSettings.rowSelected[pid] == true) {
                    var item = _.find(self.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
                    if (typeof item === 'undefined' || item == null)
                        self.vxColSettings.multiSelected.push(pid);
                }
            }
        });
        self.scope.$emit('vxGridRowMultiSelectionChange', { 'id': self.vxConfig.id, 'data': self.scope.emitArray });
    }

    /// <summary>GRID FUNCTION : CLEAR ALL SELECTIONS IN THE GRID</summary>
    VxGridController.prototype.clearSelection = function () {
        var self = this;
        self.emitArray = [];
        _.each(self.vxColSettings.multiSelected, function (pid) {
            self.vxColSettings.rowSelected[pid] = false;
            if (self.vxConfig.hybrid == true) {
                var _element = angular.element(document.getElementById('vx_row-sel_in_' + pid));
                if (typeof _element !== 'undefined' && _element != null && _element.length > 0) {
                    $(_element).prop('checked', false);
                }
            }
            var row = _.find(self.vxConfig.vxData, function (r) { return r.type != 'groupRow' && r[self.vxColSettings.primaryId].localeCompare(pid) == 0 });
            if (typeof row !== 'undefined' && row != null) {
                var result = { 'key': row[self.vxConfig.onSelectionReturnCol], 'value': self.vxColSettings.rowSelected[pid], '_pKey': pid };
                self.emitArray.push(result);
            }
            self.vxColSettings.multiSelected = [];
            self.vxColSettings.allRowSelected = false;
            _.each(self.vxConfig.columnDefConfigs, function (header) {
                if (self.vxColSettings.dropDownGroup[header.id] == true && self.vxColSettings.groupByColActivated[header.id] == true) {
                    _.each(self.vxColSettings.groupKeys[header.id], function (key) {
                        self.vxColSettings.groupPredicate[key] = false;
                    });
                }
            })
        });
        if (self.vxConfig.hybrid == true) {
            var _elem = angular.element(document.getElementById('_vxMulLength' + self.vxConfig.id));
            if (typeof _elem !== 'undefined' && _elem != null && _elem.length > 0) {
                $(_elem).text(self.filter('vxNumberFixedLen')(self.vxColSettings.multiSelected.length, 2));
            }
        }
        self.scope.$emit('vxGridRowMultiSelectionChange', { 'id': self.vxConfig.id, 'data': self.emitArray });
    }

    /// <summary>GRID FUNCTION : FUNCTION TO MOVE FOCUS TO FIRST ITEM IN MENU</summary>
    VxGridController.prototype.upDownKeyDownHandlerHeaderMenu = function (e) {
        var self = this;
        if (e.keyCode != 40) {
            return;
        }
        else if (e.keyCode == 40) {
            //DOWN ARROW PRESS
            var focussables = $(e.target).siblings().find('[tabindex="0"]');
            if (focussables.length > 0)
                $(focussables[0]).focus();
        }
    }

    /// <summary>GRID FUNCTION : FUNCTION TO FIND THE APPROPRIATE ID FROM COLLECTION TO FOCUS</summary>
    VxGridController.prototype.findIdToBeFocussed = function (index, collection, direction) {
        var self = this;
        var _id = index;
        var _i = index;
        if (direction) {
            while (_i <= collection.length) {
                var _element = $('#' + collection[_i + 1]);
                if ($(_element).is('[tabindex="0"]')) {
                    return collection[_i + 1];
                }
                else
                    _i = _i + 1;
            }
        }
        else if (!direction) {
            while (_i >= 1) {
                var _element = $('#' + collection[_i - 1]);
                if ($(_element).is('[tabindex="0"]')) {
                    return collection[_i - 1];
                }
                else
                    _i = _i - 1;
            }
        }
        return index;
    }

    /// <summary>GRID FUNCTION : FUNCTION TO HELP FIND FOCUSABLE ITEM</summary>
    VxGridController.prototype.findFocussable = function (e, col, direction) {
        var self = this;
        var _id = $(e).attr('id');
        var _col = _.find(self.vxConfig.columnDefConfigs, function (column) { return column.id == col });
        if (typeof _col !== 'undefined' && _col != null) {
            var _idCollection = _col.idCollection;
            var _index = _.indexOf(_idCollection, _id);
            if (_index != -1 && _index != _idCollection.length && direction == true) {
                return self.findIdToBeFocussed(_index, _idCollection, true);
            }
            else if (_index != -1 && _index != 0 && direction == false) {
                return self.findIdToBeFocussed(_index, _idCollection, false);
            }
            else
                return null;
        }
    }

    /// <summary>GRID FUNCTION : FUNCTION TO HELP UP DOWN KEY STROKE MOVEMENTS IN MENU</summary>
    VxGridController.prototype.upDowKeyDownHandlerHeaderMenuItems = function (e, columnId) {
        var self = this;
        var _prevent = false;
        if (e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 27)
            return false;
        if (e.keyCode == 40) {
            /* DOWN ARROW KEY PRESSED */
            var _elemId = self.findFocussable($(e.target), columnId, true);
            if ($('#' + _elemId).is('[tabindex="0"]')) {
                $('#' + _elemId).focus();
            }
        }
        else if (e.keyCode == 38) {
            /* UP ARROW KEY PRESSED */
            var _elemId = self.findFocussable($(e.target), columnId, false);
            if (_elemId == null) {
                $(e.target).closest('.dropdown').find('button').focus();
            }
            else if ($('#' + _elemId).is('[tabindex="0"]')) {
                $('#' + _elemId).focus();
            }
        }
        else if (e.keyCode == 27) {
            /* ESC KEY PRESSED */
            if (self.vxColSettings.dropdDownOpen[columnId] == true) {
                self.vxColSettings.dropdDownOpen[columnId] = false;
                var _elem = $(e.target).closest('.dropdown').find('button');
                if (_elem && _elem.length > 0) {
                    $(_elem).focus();
                }
            }
        }
        if (_prevent) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    /// <summary>GRID FUNCTION : OPEN MODAL TO MANAGE COLUMNS</summary>
    VxGridController.prototype.openManageColumns = function () {
        var self = this;
        var modalInstance = self.modal.open({
            templateUrl: 'template/vx-grid/vx-grid-manage-columns-modal.html',
            windowClass: 'vxGridManageColMod',
            controller: ["$scope", "$uibModalInstance", "originalSettings", function ($scope, $modalInstance, originalSettings) {
                $scope.headerSelected = null;
                $scope.headerSelectedForVisChange = null;
                $scope.copyForWidthVisChange = originalSettings;
                _.each($scope.copyForWidthVisChange, function (col, i) {
                    col.order = i;
                    col.chars = Math.ceil((col.width - 20) / 7);
                    col.selected = false;
                });
                $scope.swapAbove = function (header) {
                    if (header.locked == false) {
                        var swapFrom = header.order;
                        var swapTo = header.order;
                        var stableSwap = true;
                        do {
                            swapTo = swapTo - 1;
                            stableSwap = true;
                            var headerSwappable = _.find($scope.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false });
                            if (typeof headerSwappable === 'undefined' || headerSwappable == null || headerSwappable == {})
                                stableSwap = false;
                        } while (!stableSwap && swapTo >= 0);
                        if (stableSwap && swapTo >= 0) {
                            var headerSwappable = _.find($scope.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false });
                            if (typeof headerSwappable !== 'undefined' && headerSwappable != null && headerSwappable != {}) {
                                headerSwappable.order = swapFrom;
                                header.order = swapTo;
                            }
                        }
                    }
                }
                $scope.swapBelow = function (header) {
                    if (header.locked == false) {
                        var swapFrom = header.order;
                        var swapTo = header.order;
                        var stableSwap = true;
                        do {
                            swapTo = swapTo + 1;
                            stableSwap = true;
                            var headerSwappable = _.find($scope.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false });
                            if (typeof headerSwappable === 'undefined' || headerSwappable == null || headerSwappable == {})
                                stableSwap = false;
                        } while (!stableSwap && swapTo <= $scope.copyForWidthVisChange.length - 1);
                        if (stableSwap && swapTo <= $scope.copyForWidthVisChange.length - 1) {
                            var headerSwappable = _.find($scope.copyForWidthVisChange, function (head) { return head.order == swapTo && head.orderLocked == false });
                            if (typeof headerSwappable !== 'undefined' && headerSwappable != null && headerSwappable != {}) {
                                headerSwappable.order = swapFrom;
                                header.order = swapTo;
                            }
                        }
                    }
                }
                $scope.makeVisible = function (head) {
                    var header = _.find($scope.copyForWidthVisChange, function (i) { return i.id.localeCompare(head.id) == 0 });
                    if (typeof header !== 'undefined' && header != null && header != {} && header.visbilityLocked == false)
                        header.hidden = false;
                }
                $scope.makeHidden = function (head) {
                    var header = _.find($scope.copyForWidthVisChange, function (i) { return i.id.localeCompare(head.id) == 0 });
                    if (typeof header !== 'undefined' && header != null && header != {} && header.visbilityLocked == false)
                        header.hidden = true;
                }
                $scope.saveChangeInConfig = function () {
                    var newConfig = [];
                    newConfig = _.sortBy($scope.copyForWidthVisChange, function (col) {
                        var column = _.find($scope.copyForWidthVisChange, function (item) { return item.id.localeCompare(col.id) == 0 });
                        if (typeof column !== 'undefined' && column != null && column != {})
                            return column.order
                        else
                            return 1;
                    });
                    $modalInstance.close(newConfig);
                }
                $scope.widthChanged = function (header) {
                    header.width = Math.ceil(header.chars * 7) + 20;
                }
                $scope.selectHeader = function (header) {
                    if (header.locked == true)
                        return;
                    header.selected = !header.selected;
                    _.each($scope.copyForWidthVisChange, function (col) {
                        if (col.id.localeCompare(header.id) != 0)
                            col.selected = false;
                    });
                    if (header.selected == true) {
                        $scope.headerSelected = header;
                    }
                    else {
                        $scope.headerSelected = null;
                    }
                }
                $scope.cancelChangeInConfig = function () {
                    $modalInstance.dismiss();
                }
                $scope.upDownKeyPressHandler = function (e) {
                    var _prevent = false;
                    if (e.keyCode == 38 || e.keyCode == 40) {
                        //UP ARROW PRESS
                        _prevent = $scope.upDownMovement(e);
                    }
                    if (_prevent) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }
                $scope.upDownMovement = function (e) {
                    var _movement = false;
                    if (e.keyCode == 38) {
                        //UP ARROW PRESS
                        var _ele = $(e.target).prev();
                        if (_ele.length > 0 && $(_ele[0]).attr('tabindex') != -1) {
                            $(_ele)[0].focus();
                        }
                        _movement = true;
                    }
                    else if (e.keyCode == 40) {
                        //UP ARROW PRESS
                        var _ele = $(e.target).next();
                        if (_ele.length > 0 && $(_ele[0]).attr('tabindex') != -1) {
                            $(_ele)[0].focus();
                        }
                        _movement = true;
                    }
                    return _movement;
                }
            }],
            backdrop: 'static',
            resolve: {
                originalSettings: function () {
                    return angular.copy(self.vxConfig.columnDefConfigs);
                }
            }
        });
        modalInstance.result.then(function (data) {
            /* GET MODIFIED CHANGES FOPR CONFIG */
            data = self.calculateEffectiveWidths(data);
            self.vxConfig.columnDefConfigs = data;
            if (self.vxConfig.hybrid == true) {
                self.resetHybridGrid();
            }
            self.scope.$emit('vxGridSettingsChanged', { 'id': self.vxConfig.id, 'data': data });
        }, function (data) {
        });
    }

    /// <summary>GRID FUNCTION : CALCULATE EFFECTIVE COLUMN WIDTHS</summary>
    VxGridController.prototype.calculateEffectiveWidths = function (data) {
        var self = this;
        var totalWidth = _.reduce(data, function (memo, col) {
            var _val = 0;
            if (col.hidden == false)
                _val = parseInt(col.width);
            return memo + _val;
        }, 0);
        var _containerWidth = self.selfEle.find('.vxTableScrollContainer').width();
        _.each(data, function (col) {
            if (_containerWidth > totalWidth) {
                var _adjustment = (parseInt(col.width) / totalWidth) * (_containerWidth - totalWidth);
                col.effectiveWidth = parseInt(col.width) + _adjustment;
            }
            else
                col.effectiveWidth = col.width;

        });
        return data;
    }

    /// <summary>GRID FUNCTION : OPEN MODAL TO EDIT GRID JSON DATA</summary>
    VxGridController.prototype.openJsonEditor = function () {
        var self = this;
        var modalInstance = self.modal.open({
            templateUrl: 'template/vx-grid/vx-grid-json-editor-modal.html',
            windowClass: 'vxGridManageColMod',
            controller: ["$scope", "$modalInstance", "griddata", function ($scope, $modalInstance, griddata) {
                $scope.data = angular.copy(griddata);
                $scope.changeData = [];
                $scope.configuration = {
                    "editable": true,
                    "viewButtonClass": "btn-info",
                    "editButtonClass": "btn-success"
                };
                $scope.jsonOptions = {
                    "mode": "code",
                    "modes": [
                        "tree",
                        "form",
                        "code",
                        "text"
                    ],
                    "history": false
                };

                $scope.onChangeJSON = function (data) {
                    $scope.changeData = data;
                }
                $scope.saveChangeInConfig = function () {
                    $modalInstance.close($scope.changeData);
                }
                $scope.cancelChangeInConfig = function () {
                    $modalInstance.dismiss();
                }
            }],
            backdrop: 'static',
            resolve: {
                griddata: function () {
                    return angular.copy(self.vxConfig.vxData);
                }
            }
        });
        modalInstance.result.then(function (data) {
            /* GET MODIFIED CHANGES FOPR CONFIG */
            self.vxConfig.vxData = data;
            self.scope.$emit('vxGridDataChanged', { 'id': self.vxConfig.id, 'data': data });
        }, function (data) {
        });
    };

    /// <summary>GRID FUNCTION : REVEAL ALL ROW/CELL DATA WHICH WERE PREVIOUSLY WRAPPED</summary>
    VxGridController.prototype.revealWrapToggle = function () {
        var self = this;
        self.vxColSettings.revealWrapRowData = !self.vxColSettings.revealWrapRowData;
    }

    /// <summary>GRID FUNCTION : RESET SEARCH TOKEN FOR THE GRID</summary>
    VxGridController.prototype.xsReset = function () {
        var self = this;
        self.vxColSettings.xsSearch = '';
    }

    /// <summary>GRID FUNCTION : SCROLL TO THE TOP OF THE GRID</summary>
    VxGridController.prototype.justScrollTop = function () {
        var self = this;
        var element = self.selfEle.find('.vxTableContainer.scrollTableContainer');
        self.timeout(function () {
            $(element).animate({ scrollTop: 0 }, 500);
        }, 10);
    }

    /// <summary>GRID FUNCTION : SCROLL DOWN 60PX IN THE GRID</summary>
    VxGridController.prototype.justScrollDown = function () {
        var self = this;
        var element = self.selfEle.find('.vxTableContainer.scrollTableContainer');
        var _scrollTop = $(element).scrollTop() || 0;
        if (self.vxConfig.hybrid == false) {
            self.timeout(function () {
                $(element).animate({ scrollTop: _scrollTop + 96 }, 33);
            }, 10);
        }
        else if (self.vxConfig.hybrid == true) {
            self.prepForScrollInsertion();
            self.timeout(function () {
                $(element).animate({ scrollTop: _scrollTop + 100 }, 300);
            }, 10);
        }
    }

    /// <summary>GRID FUNCTION : SHOW SCROLL DOWN ARROW ICON WHEN CONDITION SATISFIED - SCROLL NEEDED</summary>
    VxGridController.prototype.showScrollDownArrow = function () {
        var self = this;
        var scrollContainer = self.selfEle.find('.vxTableContainer.scrollTableContainer');
        var tableContainer = self.selfEle.find('.scrollTableContainer table.vxTable');
        if (typeof scrollContainer !== 'undefined' && typeof tableContainer !== 'undefined' && scrollContainer != null && tableContainer != null) {
            if (tableContainer.height() > scrollContainer.height())
                return true;
        }
        return false;
    }

    /// <summary>GRID FUNCTION : SHOW SCROLL UP ARROW ICON WHEN CONDITION SATISFIED - SCROLL NEEDED</summary>
    VxGridController.prototype.showScrollUpArrow = function () {
        var self = this;
        var scrollContainer = self.selfEle.find('.vxTableContainer.scrollTableContainer');
        var tableContainer = self.selfEle.find('.scrollTableContainer table.vxTable');
        if (typeof scrollContainer !== 'undefined' && typeof tableContainer !== 'undefined' && scrollContainer != null && tableContainer != null) {
            if (tableContainer.height() > scrollContainer.height() && scrollContainer.scrollTop() > 48)
                return true;
        }
        return false;
    }

    /// <summary>GRID FUNCTION : HANDLE CLICK EVENTS OUTSIDE A TARGET AREA</summary>
    VxGridController.prototype.outsideHeader = function (header) {
        var self = this;
        if (self.vxColSettings.dropdDownOpen[header.id] == true) {
            self.vxColSettings.dropdDownOpen[header.id] = false;
            if (!self.scope.$$phase)
                self.scope.$apply();
        }
    }

    /// <summary>GRID EVENTS / CONFIG EXTENSIONS : ADD CONFIG EXTENSIONS FOR HOUSE KEEPING TASKS</summary>
    VxGridController.prototype.buildFns = function () {
        var self = this;
        var comEvOnEvent = ['openJsonEditor', 'openManageColumns', 'resetVxInstance', 'clearFilters', 'selectAllFiltered', 'clearSelection', 'revealWrapToggle'];
        _.each(comEvOnEvent, function (evName) {
            var captureEvName = 'vxGrid' + evName.capitalizeFirstLetter();
            var fireEvent = evName + '()';
            /// <summary>GRID EVENT : LISTEN TO SPECIFIC EVENTS AND FIRE THEM AFTER VALIDATIONS</summary>
            self.scope.$on(captureEvName, function (e, data) {
                if (data.id.localeCompare(self.vxConfig.id) == 0)
                    self.scope.$eval(fireEvent);
            })
            self.scope.config[evName] = function () {
                self.scope.$eval(fireEvent);
            }
        });
    }

})();