(function () {
    "use strict";

    /*  VX GRID 
        LAST UPDATE - 29-10-2015 16:38 
        LAST UPDATE BY - ASPARIDA
        
        VX GRID CONFIG (BOUND TO 'config=') IN DIRECTIVE CALL
        -----------------------------------------------------------       
        <CONFIG>.enableDropdownsInHeader        <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE DROPDOWNS ON C0LUMNS, ELSE DEFAULT SORT ON HEADER CLICK
        <CONFIG>.selectionEnabled               <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLE ROW SELECTION
        <CONFIG>.allRowsSelectionEnabled        <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLE ALL ROWS SELECTION
        <CONFIG>.multiSelectionEnabled          <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLE MULTI ROW SELECTION - DEPENDENT ON 
        <CONFIG>.showGridStats                  <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLE ROW SELECTION
        <CONFIG>.showGridOptions                <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLE ROW SELECTION
        <CONFIG>.selectAllOnRenderAll           <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLE SELECT ONLY WHEN ALL ROWS ARE RENDERED
        <CONFIG>.multiSelectionDependentCol     <SUPPORTED : Y>    :   <STRING>    SET TO COLUMN ON WHICH MULTI SELECTION IS DEPENDENT OR SET TO '' OR NULL
        <CONFIG>.onSelectionReturnCol           <SUPPORTED : Y>    :   <STRING>    SET TO COLUMN WHICH POPERTY IS RETURNED ON ROW SELECTION CHANGE
        <CONFIG>.showTable                      <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLE SELECT ONLY WHEN ALL ROWS ARE RENDERED
        <CONFIG>.data                           <SUPPORTED : Y>    :   <ARRAY>
        <CONFIG>.xsRowTitleTemplate             <SUPPORTED : Y>    :   <STRING>    SET TO XS ONLY TEMPLATE - DEFAULTS TO PRIMARY COLUMN HEADER
		<CONFIG>.virtualization					<SUPPORTED : Y>    :   <BOOLEAN>   SET TO FALSE TO DISABLE VIRTUALIZATION AND ENABLE PAGINATION
		<CONFIG>.pageLength						<SUPPORTED : Y>    :   <NUMBER>	   SET PAGINATION LENGTH AND DEFUALTS TO 20
        <CONFIG>.inlineEditingEnabled			<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING INLINE EDITING OPTION
        <CONFIG>.inlineDeletingEnabled			<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING INLINE DELETING OPTION
        <CONFIG>.inlineAddRowEnabled			<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING ADDING ROW
        <CONFIG>.inlineSaveOverrideEnabled		<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING SAVE ROW OVEVRRIDE
        <CONFIG>.inlineDeleteOverrideEnabled	<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING SAVE DELETE OVEVRRIDE
        <CONFIG>.newRowTemplate			        <SUPPORTED : Y>    :   <STRING>    SET TO NEW TEMPLATE
        <CONFIG>.jsonEditorEnabled			    <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE JSON EDITOR
        
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
        <COLUMN>.inlineEditOnColumnEnabled      <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE COLUMN INLINE EDITING
        <COLUMN>.editDefn                       <SUPPORTED : Y>    :   <STRING>    SET CUSTOM CELL TEMPLATE - USE 'VX_ROW_POINT' FOR ROW LEVEL PROPERTY & 'VX_DATA_POINT' FOR ROW CELL LEVEL PROPERTY
        <COLUMN>.editDefnTemplate               <SUPPORTED : Y>    :   <STRING>    SET EDIT TEMPLATE TYPE - USE 'VX_ROW_POINT' FOR ROW LEVEL PROPERTY & 'VX_DATA_POINT' FOR ROW CELL LEVEL PROPERTY - SUPPORTED TYPES - 'INPUT', 'TEXTAREA'

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
        <CONFIG>.getVxCounts()                  <NO PARAMS>         RETURNS COUNT - {'vxAllDataLength': <LENGTH OF ALL DATA> , 'vxFilteredDataLength' : <LENGTH OF FILTERED DATA SET>, 'vxSelectedDataLength' : <LENGTH OF SELECTED DATA SET>
        <CONFIG>.getData()                      <NO PARAMS>         RETURNS CURRENT DATA STATE
        <CONFIG>.setRowFieldValidation()        <ID, COL, VALID>    SETS ROW AND FEILD VALIDATION TO 'VALID' VALUE
    */

    /* CAPITALIZE FIRST LETTER - STRING PROTOTYPE*/
    String.prototype.capitalizeFirstLetter = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    String.prototype.replaceAll = function (find, replaceWith) {
        var regex = new RegExp(find, 'g');
        return this.replace(regex, replaceWith);
    }

    function _GUID() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
        }
        return s4() + s4() + "_" + s4();
    }

    angular.module('vx.grid.modules', ['ngSanitize', 'ui.bootstrap', 'vs-repeat', 'angular-json-editor', 'duScroll'])
    .directive("vxGrid", function () {
        return {
            restrict: 'AEC',
            scope: {
                config: '=',
                scrollParent: '='
            },
            controller: ["$scope", "$modal", "$sce", "$timeout", "$rootScope", "$window", "$filter", "$q", function ($scope, $modal, $sce, $timeout, $rootScope, $window, $filter, $q) {
                $scope.vxColSettings = {};
                $scope.posLeft = 1;
                $scope.posTop = 0;
                var w = angular.element($window);
                $scope.getWindowDimensions = function () {
                    return {
                        'h': w.height(),
                        'w': w.width()
                    };
                };
                $rootScope.enableClickOutside = true;
                $scope.resetVxInstance = function () {
                    $scope.vxColSettings = {
                        'primaryId': null,
                        'dropdDownEnabled': {},
                        'dropdDownLoaded': {},
                        'dropdDownOpen': {},
                        'dropDownSort': {},
                        'dropDownFilters': {},
                        'dropDownGroup': {},
                        'colFiltersStatus': {},
                        'colFilterPairs': {},
                        'colFiltersActivated': {},
                        'lastProcessedForFilters': {},
                        'multiSelected': [],
                        'multiSelColDependent': false,
                        'predicate': '',
                        'reverse': false,
                        'reverseSettings': {},
                        'groupPredicate': {},
                        'groupByColActivated': {},
                        'rowSelected': {},
                        'vxRowClass': {},
                        'vxRowSelectionDisable': {},
                        'revealWrapRowData': false,
                        'selectAllEnabled': true,
                        'menu': false,
                        'xsViewEnabled': false,
                        'xsRowTitleTemplateAvailable': false,
                        'xsSearch': '',
                        'searchToken': '',
                        'latchExcess': 10,
                        'inlineEditState': {},
                        'colWithInlineEdits': [],
                        'groupKeys': {},
                        'allRowSelected': false,
                        'allRowSelectionDisabled': false,
                        'filterSearchToken': {},
                        'saveInProgress': {}
                    };
                    if ($scope.getWindowDimensions().w < 768) {
                        $scope.vxColSettings.xsViewEnabled = true;
                        $scope.vxColSettings.latchExcess = 5;
                    }
                    $scope.vxConfig = angular.copy($scope.config);
                    /* GETTING / SETTING PRIMARY COLUMN*/
                    var _primaryColDefn = _.find($scope.vxConfig.columnDefConfigs, function (col) { return col.primary == true });
                    var primaryId = '_uid';
                    if (typeof _primaryColDefn !== 'undefined' && _primaryColDefn != null) {
                        /* PRIMARY COLUMN EXISTS */
                        _.each($scope.vxConfig.vxData, function (row, index) { row[primaryId] = row[_primaryColDefn.id] });
                        primaryId = _primaryColDefn.id;
                    }
                    else {
                        /* PRIMARY COLUMN DOES NOT EXISTS */
                        _.each($scope.vxConfig.vxData, function (row, index) { row.primaryId = index });
                    }
                    $scope.vxColSettings.primaryId = primaryId;
                    /* ENBALE ROW EDITING INLINE */
                    if ($scope.vxConfig.inlineEditingEnabled == true) {
                        /* ADDING CHECKBOX COLUMN DEFINITION */
                        var col = _.find($scope.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare('inlinediting') == 0 });
                        if (typeof col === 'undefined' || col == null || col == {}) {
                            var _selColDefn = {
                                id: 'inlinediting', columnName: 'Edit', renderDefn: true, ddSort: false, ddGroup: false, ddFilters: false, width: '50', locked: true,
                                cellDefn:
                                    '<div class="vx-row-edit icon-container" tabindex="0" vx-key="editRow(VX_ROW_POINT)" ng-show="vxColSettings.inlineEditState[VX_ROW_POINT] == false" ng-if="vxColSettings.saveInProgress[VX_ROW_POINT] != true">'
                                        + '<i class="icon icon-edit"></i>'
                                  + '</div>'
                                  + '<div class="vx-row-edit icon-container" ng-attr-vxdisabled="{{vxConfig.invalidRows[row[vxColSettings.primaryId]]}}" tabindex="0" vx-key="saveRow(VX_ROW_POINT)" ng-show="vxColSettings.inlineEditState[VX_ROW_POINT] == true" ng-if="vxColSettings.saveInProgress[VX_ROW_POINT] != true">'
                                    + '<i class="icon icon-save"></i>'
                                  + '</div>'
                                  + '<div class="vx-row-edit icon-container loader" tabindex="0" ng-if="vxColSettings.saveInProgress[VX_ROW_POINT] == true">'
                                    + '<img class="loader-row" src="/resource/loaderBlue30.GIF"></i>'
                                  + '</div>'
                                , inlineEditOnColumnEnabled: false
                            };
                            $scope.vxConfig.columnDefConfigs.unshift(_selColDefn);
                        }
                        /* SEETING ALL ROW SELECTIONS TO FALSE */
                        _.each($scope.vxConfig.vxData, function (row, index) {
                            var rowId = row[$scope.vxColSettings.primaryId];
                            $scope.vxColSettings.inlineEditState[rowId] = false;
                        });
                    }
                    /* ENBALE ROW SELECTION */
                    if ($scope.vxConfig.selectionEnabled == true) {
                        /* ADDING CHECKBOX COLUMN DEFINITION */
                        var col = _.find($scope.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare('checkbox') == 0 });
                        if (typeof col === 'undefined' || col == null || col == {}) {
                            var _selColDefn = {
                                id: 'checkbox', columnName: 'Row Selection', renderDefn: true, ddSort: false, ddGroup: false, ddFilters: false, width: '50', locked: true,
                                headerDefn: '<div class="vx-row-select"><input class="vx-row-select-toggle" type="checkbox" ng-model="vxColSettings.allRowSelected" ng-change="allRowSelectionChanged()" ng-disabled="vxColSettings.allRowSelectionDisabled" ng-if="vxConfig.allRowsSelectionEnabled" /></div>',
                                cellDefn: '<div class="vx-row-select"><input class="vx-row-select-toggle" type="checkbox" ng-model="vxColSettings.rowSelected[VX_ROW_POINT]" ng-change="rowSelectionChanged(row)" ng-disabled="vxColSettings.vxRowSelectionDisable[VX_ROW_POINT]" /></div>'
                            };
                            $scope.vxConfig.columnDefConfigs.unshift(_selColDefn);
                        }
                        /* SEETING ALL ROW SELECTIONS TO FALSE */
                        _.each($scope.vxConfig.vxData, function (row, index) {
                            var rowId = row[$scope.vxColSettings.primaryId];
                            $scope.vxColSettings.rowSelected[rowId] = false;
                            $scope.vxColSettings.vxRowSelectionDisable[rowId] = false;
                        });
                    }
                    $scope.multiBoxFilters = [];
                    var _propDefns = [
                        { prop: 'enableDropdownsInHeader', defValue: false },
                        { prop: 'selectionEnabled', defValue: false },
                        { prop: 'multiSelectionEnabled', defValue: false },
                        { prop: 'showGridStats', defValue: false },
                        { prop: 'showGridOptions', defValue: false },
                        { prop: 'selectAllOnRenderAll', defValue: false },
                        { prop: 'virtualization', defValue: true },
                        { prop: 'pageLength', defValue: 20 },
                        { prop: 'data', defValue: [] },
                        { prop: 'vxFilteredData', defValue: [] },
                        { prop: 'xsRowTitleTemplate', defValue: '<div class="xsRowTemplate">{{row[vxColSettings.primaryId]}}</div>' },
                        { prop: 'inlineAddRowEnabled', defValue: false },
                        { prop: 'inlineEditSyncEnabled', defValue: false },
                        { prop: 'inlineDeletingEnabled', defValue: false },
                        { prop: 'inlineSaveOverrideEnabled', defValue: false },
                        { prop: 'inlineDeleteOverrideEnabled', defValue: false },
                        { prop: 'jsonEditorEnabled', defValue: false },
                        { prop: 'allRowsSelectionEnabled', defValue: false }
                    ];
                    _.each(_propDefns, function (propDefn) {
                        if ($scope.vxConfig[propDefn.prop] === 'undefined' || $scope.vxConfig[propDefn.prop] == null || $scope.vxConfig[propDefn.prop] == {})
                            $scope.vxConfig[propDefn.prop] = propDefn.defValue;
                    });
                    $scope.vxColSettings.selectAllOnRenderAll = $scope.vxConfig.selectAllOnRenderAll;
                    _.each($scope.vxConfig.columnDefConfigs, function (col) {
                        /* SET DEAFULTS FOR COLUMNS */
                        var _propDefns = [
                            { prop: 'renderDefn', defValue: false },
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
                            { prop: 'inlineEditOnColumnEnabled', defValue: false },
                            { prop: 'inlineEditValidation', defValue: false },
                            { prop: 'editDefn', defValue: null },
                            { prop: 'editDefnTemplate', defValue: null }
                        ];
                        _.each(_propDefns, function (propDefn) {
                            if (col[propDefn.prop] === 'undefined' || col[propDefn.prop] == null || col[propDefn.prop] == {})
                                col[propDefn.prop] = propDefn.defValue;
                        });
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
                        $scope.vxColSettings.reverseSettings[col.id] = false;
                        /* SETTING DROPDOWNS LOADED TO FALSE */
                        if (typeof col.dropDownEnabled !== 'undefined' && col.dropDownEnabled != null && col.dropDownEnabled == true && $scope.vxConfig.enableDropdownsInHeader == true) {
                            $scope.vxColSettings.dropdDownEnabled[col.id] = true;
                        }
                        else {
                            $scope.vxColSettings.dropdDownEnabled[col.id] = false;
                        }
                        $scope.vxColSettings.dropdDownLoaded[col.id] = false;
                        $scope.vxColSettings.dropdDownOpen[col.id] = false;
                        if (typeof col.renderDefn !== 'undefined' && col.renderDefn != null && col.renderDefn != {} && col.renderDefn == true) {
                            col.cellDefn = col.cellDefn.replaceAll("VX_ROW_POINT", "row[vxColSettings.primaryId]");
                            col.cellDefn = col.cellDefn.replaceAll("VX_DATA_POINT", "row[header.id]");
                            col.cellDefn = col.cellDefn.replaceAll("VX_ROW", "row");
                            col.cellDefn = col.cellDefn.replaceAll("VX_CONFIG", "vxConfig")
                        }
                        if (col.inlineEditOnColumnEnabled == true) {
                            if (col.editDefn == '' || col.editDefn == null)
                                col.editDefn = '<input class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />';
                            col.editDefn = col.editDefn.replaceAll("VX_ROW_POINT", "row[vxColSettings.primaryId]");
                            col.editDefn = col.editDefn.replaceAll("VX_DATA_POINT", "row[header.id]");
                            col.editDefn = col.editDefn.replaceAll("VX_ROW", "row");
                            col.editDefn = col.editDefn.replaceAll("VX_CONFIG", "vxConfig")
                            $scope.vxColSettings.colWithInlineEdits.push(col.id);
                            if (col.editDefn.indexOf('vx-keep-watch') != -1) {
                                col.editDefn = col.editDefn.replaceAll("vx-keep-watch", "vx-keep-watch-row-id=\"{{row[vxColSettings.primaryId]}}\" vx-keep-watch-field=\"" + col.id + "\" vx-keep-watch");
                            }

                            if (col.inlineEditValidation == true) {
                                $scope.vxConfig.invalidRows = {};
                                $scope.vxConfig.invalidRowFields = {};
                                _.each($scope.vxConfig.vxData, function (row, index) {
                                    var rowId = row[$scope.vxColSettings.primaryId];
                                    $scope.vxConfig.invalidRows[rowId] = false;
                                    $scope.vxConfig.invalidRowFields[rowId] = {};
                                });
                                col.editDefn = col.editDefn.replaceAll("VX_INVALID_ROW", "vxConfig.invalidRows[row[vxColSettings.primaryId]] == true");
                                col.editDefn = col.editDefn.replaceAll("VX_INVALID_FIELD_ROW", "vxConfig.invalidRowFields[row[vxColSettings.primaryId]]." + col.id + " == true");
                            }

                        }
                    });
                    /* DEFAULT ORDER PRDIACTE TO PRIMARY */
                    $scope.vxColSettings.predicate = $scope.vxColSettings.primaryId;
                    if (typeof $scope.vxConfig.multiSelectionDependentCol !== 'undefined'
                        && $scope.vxConfig.multiSelectionDependentCol != null
                        && $scope.vxConfig.multiSelectionDependentCol != {}
                        && $scope.vxConfig.multiSelectionDependentCol != '')
                        $scope.vxColSettings.multiSelColDependent = true;
                    if (typeof $scope.vxConfig.xsRowTitleTemplate !== 'undefined'
                                        && $scope.vxConfig.xsRowTitleTemplate != null
                                        && $scope.vxConfig.xsRowTitleTemplate != {}
                                        && $scope.vxConfig.xsRowTitleTemplate != '') {
                        $scope.vxColSettings.xsRowTitleTemplateAvailable = true;
                    }
                    /* GENERATE TEMPLATE IF NOT AVAILBLE FOR NEW ROW */
                    if ($scope.vxConfig.inlineAddRowEnabled == true) {
                        if (typeof $scope.vxConfig.newRowTemplate === 'undefined' || $scope.vxConfig.newRowTemplate == null || $scope.vxConfig.newRowTemplate == {} || $scope.vxConfig.newRowTemplate == '') {
                            var newRowTemplate = angular.copy($scope.vxConfig.data[0]);
                            _.each($scope.vxConfig.columnDefConfigs, function (col) {
                                switch (typeof $scope.vxConfig.newRowTemplate[col.id]) {
                                    case 'boolean':
                                        $scope.vxConfig.newRowTemplate[col.id] = false;
                                        break;
                                    case 'number':
                                        $scope.vxConfig.newRowTemplate[col.id] = 0;
                                        break;
                                    case 'string':
                                        $scope.vxConfig.newRowTemplate[col.id] = '';
                                        break;
                                    default:
                                        $scope.vxConfig.newRowTemplate[col.id] = null;
                                }
                            });
                            $scope.vxConfig.newRowTemplate = newRowTemplate;
                        }
                    }

                    /* GENERATE VX INSTANCE ID AND SEND BACK*/
                    $scope.config.id = $scope.vxConfig.id = _.uniqueId('_vxUID_');
                    /* ADD PROTOTYPE TO CALLBACK FILTERED DATA*/
                    $scope.config.getVxCounts = function () {
                        if (typeof $scope.vxConfig !== 'undefined' && $scope.vxConfig != null && $scope.vxConfig != {} && $scope.vxConfig.id !== 'undefined' && $scope.vxConfig.id != null && $scope.vxConfig.id != {})
                            return {
                                'id': $scope.vxConfig.id,
                                'data': {
                                    'vxAllDataLength': $scope.getAllRowLength(),
                                    'vxFilteredDataLength': $scope.multiBoxFilters.length > 0 ? $scope.vxConfig.vxFilteredData.length : 0,
                                    'vxSelectedDataLength': $scope.vxColSettings.multiSelected.length
                                }
                            }
                        else
                            return undefined;
                    }

                    $scope.config.getData = function () {
                        return $scope.vxConfig.data;
                    }


                    $scope.config.setRowFieldValidation = function (id, field, valid) {
                        if ($scope.vxConfig.inlineEditSyncEnabled == true) {
                            var exists = _.filter($scope.vxColSettings.multiSelected, function (uid) { return uid.localeCompare(id) == 0 });
                            if (typeof exists !== 'undefined' && exists != null && exists.length > 0) {
                                _.each($scope.vxColSettings.multiSelected, function (uid) {
                                    $scope.vxConfig.invalidRows[uid] = !valid;
                                    $scope.vxConfig.invalidRowFields[uid][field] = !valid;
                                });
                            }
                        }
                        $scope.vxConfig.invalidRows[id] = !valid;
                        $scope.vxConfig.invalidRowFields[id][field] = !valid;
                    }

                    /* ADD FUNCTION REFERENCE FOR DIRECT CALL*/
                    $scope.config.changeRowClass = $scope.changeRowClass;
                    $scope.$emit('vxGridSettingsBuilt', { 'id': $scope.vxConfig.id });
                }

                $scope.editRow = function (id) {
                    if ($scope.vxConfig.inlineEditSyncEnabled == true) {
                        if ($scope.vxColSettings.multiSelected.length > 0) {
                            var exists = _.filter($scope.vxColSettings.multiSelected, function (uid) { return uid.localeCompare(id) == 0 });
                            if (typeof exists !== 'undefined' && exists != null && exists.length > 0) {
                                _.each($scope.vxColSettings.multiSelected, function (uid) {
                                    $scope.vxColSettings.inlineEditState[uid] = true;
                                });
                            }
                        }
                    }
                    $scope.vxColSettings.inlineEditState[id] = true;
                }

                $scope.editInProgressCount = function () {
                    var count = 0;
                    if (typeof $scope.vxColSettings.inlineEditState !== 'undefined' && $scope.vxColSettings.inlineEditState != null) {
                        for (var arg in $scope.vxColSettings.inlineEditState) {
                            count = $scope.vxColSettings.inlineEditState[arg] == true ? count + 1 : count;
                        }
                    }
                    return count;
                }

                $scope.$on('vxInlineEditFieldChange', function (e, data) {
                    if ($scope.vxConfig.inlineEditSyncEnabled == true) {
                        var exists = _.filter($scope.vxColSettings.multiSelected, function (uid) { return uid.localeCompare(data.rowId) == 0 });
                        if (typeof exists !== 'undefined' && exists != null && exists.length > 0) {
                            _.each($scope.vxColSettings.multiSelected, function (uid) {
                                var cRow = _.find($scope.vxConfig.vxData, function (row) { return row[$scope.vxColSettings.primaryId] == uid; })
                                if (typeof cRow !== 'undefined' && cRow != null && $scope.vxColSettings.inlineEditState[uid] == true) {
                                    cRow[data.field] = data.value;
                                }
                            });
                        }
                    }
                })

                $scope.savingRows = function (id) {
                    var cRow = _.find($scope.vxConfig.vxData, function (row) { return row[$scope.vxColSettings.primaryId] == id; })
                    if (typeof cRow !== 'undefined' && cRow.newRow == true) {
                        if ($scope.vxConfig.inlineSaveOverrideEnabled == true) {
                            $scope.vxColSettings.saveInProgress[id] = true;
                            var defer = $q.defer();
                            defer.promise.then(function (data) {
                                if (typeof cRow.row !== 'undefined' && data.save == true) {
                                    delete cRow.newRow;
                                    _.each($scope.vxConfig.columnDefConfigs, function (col) {
                                        cRow[col.id] = data.row[col.id];
                                    });
                                }
                                else {
                                    $scope.vxConfig.data.unshift(cRow);
                                }
                                $scope.vxColSettings.inlineEditState[id] = typeof data.save !== 'undefined' && data.save != null && data.save == true ? false : true;
                                $scope.$emit('vxGridRowSave', { 'id': $scope.vxConfig.id, 'data': cRow, 'save': !$scope.vxColSettings.inlineEditState[id] });
                                $scope.vxColSettings.saveInProgress[id] = false;
                            }, function (data) {
                                /* FAILURE SAVE */
                                console.log('Error : Save Failed');
                                console.log(data);
                                $scope.vxColSettings.saveInProgress[id] = false;
                                $scope.vxColSettings.inlineEditState[id] = true;
                            });
                            defer.resolve($scope.config.fnInlineSaveOverride(cRow, null));
                        }
                        else {
                            if (typeof oRow !== 'undefined') {
                                _.each($scope.vxConfig.columnDefConfigs, function (col) {
                                    oRow[col.id] = cRow[col.id];
                                });
                            }
                            else {
                                $scope.vxConfig.data.unshift(cRow);
                            }
                            $scope.vxColSettings.inlineEditState[id] = false;
                            $scope.$emit('vxGridRowSaved', { 'id': $scope.vxConfig.id, 'data': cRow });
                        }
                    }
                    else {
                        var oRow = _.find($scope.vxConfig.data, function (row) { return row[$scope.vxColSettings.primaryId] == id; })
                        if (typeof cRow !== 'undefined' && typeof oRow !== 'undefined') {
                            if ($scope.vxConfig.inlineSaveOverrideEnabled == true) {
                                $scope.vxColSettings.saveInProgress[id] = true;
                                var defer = $q.defer();
                                defer.promise.then(function (data) {
                                    if (typeof data.row !== 'undefined' && data.save == true) {
                                        _.each($scope.vxColSettings.colWithInlineEdits, function (head) {
                                            oRow[head] = data.row[head];
                                        });
                                    }
                                    $scope.vxColSettings.inlineEditState[id] = typeof data.save !== 'undefined' && data.save != null && data.save == true ? false : true;
                                    $scope.$emit('vxGridRowSave', { 'id': $scope.vxConfig.id, 'data': cRow, 'save': !$scope.vxColSettings.inlineEditState[id] });
                                    $scope.vxColSettings.saveInProgress[id] = false;
                                }, function (data) {
                                    /* FAILURE SAVE */
                                    console.log('Error : Save Failed');
                                    console.log(data);
                                    $scope.vxColSettings.saveInProgress[id] = false;
                                    $scope.vxColSettings.inlineEditState[id] = true;
                                });
                                defer.resolve($scope.config.fnInlineSaveOverride(cRow, oRow));
                            }
                        }
                    }
                }

                $scope.saveRow = function (id) {
                    var saved = false;
                    if ($scope.vxConfig.inlineEditSyncEnabled == true) {
                        var exists = _.filter($scope.vxColSettings.multiSelected, function (uid) { return uid.localeCompare(id) == 0 });
                        if (typeof exists !== 'undefined' && exists != null && exists.length > 0) {
                            _.each($scope.vxColSettings.multiSelected, function (uid) {
                                $scope.savingRows(uid);
                                saved = true;
                            });
                        }
                    }
                    if (!saved) {
                        $scope.savingRows(id);
                    }
                }

                $scope.revertEdits = function () {
                    if (typeof $scope.vxColSettings.multiSelected !== 'undefined' && $scope.vxColSettings.multiSelected != null & $scope.vxColSettings.multiSelected.length > 0) {
                        _.each($scope.vxColSettings.multiSelected, function (uid) {
                            $scope.revertEditForRow(uid);
                            $scope.vxColSettings.rowSelected[uid] = false;
                        });
                        $scope.vxColSettings.multiSelected = [];
                    }
                }

                $scope.revertEditForRow = function (id) {
                    var cRow = _.find($scope.vxConfig.vxData, function (row) { return row[$scope.vxColSettings.primaryId] == id; });
                    if (typeof cRow !== 'undefined' && cRow.newRow == true) {
                        $scope.vxColSettings.inlineEditState[id] = false;
                        $scope.vxColSettings.rowSelected[id] = false;
                        $scope.vxColSettings.multiSelected = _.reject($scope.vxColSettings.multiSelected, function (mid) { id.localeCompare(mid) == 0 });
                        $scope.vxConfig.vxData = _.reject($scope.vxConfig.vxData, function (row) { return row[$scope.vxColSettings.primaryId].localeCompare(id) == 0 });
                        $scope.$emit('vxGridRowEditRevert', { 'id': $scope.vxConfig.id, 'data': cRow });
                    }
                    else {
                        var oRow = _.find($scope.vxConfig.data, function (row) { return row[$scope.vxColSettings.primaryId] == id; })
                        if (typeof cRow !== 'undefined' && typeof oRow !== 'undefined') {
                            _.each($scope.vxColSettings.colWithInlineEdits, function (head) {
                                cRow[head] = oRow[head];
                            });
                            $scope.vxColSettings.inlineEditState[id] = false;
                            $scope.vxColSettings.rowSelected[id] = false;
                            $scope.vxColSettings.multiSelected = _.reject($scope.vxColSettings.multiSelected, function (mid) { id.localeCompare(mid) == 0 });
                            $scope.$emit('vxGridRowEditRevert', { 'id': $scope.vxConfig.id, 'data': oRow });
                        }
                    }
                }

                $scope.addNewRow = function () {
                    var newRow = angular.copy($scope.vxConfig.newRowTemplate);
                    var _newGuid = _GUID();
                    newRow[$scope.vxColSettings.primaryId] = _newGuid;
                    newRow['newRow'] = true;
                    $scope.vxColSettings.inlineEditState[_newGuid] = true;
                    $scope.vxConfig.vxData.unshift(newRow);
                }

                $scope.deleteRows = function () {
                    if (typeof $scope.vxColSettings.multiSelected !== 'undefined' && $scope.vxColSettings.multiSelected != null & $scope.vxColSettings.multiSelected.length > 0) {
                        if ($scope.vxConfig.inlineDeleteOverrideEnabled == true) {
                            _.each($scope.vxColSettings.multiSelected, function (id) {
                                $scope.vxColSettings.saveInProgress[id] = true;
                            });
                            var defer = $q.defer();
                            var rows = angular.copy(_.filter($scope.vxConfig.vxData, function (row) { return _.contains($scope.vxColSettings.multiSelected, row[$scope.vxColSettings.primaryId]) == true }));
                            defer.promise.then(function (data) {
                                if (data.rows.length > 0) {
                                    var _processIDs = _.map(data.rows, function (row) { return row[$scope.vxColSettings.primaryId] });
                                    $scope.vxConfig.vxData = _.reject($scope.vxConfig.vxData, function (row) { return _.contains(_processIDs, row[$scope.vxColSettings.primaryId]) == true });
                                    $scope.$emit('vxGridRowsDeleted', { 'id': $scope.vxConfig.id, 'data': _processIDs });
                                    _.each(_processIDs, function (id) {
                                        $scope.vxColSettings.inlineEditState[id] = false;
                                        $scope.vxColSettings.rowSelected[id] = false;
                                        $scope.vxColSettings.saveInProgress[id] = false;
                                    });
                                    $scope.vxColSettings.multiSelected = _.difference($scope.vxColSettings.multiSelected, _processIDs);
                                }
                            }, function (data) {
                                /* FAILURE SAVE */
                                console.log('Error : Save Failed');
                                console.log(data);
                            }).then(function () {
                                _.each($scope.vxColSettings.multiSelected, function (id) {
                                    $scope.vxColSettings.saveInProgress[id] = false;
                                });
                            });
                            defer.resolve($scope.config.fnInlineDeleteOverride(rows));
                        }
                        else {
                            $scope.vxConfig.vxData = _.reject($scope.vxConfig.vxData, function (row) { return _.contains($scope.vxColSettings.multiSelected, row[$scope.vxColSettings.primaryId]) == true });
                            $scope.$emit('vxGridRowsDeleted', { 'id': $scope.vxConfig.id, 'data': $scope.vxColSettings.multiSelected });
                            _.each($scope.vxColSettings.multiSelected, function (id) {
                                $scope.vxColSettings.inlineEditState[id] = false;
                                $scope.vxColSettings.rowSelected[id] = false;
                            });
                            $scope.vxColSettings.multiSelected = [];
                        }
                    }
                }

                $scope.activatePage = function (page) {
                    $scope.vxColSettings.activePage = page;
                    $scope.vxColSettings.vxPageStartPosition = (page > 0 ? page * $scope.vxConfig.pageLength - 1 : 0);
                }

                $scope.debouncedSearch = _.debounce(function () {
                    $scope.vxColSettings.xsSearch = angular.copy($scope.vxColSettings.searchToken);
                }, 250);

                $scope.$watch('getWindowDimensions()', function (newValue, oldValue) {
                    if (newValue.w < 768)
                        $scope.vxColSettings.xsViewEnabled = true;
                    else
                        $scope.vxColSettings.xsViewEnabled = false;
                }, true);
                w.bind('resize', function () {
                    $scope.$apply();
                });

                $scope.isValidHeaderName = function (header, name) {
                    return header.renderDefn == false && typeof name !== 'undefined' && name != null && name != '';
                }
                $scope.headerClick = function (header, e) {

                    var proceed = true;
                    var target = $(e.target);
                    if (typeof target !== 'undefined' && target != null & target.length > 0) {
                        var ulTarget = target.closest('ul.dropdown-menu');
                        if (typeof ulTarget !== 'undefined' && ulTarget != null & ulTarget.length > 0)
                            proceed = false;
                    }
                    if (proceed == false)
                        return;

                    _.each($scope.vxConfig.columnDefConfigs, function (col) { if (col.id.localeCompare(header.id) != 0) $scope.vxColSettings.dropdDownOpen[col.id] = false; })
                    var _colDefn = _.find($scope.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare(header.id) == 0 });
                    if (typeof _colDefn !== 'undefined' && _colDefn != null) {
                        if ($scope.vxColSettings.dropdDownEnabled[_colDefn.id] == false) {
                            /* ENABLING DEFUALT SORT */
                            $scope.sortClick(header);
                        }
                        else {
                            $scope.vxColSettings.dropdDownLoaded[_colDefn.id] = false;
                            $scope.vxColSettings.dropdDownOpen[_colDefn.id] = !$scope.vxColSettings.dropdDownOpen[_colDefn.id];
                            /* CHECK IF INTERSECTED FILTERS NEED TO BE SET TRUE */
                            var _intersect = _.filter($scope.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(_colDefn.id) != 0 });
                            var processForIntersectedFilters = _intersect.length > 0;
                            /* CHECK IF FILTERS LIST HAS BEEN POPULATED FOR COLUMN */
                            var filterListForColAvailable = false;
                            if (typeof $scope.vxColSettings.colFilterPairs[_colDefn.id] !== 'undefined' && $scope.vxColSettings.colFilterPairs[_colDefn.id] != null && $scope.vxColSettings.colFilterPairs[_colDefn.id] != {} && $scope.vxColSettings.colFilterPairs[_colDefn.id].length > 0) {
                                filterListForColAvailable = true;
                            }
                            /* RESET DISABLED PROPS FOR PREVIOUSLY INTERSECTED DATA SET*/
                            if (processForIntersectedFilters == false && filterListForColAvailable == true) {
                                $scope.vxColSettings.dropdDownLoaded[_colDefn.id] = true;
                                _.each($scope.vxColSettings.colFilterPairs[_colDefn.id], function (pair) { pair.disabled = false; });
                            }
                            else {
                                $timeout(function () {
                                    /* SORT OPERATION */
                                    if (_colDefn.ddSort == true)
                                        $scope.vxColSettings.dropDownSort[_colDefn.id] = true;
                                    if (_colDefn.ddGroup == true)
                                        $scope.vxColSettings.dropDownGroup[_colDefn.id] = true;
                                    /* FILTER OPERATION */
                                    if (_colDefn.ddFilters == true) {
                                        /*  POPULATE LIST OF FILTERS*/
                                        if (filterListForColAvailable == false) {
                                            $scope.vxColSettings.dropDownFilters[_colDefn.id] = true;
                                            $scope.vxColSettings.colFilterPairs[_colDefn.id] = [];
                                            var uniqed = _.uniq(_.map($scope.vxConfig.vxData, function (item) {
                                                var ret = item[_colDefn.id];
                                                if (typeof ret !== 'undefined' && ret != null && ret != {} && typeof ret != 'object')
                                                    return ret.trim()
                                                else
                                                    return ret;
                                            }));
                                            uniqed = _.reject(uniqed, function (item) { return typeof item === 'undefined' || item == {} });
                                            _.each(uniqed.sort(), function (item) {
                                                var retKey = getKeyedUnique(item, _colDefn.id, 'col');
                                                var key = retKey.key;
                                                var type = retKey.type;
                                                var name = (item == '' || item == ' ' ? '< blank >' : item);
                                                name = item == null ? ' < null >' : name;
                                                var pair = { 'key': key, 'label': item, 'name': name, 'col': _colDefn.id, 'type': type, disabled: false, action: 'filter' };
                                                $scope.vxColSettings.colFilterPairs[_colDefn.id].push(pair);
                                                $scope.vxColSettings.colFiltersStatus[key] = false;
                                            });
                                            $scope.vxColSettings.filterSearchToken[_colDefn.id] = '';
                                            $scope.vxColSettings.colFiltersActivated[_colDefn.id] = false;
                                        }
                                        /* SET NON INTERSECTED FILTERS TO DISABLE TRUE*/
                                        if (processForIntersectedFilters == true) {
                                            /* GET INTERSECTED DATA SET BY LOOPING THROUGH MATCHES - vxConfig.vxFilteredData */
                                            var lastCol = _.last($scope.multiBoxFilters);
                                            var uniqed = _.uniq(_.map($scope.vxConfig.vxFilteredData, function (item) { return item[_colDefn.id] }));
                                            if (lastCol.col.localeCompare(_colDefn.id) != 0) {
                                                _.each($scope.vxColSettings.colFilterPairs[_colDefn.id], function (pair) {
                                                    if (_.contains(uniqed, pair.label) != true)
                                                        pair.disabled = true;
                                                    else
                                                        pair.disabled = false;
                                                });
                                            }
                                        }
                                    }
                                    $scope.vxColSettings.dropdDownLoaded[_colDefn.id] = true;
                                }, 500);
                            }
                        }
                    }
                }

                function getKeyedUnique(item, id, phrase) {
                    var key = phrase + '_' + id + '_key_';
                    var type = 'string';
                    if (item == null) {
                        key = key + 'null';
                    }
                    else {
                        if (item == null)
                            key = key + 'null';
                        else if (typeof item != 'object') {
                            key = key + item.replace(/\s+/g, '_');
                        }
                        else {
                            key = key + JSON.stringify(item).replace(/\s+/g, '_');
                            type = 'object';
                        }
                    }
                    return { 'key': key, 'type': type };
                }


                $scope.sortClick = function (header) {
                    var _colDefn = _.find($scope.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare(header.id) == 0 });
                    if (typeof _colDefn !== 'undefined' && _colDefn != null) {
                        if (_colDefn.ddSort) {
                            if ($scope.vxColSettings.predicate.localeCompare(_colDefn.id) != 0)
                                $scope.vxColSettings.predicate = _colDefn.id;
                            $scope.vxColSettings.reverseSettings[_colDefn.id] = !$scope.vxColSettings.reverseSettings[_colDefn.id];
                            $scope.vxColSettings.reverse = $scope.vxColSettings.reverseSettings[_colDefn.id];
                        }
                    }
                }
                $scope.getVisibleHeaderCounts = function () {
                    return _.filter($scope.vxConfig.columnDefConfigs, function (col) { return col.hidden != true }).length;
                }
                $scope.groupClick = function (header) {
                    $scope.clearFilters();
                    //$scope.removeGroupings();
                    if ($scope.vxColSettings.groupByColActivated[header.id] != true) {
                        $scope.vxColSettings.predicate = null;
                        var collection = [];
                        var groupByProp = header.id;
                        var groupColName = header.columnName;
                        var groupPropValues = _.uniq(_.pluck($scope.vxConfig.vxData, groupByProp));
                        var groups = _.groupBy(_.sortBy($scope.vxConfig.vxData, groupByProp), groupByProp);
                        $scope.vxColSettings.groupKeys[groupByProp] = [];
                        _.each(groupPropValues, function (value) {
                            var key = (getKeyedUnique(value, groupByProp, 'groupcol')).key;
                            $scope.vxColSettings.groupKeys[groupByProp].push(key);
                            if (groups[value].length > 0) {
                                $scope.vxColSettings.groupPredicate[key] = false;
                                var rowDefn = { 'type': 'groupRow', 'colName': groupColName, 'col': groupByProp, 'value': value, 'groupId': key, 'cellDefn': '<div class="vx-row-select"><input class="vx-row-select-toggle" type="checkbox" ng-model="VX_ROW_POINT" ng-change="groupSelectionChanged(row)" /></div>' };
                                rowDefn.cellDefn = rowDefn.cellDefn.replaceAll("VX_ROW_POINT", "vxColSettings.groupPredicate[row.groupId]");
                                collection.push(rowDefn);
                                collection = _.union(collection, groups[value]);
                            }
                        });
                        $scope.vxConfig.vxData = collection;
                        $scope.vxColSettings.groupByColActivated[header.id] = true;
                    }
                }
                $scope.unGroupClick = function (header) {
                    $scope.clearFilters();
                    if ($scope.vxColSettings.groupByColActivated[header.id] == true) {
                        $scope.vxColSettings.predicate = header.id;
                        $scope.vxConfig.vxData = _.reject($scope.vxConfig.vxData, function (row) {
                            if (typeof row.type !== 'undefined' && row.type != null)
                                return row.type.localeCompare('groupRow') == 0
                            else
                                return false
                        });
                        $scope.vxColSettings.groupByColActivated[header.id] = false;
                    }
                }
                $scope.getAllRowLength = function () {
                    var len = _.filter($scope.vxConfig.data, function (row) {
                        return typeof row.type == 'undefined' || row.type == null || row.type.localeCompare('groupRow') != 0
                    }).length;
                    return len;
                }
                $scope.removeGroupings = function () {
                    _.each($scope.vxConfig.columnDefConfigs, function (header) {
                        $scope.unGroupClick(header);
                    });
                    $scope.vxColSettings.groupPredicate = {};
                }
                $scope.clearGroupingForHeader = function (header) {
                    $scope.multiBoxFilters = _.reject($scope.multiBoxFilters, function (pair) { return pair.col.localeCompare(header.id) == 0 });
                }
                $scope.groupSelectionChanged = function (group) {
                    $scope.emitArray = [];
                    var toggledTo = $scope.vxColSettings.groupPredicate[group.groupId];
                    var rows = _.filter($scope.vxConfig.vxFilteredData, function (row) {
                        return row.type != 'groupRow' && row[group.col].localeCompare(group.value) == 0
                    });
                    _.each(rows, function (row) {
                        if ($scope.vxColSettings.multiSelColDependent == false || ($scope.vxColSettings.multiSelColDependent == true && row[$scope.vxConfig.multiSelectionDependentCol] == false)) {
                            var pid = row[$scope.vxColSettings.primaryId];
                            if ($scope.vxColSettings.rowSelected[pid] != toggledTo) {
                                $scope.vxColSettings.rowSelected[pid] = toggledTo;
                                var result = { 'key': row[$scope.vxConfig.onSelectionReturnCol], 'value': $scope.vxColSettings.rowSelected[pid], '_pKey': pid };
                                $scope.emitArray.push(pid);
                                if (toggledTo)
                                    $scope.vxColSettings.multiSelected.push(pid);
                                else
                                    $scope.vxColSettings.multiSelected = _.reject($scope.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
                            }
                        }
                    });
                    $scope.$emit('vxGridRwSelectionChange', { 'id': $scope.vxConfig.id, 'data': $scope.emitArray });
                }

                $scope.allRowSelectionChanged = function () {
                    var toggleTo = $scope.vxColSettings.allRowSelected;
                    if (toggleTo == true) {
                        _.each($scope.vxConfig.vxFilteredData, function (row) {
                            var pid = row[$scope.vxColSettings.primaryId];
                            if ($scope.vxColSettings.rowSelected[pid] == false && toggleTo == true) {
                                $scope.vxColSettings.rowSelected[pid] = true;
                                $scope.vxColSettings.multiSelected.push(pid);
                            }
                        });
                        _.each($scope.vxConfig.columnDefConfigs, function (header) {
                            if ($scope.vxColSettings.dropDownGroup[header.id] == true && $scope.vxColSettings.groupByColActivated[header.id] == true) {
                                _.each($scope.vxColSettings.groupKeys[header.id], function (key) {
                                    $scope.vxColSettings.groupPredicate[key] = true;
                                });
                            }
                        })
                        $scope.$emit('vxGridRowMultiSelectionChange', { 'id': $scope.vxConfig.id, 'data': $scope.vxColSettings.multiSelected });
                        $scope.$emit('vxGridRowAllSelectionChange', { 'id': $scope.vxConfig.id, 'data': { 'toggledTo': toggleTo, 'array': $scope.vxColSettings.multiSelected } });
                    }
                    else if (toggleTo == false) {
                        /* RESET GROUPS SELECTION */
                        $scope.clearSelection();
                        $scope.$emit('vxGridRowAllSelectionChange', { 'id': $scope.vxConfig.id, 'data': { 'toggledTo': toggleTo, 'array': $scope.vxColSettings.multiSelected } });
                    }
                }

                $scope.rowSelectionChanged = function (row) {
                    var pid = row[$scope.vxColSettings.primaryId];
                    var result = { 'key': row[$scope.vxConfig.onSelectionReturnCol], 'value': $scope.vxColSettings.rowSelected[pid], '_pKey': pid };
                    var proceed = true;
                    if ($scope.vxColSettings.rowSelected[pid] == true && $scope.vxColSettings.multiSelColDependent == true) {
                        proceed = false;
                        var colId = $scope.vxConfig.multiSelectionDependentCol;
                        if (row[colId] == true && $scope.vxColSettings.multiSelected.length == 0)
                            proceed = true;
                        else if (row[colId] == false && $scope.vxColSettings.multiSelected.length >= 1) {
                            var id = $scope.vxColSettings.multiSelected[0];
                            var dataRow = _.find($scope.vxConfig.vxData, function (i) { return i[$scope.vxColSettings.primaryId].localeCompare(id) == 0 });
                            if (typeof dataRow !== 'undefined' && dataRow != null && dataRow != {} && dataRow[colId] == true) {
                                proceed = false;
                                $scope.vxColSettings.rowSelected[pid] = false;
                            }
                            else
                                proceed = true;
                        }
                        else if (row[colId] == false)
                            proceed = true;
                        else
                            $scope.vxColSettings.rowSelected[pid] = false;
                    }
                    else if ($scope.vxColSettings.rowSelected[pid] == false) {
                        $scope.vxColSettings.multiSelected = _.reject($scope.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
                        proceed = false;
                        $scope.$emit('vxGridRowSelectionChange', { 'id': $scope.vxConfig.id, 'data': result });
                    }
                    if (proceed) {
                        var item = _.find($scope.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
                        if (typeof item === 'undefined' || item == null)
                            $scope.vxColSettings.multiSelected.push(pid);
                        $scope.$emit('vxGridRowSelectionChange', { 'id': $scope.vxConfig.id, 'data': result });
                        /* PROCESS FOR MULTI SELECT FALSE */
                        if ($scope.vxConfig.multiSelectionEnabled == false) {
                            _.each($scope.vxColSettings.multiSelected, function (rs) {
                                if (rs.localeCompare(pid) != 0) {
                                    $scope.vxColSettings.rowSelected[rs] = false;
                                }
                            });
                            $scope.vxColSettings.multiSelected = _.reject($scope.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) != 0 });
                        }
                    }
                }

                $scope.filterClick = function (header, filter) {
                    $scope.clearSelection();
                    var filterValue = $scope.vxColSettings.colFiltersStatus[filter.key];
                    if (filterValue == false) {
                        $scope.multiBoxFilters = _.reject($scope.multiBoxFilters, function (mbFilter) { return mbFilter.key.localeCompare(filter.key) == 0 });
                        var colFilterActivatedAlready = _.find($scope.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(filter.col) == 0 });
                        if (typeof colFilterActivatedAlready === 'undefined' || colFilterActivatedAlready == null || colFilterActivatedAlready == {} || colFilterActivatedAlready.length == 0)
                            $scope.vxColSettings.colFiltersActivated[header.id] = false;
                    }
                    else {
                        var filterExists = _.find($scope.multiBoxFilters, function (mbFilter) { return mbFilter.key.localeCompare(filter.key) == 0 });
                        if (typeof filterExists === 'undefined' || filterExists == null || filterExists == {}) {
                            $scope.multiBoxFilters.push(filter);
                        }
                        $scope.vxColSettings.colFiltersActivated[header.id] = true;
                    }
                }
                $scope.filterClearClick = function (header) {
                    if ($scope.vxColSettings.colFiltersActivated[header.id] == true) {
                        $scope.clearSelection();
                        var colFilterActivatedAlready = _.filter($scope.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(header.id) == 0 });
                        if (colFilterActivatedAlready.length > 0) {
                            _.each(colFilterActivatedAlready, function (mbFilter) {
                                $scope.vxColSettings.colFiltersStatus[mbFilter.key] = false;
                            });
                        }
                        $scope.multiBoxFilters = _.reject($scope.multiBoxFilters, function (mbFilter) { return mbFilter.col.localeCompare(header.id) == 0 });
                        $scope.vxColSettings.colFiltersActivated[header.id] = false;
                    }
                }
                $scope.clearFilters = function () {
                    if ($scope.multiBoxFilters.length > 0) {
                        _.each($scope.vxConfig.columnDefConfigs, function (col) {
                            $scope.filterClearClick(col);
                        });
                    }
                    $scope.multiBoxFilters = [];
                }
                $scope.selectAllFiltered = function () {
                    if ($scope.vxColSettings.multiSelected.length > 0) {
                        $scope.clearSelection();
                    }
                    $scope.emitArray = [];
                    _.each($scope.vxConfig.vxFilteredData, function (row) {
                        if ($scope.vxColSettings.multiSelColDependent == false || ($scope.vxColSettings.multiSelColDependent == true && row[$scope.vxConfig.multiSelectionDependentCol] == false)) {
                            $scope.vxColSettings.rowSelected[row[$scope.vxColSettings.primaryId]] = true;
                            var pid = row[$scope.vxColSettings.primaryId];
                            var result = { 'key': row[$scope.vxConfig.onSelectionReturnCol], 'value': $scope.vxColSettings.rowSelected[pid], '_pKey': pid };
                            $scope.emitArray.push(result);

                            /* MAINTAIN LIST OF SELECTED ROWS */
                            if ($scope.vxColSettings.rowSelected[pid] == true) {
                                var item = _.find($scope.vxColSettings.multiSelected, function (rs) { return rs.localeCompare(pid) == 0 });
                                if (typeof item === 'undefined' || item == null)
                                    $scope.vxColSettings.multiSelected.push(pid);
                            }
                        }
                    });
                    $scope.$emit('vxGridRowMultiSelectionChange', { 'id': $scope.vxConfig.id, 'data': $scope.emitArray });
                }
                $scope.clearSelection = function () {
                    $scope.emitArray = [];
                    _.each($scope.vxColSettings.multiSelected, function (pid) {
                        $scope.vxColSettings.rowSelected[pid] = false;
                        var row = _.find($scope.vxConfig.vxData, function (r) { return r.type != 'groupRow' && r[$scope.vxColSettings.primaryId].localeCompare(pid) == 0 });
                        if (typeof row !== 'undefined' && row != null) {
                            var result = { 'key': row[$scope.vxConfig.onSelectionReturnCol], 'value': $scope.vxColSettings.rowSelected[pid], '_pKey': pid };
                            $scope.emitArray.push(result);
                        }
                        $scope.vxColSettings.multiSelected = [];
                        _.each($scope.vxConfig.columnDefConfigs, function (header) {
                            if ($scope.vxColSettings.dropDownGroup[header.id] == true && $scope.vxColSettings.groupByColActivated[header.id] == true) {
                                _.each($scope.vxColSettings.groupKeys[header.id], function (key) {
                                    $scope.vxColSettings.groupPredicate[key] = false;
                                });
                            }
                        })
                    });
                    $scope.$emit('vxGridRowMultiSelectionChange', { 'id': $scope.vxConfig.id, 'data': $scope.emitArray });
                }
                $scope.openManageColumns = function () {
                    var modalInstance = $modal.open({
                        templateUrl: 'template/vx-grid/vx-grid-manage-columns-modal.html',
                        windowClass: 'vxGridManageColMod',
                        controller: ["$scope", "$modalInstance", "originalSettings", function ($scope, $modalInstance, originalSettings) {
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
                        }],
                        backdrop: 'static',
                        resolve: {
                            originalSettings: function () {
                                return angular.copy($scope.vxConfig.columnDefConfigs);
                            }
                        }
                    });
                    modalInstance.result.then(function (data) {
                        /* GET MODIFIED CHANGES FOPR CONFIG */
                        $scope.vxConfig.columnDefConfigs = data;
                        $scope.$emit('vxGridSettingsChanged', { 'id': $scope.vxConfig.id, 'data': data });
                    }, function (data) {
                    });
                }
                $scope.openJsonEditor = function () {
                    var modalInstance = $modal.open({
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
                                return angular.copy($scope.vxConfig.vxData);
                            }
                        }
                    });
                    modalInstance.result.then(function (data) {
                        /* GET MODIFIED CHANGES FOPR CONFIG */
                        $scope.vxConfig.vxData = data;
                        $scope.$emit('vxGridDataChanged', { 'id': $scope.vxConfig.id, 'data': data });
                    }, function (data) {
                    });
                };
                $scope.outsideHeaderClick = function (header) {
                    if ($scope.vxColSettings.dropdDownOpen[header.id] == true)
                        $scope.vxColSettings.dropdDownOpen[header.id] = false;
                }
                $scope.revealWrapToggle = function () {
                    $scope.vxColSettings.revealWrapRowData = !$scope.vxColSettings.revealWrapRowData;
                }
                $scope.xsReset = function () {
                    $scope.vxColSettings.xsSearch = '';
                }
                $scope.justScrollTop = function () {
                    var element = $scope.selfEle.find('.vxTableContainer.scrollTableContainer');
                    $timeout(function () {
                        $(element).animate({ scrollTop: 0 }, 500);
                    }, 100);
                }
                $scope.$on('vsRepeatCollectionPartiallyRendered', function (e, data) {
                    $scope.$emit('vxPartiallyRendered', { 'id': $scope.vxConfig.id, 'data': data });
                    if ($scope.vxConfig.selectAllOnRenderAll == true) {
                        $scope.vxColSettings.selectAllEnabled = false;
                        $scope.$emit('vxPartiallyRenderedSelectAllDisabled', { 'id': $scope.vxConfig.id, 'data': data });
                    }
                });
                $scope.$on('vsRepeatCollectionCompletelyRendered', function (e, data) {
                    $scope.$emit('vxCompletelyRendered', { 'id': $scope.vxConfig.id, 'data': data });
                    if ($scope.vxConfig.selectAllOnRenderAll == true) {
                        $scope.vxColSettings.selectAllEnabled = true;
                        $scope.$emit('vxCompletelyRenderedSelectAllEnabled', { 'id': $scope.vxConfig.id, 'data': data });
                    }
                });
                var comEvOnEvent = ['openJsonEditor', 'openManageColumns', 'resetVxInstance', 'clearFilters', 'selectAllFiltered', 'clearSelection', 'revealWrapToggle'];
                _.each(comEvOnEvent, function (evName) {
                    var captureEvName = 'vxGrid' + evName.capitalizeFirstLetter();
                    var fireEvent = evName + '()';
                    $scope.$on(captureEvName, function (e, data) {
                        if (data.id.localeCompare($scope.vxConfig.id) == 0)
                            $scope.$eval(fireEvent);
                    })
                });
                $scope.$on('vxGridChangeRowClass', function (e, data) {
                    $scope.changeRowClass(data);
                });
                $scope.changeRowClass = function (data) {
                    if (data.id.localeCompare($scope.vxConfig.id) == 0) {
                        _.each(data.data, function (pair) {
                            $scope.vxColSettings.vxRowClass[pair.key] = pair.value;
                        });
                    }
                }
                $scope.$on('vxGridResetRowClass', function (e, data) {
                    if (data.id.localeCompare($scope.vxConfig.id) == 0)
                        $scope.vxColSettings.vxRowClass = {};
                });
                $scope.$on('vxGridDisableRowSelection', function (e, data) {
                    if (data.id.localeCompare($scope.vxConfig.id) == 0) {
                        _.each(data.data, function (pair) {
                            $scope.vxColSettings.vxRowSelectionDisable[pair.key] = pair.value;
                        });
                    }
                });
                $scope.$on('vxGridResetDisableRowSelection', function (e, data) {
                    if (data.id.localeCompare($scope.vxConfig.id) == 0) {
                        for (var key in $scope.vxColSettings.vxRowSelectionDisable)
                            $scope.vxColSettings.vxRowSelectionDisable[key] = false;
                    }
                });
            }],
            replace: true,
            templateUrl: 'template/vx-grid/vx-grid.html',
            link: function ($scope, element, attributes) {
                $scope.selfEle = element;
                /* BUILD COL SETTINGS */
                $scope.$watchCollection('config.data', function (n) {
                    if (n.length == 0)
                        n = [{ 'fillEmptyElement': true }];
                    $scope.config.vxData = angular.copy(n);
                    $scope.resetVxInstance();
                });

                $scope.$watchCollection('vxConfig.vxFilteredData', function (n) {
                    if (n.length >= 0) {
                        /* PROCESS FOR PAGINATION IF VIRTUALIZATION IS FALSE */
                        if ($scope.vxConfig.virtualization == false) {
                            $scope.vxColSettings.pages = _.range(Math.ceil(n.length / parseInt($scope.vxConfig.pageLength)));
                            $scope.vxColSettings.vxPageEnabled = $scope.vxColSettings.pages.length > 1;
                            $scope.vxColSettings.activePage = 0;
                            $scope.vxColSettings.vxPageStartPosition = 0;
                        }
                    }
                });

                var container = angular.element($(element).find('.scrollTableContainer')[0]);
                container.on('scroll', function () {
                    lazyScrollHeaderPositioning();
                });
                var lazyScrollHeaderPositioning = _.debounce(function () {
                    $scope.$apply(function () {
                        $scope.posLeft = container.scrollLeft() > 1 ? -container.scrollLeft() : 1;
                        $scope.posTop = container.scrollTop();
                    });
                }, 50);

                $scope.getNonHiddenColCount = function () {
                    var result = 1;
                    if (typeof $scope.vxConfig.columnDefConfigs !== 'undefined' && $scope.vxConfig.columnDefConfigs.length > 0)
                        result = _.filter($scope.vxConfig.columnDefConfigs, function (header) { return header.hidden == false }).length;
                    return result;
                }
            }
        };
    })
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
    .directive("vxKey", ['$rootScope', '$parse', function ($rootScope, $parse) {
        return {
            restrict: 'AEC',
            compile: function ($element, attr) {
                var fn = $parse(attr['vxKey']);
                return function vxKeyHandler(scope, element) {
                    if (!element.attr('role')) {
                        element.attr('role', 'button');
                    }

                    if (!element.attr('tabindex')) {
                        element.attr('tabindex', 0);
                    }
                    element.on('click', function (e) {
                        if (attr.vxDisabled == true || attr.ngDisabled)
                            return;
                        vxKeyHandlerCallback(e)
                    });
                    element.on('keyup', function (e) {
                        if (attr.vxDisabled == true || attr.ngDisabled)
                            return;
                        if (e.keyCode == 13 || e.keyCode == 32) {
                            vxKeyHandlerCallback(e);
                        }
                    });
                    function vxKeyHandlerCallback(e) {
                        var callback = function () {
                            fn(scope, { $event: e });
                        };
                        if ($rootScope.$$phase) {
                            scope.$evalAsync(callback);
                        } else {
                            scope.$apply(callback);
                        }
                    }
                }
            }
        };
    }])
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
})();