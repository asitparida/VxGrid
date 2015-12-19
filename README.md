# Vx Grid (1.0.1)

####  An standalone native table plugin which uses the best of features provided by AngularJS. 

#### <a href="http://vxgrid.azurewebsites.net/">Live Preview</a>

####  List of supported features (1.0.1)
        a.  Sorting
        b.  Contextual Filtering
        c.  Fixed Header
        d.  Pagination
        e.  Virtualization
        f.  Column Hiding
        g.  Column Width Changing
        h.  Single Row Selection
        i.  Multi Row Selection
        j.  Callbacks
        k.  Inline Row Editing
        l.  Inline Multi Row Editing
        m.  Iniine Row Addition
        n.  Column Wrapping
        o.  Evente Based Actions

#####VX GRID CONFIG (BOUND TO 'config=') IN DIRECTIVE CALL
        -----------------------------------------------------------       
        <CONFIG>.enableDropdownsInHeader        <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE DROPDOWNS ON C0LUMNS, ELSE DEFAULT SORT ON HEADER CLICK
        <CONFIG>.selectionEnabled               <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLE ROW SELECTION
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
        <CONFIG>.inlineAddRowEnabled			<SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE FOR ENABLING ADDING ROW
        <CONFIG>.newRowTemplate			        <SUPPORTED : Y>    :   <STRING>    SET TO NEW TEMPLATE

#####VX GRID COLUMN CONFIG (BOUND TO EACH ITEM IN  'vxConfig.columnDefConfigs') IN DIRECTIVE DEFINTION
        -----------------------------------------------------------------------------------------------------
        <COLUMN>.dropDownEnabled                <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ENABLE COLUMN DROPDOWN
        <COLUMN>.ddSort                         <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ADD SORT OPTION TO COLUMN DROPDOWN
        <COLUMN>.ddFilters                      <SUPPORTED : Y>    :   <BOOLEAN>   SET TO TRUE TO ADD FILTERS TO COLUMN DROPDOWN
        <COLUMN>.ddGroup                        <SUPPORTED : N>    :   <BOOLEAN>   SET TO TRUE TO ADD GROUP OPTION TO COLUMN DROPDOWN
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

#####VX GRID EVENTS
        ----------------------
        'vxGridRowSelectionChange'                  <OUT>   EVENT ON ROW SELECTION CHANGE EMITING DATA :   {'key': <ROW_VALUE_'onSelectionReturnCol'>, 'value': <BOOLEAN_NEW_SELECTION_STATE>, '_pKey': <PRIMARY_ID_VXGRID> }
        'vxGridRowMultiSelectionChange'             <OUT>   EVENT ON MULTIROW SELECTION CHANGE EMITING DATA COLLECTION OF :   {'key': <ROW_VALUE_'onSelectionReturnCol'>, 'value': <BOOLEAN_NEW_SELECTION_STATE>, '_pKey': <PRIMARY_ID_VXGRID> }
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

#####VX GRID CONFIG EXTENSIONS
        ----------------------------
        <CONFIG>.getVxCounts()                  <NO PARAMS>         RETURNS COUNT - {'vxAllDataLength': <LENGTH OF ALL DATA> , 'vxFilteredDataLength' : <LENGTH OF FILTERED DATA SET>, 'vxSelectedDataLength' : <LENGTH OF SELECTED DATA SET>
        <CONFIG>.getData()                      <NO PARAMS>         RETURNS CURRENT DATA STATE

#####BUILT USING
<a href="https://github.com/kamilkp/angular-vs-repeat">Angular Vs Repeat</a>
<a href="https://github.com/oblador/angular-scroll">Angular Scroll</a>
<a href="https://github.com/josdejong/jsoneditor/">JSON Editor</a>
