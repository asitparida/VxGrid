!function(){"use strict";var e={vxGridTableStructure:'        <div class="vxH100 vx-grid-inner vx-grid-related " ng-class="{ \'vxXsViewEnabled\' : vxColSettings.xsViewEnabled == true}">            <div class="row hidden-xs">                <div class="col-xs-12">                    <div class="col-md-4 vsTableStats pull-left zeroPaddingLeft" ng-if="vxConfig.showGridStats">                        <label class="statTitle">All</label>                        <label class="statValue">{{getAllRowLength() | vxNumberFixedLen:2}}</label>                        <label class="statTitle" ng-class="{ \'disabled\' : multiBoxFilters.length == 0}">Filtered</label>                        <label class="statValue" ng-class="{ \'disabled\' : multiBoxFilters.length == 0}"><span ng-if="multiBoxFilters.length > 0">{{vxConfig.vxFilteredData.length | vxNumberFixedLen:2}}</span><span ng-if="multiBoxFilters.length == 0">00</span></label>                        <label class="statTitle" ng-class="{ \'disabled\' : vxColSettings.multiSelected.length == 0}">Selected</label>                        <label class="statValue" ng-class="{ \'disabled\' : vxColSettings.multiSelected.length == 0}">{{vxColSettings.multiSelected.length | vxNumberFixedLen:2}}</label>                    </div>                    <div class="vxTableOperations pull-right zeroPaddingRight" ng-if="vxConfig.showGridOptions">                        <div class="search-container pull-left input-group">                            <input class="search form-control" type="search" ng-model="vxColSettings.searchToken" placeholder="Search" ng-keyup="keyUpSearch($event)" aria-label="search table">                        </div>                        <div class="icon-container pull-left" role="button" tabindex="0" ng-if="vxConfig.inlineEditingEnabled == true && vxConfig.inlineAddRowEnabled == true" vx-key="addNewRow()" aria-label="add new row">                            <i class="icon icon-add"></i>                        </div>                        <div class="icon-container pull-left" role="button" tabindex="{{editInProgressCount() == 0 ? -1 : 0}}" ng-if="vxConfig.inlineEditingEnabled == true && editInProgressCount() > 0" ng-class="{ \'disabled\' : editInProgressCount() == 0}" vx-key="revertEdits()" aria-label="revert edits">                            <i class="icon icon-revert"></i>                        </div>                        <div class="icon-container pull-left" role="button" tabindex="0" ng-if="vxConfig.inlineEditingEnabled == true && vxConfig.inlineDeletingEnabled == true && vxColSettings.multiSelected.length > 0" vx-key="deleteRows()" aria-label="delete rows">                            <i class="icon icon-trash"></i>                        </div>                        <div class="icon-container pull-left" role="button" tabindex="{{vxColSettings.selectAllEnabled == false && vxConfig.multiSelectionEnabled == true ? -1 : 0}}" ng-class="{ \'disabled\' :vxColSettings.selectAllEnabled == false && vxConfig.multiSelectionEnabled == true}" vx-key="selectAllFiltered()" aria-label="select all filtered rows">                            <i class="icon icon-openwith"></i>                        </div>                        <div class="icon-container pull-left" role="button" tabindex="{{vxColSettings.multiSelected.length == 0 ? -1 : 0 }}" ng-class="{ \'disabled\' : vxColSettings.multiSelected.length == 0}" vx-key="clearSelection()" aria-label="clear any row selections">                            <i class="icon icon-clearselection"></i>                        </div>                        <div class="icon-container pull-left" ng-class="{\'active\' : vxColSettings.revealWrapRowData }" vx-key="revealWrapToggle()" aria-label="toggle row content reveal">                            <i class="icon icon-more"></i>                        </div>                        <div class="icon-container pull-left" role="button" tabindex="{{multiBoxFilters.length == 0 ? -1 : 0}}" ng-class="{ \'disabled\' : multiBoxFilters.length == 0}" vx-key="clearFilters()" aria-label="clear any filters applied">                            <i class="icon icon-refresh"></i>                        </div>                        <div class="icon-container pull-left" ng-class="{\'active\' : vxColSettings.menu }" vx-key="openManageColumns()" aria-label="open manage columns modal">                            <i class="icon icon-repair"></i>                        </div>                        <div class="icon-container pull-left" title="JSON Editor" role="button" tabindex="0" ng-class="{\'active\' : vxColSettings.menu }" vx-key="openJsonEditor()" ng-if="vxConfig.jsonEditorEnabled" aria-label="open json editor">                            <i class="icon icon-edit"></i>                        </div>                    </div>                </div>            </div>            <div class="col-xs-12 vxTableScrollContainer" ng-class="{ \'attrPaneOpen\': vxConfig.showGridStats || vxConfig.showGridOptions,\'pageEnabled\': vxColSettings.vxPageEnabled}">                <div class="col-md-12 vxTableContainer ms-datatable ang-dt zeroPadding scrollDupHeader scrollDupHeaderAdded" ng-class="{\'settingsMenuOpen\': vxColSettings.menu, \'attrPaneOpen\': vxConfig.showGridStats || vxConfig.showGridOptions}" ng-if="vxColSettings.xsViewEnabled == false">                    <div class="row marg0">                        <div class="col-xs-12 vxTableHolder pad0">                            <table class="vxTable">                                <thead class="vxHead">                                    <tr class="vxHeadRow">                                        <th class="vxHeadRowCell" ng-repeat="header in vxConfig.columnDefConfigs" title="{{header.columnName}}" vx-key="headerClick(header, $event)" ng-class="{ \'ddEnabled\' : vxColSettings.dropdDownEnabled[header.id] == true}" ng-attr-tabindex="{{vxConfig.noData == false ? header.headTabIndex : -1}}" click-outside="outsideHeaderClick(header)" ng-attr-id="vxHeadSt_{{$index}}" ng-if="header.hidden == false && vxColSettings.xsViewEnabled == false" click-outside-header="outsideHeader(header)" check-click-outside="vxColSettings.dropdDownOpen[header.id]" ng-keydown="upDownKeyDownHandlerHeaderMenu($event)" ng-style="{ \'width\' : header.effectiveWidth + \'px\' }">                                            <span class="noDdTitle" ng-if="isValidHeaderName(header, header.columnName) && vxColSettings.dropdDownEnabled[header.id] == false">{{header.columnName}}</span>                                            <span class="noDdTitle" ng-if="isValidHeaderName(header, header.columnName) && vxColSettings.dropdDownEnabled[header.id] == true && ((vxConfig.noData == true) || (vxConfig.noData == false && vxConfig.vxData.length == 1))">{{header.columnName}}</span>                                            <div class="dropdown" data-container="body" ng-if="vxColSettings.dropdDownEnabled[header.id] == true && vxConfig.noData == false && vxConfig.vxData.length > 1" ng-class="{ \'open\' : vxColSettings.dropdDownOpen[header.id] == true}">                                                <button class="btn btn-default dropdown-toggle" type="button" ng-attr-id="ddMenu_{{header.id}}" aria-expanded="true" tabindex="-1">                                                    <span class="colTitle">{{header.columnName}}</span>                                                    <span class="ddCaret" ng-show="vxColSettings.colFiltersActivated[header.id] != true"><i class="icon icon-ScrollChevronDownLegacy white"></i></span>                                                    <span class="ddCaret" ng-show="vxColSettings.colFiltersActivated[header.id] == true"><i class="icon icon-filter white"></i></span>                                                </button>                                                <ul class="dropdown-menu" role="menu" aria-labelledby="ddMenu_{{header.id}}" data-container="body" ng-keydown="upDowKeyDownHandlerHeaderMenuItems($event, header.id)">                                                    <li tabindex="-1" role="presentation" class="loader" ng-if="vxColSettings.dropdDownLoaded[header.id] == false">                                                        <img class="dropDownLoader" ng-src="{{vxConfig.loaderGifSrc}}" alt="dropdown addition in progress">                                                    </li>                                                    <li tabindex="0" role="presentation" class="sorter" ng-if="vxColSettings.dropdDownLoaded[header.id] == true && vxColSettings.dropDownSort[header.id] == true" vx-key="sortClick(header)" ng-attr-id="{{header.id}}_sort">                                                        <span class="sortIndicator" ng-show="vxColSettings.reverse == false && vxColSettings.predicate == header.id"><i class="icon icon-up white"></i></span><span class="sortIndicator" ng-show="vxConfig.reverseSortDirection == true && vxConfig.sortPredicate == header.id"><i class="icon icon-down white"></i></span>Sort                                                    </li>                                                    <li tabindex="0" role="presentation" class="sorter" ng-if="vxColSettings.dropdDownLoaded[header.id] == true && vxColSettings.dropDownGroup[header.id] == true && vxColSettings.groupByColActivated[header.id] == false" vx-key="groupClick(header)" ng-attr-id="{{header.id}}_group">                                                        <span>Group</span>                                                    </li>                                                    <li tabindex="0" role="presentation" class="sorter" ng-if="vxColSettings.dropdDownLoaded[header.id] == true && vxColSettings.dropDownGroup[header.id] == true && vxColSettings.groupByColActivated[header.id] == true" vx-key="unGroupClick(header)" ng-attr-id="{{header.id}}_ungroup">                                                        <span>Ungroup</span>                                                    </li>                                                    <li tabindex="{{ vxColSettings.colFiltersActivated[header.id] == false ? -1 : 0}}" role="presentation" class="filterClear" ng-if="vxColSettings.dropdDownLoaded[header.id] == true && vxColSettings.dropDownFilters[header.id] == true && vxColSettings.colFilterPairs[header.id].length > 0" ng-class="{ \'disabled\': vxColSettings.colFiltersActivated[header.id] == false}" vx-key="filterClearClick(header)" ng-attr-id="{{header.id}}_clearfilters">                                                        <span class="indicator"><i class="icon icon-filter white"></i></span>Clear All Filters                                                    </li>                                                    <li role="presentation" class="filter-search" ng-if="vxColSettings.dropdDownLoaded[header.id] == true && vxColSettings.dropDownFilters[header.id] == true && header.ddFiltersWithSearch == true">                                                        <input class="search-input" tabindex="0" type="search" placeholder="Search In Filters" aria-label="search for filters in column {{header.columnName}}" ng-model="vxColSettings.filterSearchToken[header.id]" ng-attr-id="{{header.id}}_searchfilters">                                                    </li>                                                    <li role="presentation" class="filter" ng-if="vxColSettings.dropdDownLoaded[header.id] == true && vxColSettings.dropDownFilters[header.id] == true && filter.disabled == false" ng-repeat="filter in vxColSettings.colFilterPairs[header.id] | filter:vxColSettings.filterSearchToken[header.id]">                                                        <input class="filter-toggle" tabindex="0" type="checkbox" ng-model="vxColSettings.colFiltersStatus[filter.key]" ng-change="filterClick(header, filter)" ng-attr-id="{{header.id}}_filter_{{$index}}"><label class="filterItemTitle" ng-attr-for="{{header.id}}_filter_{{$index}}"><span ng-if="filter.filterDefnAvailable == false">{{filter.name}}</span><span ng-if="filter.filterDefnAvailable == true" vx-compile="filter.filterDefn"></span></label>                                                    </li>                                                </ul>                                            </div>                                            <div ng-if="header.renderHeadDefn == true" vx-compile="header.headerDefn"></div>                                        </th>                                    </tr>                                </thead>                            </table>                        </div>                    </div>                </div>                <div class="col-md-12 vxTableContainer ms-datatable ang-dt zeroPadding scrollTableContainer" ng-class="{ \'settingsMenuOpen\': vxColSettings.menu, \'attrPaneOpen\': vxConfig.showGridStats || vxConfig.showGridOptions, \'pageEnabled\': vxColSettings.vxPageEnabled}" du-scroll-container="" style="margin-top:0;" ng-style="{\'min-width\':getvxTableContainerWidth()}">                    <div class="row marg0">                        <div class="col-xs-12 vxTableHolder pad0">                            <div class="offscreen">                                <span class="offscreen" id="vx_row_edit"> Edit Row</span>                                <span class="offscreen" id="vx_row_save"> Save Row</span>                            </div>                            <table class="vxTable">                                <thead class="vxHead">                                    <tr class="vxHeadRow">                                        <th class="vxHeadRowCell" ng-repeat="header in vxConfig.columnDefConfigs" ng-attr-id="vxHead_{{$index}}" ng-style="{ \'width\' : header.effectiveWidth + \'px\' }" ng-if="header.hidden == false && vxColSettings.xsViewEnabled == false">                                            <span class="noDdTitle offscreen">{{header.columnName}}</span>                                        </th>                                        <th class="vxHeadRowCell" ng-if="vxColSettings.xsViewEnabled == true">                                            <div class="search-container pull-left input-group">                                                <div class="searchSymb icon-container"><i class="icon icon-search"></i></div>                                                <input class="search form-control" type="search" ng-model="vxColSettings.xsSearch" placeholder="Search">                                            </div>                                            <div class="icon-container pull-right" role="button" tabindex="{{vxColSettings.xsSearch == \'\' ? -1 : 0}}" ng-class="{ \'disabled\' : vxColSettings.xsSearch == \'\'}" vx-key="xsReset()">                                                <i class="icon icon-refresh"></i>                                            </div>                                            <div class="icon-container pull-right hidden-xs" role="button" tabindex="0" ng-class="{\'active\' : vxColSettings.menu }" vx-key="openManageColumns()">                                                <i class="icon icon-repair"></i>                                            </div>                                            <div class="icon-container pull-right" role="button" tabindex="{{vxColSettings.multiSelected.length == 0 ? -1 : 0 }}" ng-class="{ \'disabled\' : vxColSettings.multiSelected.length == 0}" vx-key="clearSelection()" ng-if="vxConfig.selectionEnabled">                                                <i class="icon icon-clearselection"></i>                                            </div>                                            <div class="icon-container pull-right" role="button" tabindex="{{vxColSettings.selectAllEnabled == false && vxConfig.multiSelectionEnabled == true ? -1 : 0}}" ng-class="{ \'disabled\' :vxColSettings.selectAllEnabled == false && vxConfig.multiSelectionEnabled == true}" vx-key="selectAllFiltered()" ng-if="vxConfig.selectionEnabled">                                                <i class="icon icon-openwith"></i>                                            </div>                                        </th>                                    </tr>                                </thead>                                <tbody class="vxBody" vs-repeat="" vs-options="{latch: true}" vs-scroll-parent="{{scrollParent}}" vs-excess="{{vxColSettings.latchExcess}}" ng-class="{ \'revealWrap\' : vxColSettings.revealWrapRowData }" ng-if="vxConfig.virtualization == true">                                    <tr vx-edit-focus-disable="vxColSettings.saveInProgress[row[vxColSettings.primaryId]]" ng-attr-id="{{row[vxColSettings.primaryId]}}" class="{{vxColSettings.vxRowClass[row[vxColSettings.primaryId]]}} {{vxConfig.rowClassFn(row)}} vxBodyRow" ng-repeat="row in ( vxConfig.vxFilteredData = (vxConfig.vxData | filter:vxColSettings.xsSearch | vxGridMultiBoxFilters: multiBoxFilters | orderBy:vxConfig.sortPredicate:vxConfig.reverseSortDirection) | vxStartFrom: vxColSettings.vxPageStartPosition | limitTo:vxConfig.pageLength)" ng-class="{ \'vxRowSelected\' : vxColSettings.rowSelected[row[vxColSettings.primaryId]], \'inProgress\': vxColSettings.saveInProgress[row[vxColSettings.primaryId]]}">                                        <span class="offscreen" role="rowheader" ng-attr-id="vx_row_sel_{{::row[vxColSettings.primaryId]}}">{{row[vxConfig.ariaPrimary]}}</span>                                        <td colspan="{{getNonHiddenColCount()}}" ng-if="row.fillEmptyElement == true" style="padding-left:15px;"><span ng-bind-html="vxConfig.emptyFill"></span></td>                                        <td class="vxBodyRowCell {{header.colClass}}" ng-class="{\'renderedDefn\': header.renderDefn == true}" ng-repeat="header in vxConfig.columnDefConfigs" ng-style="{ \'width\' : header.effectiveWidth + \'px\' }" ng-if="header.hidden == false && row.type != \'groupRow\' && vxColSettings.xsViewEnabled == false && !(row.fillEmptyElement == true)">                                            <span ng-if="(header.renderDefn == false && vxColSettings.inlineEditState[row[vxColSettings.primaryId]] != true) || (header.renderDefn == false && header.inlineEditOnColumnEnabled == false)" title="{{row[header.id]}}">{{row[header.id]}}</span>                                            <div ng-if="(header.renderDefn == true && vxColSettings.inlineEditState[row[vxColSettings.primaryId]] != true) || (header.renderDefn == true && header.inlineEditOnColumnEnabled == false)" vx-compile-clone-link="header.cellDefn"></div>                                            <div ng-if="vxColSettings.inlineEditState[row[vxColSettings.primaryId]] == true && header.inlineEditOnColumnEnabled == true" vx-compile-clone-link="header.editDefn"></div>                                        </td>                                        <td class="vxBodyRowCell groupCell" ng-if="row.type == \'groupRow\' && vxColSettings.xsViewEnabled == false && !(row.fillEmptyElement == true)" colspan="1">                                            <div vx-compile="row.cellDefn"></div>                                        </td>                                        <td class="vxBodyRowCell groupCell" ng-if="row.type == \'groupRow\' && vxColSettings.xsViewEnabled == false && !(row.fillEmptyElement == true)" colspan="{{getVisibleHeaderCounts() - 1}}">                                            <span class="first">GROUPED BY {{row.colName}} : </span><span class="colname">{{row.value}}</span>                                        </td>                                        <td class="vxBodyRowCell xsCell" ng-if="vxColSettings.xsViewEnabled == true && !(row.fillEmptyElement == true)" ng-class="{ \'rowSelectionEnabled\': vxConfig.selectionEnabled == true }">                                            <div class="xsSelectionHolder" vx-compile-clone-link="vxConfig.columnDefConfigs[0].cellDefn" ng-if="vxConfig.selectionEnabled"></div>                                            <div class="xsRowTitleHolder" vx-key="row.xsViewDetails = !row.xsViewDetails">                                                <span ng-if="vxColSettings.xsRowTitleTemplateAvailable == false">{{row[vxColSettings.primaryId]}}</span>                                                <div ng-if="vxColSettings.xsRowTitleTemplateAvailable == true" vx-compile="vxConfig.xsRowTitleTemplate"></div>                                            </div>                                            <div class="xsRowViewToggleHolder" vx-key="row.xsViewDetails = !row.xsViewDetails">                                                <div class="icon-container">                                                    <i class="icon icon-ScrollChevronUpLegacy" ng-show="row.xsViewDetails"></i>                                                    <i class="icon icon-ScrollChevronDownLegacy" ng-show="!row.xsViewDetails"></i>                                                </div>                                            </div>                                            <div class="col-xs-12 xsCellContentHolder" collapse="!row.xsViewDetails">                                                <div class="xsCellContent" ng-repeat="header in vxConfig.columnDefConfigs" ng-if="$index > 0 && header.xsHidden == false && row.type != \'groupRow\'">                                                    <div class="col-xs-12 xsCellHeader">{{header.columnName}}</div>                                                    <div class="col-xs-12 xsCellValue">                                                        <span ng-if="header.renderDefn == false">{{row[header.id]}}</span>                                                        <div ng-if="header.renderDefn == true" vx-compile-clone-link="header.cellDefn"></div>                                                    </div>                                                    <div class="clearfix"></div>                                                </div>                                            </div>                                        </td>                                    </tr>                                </tbody>                                <tbody class="vxBody" ng-class="{ \'revealWrap\' : vxColSettings.revealWrapRowData }" ng-if="vxConfig.virtualization == false">                                    <tr vx-edit-focus-disable="vxColSettings.saveInProgress[row[vxColSettings.primaryId]]" ng-attr-id="{{row[vxColSettings.primaryId]}}" class="{{vxColSettings.vxRowClass[row[vxColSettings.primaryId]]}} {{vxConfig.rowClassFn(row)}} vxBodyRow" ng-repeat="row in ( vxConfig.vxFilteredData = (vxConfig.vxData | filter:vxColSettings.xsSearch | vxGridMultiBoxFilters: multiBoxFilters | orderBy:vxConfig.sortPredicate:vxConfig.reverseSortDirection) | vxStartFrom: vxColSettings.vxPageStartPosition | limitTo:vxConfig.pageLength )" ng-class="{ \'vxRowSelected\' : vxColSettings.rowSelected[row[vxColSettings.primaryId]], \'inProgress\': vxColSettings.saveInProgress[row[vxColSettings.primaryId]]}">                                        <span class="offscreen" role="rowheader" ng-attr-id="vx_row_sel_{{::row[vxColSettings.primaryId]}}">{{row[vxConfig.ariaPrimary]}}</span>                                        <td colspan="{{getNonHiddenColCount()}}" ng-if="row.fillEmptyElement == true" style="padding-left:15px;"><span ng-bind-html="vxConfig.emptyFill"></span></td>                                        <td class="vxBodyRowCell {{header.colClass}}" ng-class="{\'renderedDefn\': header.renderDefn == true || (vxColSettings.inlineEditState[row[vxColSettings.primaryId]] == true && header.inlineEditOnColumnEnabled == true) }" ng-repeat="header in vxConfig.columnDefConfigs" ng-style="{ \'width\' : header.effectiveWidth + \'px\' }" ng-if="header.hidden == false && row.type != \'groupRow\' && vxColSettings.xsViewEnabled == false && !(row.fillEmptyElement == true)">                                            <span ng-if="(header.renderDefn == false && vxColSettings.inlineEditState[row[vxColSettings.primaryId]] != true) || (header.renderDefn == false && header.inlineEditOnColumnEnabled == false)" title="{{row[header.id]}}">{{row[header.id]}}</span>                                            <div ng-if="(header.renderDefn == true && vxColSettings.inlineEditState[row[vxColSettings.primaryId]] != true) || (header.renderDefn == true && header.inlineEditOnColumnEnabled == false)" vx-compile-clone-link="header.cellDefn"></div>                                            <div ng-if="vxColSettings.inlineEditState[row[vxColSettings.primaryId]] == true && header.inlineEditOnColumnEnabled == true" vx-compile-clone-link="header.editDefn"></div>                                        </td>                                        <td class="vxBodyRowCell groupCell" ng-if="row.type == \'groupRow\' && vxColSettings.xsViewEnabled == false && !(row.fillEmptyElement == true)" colspan="1">                                            <div vx-compile="row.cellDefn"></div>                                        </td>                                        <td class="vxBodyRowCell groupCell" ng-if="row.type == \'groupRow\' && vxColSettings.xsViewEnabled == false && !(row.fillEmptyElement == true)" colspan="{{getVisibleHeaderCounts() - 1}}">                                            <span class="first">GROUPED BY {{row.colName}} : </span><span class="colname">{{row.value}}</span>                                        </td>                                        <td class="vxBodyRowCell xsCell" ng-if="vxColSettings.xsViewEnabled == true && !(row.fillEmptyElement == true)" ng-class="{ \'rowSelectionEnabled\': vxConfig.selectionEnabled == true }">                                            <div class="xsSelectionHolder" vx-compile-clone-link="vxConfig.columnDefConfigs[0].cellDefn" ng-if="vxConfig.selectionEnabled"></div>                                            <div class="xsRowTitleHolder" vx-key="row.xsViewDetails = !row.xsViewDetails">                                                <span ng-if="vxColSettings.xsRowTitleTemplateAvailable == false">{{row[vxColSettings.primaryId]}}</span>                                                <div ng-if="vxColSettings.xsRowTitleTemplateAvailable == true" vx-compile="vxConfig.xsRowTitleTemplate"></div>                                            </div>                                            <div class="xsRowViewToggleHolder" vx-key="row.xsViewDetails = !row.xsViewDetails">                                                <div class="icon-container">                                                    <i class="icon icon-ScrollChevronUpLegacy" ng-show="row.xsViewDetails"></i>                                                    <i class="icon icon-ScrollChevronDownLegacy" ng-show="!row.xsViewDetails"></i>                                                </div>                                            </div>                                            <div class="col-xs-12 xsCellContentHolder" collapse="!row.xsViewDetails">                                                <div class="xsCellContent" ng-repeat="header in vxConfig.columnDefConfigs" ng-if="$index > 0 && header.xsHidden == false && row.type != \'groupRow\'">                                                    <div class="col-xs-12 xsCellHeader">{{header.columnName}}</div>                                                    <div class="col-xs-12 xsCellValue">                                                        <span ng-if="header.renderDefn == false">{{row[header.id]}}</span>                                                        <div ng-if="header.renderDefn == true" vx-compile-clone-link="header.cellDefn"></div>                                                    </div>                                                    <div class="clearfix"></div>                                                </div>                                            </div>                                        </td>                                    </tr>                                </tbody>                            </table>                        </div>                    </div>                </div>            </div>            <div class="col-xs-12 vxTablePagination pad0" ng-if="vxColSettings.vxPageEnabled">                <div class="icon-container dirNumContainer" vx-key="activatePage(vxColSettings.activePage - 1)" ng-class="{ \'disabled\' :vxColSettings.activePage == 0}">                    <i class="icon icon-previous"></i>                </div>                <div class="icon-container dirNumContainer" vx-key="activatePage(vxColSettings.activePage + 1)" ng-class="{ \'disabled\' :vxColSettings.activePage == vxColSettings.pages.length - 1}">                    <i class="icon icon-next"></i>                </div>                <div class="icon-container pageNumContainer" ng-repeat="pageNum in vxColSettings.pages" vx-key="activatePage(pageNum)" ng-class="{\'active\' : pageNum == vxColSettings.activePage}">                    <i class="icon">{{pageNum + 1}}</i>                </div>            </div>            <div class="icon-container scrollAction up" role="button" tabindex="0" vx-key="justScrollTop()" ng-class="{\'pageEnabled\': vxColSettings.vxPageEnabled}" ng-show="showScrollUpArrow()" aria-label="Scroll Up">                <i class="icon icon-up"></i>            </div>            <div class="icon-container scrollAction down" role="button" tabindex="0" vx-key="justScrollDown()" ng-class="{\'pageEnabled\': vxColSettings.vxPageEnabled}" ng-show="showScrollDownArrow()" aria-label="Scroll Down">                <i class="icon icon-up down"></i>            </div>        </div>    ',vxGridManageColumnsModal:'        <div class="modal-body vx-grid-related ">            <div class="vxTableSettings">                <div class="vxSettingsHead">                    <label class="title">Manage Columns</label>                    <div class="icon-container" role="button" tabindex="0" vx-key="cancelChangeInConfig()">                        <i class="icon icon-close"></i>                    </div>                </div>                <div class="vxSettingsBody">                    <div class="col-xs-12 zeroPadding vxH100">                        <div class="col-xs-3 vxH100 visHideRows">                            <div class="row vxH100">                                <div class="col-xs-12 columns">                                    <label class="help">Available Columns</label>                                    <p class="helpText">Select a column use the left and right arrows to change column visibility.</p>                                    <div class="col-xs-12 colItem" tabindex="{{header.locked == false ? 0 : -1}}" ng-repeat="header in copyForWidthVisChange" ng-class="{ \'locked\': header.locked, \'selected\': header.id == headerSelected.id}" vx-key="selectHeader(header)" ng-if="header.hidden == true" ng-keydown="upDownKeyPressHandler($event)">                                        <div class="col-xs-2 col-sm-2 col-md-1">                                            <label class="colLabel xl" ng-if="header.visbilityLocked == true"><i class="icon icon-blockedLegacy" tooltip="Visbility Locked"></i></label>                                        </div>                                        <label class="col-xs-10 col-sm-10 col-md-10 colName">{{header.columnName}}</label>                                        <div class="clearfix"></div>                                    </div>                                    <div class="clearfix"></div>                                </div>                                <div class="clearfix"></div>                            </div>                        </div>                        <div class="col-xs-1 vxH100 visChangers">                            <div class="col-xs-12 visChangersContainer">                                <div class="col-xs-12 visChangersItem zeroPadding">                                    <div class="icon-container" role="button" tabindex="{{headerSelected.visbilityLocked || headerSelected == null || headerSelected.hidden == false ? -1 : 0}}" ng-class="{\'disabled\' : headerSelected.visbilityLocked || headerSelected == null || headerSelected.hidden == false}" vx-key="makeVisible(headerSelected)" ng-keydown="upDownKeyPressHandler($event)" aria-label="Make Columns Visible">                                        <i class="icon icon-right"></i>                                    </div>                                    <div class="icon-container" role="button" tabindex="{{headerSelected.visbilityLocked || headerSelected == null || headerSelected.hidden == true ? -1 : 0}}" ng-class="{\'disabled\' : headerSelected.visbilityLocked || headerSelected == null || headerSelected.hidden == true}" vx-key="makeHidden(headerSelected)" ng-keydown="upDownKeyPressHandler($event)" aria-label="Make Columns Hidden">                                        <i class="icon icon-left"></i>                                    </div>                                </div>                                <div class="clearfix"></div>                            </div>                        </div>                        <div class="col-xs-7 vxH100">                            <div class="row orderChanger">                                <div class="col-xs-12 columns">                                    <label class="help">Selected Columns</label>                                    <p class="helpText">Select a column and use the up and down arrows to change column order.</p>                                    <div class="col-xs-12 colItem" tabindex="{{header.locked == true || (header.locked == false && header.visbilityLocked == true && header.orderLocked == true) ? -1 : 0}}" ng-repeat="header in copyForWidthVisChange | orderBy: \'order\'" ng-class="{ \'locked\': header.locked, \'selected\': header.id == headerSelected.id}" vx-key="selectHeader(header)" ng-if="header.hidden == false" ng-keydown="upDownKeyPressHandler($event)">                                        <div class="col-xs-12 col-sm-6 col-md-2 padA0L10R0">                                            <div class="col-xs-4 pad0">                                                <label class="colLabel xl" ng-if="header.visbilityLocked == true"><span class="icon icon-blockedLegacy red" tooltip="Visbility Locked"></span></label>                                            </div>                                            <div class="col-xs-4 pad0">                                                <label class="colLabel xl" ng-if="header.orderLocked == true"><span class="icon icon-unpin red" tooltip="Order Locked"></span></label>                                            </div>                                            <div class="col-xs-4 pad0">                                                <label class="colLabel xl" ng-if="header.widthLocked == true"><span class="icon icon-trim red" tooltip="Width Locked"></span></label>                                            </div>                                        </div>                                        <label class="col-xs-12 col-sm-12 col-md-4 colName">{{header.columnName}}</label>                                        <div class="col-xs-12 col-sm-6 col-md-6">                                            <label class="colLabel">Width (in approx. char)</label>                                            <input class="inputStyle colInput" ng-model="header.chars" ng-disabled="header.widthLocked" ng-change="widthChanged(header)">                                        </div>                                        <div class="clearfix"></div>                                    </div>                                    <div class="clearfix"></div>                                </div>                                <div class="clearfix"></div>                            </div>                        </div>                        <div class="col-xs-1 vxH100 visChangers">                            <div class="col-xs-12 visChangersContainer">                                <div class="col-xs-12 visChangersItem zeroPadding">                                    <div class="icon-container" role="button" tabindex="{{headerSelected.orderLocked || headerSelected.hidden || headerSelected == null ? -1 : 0}}" ng-class="{\'disabled\' : headerSelected.orderLocked || headerSelected.hidden || headerSelected == null}" vx-key="swapAbove(headerSelected)" ng-keydown="upDownKeyPressHandler($event)" aria-label="Move Column Up">                                        <i class="icon icon-up"></i>                                    </div>                                    <div class="icon-container" role="button" tabindex="{{headerSelected.orderLocked || headerSelected.hidden || headerSelected == null ? -1 : 0}}" ng-class="{\'disabled\' : headerSelected.orderLocked || headerSelected.hidden || headerSelected == null}" vx-key="swapBelow(headerSelected)" ng-keydown="upDownKeyPressHandler($event)" aria-label="Move Column Down">                                        <i class="icon icon-down"></i>                                    </div>                                </div>                                <div class="clearfix"></div>                            </div>                            <div class="clearfix"></div>                        </div>                    </div>                </div>                <div class="vxSettingsFooter">                    <button class="btn btn-primary vsTableButton active" vx-key="saveChangeInConfig()">Save</button>                    <button class="btn btn-primary vsTableButton" vx-key="cancelChangeInConfig()">Cancel</button>                    <div class="infoBtns">                        <span class="icon icon-blockedLegacy"></span>                        <span class="infoLabel">Visbility Locked,</span>                        <span class="icon icon-unpin"></span>                        <span class="infoLabel">Order Locked,</span>                        <span class="icon icon-trim"></span>                        <span class="infoLabel">Width Locked</span>                    </div>                </div>            </div>        </div>    ',
"vxGridJsonEditorModal vx-grid-related ":'        <div class="modal-body">            <div class="vxTableSettings">                <div class="vxSettingsHead">                    <label class="title">JSON editor for changing grid data</label>                    <div class="icon-container" role="button" tabindex="0" vx-key="cancelChangeInConfig()">                        <i class="icon icon-close"></i>                    </div>                </div>                <div class="vxSettingsBody">                    <div class="col-xs-12 zeroPadding vxH100">                        <div class="col-xs-12 vxH100 visHideRows">                            <json-editor on-change="onChangeJSON(json)" options="jsonOptions" json-data="data"></json-editor>                        </div>                    </div>                </div>                <div class="vxSettingsFooter">                    <button class="btn btn-primary vsTableButton active" vx-key="saveChangeInConfig()">Save</button>                    <button class="btn btn-primary vsTableButton" vx-key="cancelChangeInConfig()">Cancel</button>                </div>            </div>        </div>    '};angular.module("vx.grid.modules").run(["$templateCache",function(l){l.put("template/vx-grid/vx-grid-json-editor-modal.html",e.vxGridJsonEditorModal),l.put("template/vx-grid/vx-grid-manage-columns-modal.html",e.vxGridManageColumnsModal),l.put("template/vx-grid/vx-grid.html",e.vxGridTableStructure)}])}();