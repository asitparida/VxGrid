angular.module('vxSample')
.directive('sampleDatePicker', function () {
    return {
        scope: {
            dt: '='
        },
        bindToController: true,
        template: '<p class="input-group"><input type="date" class="form-control" uib-datepicker-popup ng-model="dtpicker.dt" is-open="dtpicker.opened" datepicker-options="dtpicker.dateOptions" ng-required="true" close-text="Close" /><span class="input-group-btn"><button type="button" class="btn btn-default" ng-click="dtpicker.open($event)"><i class="glyphicon glyphicon-calendar"></i></button></span></p>',
        replace: true,
        controller: function () {
            this.opened = false;
            this.open = function ($event) {
                this.opened = true;
            }
            this.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            }
            this.format = 'dd-MMMM-yyyy';
        },
        controllerAs: 'dtpicker'
    };
})
.controller('vxSampleController', ["$scope", "$timeout", "$q", function ($scope, $timeout, $q) {
    var self = this;
    self.smapledt = new Date('01-02-2016');
    self.vxSampleData = [];
    self.showGrid = false;
    self.categories = [
        { 'id': '1', 'name': 'previsit' },
        { 'id': '2', 'name': 'onsite' },
        { 'id': '3', 'name': 'general' },
        { 'id': '4', 'name': 'business' }
    ];
    var original = [
        {
            readOnly: "Y",
            transferFromCustomer: "Alpine Ski House A Alpine Ski House AAlpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174",
            status: "Pending",
            dt: "SEP 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-1",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: true
        }
    ];

    self._origCopy = [];

    self.sampleRowClasses = {};

    self.sampling = function (iter, customer) {
        var _samples = [];
        self.sampleRowClasses = {};
        //original = _.first(original, 5);
        _.each(original, function (record, k) {
            _.each(_.range(iter), function (i, j) {
                var rec = angular.copy(record);
                rec.index = j + '_' + k;
                rec.laborId = 'XXX-XXXX-XXXX' + '_' + rec.index;
                rec.categories = self.categories;
                rec.category = _.sample(rec.categories);
                rec.customer = record.transferFromCustomer;
                rec.customer = rec.customer + rec.index;
                rec.dt = _.sample([
                    new Date(2015, 01, 07, 0, 0, 0, 0),
                    new Date(2015, 01, 01, 0, 0, 0, 0),
                    new Date(2015, 01, 11, 0, 0, 0, 0),
                    new Date(2015, 01, 09, 0, 0, 0, 0),
                ]);
                rec.dt1 = _.sample(['', rec.dt, null]);
                rec.dt2 = rec.dt;
                rec.dt3 = rec.dt;
                rec.dt4 = rec.dt;
                rec.dt5 = rec.dt;
                rec.dt6 = rec.dt;
                rec.dt7 = rec.dt;
                rec.dt8 = rec.dt;
                rec.dt9 = rec.dt;
                rec.dt10 = rec.dt;
                rec.engagement = _.sample([customer, 'Fist Up Consultants', 'Coco Cola', 'Pepsi', 'NS78-RTY-5676677-67', 'NS78-RTY-5676677-67-Co-Co-fifgytf', 'Pepsi46456', 'NhffugycfftyfyS78-RTY-5676677-67', 'NS78-RTY-5676bghcvfgcfdtfcfr677-67-Co-Co-fifgytf']),
                rec.engagement = rec.engagement + rec.index;
                rec.assignment = record.transferFromAssignment,
                rec.users = ['asparida', 'prasadne', 'ruprawat', 'asparida1', 'prasadne1', 'ruprawat1', 'asparida2', 'prasadne2', 'ruprawat2', 'asparida3', 'prasadne3', 'ruprawat3'];
                rec.userAlias = _.sample(rec.users);
                rec.userAlias = rec.userAlias + (i % 20);
                //console.log(rec.userAlias);
                rec.mid = i + j;
                rec.locked = _.sample([true, false]);
                self.sampleRowClasses[rec.laborId] = rec.locked == true ? 'row-even' : 'row-odd';
                _samples.push(rec);
            });
        });
        self._origCopy = _.clone(_samples);
        return _samples;
    }

    self.vxSampleConfig = {
        enableDropdownsInHeader: true,
        ddSort: true,
        ddGroup: true,
        defaultGrouping: { enabled: false, column: 2, columnName: 'customer' },
        groupedSelectionEnabled: true,
        columnFilteringEnabled: true,
        groupedColumnHidingEnabled: false,
        selectionEnabled: true,
        selectionAtMyRisk: true,
        preserveSelectionOnFilters: true,
        allRowsSelectionEnabled: true,
        multiSelectionEnabled: true,
        multiSelectionDependentCol: null,
        onSelectionReturnCol: 'laborId',
        inlineEditingEnabled: true,
        inlineDeletingEnabled: true,
        inlineEditSyncEnabled: true,
        inlineSaveOverrideEnabled: true,
        inlineDeleteOverrideEnabled: true,
        allRowsInDefaultEdit: false,
        showGridStats: false,
        showGridOptions: false,
        latchExcess: 20,
        data: self.sampling(100, 'Coho Vineyard 1111'),
        //data: [],
        jsonEditorEnabled: false,
        vxFilteredData: [],
        bindOnce: false,
        hybrid: true,
        //initialRowClasses: self.sampleRowClasses,
        rowClassFn: randomRowFunction,
        hybridCellDefn: hybridCellDefn,
        rowSelectionCallback: function (data) {
            console.log('rowSelectionCallback', data);
        },
        showNotes: function (data) { console.log('sample hybrid callback', data) },
        showTable: false,
        virtualization: false,
        pagination: false,
        pageLength: 100000,
        sortPredicate: 'dt',
        reverseSortDirection: true,
        inlineAddRowEnabled: true,
        categories: self.categories,
        emptyFill: 'No records in the grid',
        newRowTemplate: {
            readOnly: "Y",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet b",
            laborId: "",
            errors: {},
            link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false,
            newRow: true
        },
        columnDefConfigs: [
            { id: 'locked', columnName: 'Locked', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", colClass: 'dtPickerClass' },
            { id: 'dt1', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass', scopeIsRow: true },
            { id: 'dt2', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'dt3', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, hidden: true, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'dt4', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'dt5', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'dt6', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, hidden: true, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'dt7', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'dt8', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'dt9', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, hidden: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'dt10', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'dt', columnIsDate: true, columnDatePipe: 'dd-MM-yyyy', columnName: 'Date', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, width: '160', headerDefn: '<span>Date</span>', filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span> {{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'link', columnName: 'Link', renderDefn: false, width: '150', headerDefn: '<span>Link</span>', hidden: false, cellDefn: '<a style="padding-left:10px;" ng-href="{{VX_DATA_POINT}}" >{{VX_DATA_POINT}}</a>', inlineEditOnColumnEnabled: true, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" ng-class=\'{ "invalidField" : VX_INVALID_ROW && VX_INVALID_FIELD_ROW  }\' ng-change="VX_CONFIG.validateLinkField(VX_ROW_POINT, VX_DATA_POINT)" />', inlineEditValidation: true, renderHybridCellDefn: true },
            { id: 'customer', columnName: 'Customer', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, inlineEditOnColumnEnabled: true, hidden: false, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />' },
            { id: 'engagement', columnName: 'Engagement', renderDefn: false, ddSort: true, ddGroup: true, ddFilters: true, ddFiltersWithSearch: true, dropDownEnabled: true, hidden: false, locked: false, inlineEditOnColumnEnabled: true, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />' },
            { id: 'assignment', columnName: 'Assignment', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, hidden: false },
            { id: 'category', columnName: 'Category', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, ddFiltersWithSearch: true, dropDownEnabled: true, filterCellDefn: "<span><span class=\"offscreen\">{{header.columnName}} filter </span>{{VX_DATA_POINT.name}}</span>", cellDefn: '<span>{{VX_DATA_POINT.name}}</span>', editDefn: '<select class="selectStyleSampleA" ng-options="item.name for item in row.categories" ng-disabled="vxColSettings.inlineEditState[VX_ROW_POINT] == true" ng-model="row[\'category\']"></select>', inlineEditOnColumnEnabled: true, renderHybridCellDefn: true, hybridCompile: true, getFilterAriaLabel: function (filter) { return filter.name;} },
            { id: 'userAlias', columnName: 'User', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, ddFiltersWithSearch: true, hidden: false, cellDefn: '<select class="selectStyleSampleA" ng-model="row.userAlias" ng-options="user for user in row.users" ng-disabled="vxColSettings.inlineEditState[VX_ROW_POINT] == true"><option value="">Select an option </option> </select>', ddFiltersWithSearch: true, customSortEnabled: true, customSortFn: customSortUserFn },
            { id: 'labor', columnName: 'Labor', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: false, headTabIndex: -1 },
            { id: 'timezone', columnName: 'Timezone', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: false },
            { id: 'status', columnName: 'Status', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: false },
            { id: 'mid', columnName: 'MID', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, hidden: false },
            { id: 'laborId', columnName: 'Labor ID', renderDefn: false, ddSort: true, dropDownEnabled: false, ddGroup: false, ddFilters: true, ddFiltersWithSearch: true, primary: true, hidden: false, widthLocked: true, orderLocked: false, visbilityLocked: true }
        ]
    };
    self.secondSampleActive = false;

    self.showGridView = false;

    self.toggleView = function () {
        self.showGridView = !self.showGridView;
    }

    self.vxSampleConfig.validateLinkField = function (id, data) {
        var valid = true;
        if (typeof data === 'undefined' || data == '' || data == {} || data.localeCompare('http://google.com') == 0)
            valid = false;
        self.vxSampleConfig.setRowFieldValidation(id, 'link', valid);
    }

    function customSortUserFn(item) {
        return item.userAlias.length;
    }

    function hybridCellDefn(row, col) {
        var tmpl = '<span ng-attr-sam="{{vxConfig.hybrid}}">VX_DATA_POINT</span>';
        if (col.id == 'category')
            tmpl = tmpl.replace('VX_DATA_POINT', row[col.id].name || '');
        if (col.id == 'link') {
            tmpl = '<a href ng-click="vxConfig.showNotes(\'VX_ROW_ID\')">VX_DATA_POINT</span>';
            tmpl = tmpl.replace('VX_DATA_POINT', row[col.id] || '');
            tmpl = tmpl.replace('VX_ROW_ID', row['laborId'] || '');
        }
        return tmpl;
    }

    function randomRowFunction(row) {
        //MANIPUKLATION DPEENDS ON ROW
        if (row.locked == true)
            return 'row-fn-locked';
        else
            return 'row-fn-notlocked';
    }

    self.vxSampleConfig.fnInlineSaveOverride = function (newrow, oldrow) {
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve({ 'row': newrow, 'save': true });
        }, 3000);
        return defer.promise;
    }

    self.vxSampleConfig.fnInlineDeleteOverride = function (rows) {
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve({ 'rows': rows });
        }, 10000);
        return defer.promise;
    }

    self.openManageColumns = function () {
        //$scope.$broadcast('vxGridOpenManageColumns', { 'id': self.vxSampleConfig.id });
        self.vxSampleConfig.openManageColumns();
    }

    self.consoleLogFiltered = function () {
        console.log(self.vxSampleConfig.getFilteredDataSet());
    }

    self.getAppliedFilters = function () {
        console.log(self.vxSampleConfig.getAppliedFilters());
    }

    self.modRows = function () {
        var rows = [];
        var row = self._origCopy[0];
        row.link = 'http://microsoft.com';
        row.category = { 'id': '1', 'name': 'previsit' };
        rows.push(row);
        row = self._origCopy[1];
        row.link = 'http://xbox.com';
        row.category = { 'id': '2', 'name': 'onsite' };
        rows.push(row);
        //self.vxSampleConfig.modifyRowData(rows, ['category']);
        self.vxSampleConfig.modifyRows(rows, []);
    }

    self.selectProg = function () {
        self.vxSampleConfig.selectRows(['XXX-XXXX-XXXX_0_0']);
    }

    self.deselectProg = function () {
        self.vxSampleConfig.deselectRows(['XXX-XXXX-XXXX_0_0']);
    }

    self.secondSample = function () {
        self.vxSampleConfig.pagination = false;
        self.secondSampleActive = true;
        self.vxSampleConfig.data = self.sampling(3000, 'Coho Vineyard 222');
    }

    self.singleSample = function () {
        self.vxSampleConfig.pagination = false;
        var data = self.sampling(1, 'Coho Vineyard 222');
        self.vxSampleConfig.data = _.filter(data, function (row, iter) {
            return iter == 0;
        });
    }

    self.logIDs = function () {
        console.log(self.vxSampleConfig.getSelectedRows());
    }

    self.logEditedIDs = function () {
        console.log(self.vxSampleConfig.getRowsBeingEdited());
    }

    self._tempDirection = false;
    self.sortByCol = function () {
        self.vxSampleConfig.sortByColumn('customer', self._tempDirection);
        self._tempDirection = !self._tempDirection;
    }

    self.resetCustCol = function () {
        self.vxSampleConfig.resetColumnFilters(['customer']);
    }

    console.log('length : ' + self.vxSampleData.length);

    $scope.$on('vsRepeatInnerCollectionUpdated', function () {
        console.log('vsRepeatInnerCollectionUpdated');
    });

    $scope.$on('vsRepeatScrolled', function () {
        console.log('vsRepeatScrolled');
    });

    self.emptyData = function () {
        self.vxSampleConfig.data = [];
    }

    self.reloadDataVirtual = function () {
        self.vxSampleConfig.pagination = false;
        self.vxSampleConfig.data = self.sampling(20, 'Coho Vineyard 1111');
        self.secondSampleActive = false;
    }

    self.reloadDataPage = function () {
        self.vxSampleConfig.pagination = true;
        self.vxSampleConfig.data = self.sampling(20, 'Coho Vineyard 333');
    }

    self.deleteRows = function () {
        var _ids = self.vxSampleConfig.getSelectedRows();
        console.log(_ids);
        //_ids.push(self._origCopy[1].laborId);
        //self.vxSampleConfig.hybridDeleteRows(_ids);
        self.vxSampleConfig.removeRows(_ids);
    }

    self.consoleLogData = function () {
        console.log(self.vxSampleConfig.getData());
        console.log(self.vxSampleConfig.getActiveDataSet());
        console.log(self.smapledt);
    }

    self.classToggle = false;
    self.toggleRowClasses = function () {
        var data = {};
        _.each(self.vxSampleConfig.data, function (row) {
            data[row.laborId] = row.locked == self.classToggle ? 'row-even' : 'row-odd';
        });
        self.vxSampleConfig.changeRowClass(data);
        self.classToggle = !self.classToggle;
    }

    $scope.$on('vxGridRowSelectionChange', function (e, data) {
        console.log('vxGridRowSelectionChange');
        console.log(e);
        console.log(data);
    });

    $scope.$on('vxGridRowMultiSelectionChange', function (e, data) {
        console.log('vxGridRowMultiSelectionChange');
        console.log(e);
        console.log(data);
    });

    $scope.$on('vxGridRowAllSelectionChange', function (e, data) {
        console.log('vxGridRowAllSelectionChange');
        console.log(e);
        console.log(data);
    });

    self.fields = [];

    var _fields = [];

    _.each(_.range(20), function (iter) {
        _fields.push({ id: iter, selected: {}, config: returnConfig(iter) });
    });
    self.fields = _fields;

    function returnConfig(index) {
        return {
            options: sampleData(index, 150),
            index: index,
            selectedOptions: [],
            selectCallback: function (data) {
                self.fields[index].selected = data;
                console.log(data);
            }
        };
    }

    function sampleData(incomingIndex, size) {
        var _smaple = [];
        _.each(_.range(size), function (itr) {
            _smaple.push({ id: itr, name: 'GUID_' + incomingIndex + '_' + itr });
        })
        return _smaple;
    }

    self.changeMLConfig = function () {
        self.fields[0].selected = {};
        self.fields[0].config.options = sampleData(200, 150);
    }

}]);