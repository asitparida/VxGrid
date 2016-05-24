﻿(function () {
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
        <CONFIG>.newRowTemplate			        <SUPPORTED : Y>    :   <STRING>         SET TO NEW TEMPLATE
        <CONFIG>.jsonEditorEnabled			    <SUPPORTED : Y>    :   <BOOLEAN>        SET TO TRUE TO ENABLE JSON EDITOR
        <CONFIG>.sortPredicate			        <SUPPORTED : Y>    :   <STRING>         SET TO COLUMN_DEF_ID FOR DEFAULT SORTING BY THAT COLUMN
        <CONFIG>.reverseSortDirection			<SUPPORTED : Y>    :   <STRING>         SET TO TRUE/FALSE TO SET DEFAULT SORTING DIRECTION
        <CONFIG>.emptyFill			            <SUPPORTED : Y>    :   <STRING>         CONTENTS TO SHOW FOR EMPTY GRID
        <CONFIG>.loaderGifSrc                   <SUPPORTED : Y>    :   <STRING>         LOADER GIF PATH
        <CONFIG>.ariaPrimary                    <SUPPORTED : Y>    :   <STRING>         COLUMN IDENTIFYING ARIA PRIMARY
        <CONFIG>.xsTemplate                     <SUPPORTED : Y>    :   <BOOLEAN>        ENABLE XS SPECIFIC TEMPLATE
        <CONFIG>.exportFileName                 <SUPPORTED : Y>    :   <STRING>         SPECIFY DOWNLOADED FILE NAME
        <CONFIG>.exportEnabled                  <SUPPORTED : Y>    :   <BOOLEAN>        ENABLE EXPORT TO EXCEL FEATURE
        <CONFIG>.initialRowClasses              <SUPPORTED : Y>    :   <MAP<OBJECT>>    PROVIDE KEY VALUE PAIRS FOR INITIAL ROW CLASSES
        <CONFIG>.rowClassFn                     <SUPPORTED : Y>    :   <FUNCTION>       PROVIDE FUNCTION REFERENCE TO SELF INVOKE WITH ONE PARAM - VX_ROW : FUNCTION VX_SAMPLE_ROWCLASS_FUNC(ROW){}
        
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
            controller: ["$scope", "$uibModal", "$sce", "$timeout", "$rootScope", "$window", "$filter", "$q", function ($scope, $modal, $sce, $timeout, $rootScope, $window, $filter, $q) {
                $scope.vxColSettings = {};
                $scope.posLeft = 1;
                $scope.posTop = 0;

                /// <summary>GET THE ANGULAR SCOPED WINDOW OBJECT REFERENCE</summary>
                var w = angular.element($window);

                /// <summary>GENERATE DIMENSIONS FOR THE CURRENT WINDOW OBJECT</summary>
                /// <returns type="OBJECT" />
                $scope.getWindowDimensions = function () {
                    return {
                        'h': w.height(),
                        'w': w.width()
                    };
                };

                /// <summary>RESETS THE VX INSTANCE AND DEFUALTING ALL APPICABLE PROPERTIES</summary>
                $scope.resetVxInstance = function () {
                    /// <summary>RE-INITIALIZING ALL VXCOLSETTINGS PROPERTIES</summary>
                    $scope.vxColSettings = {
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
                        'latchExcess': 3, // STORES THE NUMBER OF ROWS WHICH NEED TO BE BROUGHT TO THE VIEW AS A RESULT OF VIRTUALIZATION
                        'inlineEditState': {}, // STORES CURRENT ROW EDIT STATE
                        'colWithInlineEdits': [],
                        'groupKeys': {},
                        'allRowSelected': false, // STORES THE STATE FOR ALL ROW SELECTIONS COMPOSED TO ONE PLACE
                        'allRowSelectionDisabled': false, // STORES WHETHER TO ALLOW OR INHIBIT ALL ROW SELECTIONS
                        'filterSearchToken': {}, //
                        'saveInProgress': {} // STORES WHETHER A CREATE/EDIT/DELETE OPERATION IS IN PROGRESS
                    };

                    $scope.vxConfig = angular.copy($scope.config);
                    /* GETTING / SETTING PRIMARY COLUMN*/
                    var _primaryColDefn = _.find($scope.vxConfig.columnDefConfigs, function (col) { return col.primary == true });
                    var primaryId = '_uid';
                    if (typeof _primaryColDefn !== 'undefined' && _primaryColDefn != null) {
                        /* PRIMARY COLUMN EXISTS */
                        _.each($scope.vxConfig.vxData, function (row, index) {
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
                        _.each($scope.vxConfig.vxData, function (row, index) { row.primaryId = index });
                    }
                    $scope.vxColSettings.primaryId = primaryId;
                    /* ENBALE ROW EDITING INLINE */
                    if ($scope.vxConfig.inlineEditingEnabled == true) {
                        /* ADDING CHECKBOX COLUMN DEFINITION */
                        var col = _.find($scope.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare('inlinediting') == 0 });
                        if (typeof col === 'undefined' || col == null || col == {}) {
                            var _selColDefn = {
                                id: 'inlinediting', columnName: 'Edit', renderDefn: true, renderHeadDefn: true, ddSort: false, ddGroup: false, ddFilters: false, width: '50', locked: true, headTabIndex: -1,
                                cellDefn:
                                    '<div class="vx-row-edit icon-container" tabindex="0" vx-key="editRow(VX_ROW_POINT)" ng-show="vxColSettings.inlineEditState[VX_ROW_POINT] == false && vxColSettings.saveInProgress[VX_ROW_POINT] != true" role="button" aria-labelledby="vx_row_edit vx_row_sel_{{::row[vxColSettings.primaryId]}}" >'
                                        + '<i class="icon icon-edit"></i>'
                                  + '</div>'
                                  + '<div class="vx-row-edit icon-container" ng-attr-vxdisabled="{{vxConfig.invalidRows[row[vxColSettings.primaryId]]}}" tabindex="0" vx-key="saveRow(VX_ROW_POINT)" ng-show="vxColSettings.inlineEditState[VX_ROW_POINT] == true && vxColSettings.saveInProgress[VX_ROW_POINT] != true" role="button" aria-labelledby="vx_row_save vx_row_sel_{{::row[vxColSettings.primaryId]}}" >'
                                    + '<i class="icon icon-save"></i>'
                                  + '</div>'
                                  + '<div class="vx-row-edit icon-container loader" tabindex="0" ng-show="vxColSettings.saveInProgress[VX_ROW_POINT] == true" role="button" aria-labelledby="vx_row_sel_row vx_row_sel_{{::row[vxColSettings.primaryId]}}" >'
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
                                id: 'checkbox', columnName: 'Row Selection', renderDefn: true, renderHeadDefn: true, ddSort: false, ddGroup: false, ddFilters: false, width: '50', locked: true, headTabIndex: -1,
                                headerDefn: '<div class="vx-row-select"><span class="offscreen" id="vx_row_sel_row">Select Row</span><span class="offscreen" id="vx_row_sel_all_row">Select All Rows</span><input class="vx-row-select-toggle" type="checkbox" ng-model="vxColSettings.allRowSelected" ng-change="allRowSelectionChanged()" ng-disabled="vxColSettings.allRowSelectionDisabled" ng-if="vxConfig.allRowsSelectionEnabled" aria-labelledby="vx_row_sel_all_row"  /></div>',
                                cellDefn: '<div class="vx-row-select"><input class="vx-row-select-toggle" type="checkbox" ng-model="vxColSettings.rowSelected[VX_ROW_POINT]" ng-change="rowSelectionChanged(row)" ng-disabled="vxColSettings.vxRowSelectionDisable[VX_ROW_POINT]" ng-attr-id="vx_row-sel_in{{::row[vxColSettings.primaryId]}}" aria-labelledby="vx_row_sel_row vx_row_sel_{{::row[vxColSettings.primaryId]}}" /></div>'
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
                        { prop: 'pagination', defValue: false },
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
                        { prop: 'allRowsSelectionEnabled', defValue: false },
                        { prop: 'sortPredicate', defValue: $scope.vxColSettings.primaryId },
                        { prop: 'reverseSortDirection', defValue: false },
                        { prop: 'emptyFill', defValue: '<span>No records to display ...</span>' },
                        { prop: 'loaderGifSrc', defValue: '/resource/loaderWhite36.GIF' },
                        { prop: 'ariaPrimary', defValue: $scope.vxColSettings.primaryId },
                        { prop: 'xsTemplate', defValue: false },
                        { prop: 'exportFileName', defValue: 'ExcelSheet' },
                        { prop: 'exportEnabled', defValue: false }
                    ];
                    _.each(_propDefns, function (propDefn) {
                        if ($scope.vxConfig[propDefn.prop] === 'undefined' || $scope.vxConfig[propDefn.prop] == null || $scope.vxConfig[propDefn.prop] == {})
                            $scope.vxConfig[propDefn.prop] = propDefn.defValue;
                    });
                    $scope.vxColSettings.vxRowClass = $scope.vxConfig['initialRowClasses'];
                    // SETTING XS VIEW BASED PROPERTIES BASED ON WINDOW WIDTH
                    if ($scope.getWindowDimensions().w < 768) {
                        $scope.vxColSettings.xsViewEnabled = true && $scope.vxConfig.xsTemplate;
                        $scope.vxColSettings.latchExcess = 5;
                    }
                    $scope.vxColSettings.selectAllOnRenderAll = $scope.vxConfig.selectAllOnRenderAll;
                    _.each($scope.vxConfig.columnDefConfigs, function (col) {
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
                            { prop: 'headTabIndex', defValue: 0 }
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

                    $scope.vxConfig.columnDefConfigs = $scope.calculateEffectiveWidths($scope.vxConfig.columnDefConfigs);
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

                    /// <summary>GRID FUNCTION : WATCH OVER THE WINDOW DIMENSIONS SO AS TO ENABLE XS VIEW WHEN WIDTH < 768PX </summary>
                    var vxWindowsWidthDeregister = $scope.$watch('getWindowDimensions()', function (newValue, oldValue) {
                        if (newValue.w < 768)
                            $scope.vxColSettings.xsViewEnabled = true;
                        else
                            $scope.vxColSettings.xsViewEnabled = false;
                    }, true);
                    if ($scope.vxConfig.xsTemplate == false) {
                        vxWindowsWidthDeregister();
                    }
                    w.bind('resize', function () {
                        $scope.$apply();
                    });

                    /* GENERATE VX INSTANCE ID AND SEND BACK*/
                    $scope.config.id = $scope.vxConfig.id = _.uniqueId('_vxUID_');

                    /// <summary>CONFIG EXTENSION TO GET CURRENT STATE OF DIFFERENT COUNTS</summary>
                    /// <returns type="OBJECT" />
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

                    /// <summary>CONFIG EXTENSION TO GET CURRENT DATA SUPPLIED TO THE VX GRID</summary>
                    /// <returns type="ARRAY OF OBJECT" />
                    $scope.config.getData = function () {
                        return $scope.vxConfig.data;
                    }

                    /// <summary>CONFIG EXTENSION TO GET ACTIVE DATA BOUND TO THE VX GRID</summary>
                    /// <returns type="ARRAY OF OBJECT" />
                    $scope.config.getActiveDataSet = function () {
                        return $scope.vxConfig.vxData;
                    }

                    /// <summary>CONFIG EXTENSION TO GET ACTIVELY FILTERED DATA</summary>
                    /// <returns type="ARRAY OF OBJECT" />
                    $scope.config.getFilteredDataSet = function () {
                        return $scope.vxConfig.vxFilteredData;
                    }

                    /// <summary>CONFIG EXTENSION TO SET ROW VALIDATION PROPERTIES - INVALID ROWS/FILEDS</summary>
                    /// <param name="id" type="String">ROW ID</param>
                    /// <param name="field" type="String">FIELD NAME / COLUMN NAME</param>
                    /// <param name="valid" type="Boolean">WHETHER TRUE OR FALSE</param>
                    $scope.config.setRowFieldValidation = function (id, field, valid) {
                        if (typeof $scope.vxConfig.invalidRowFields[id] === 'undefined') {
                            $scope.vxConfig.invalidRows[id] = false;
                            $scope.vxConfig.invalidRowFields[id] = {};
                        }
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

                    /// <summary>CONFIG EXTENSION TO GET LIST OF ROW IDS WHICH ARE CURRENTLY SELECTED</summary>
                    /// <returns type="ARRAY OF INT" />
                    $scope.config.getSelectedRows = function () {
                        return $scope.vxColSettings.multiSelected;
                    }

                    /// <summary>CONFIG EXTENSION TO GET LIST OF ROW IDS WHICH ARE CURRENTLY BEING EDITED</summary>
                    /// <returns type="ARRAY OF INT" />
                    $scope.config.getRowsBeingEdited = function () {
                        var _beingEdited = [];
                        if (typeof $scope.vxColSettings.inlineEditState !== 'undefined' && $scope.vxColSettings.inlineEditState != null) {
                            for (var arg in $scope.vxColSettings.inlineEditState) {
                                if ($scope.vxColSettings.inlineEditState[arg] == true)
                                    _beingEdited.push(arg);
                            }
                        }
                        return _beingEdited;
                    }

                    /// <summary>CONFIG EXTENSION TO MODIFY ROW VALUES USING PROGRAMMATIC ACCESS</summary>
                    /// <param name="rows" type="ARRAY OF OBJECT">LIST OF ROW WHICH NEED TO BE MONIFIED</param>
                    /// <param name="fields" type="ARRAY OF STRING">LIST OF FIELDS WHICH NEED TO BE MODIFIED</param>
                    /// <returns type="ARRAY OF OBJECT" />
                    $scope.config.modifyRows = function (rows, fields) {
                        var _newStates = [];
                        _.each(rows, function (_nrow) {
                            var id = _nrow[$scope.vxColSettings.primaryId];
                            var _vxdRow = _.find($scope.vxConfig.vxData, function (row) { return row[$scope.vxColSettings.primaryId].localeCompare(id) == 0 });
                            var _dRow = _.find($scope.vxConfig.data, function (row) { return row[$scope.vxColSettings.primaryId].localeCompare(id) == 0 });
                            if (typeof _vxdRow !== 'undefined' && typeof _dRow !== 'undefined') {
                                if (typeof fields === 'undefined' || fields.length == 0) {
                                    for (var args in _nrow) {
                                        if (args.localeCompare($scope.vxColSettings.primaryId) != 0) {
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
                            }
                        });
                        return _newStates;
                    }

                    /// <summary>CONFIG EXTENSION TO SELETCT ROWS USING PROGRAMMTIC ACCESS</summary>
                    /// <param name="ids" type="ARRAY OF INT">LIST OF ROW IDs TO BE SELECTED</param>
                    /// <returns type="ARRAY OF INT" />
                    $scope.config.selectRows = function (ids) {
                        var _modIds = [];
                        _.each(ids, function (_id) {
                            var _ostate = $scope.vxColSettings.rowSelected[_id];
                            if (typeof _ostate === 'undefined' || _ostate == null || _ostate == false) {
                                $scope.vxColSettings.rowSelected[_id] = true;
                                $scope.vxColSettings.multiSelected.push(_id);
                                _modIds.push(_id);
                            }
                        });
                        return _modIds;
                    }

                    /// <summary>CONFIG EXTENSION TO DESELECT ROWS USING PROGRAMMTIC ACCESS</summary>
                    /// <param name="ids" type="ARRAY OF INT">LIST OF ROW IDs TO BE DESELECTED</param>
                    /// <returns type="ARRAY OF INT" />
                    $scope.config.deselectRows = function (ids) {
                        var _modIds = [];
                        _.each(ids, function (_id) {
                            var _ostate = $scope.vxColSettings.rowSelected[_id];
                            if (typeof _ostate !== 'undefined' && _ostate == true) {
                                $scope.vxColSettings.rowSelected[_id] = false;
                                $scope.vxColSettings.multiSelected = _.reject($scope.vxColSettings.multiSelected, function (mid) { _id.localeCompare(mid) == 0 });
                                _modIds.push(_id);
                            }
                        });
                        return _modIds;
                    }

                    /// <summary>CONFIG EXTENSION TO SORT COLUMN USING PROGRAMMTIC ACCESS</summary>
                    /// <param name="id" type="String">ID FOR COLUMN IN WHICH WE NEED TO SORT</param>
                    /// <param name="direction" type="Boolean">SET TO TRUE TO SORT IN REVERSE ELSE SET TO FALSE</param>
                    $scope.config.sortByColumn = function (id, direction) {
                        $scope.vxConfig.sortPredicate = id;
                        $scope.vxConfig.reverseSortDirection = direction;
                    }

                    /// <summary>CONFIG EXTENSION TO RESET COLUMN FILTERS USING PROGRAMMTIC ACCESS</summary>
                    /// <param name="ids" type="ARRAY OF INT">LIST OF COLUMN IDS FOR WHICH WE WOULD RESET THE FILTERS</param>
                    $scope.config.resetColumnFilters = function (ids) {
                        _.each(ids, function (id) {
                            $scope.vxColSettings.dropdDownLoaded[id] = false;
                            $scope.vxColSettings.colFilterPairs[id] = {};
                        });
                    }

                    $scope.buildFns();

                    /// <summary>CONFIG EXTENSION TO CHANGE ROW CLASSES USING PROGRAMMATIC ACCESS</summary>
                    $scope.config.changeRowClass = $scope.changeRowClass;

                    $scope.$emit('vxGridSettingsBuilt', {
                        'id': $scope.vxConfig.id
                    });
                }

                /// <summary>GRID FUNCTION : START THE PROCEDURE TO EDIT AN ROW</summary>
                /// <param name="id" type="String">ID FOR ROW TO BE EDITED</param>
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

                /// <summary>GRID FUNCTION : GET COUNT FOR NUMBER OF ROWS BEING EDITED</summary>
                $scope.editInProgressCount = function () {
                    var count = 0;
                    if (typeof $scope.vxColSettings.inlineEditState !== 'undefined' && $scope.vxColSettings.inlineEditState != null) {
                        for (var arg in $scope.vxColSettings.inlineEditState) {
                            count = $scope.vxColSettings.inlineEditState[arg] == true ? count + 1 : count;
                        }
                    }
                    return count;
                }

                /// <summary>GRID FUNCTION : SYNC DATA IN ALL MULTI SELECTED ROWS WHEN ONE OF THE SELECTED ROWS IS BEING EDITED</summary>
                /// <param name="event param" type="OBJECT">ROW ID WHERE THE EDIT ORGINATED, FIELD ID WHICH WAS EDITED, FIELD VALUE TO BE SYNCED</param>
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

                /// <summary>GRID FUNCTION : SAVE ROWS ONCE EDITED OR CREATED</summary>
                /// <param name="id" type="String">ROW ID OF THE ROW BEING CREATED OR EDITED</param>
                $scope.savingRows = function (id) {
                    var cRow = _.find($scope.vxConfig.vxData, function (row) { return row[$scope.vxColSettings.primaryId] == id; })
                    if (typeof cRow !== 'undefined' && cRow.newRow == true) {
                        if ($scope.vxConfig.inlineSaveOverrideEnabled == true) {
                            $scope.vxColSettings.saveInProgress[id] = true;
                            var defer = $q.defer();
                            defer.promise.then(function (data) {
                                if (typeof cRow.row !== 'undefined' && data.save == true) {
                                    cRow.newRow = false;
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
                                cRow.newRow = true;
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

                /// <summary>GRID FUNCTION : HANDLES SAVING FOR ALL MULTI SELECTED ROWS WHEN ONE OF THEM IS SELECTED</summary>
                /// <param name="id" type="String">ROW ID WHERE THE SAVE COMMAND ORIGINATED</param>
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

                /// <summary>GRID FUNCTION : HANDLES REVERTING EDITS FOR ROWS MULTI SELECTED </summary>
                $scope.revertEdits = function () {
                    if (typeof $scope.vxColSettings.multiSelected !== 'undefined' && $scope.vxColSettings.multiSelected != null & $scope.vxColSettings.multiSelected.length > 0) {
                        _.each($scope.vxColSettings.multiSelected, function (uid) {
                            $scope.revertEditForRow(uid);
                            $scope.vxColSettings.rowSelected[uid] = false;
                        });
                        $scope.vxColSettings.multiSelected = [];
                    }
                }

                /// <summary>GRID FUNCTION : REVERTS EDIT STATE OF A ROW BY SHIFTING TO THE ERSTWHILE PRISTINE STATE</summary>
                /// <param name="id" type="String">ID FOR ROW WHOSE EDITS HAVE TO BE REVERTED</param>
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

                /// <summary>GRID FUNCTION : ADD NEW ROW TO THE GRID</summary>
                $scope.addNewRow = function () {
                    $scope.vxConfig.sortPredicate = '_vxCreated';
                    $scope.vxConfig.reverseSortDirection = true;
                    var newRow = angular.copy($scope.vxConfig.newRowTemplate);
                    var _newGuid = _GUID();
                    newRow[$scope.vxColSettings.primaryId] = _newGuid;
                    newRow['newRow'] = true;
                    newRow['_vxCreated'] = new Date().getTime();
                    $scope.vxColSettings.inlineEditState[_newGuid] = true;
                    $scope.vxConfig.vxData.unshift(newRow);
                }

                /// <summary>GRID FUNCTION : DELETE ROWS WHICH HAVE BEEN MULTI SELECTED IRRESPECTIVE OF STATE - NEW/EDITING/SAVING</summary>
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

                /// <summary>GRID FUNCTION : ACTIVATE A PARTICULAR PAGE OF THE GRID WHEN PAGINATION IS ENABLED</summary>
                /// <param name="page" type="int">PAGE NUMBER WHICH NEEDS TO BE ACTIVATED</param>
                $scope.activatePage = function (page) {
                    $scope.vxColSettings.activePage = page;
                    $scope.vxColSettings.vxPageStartPosition = (page > 0 ? page * $scope.vxConfig.pageLength - 1 : 0);
                }

                /// <summary>GRID FUNCTION : DEBOUNCE THE SEARCH SO AS TO THROTTLE SEARCHING IN GRID AND PREVENT CLASHING OF DIGEST CYCLES</summary>
                $scope.debouncedSearch = _.debounce(function () {
                    $scope.vxColSettings.xsSearch = angular.copy($scope.vxColSettings.searchToken);
                }, 50);

                /// <summary>GRID FUNCTION : SET SERACH TOKEN WHEN ACTIVATED THROUGH KEYBOARD EVENTS</summary>
                $scope.keyUpSearch = function ($event) {
                    if ($event.keyCode == 13) {
                        $scope.vxColSettings.xsSearch = angular.copy($scope.vxColSettings.searchToken);
                    }
                    else if ($event.keyCode == 8 && $scope.vxColSettings.searchToken == '') {
                        $scope.vxColSettings.xsSearch = angular.copy($scope.vxColSettings.searchToken);
                    }
                }

                /// <summary>GRID FUNCTION : CHECK IF HEADER NAME IS VALID</summary>
                $scope.isValidHeaderName = function (header, name) {
                    return header.renderHeadDefn == false && typeof name !== 'undefined' && name != null && name != '';
                }

                /// <summary>GRID FUNCTION : INVOKED WHEN ANY HEADER ELEMENT IS CLICKED</summary>
                /// <summary>IF DROPDOWNS NOT ENBALED, IT WILL SORT ON THE COLUMN</summary>
                /// <summary>IF DROPDOWNS ENABLED, IT WILL START LOADING ITS CONTENT IF NOT ALREADY LOADED</summary>
                /// <param name="header" type="Object">HEADER OBJECT ASSOCIATED WITH THE CLICK</param>
                /// <param name="E" type="Event"></param>
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
                                    _colDefn.idCollection = [];
                                    /* SORT OPERATION */
                                    if (_colDefn.ddSort == true) {
                                        $scope.vxColSettings.dropDownSort[_colDefn.id] = true;
                                        _colDefn.idCollection.push(_colDefn.id + '_sort');
                                    }
                                    if (_colDefn.ddGroup == true) {
                                        $scope.vxColSettings.dropDownGroup[_colDefn.id] = true;
                                        _colDefn.idCollection.push(_colDefn.id + '_group');
                                        _colDefn.idCollection.push(_colDefn.id + '_ungroup');
                                    }
                                    /* FILTER OPERATION */
                                    if (_colDefn.ddFilters == true) {
                                        _colDefn.idCollection.push(_colDefn.id + '_clearfilters');
                                        _colDefn.idCollection.push(_colDefn.id + '_searchfilters');
                                        /*  POPULATE LIST OF FILTERS*/
                                        if (filterListForColAvailable == false) {
                                            $scope.vxColSettings.dropDownFilters[_colDefn.id] = true;
                                            $scope.vxColSettings.colFilterPairs[_colDefn.id] = [];
                                            var uniqed = _.uniq(_.map($scope.vxConfig.vxData, function (item) {
                                                var ret = { 'value': item[_colDefn.id], 'type': '' };
                                                if (typeof ret.value !== 'undefined' && ret.value != null && ret.value != {} && typeof ret.value != 'object' && typeof ret.value != 'number') {
                                                    ret.value = ret.value.trim();
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
                                                $scope.vxColSettings.colFilterPairs[_colDefn.id].push(pair);
                                                _colDefn.idCollection.push(_colDefn.id + '_filter_' + iterator);
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

                /// <summary>GRID FUNCTION : GET UNIQUE KEY BASED ON ITEM, ID AND PHRASE FOR UNQIUELY IDENTIFYINGA FILTER</summary>
                /// <param name="item" type="String">Description</param>
                /// <param name="id" type="String">Description</param>
                /// <param name="phrase" type="String">Description</param>
                /// <returns type="Object" />
                function getKeyedUnique(item, id, phrase) {
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
                $scope.sortClick = function (header) {
                    var _colDefn = _.find($scope.vxConfig.columnDefConfigs, function (col) { return col.id.localeCompare(header.id) == 0 });
                    if (typeof _colDefn !== 'undefined' && _colDefn != null) {
                        if (_colDefn.ddSort) {
                            if ($scope.vxConfig.sortPredicate.localeCompare(_colDefn.id) != 0)
                                $scope.vxConfig.sortPredicate = _colDefn.id;
                            $scope.vxColSettings.reverseSettings[_colDefn.id] = !$scope.vxColSettings.reverseSettings[_colDefn.id];
                            $scope.vxConfig.reverseSortDirection = $scope.vxColSettings.reverseSettings[_colDefn.id];
                        }
                    }
                }

                /// <summary>GRID FUNCTION : GET COUNT OF COLUMNS WHICH ARE NOT HIDDEN SO AS TO ESTABLISH CORRECT COLSPANS</summary>
                $scope.getVisibleHeaderCounts = function () {
                    return _.filter($scope.vxConfig.columnDefConfigs, function (col) { return col.hidden != true }).length;
                }

                /// <summary>GRID FUNCTION : ENABLE GROUPING OF ROWS BASED ON THE COLUMN</summary>
                /// <param name="header" type="Object">HEADER OBJECT AASOCIATED WITH THE COLUMN</param>
                $scope.groupClick = function (header) {
                    $scope.clearFilters();
                    //$scope.removeGroupings();
                    if ($scope.vxColSettings.groupByColActivated[header.id] != true) {
                        $scope.vxConfig.sortPredicate = null;
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

                /// <summary>GRID FUNCTION : REMOVE GROUPING IF ENABLED ON A COLUMN</summary>
                /// <param name="header" type="Object">HEADER OBJECT ASSOCIATED WITH COLUMN</param>
                $scope.unGroupClick = function (header) {
                    $scope.clearFilters();
                    if ($scope.vxColSettings.groupByColActivated[header.id] == true) {
                        $scope.vxConfig.sortPredicate = header.id;
                        $scope.vxConfig.vxData = _.reject($scope.vxConfig.vxData, function (row) {
                            if (typeof row.type !== 'undefined' && row.type != null)
                                return row.type.localeCompare('groupRow') == 0
                            else
                                return false
                        });
                        $scope.vxColSettings.groupByColActivated[header.id] = false;
                    }
                }

                /// <summary>GRID FUNCTION : GET COUNT OF NUMBER OF ROWS IN THE GRID EXCEPT THE ROWS USED TO DENOTE GROUP HEADERS</summary>
                $scope.getAllRowLength = function () {
                    var len = _.filter($scope.vxConfig.data, function (row) {
                        return typeof row.type == 'undefined' || row.type == null || row.type.localeCompare('groupRow') != 0
                    }).length;
                    return len;
                }

                /// <summary>GRID FUNCTION : REMOVE GROUPINGS FOR ANY OF THE COLUMNS ENABLED</summary>
                $scope.removeGroupings = function () {
                    _.each($scope.vxConfig.columnDefConfigs, function (header) {
                        $scope.unGroupClick(header);
                    });
                    $scope.vxColSettings.groupPredicate = {};
                }

                /// <summary>GRID FUNCION : HANDLE SELECTION TOGGLE EVENT ON A GROUP CHECKBOX</summary>
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

                /// <summary>GRID FUCNTION : HANDLE SELECTION TOGGLE EVENT FOR THE ALL ROWS CHECKBOX</summary>
                $scope.allRowSelectionChanged = function () {
                    var toggleTo = $scope.vxColSettings.allRowSelected;
                    if (toggleTo == true) {
                        _.each($scope.vxConfig.vxFilteredData, function (row) {
                            if (row.fillEmptyElement != true) {
                                var pid = row[$scope.vxColSettings.primaryId];
                                if ($scope.vxColSettings.rowSelected[pid] == false && toggleTo == true) {
                                    $scope.vxColSettings.rowSelected[pid] = true;
                                    $scope.vxColSettings.multiSelected.push(pid);
                                }
                            }
                        });
                        _.each($scope.vxConfig.columnDefConfigs, function (header) {
                            if ($scope.vxColSettings.dropDownGroup[header.id] == true && $scope.vxColSettings.groupByColActivated[header.id] == true) {
                                _.each($scope.vxColSettings.groupKeys[header.id], function (key) {
                                    $scope.vxColSettings.groupPredicate[key] = true;
                                });
                            }
                        })
                        //$scope.$emit('vxGridRowMultiSelectionChange', { 'id': $scope.vxConfig.id, 'data': $scope.vxColSettings.multiSelected });
                        $scope.$emit('vxGridRowAllSelectionChange', { 'id': $scope.vxConfig.id, 'data': { 'toggledTo': toggleTo, 'array': $scope.vxColSettings.multiSelected } });
                    }
                    else if (toggleTo == false) {
                        /* RESET GROUPS SELECTION */
                        $scope.clearSelection();
                        $scope.$emit('vxGridRowAllSelectionChange', { 'id': $scope.vxConfig.id, 'data': { 'toggledTo': toggleTo, 'array': $scope.vxColSettings.multiSelected } });
                    }
                }

                /// <summary>GRID FUNCTION : HANDLE SELECTION TOGGLE EVENT FOR A ROW CHECKBOX</summary>
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
                        $scope.vxColSettings.allRowSelected = false;
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

                /// <summary>GRID FUNCTION : HANDLE CLICK EVENT WHEN A COLUMN FILTER IS CLICKED</summary>
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

                /// <summary>GRID FUNCTION : HANDLE CLICK EVENT WHEN A COLUMN FILTER IS BEING CLEARED</summary>
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

                /// <summary>GRID FUNCTION : HANDLE CLICK EVENT WHEN ALL FILTERS ARE TO BE CLEARED</summary>
                $scope.clearFilters = function () {
                    if ($scope.multiBoxFilters.length > 0) {
                        _.each($scope.vxConfig.columnDefConfigs, function (col) {
                            $scope.filterClearClick(col);
                        });
                    }
                    $scope.multiBoxFilters = [];
                }

                /// <summary>GRID FUNCTION : SELECT ROWS WHICH ARE A PART OF THE FILTERED SUBSET</summary>
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

                /// <summary>GRID FUNCTION : CLEAR ALL SELECTIONS IN THE GRID</summary>
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
                        $scope.vxColSettings.allRowSelected = false;
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

                /// <summary>GRID FUNCTION : FUNCTION TO MOVE FOCUS TO FIRST ITEM IN MENU</summary>
                $scope.upDownKeyDownHandlerHeaderMenu = function (e) {
                    var _prevent = false;
                    if (e.keyCode == 40) {
                        //DOWN ARROW PRESS
                        var focussables = $(e.target).find('[tabindex="0"]');
                        if (focussables.length > 0)
                            $(focussables[0]).focus();
                    }
                    if (_prevent) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }

                /// <summary>GRID FUNCTION : FUNCTION TO FIND THE APPROPRIATE ID FROM COLLECTION TO FOCUS</summary>
                $scope.findIdToBeFocussed = function (index, collection, direction) {
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
                $scope.findFocussable = function (e, col, direction) {
                    var _id = $(e).attr('id');
                    var _col = _.find($scope.vxConfig.columnDefConfigs, function (column) { return column.id == col });
                    if (typeof _col !== 'undefined' && _col != null) {
                        var _idCollection = _col.idCollection;
                        var _index = _.indexOf(_idCollection, _id);
                        if (_index != -1 && _index != _idCollection.length && direction == true) {
                            return $scope.findIdToBeFocussed(_index, _idCollection, true);
                        }
                        else if (_index != -1 && _index != 0 && direction == false) {
                            return $scope.findIdToBeFocussed(_index, _idCollection, false);
                        }
                        else
                            return null;
                    }
                }

                /// <summary>GRID FUNCTION : FUNCTION TO HELP UP DOWN KEY STROKE MOVEMENTS IN MENU</summary>
                $scope.upDowKeyDownHandlerHeaderMenuItems = function (e, columnId) {
                    var _prevent = false;
                    if (e.keyCode == 40) {
                        /* UP ARROW KEY PRESSED */
                        var _elemId = $scope.findFocussable($(e.target), columnId, true);
                        if ($('#' + _elemId).is('[tabindex="0"]')) {
                            $('#' + _elemId).focus();
                        }
                    }
                    else if (e.keyCode == 38) {
                        /* DOWN ARROW KEY PRESSED */
                        var _elemId = $scope.findFocussable($(e.target), columnId, false);
                        if (_elemId == null) {
                            $(e.target).closest('th').focus();
                        }
                        else if ($('#' + _elemId).is('[tabindex="0"]')) {
                            $('#' + _elemId).focus();
                        }
                    }
                    else if (e.keyCode == 27) {
                        /* ESC KEY PRESSED */
                        if ($scope.vxColSettings.dropdDownOpen[columnId] == true) {
                            $scope.vxColSettings.dropdDownOpen[columnId] = false;
                            var _elem = $(e.target).closest('th');
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
                $scope.openManageColumns = function () {
                    var modalInstance = $modal.open({
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
                                return angular.copy($scope.vxConfig.columnDefConfigs);
                            }
                        }
                    });
                    modalInstance.result.then(function (data) {
                        /* GET MODIFIED CHANGES FOPR CONFIG */
                        data = $scope.calculateEffectiveWidths(data);
                        $scope.vxConfig.columnDefConfigs = data;
                        $scope.$emit('vxGridSettingsChanged', { 'id': $scope.vxConfig.id, 'data': data });
                    }, function (data) {
                    });
                }

                /// <summary>GRID FUNCTION : CALCULATE EFFECTIVE COLUMN WIDTHS</summary>
                $scope.calculateEffectiveWidths = function (data) {
                    var totalWidth = _.reduce(data, function (memo, col) {
                        var _val = 0;
                        if (col.hidden == false)
                            _val = parseInt(col.width);
                        return memo + _val;
                    }, 0);
                    var _containerWidth = $scope.selfEle.find('.vxTableScrollContainer').width();
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

                /// <summary>GRID FUNCTION : REVEAL ALL ROW/CELL DATA WHICH WERE PREVIOUSLY WRAPPED</summary>
                $scope.revealWrapToggle = function () {
                    $scope.vxColSettings.revealWrapRowData = !$scope.vxColSettings.revealWrapRowData;
                }

                ///<summary>GRID FUNCTION : Download excel file which consists of all selected rows</summary>
                $scope.openExport = function () {
                    var selectedData = [];
                    var reportFields = {};

                    var fileName = typeof $scope.vxConfig.exportFileName !== 'undefined' ? $scope.vxConfig.exportFileName : 'ExcelSheet';

                    var fields = [];
                    var header = [];

                    _.each($scope.vxColSettings.multiSelected, function (mulval, mulkey) {
                        _.each($scope.vxConfig.data, function (conval, conkey) {
                            if (conval[$scope.vxColSettings.primaryId] === mulval) {
                                selectedData.push(conval)
                            }
                        });
                    });

                    _.each($scope.config.columnDefConfigs, function (col, key) {
                        reportFields[col.id] = col.columnName;
                    });

                    angular.forEach(reportFields, function (field, key) {
                        if (!field || !key) {
                            throw new Error('error json report fields');
                        }

                        fields.push(key);
                        header.push(field);
                    });

                    var bodyData = _bodyData(selectedData, fields);
                    var strData = _convertToExcel(bodyData, header);

                    var blob = new Blob([strData], { type: "text/plain;charset=utf-8" });

                    return saveAs(blob, [fileName + '.csv']);

                };

                ///export functionality methods
                function _bodyData(data, fields) {
                    var body = "";
                    angular.forEach(data, function (dataItem) {
                        var rowItems = [];

                        angular.forEach(fields, function (field) {
                            if (field.indexOf('.')) {
                                field = field.split(".");
                                var curItem = dataItem;

                                // deep access to obect property
                                angular.forEach(field, function (prop) {
                                    if (curItem !== null && curItem !== undefined) {
                                        curItem = curItem[prop];
                                    }
                                });

                                data = curItem;
                            }
                            else {
                                data = dataItem[field];
                            }

                            var fieldValue = data !== null ? data : ' ';

                            if (fieldValue !== undefined && angular.isObject(fieldValue) && !(fieldValue instanceof Date)) {
                                fieldValue = _objectToString(fieldValue);
                            }

                            rowItems.push(fieldValue);
                        });

                        body += rowItems + '\n';
                    });

                    return body;
                }

                function _convertToExcel(body, header) {
                    return header + '\n' + body;
                }

                function _objectToString(object) {
                    var output = '';
                    angular.forEach(object, function (value, key) {
                        output += key + ':' + value + ' ';
                    });

                    return '"' + output + '"';
                }


                /// <summary>GRID FUNCTION : RESET SEARCH TOKEN FOR THE GRID</summary>
                $scope.xsReset = function () {
                    $scope.vxColSettings.xsSearch = '';
                }

                /// <summary>GRID FUNCTION : SCROLL TO THE TOP OF THE GRID</summary>
                $scope.justScrollTop = function () {
                    var element = $scope.selfEle.find('.vxTableContainer.scrollTableContainer');
                    $timeout(function () {
                        $(element).animate({ scrollTop: 0 }, 500);
                    }, 100);
                }

                /// <summary>GRID FUNCTION : SCROLL DOWN 60PX IN THE GRID</summary>
                $scope.justScrollDown = function () {
                    var element = $scope.selfEle.find('.vxTableContainer.scrollTableContainer');
                    var _scrollTop = $(element).scrollTop() || 0;
                    $timeout(function () {
                        $(element).animate({ scrollTop: _scrollTop + 96 }, 500);
                    }, 100);
                }

                /// <summary>GRID FUNCTION : SHOW SCROLL DOWN ARROW ICON WHEN CONDITION SATISFIED - SCROLL NEEDED</summary>
                $scope.showScrollDownArrow = function () {
                    var scrollContainer = $scope.selfEle.find('.vxTableContainer.scrollTableContainer');
                    var tableContainer = $scope.selfEle.find('.scrollTableContainer table.vxTable');
                    if (typeof scrollContainer !== 'undefined' && typeof tableContainer !== 'undefined' && scrollContainer != null && tableContainer != null) {
                        if (tableContainer.height() > scrollContainer.height())
                            return true;
                    }
                    return false;
                }

                /// <summary>GRID FUNCTION : SHOW SCROLL UP ARROW ICON WHEN CONDITION SATISFIED - SCROLL NEEDED</summary>
                $scope.showScrollUpArrow = function () {
                    var scrollContainer = $scope.selfEle.find('.vxTableContainer.scrollTableContainer');
                    var tableContainer = $scope.selfEle.find('.scrollTableContainer table.vxTable');
                    if (typeof scrollContainer !== 'undefined' && typeof tableContainer !== 'undefined' && scrollContainer != null && tableContainer != null) {
                        if (tableContainer.height() > scrollContainer.height() && scrollContainer.scrollTop() > 48)
                            return true;
                    }
                    return false;
                }

                /// <summary>GRID FUNCTION : HANDLE CLICK EVENTS OUTSIDE A TARGET AREA</summary>
                $scope.outsideHeader = function (header) {
                    if ($scope.vxColSettings.dropdDownOpen[header.id] == true) {
                        $scope.vxColSettings.dropdDownOpen[header.id] = false;
                        if (!$scope.$$phase)
                            $scope.$apply();
                    }
                }

                /// <summary>GRID EVENT : LISTED TO PARTIAL RENDERING OF VIRTUAL DOM</summary>
                $scope.$on('vsRepeatCollectionPartiallyRendered', function (e, data) {
                    /// <summary>GRID EVENT : EMIT EVENT WHEN GRID IS PARTIALLY RENDERED</summary>
                    $scope.$emit('vxPartiallyRendered', { 'id': $scope.vxConfig.id, 'data': data });
                    if ($scope.vxConfig.selectAllOnRenderAll == true) {
                        $scope.vxColSettings.selectAllEnabled = false;
                        /// <summary>GRID EVENT : EMIT EVENT WHEN GRID'S PATIAL RENDERING DISABLES ALL ROWS SELECTION AT ONCE</summary>
                        $scope.$emit('vxPartiallyRenderedSelectAllDisabled', { 'id': $scope.vxConfig.id, 'data': data });
                    }
                });

                /// <summary>GRID EVENT : LISTED TO COMPLETE RENDERING OF VIRTUAL DOM</summary>
                $scope.$on('vsRepeatCollectionCompletelyRendered', function (e, data) {
                    /// <summary>GRID EVENT : EMIT EVENT WHEN GRID IS COMPLETEY RENDERED</summary>
                    $scope.$emit('vxCompletelyRendered', { 'id': $scope.vxConfig.id, 'data': data });
                    if ($scope.vxConfig.selectAllOnRenderAll == true) {
                        $scope.vxColSettings.selectAllEnabled = true;
                        /// <summary>GRID EVENT : EMIT EVENT WHEN GRID'S COMPLETE RENDERING ENABLES ALL ROWS SELECTION AT ONCE</summary>
                        $scope.$emit('vxCompletelyRenderedSelectAllEnabled', { 'id': $scope.vxConfig.id, 'data': data });
                    }
                });

                /// <summary>GRID EVENTS / CONFIG EXTENSIONS : ADD CONFIG EXTENSIONS FOR HOUSE KEEPING TASKS</summary>
                $scope.buildFns = function () {
                    var comEvOnEvent = ['openJsonEditor', 'openManageColumns', 'resetVxInstance', 'clearFilters', 'selectAllFiltered', 'clearSelection', 'revealWrapToggle'];
                    _.each(comEvOnEvent, function (evName) {
                        var captureEvName = 'vxGrid' + evName.capitalizeFirstLetter();
                        var fireEvent = evName + '()';
                        /// <summary>GRID EVENT : LISTEN TO SPECIFIC EVENTS AND FIRE THEM AFTER VALIDATIONS</summary>
                        $scope.$on(captureEvName, function (e, data) {
                            if (data.id.localeCompare($scope.vxConfig.id) == 0)
                                $scope.$eval(fireEvent);
                        })
                        $scope.config[evName] = function () {
                            $scope.$eval(fireEvent);
                        }
                    });
                }

                /// <summary>GRID EVENT : LISTEN TO ASKS FOR CHANGES IN ROW CLASSES</summary>
                $scope.$on('vxGridChangeRowClass', function (e, data) {
                    if (data.id.localeCompare($scope.vxConfig.id) == 0) {
                        $scope.changeRowClass(data.data);
                    }
                });

                /// <summary>GRID FUNCTION : CHANGE ROW CLASSES BASED ON ROW DATA RECIEVED</summary>
                $scope.changeRowClass = function (data) {
                     for (var prop in data) {
                         $scope.vxColSettings.vxRowClass[prop] = data[prop];
                     }
                     if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                         $scope.$apply();
                     }
                }

                /// <summary>GRID EVENT : LISTEN TO ASK FOR RESETTING OW CLASSES</summary>
                $scope.$on('vxGridResetRowClass', function (e, data) {
                    if (data.id.localeCompare($scope.vxConfig.id) == 0)
                        $scope.vxColSettings.vxRowClass = {};
                });

                /// <summary>GRID EVENT : LISTEN TO ASK FOR DISABLING ROW SELECTION</summary>
                $scope.$on('vxGridDisableRowSelection', function (e, data) {
                    if (data.id.localeCompare($scope.vxConfig.id) == 0) {
                        _.each(data.data, function (pair) {
                            $scope.vxColSettings.vxRowSelectionDisable[pair.key] = pair.value;
                        });
                    }
                });

                /// <summary>GRID EVENT : LISTEN TO ASK FOR RESETTING OF ROW SELECTION DISABLED</summary>
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

                /// <summary>GRID WATCH : LISTEN TO CHANGES IN DATA AND ACCORDINGLY RESET INSTANCE</summary>
                $scope.$watchCollection('config.data', function (n) {
                    if (n.length == 0)
                        n = [{ 'fillEmptyElement': true }];
                    $scope.config.vxData = angular.copy(n);
                    $scope.resetVxInstance();
                });

                /// <summary>GRID WATCH : LISTEN TO CHANGES IN FILTERED DATA COLLECTION AN ACCODRIDNGLY RESET PAGES IF PAGINATION ENABLED</summary>
                $scope.$watchCollection('vxConfig.vxFilteredData', function (n) {
                    if (n.length >= 0) {
                        /* PROCESS FOR PAGINATION IF VIRTUALIZATION IS FALSE */
                        if ($scope.vxConfig.pagination == true) {
                            $scope.vxColSettings.pages = _.range(Math.ceil(n.length / parseInt($scope.vxConfig.pageLength)));
                            $scope.vxColSettings.vxPageEnabled = $scope.vxColSettings.pages.length > 1;
                            $scope.vxColSettings.activePage = 0;
                            $scope.vxColSettings.vxPageStartPosition = 0;
                        }
                    }
                });

                $scope.getvxTableContainerWidth = function () {
                    var elem = angular.element($(element).find('.vx-scroller')[0]);
                    return elem.width() + 'px';
                }

                $scope.getNonHiddenColCount = function () {
                    var result = 1;
                    if (typeof $scope.vxConfig.columnDefConfigs !== 'undefined' && $scope.vxConfig.columnDefConfigs.length > 0)
                        result = _.filter($scope.vxConfig.columnDefConfigs, function (header) { return header.hidden == false }).length;
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
                        console.log(e);
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
})();