# Vx Grid (1.0.2)

An standalone native table plugin which uses the best of features provided by AngularJS.

##Demo

Sample Preview @ <a href="http://vxgrid.azurewebsites.net/">http://vxgrid.azurewebsites.net</a>


##List of supported features (1.0.2)
<ol>
    <li>Sorting</li>
    <li>Contextual Filtering</li>
    <li>Filters with Search</li>
    <li>Fixed Header</li>
    <li>Virtualization</li>
    <li>Pagination W/WOT Virtualization</li>
    <li>Column Hiding</li>
    <li>Column Width Changing</li>
    <li>Single Row Selection</li>
    <li>Multi Row Selection</li>
    <li>All Row Selection</li>
    <li>Callbacks</li>
    <li>Inline Row Editing</li>
    <li>Inline Multi Row Editing</li>
    <li>Iniine Row Addition</li>
    <li>Inline Row Changes Revert</li>
	<li>Inline Row Saving Overrides</li>
    <li>Inline Row Delete Overrides</li>
    <li>Row Deletion</li>
    <li>Column Wrapping</li>
    <li>Events Based Actions</li>
    <li>JSON Data Editor</li>
    <li>Modal Settings Window</li>
    <li>Row Validation</li>
    <li>Separate XS View - On widths < 768px, the columns merge to an 'Expand-Collapse' view.</li>
</ol>  

##VX GRID Config 
BOUND TO 'config=' IN DIRECTIVE CALL
           
        
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
        <CONFIG>.pagination					    <SUPPORTED : Y>    :   <BOOLEAN>   SET TO FALSE TO DISABLE PAGINATION AND ENABLE PAGINATION
        <CONFIG>.pageLength						<SUPPORTED : Y>    :   <NUMBER>	   SET PAGINATION LENGTH AND DEFUALTS TO 20
        <CONFIG>.inlineEditingEnabled			<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING INLINE EDITING OPTION
        <CONFIG>.inlineDeletingEnabled			<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING INLINE DELETING OPTION
        <CONFIG>.inlineAddRowEnabled			<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING ADDING ROW
		<CONFIG>.inlineSaveOverrideEnabled		<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING SAVE ROW OVEVRRIDE
        <CONFIG>.inlineDeleteOverrideEnabled	<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING SAVE DELETE OVEVRRIDE
        <CONFIG>.newRowTemplate			        <SUPPORTED : Y>    :   <STRING>    SET TO NEW TEMPLATE
        <CONFIG>.jsonEditorEnabled			    <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE JSON EDITOR
        <CONFIG>.sortPredicate			        <SUPPORTED : Y>    :   <STRING>    SET TO COLUMN_DEF_ID FOR DEFAULT SORTING BY THAT COLUMN
        <CONFIG>.reverseSortDirection			<SUPPORTED : Y>    :   <STRING>    SET TO TRUE/FALSE TO SET DEFAULT SORTING DIRECTION

##VX GRID Column Config 
BOUND TO EACH ITEM IN  'vxConfig.columnDefConfigs' IN DIRECTIVE DEFINTION
        
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

##VX GRID EVENTS

        'vxGridRowSelectionChange'                  <OUT>   EVENT ON ROW SELECTION CHANGE EMITING DATA :   {'key': <ROW_VALUE_'onSelectionReturnCol'>, 'value': <BOOLEAN_NEW_SELECTION_STATE>, '_pKey': <PRIMARY_ID_VXGRID> }
        'vxGridRowMultiSelectionChange'             <OUT>   EVENT ON MULTIROW SELECTION CHANGE EMITING DATA COLLECTION OF :   {'key': <ROW_VALUE_'onSelectionReturnCol'>, 'value': <BOOLEAN_NEW_SELECTION_STATE>, '_pKey': <PRIMARY_ID_VXGRID> }
		'vxGridRowAllSelectionChange'               <OUT>   EVENT ON ALL ROW SELECTION
        'vxPartiallyRendered'                       <OUT>   EVENT ON VX GRID PARTIAL RENDERED
        'vxCompletelyRendered'                      <OUT>   EVENT ON VX GRID COMPLETE RENDERED
        'vxPartiallyRenderedSelectAllDisabled'      <OUT>   EVENT ON VX GRID PARTIAL RENDERED AND SELECT ALL DISABLED - ONLY ON  <CONFIG>.selectAllOnRenderAll SET TO TRUE
        'vxCompletelyRenderedSelectAllEnabled'      <OUT>   EVENT ON VX GRID COMPLETE RENDERED AND SELECT ALL ENABLED - ONLY ON  <CONFIG>.selectAllOnRenderAll SET TO TRUE
        'vxGridSettingsChanged'                     <OUT>   EVENT ON VX GRID SETTINGS CHANGED
        'vxGridSettingsBuilt'                       <OUT>   EVENT ON VX GRID COL SETTINGS BUILT
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

##VX GRID Config Extensions

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

##Built Using
<a href="https://github.com/kamilkp/angular-vs-repeat">Angular Vs Repeat</a><br />
<a href="https://github.com/oblador/angular-scroll">Angular Scroll</a><br />
<a href="https://github.com/josdejong/jsoneditor/">JSON Editor</a><br />

##Wokring With Save Override
##### Set CONFIG.inlineSaveOverrideEnabled to true to enable row save overides. 
##### Then we define 'fnInlineSaveOverride' as callback in form of a Angular promise. For example
     self.vxSampleConfig.fnInlineSaveOverride = function (newrow, oldrow) {
        var defer = $q.defer();
        $timeout(function () {
    		defer.resolve({ 'row': newrow, 'save': true });
        }, 8000);
         return defer.promise;        
    }

##Wokring With Delete Override
##### Set CONFIG.inlineDeleteOverrideEnabled to true to enable row save overides. 
##### Then we define 'fnInlineDeleteOverride' as callback in form of a Angular promise. For example
     self.vxSampleConfig.fnInlineDeleteOverride = function (rows) {
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve({ 'rows': _.initial(rows) }); // Mocking all rows except last one for deletion
        }, 8000);
        return defer.promise;
    }

##Screenshots

#####Vx Grid intialized with DOM Virtualization
<img src="Source.Vx.Grid\Source.Vx.Grid\images\1.PNG " />
#####Row Selection, Multi Selection, Row Deletion
<img src="Source.Vx.Grid\Source.Vx.Grid\images\2.PNG " />
#####Row Editing, Multi Row Editing, Row Changes Reverting
<img src="Source.Vx.Grid\Source.Vx.Grid\images\3.PNG " />
#####Column Dropdown With Sorting, Filters
<img src="Source.Vx.Grid\Source.Vx.Grid\images\4.PNG " />
#####Column Dropdown With Sorting, Filters With Search Option
<img src="Source.Vx.Grid\Source.Vx.Grid\images\5.PNG " />
#####New Row Addition
<img src="Source.Vx.Grid\Source.Vx.Grid\images\6.PNG " />
#####Pagination Instead of DOM Virtualization
<img src="Source.Vx.Grid\Source.Vx.Grid\images\7.PNG " />
#####Settings Modal with Column Hiding, Column Width Changing & Column Order Changing
<img src="Source.Vx.Grid\Source.Vx.Grid\images\9.PNG " />
#####XS Resolution View
<img src="Source.Vx.Grid\Source.Vx.Grid\images\10.PNG " />

##Note
Inline documentation + README last updated 15/03/2016. Please refer sample app in the repo for updated capabilities.</h6>
