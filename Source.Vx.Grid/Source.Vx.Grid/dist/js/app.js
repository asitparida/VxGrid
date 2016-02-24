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
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House B",
            transferFromAssignment: "NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-174 NB-FY15-XYZ-Coho-1746",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-2",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House C",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-3",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House c",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-5",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House c",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1746",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-6",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House B",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1746",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-7",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House d",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-8",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House f",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-9",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House f",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-10",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House f",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-11",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House j",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-12",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House j",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-13",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House j",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-14",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House j",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-15",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House k",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-16",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House k",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-17",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House k",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-18",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House k",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-19",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House l",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-20",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House B",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-21",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-22",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-23",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-24",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-25",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-26",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House B",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 22, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-27",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "02:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-28",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "Y",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-29",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: true
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-30",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 22nd,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-31",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-32",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House B",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC + 5:30) India Time (New Delhi)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-33",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Onsite",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-34",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "N",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745 NB-FY15-XYZ-Coho-1745 NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-35",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: false
        },
        {
            readOnly: "Y",
            transferFromCustomer: "Alpine Ski House A",
            transferFromAssignment: "NB-FY15-XYZ-Coho-1745",
            status: "Pending",
            dt: "APR 21, 2014",
            labor: "01:45",
            date: "APR 21st,2014",
            category: "Previsit",
            timezone: "(UTC - 5:00)Pacific Time(US&Canada)",
            notes: "Lorem ipsum dolor sit amet",
            laborId: "xxx-xxx-xxxx-36",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: true
        },
        {
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
            laborId: "xxx-xxx-xxxx-37",
            errors: {}, link: 'http://bing.com',
            errorsShow: false,
            disabled: false,
            transferStatus: 0,
            locked: true
        }
    ];

    _.each(original, function (record, k) {
        _.each(_.range(5), function (i, j) {
            var rec = angular.copy(record);
            rec.index = k + '_' + j;
            rec.laborId = 'XXX-XXXX-XXXX' + '_' + rec.index;
            rec.category = _.sample(self.categories);
            rec.customer = record.transferFromCustomer;
            rec.dt = _.sample([new Date('01-07-2015'), new Date('01-01-2015'), new Date('01-11-2015'), new Date('01-09-2015')]);
            rec.engagement = _.sample(['Coho Vineyard', 'Fist Up Consultants']),
            rec.assignment = record.transferFromAssignment,
            rec.userAlias = _.sample(['asparida', 'prasadne', 'ruprawat']),
            self.vxSampleData.push(rec);
        });
    });

    self.vxSampleConfig = {
        enableDropdownsInHeader: true,
        ddSort: true,
        ddGroup: true,
        defaultGrouping: { enabled: false, column: 2, columnName: 'customer' },
        groupedSelectionEnabled: true,
        columnFilteringEnabled: true,
        groupedColumnHidingEnabled: false,
        selectionEnabled: true,
        allRowsSelectionEnabled: true,
        multiSelectionEnabled: true,
        multiSelectionDependentCol: null,
        onSelectionReturnCol: 'laborId',
        inlineEditingEnabled: true,
        inlineDeletingEnabled: true,
        inlineEditSyncEnabled: true,
        inlineSaveOverrideEnabled: true,
        inlineDeleteOverrideEnabled: true,
        showGridStats: true,
        showGridOptions: true,
        data: self.vxSampleData,
        jsonEditorEnabled: false,
        vxFilteredData: [],
        showTable: false,
        virtualization: true,
        pageLength: 50,
        inlineAddRowEnabled: true,
        categories: self.categories,
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
            { id: 'dt', columnName: 'Date', renderDefn: true, ddSort: true, ddGroup: false, ddFilters: true, width: '160', headerDefn: '<span>Date</span>', cellDefn: "<span>{{VX_DATA_POINT |  date:'yyyy-MM-dd'}}</span>", editDefn: ' <sample-date-picker dt="VX_DATA_POINT" vx-keep-watch="dt"></sample-date-picker>', inlineEditOnColumnEnabled: true, colClass: 'dtPickerClass' },
            { id: 'link', columnName: 'Link', renderDefn: true, width: '150', headerDefn: '<span>Link</span>', cellDefn: '<a style="padding-left:10px;" ng-href="{{VX_DATA_POINT}}" >{{VX_DATA_POINT}}</a>', inlineEditOnColumnEnabled: true, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" ng-class=\'{ "invalidField" : VX_INVALID_ROW && VX_INVALID_FIELD_ROW  }\' ng-change="VX_CONFIG.validateLinkField(VX_ROW_POINT, VX_DATA_POINT)" />', inlineEditValidation: true },
            { id: 'customer', columnName: 'Customer', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, inlineEditOnColumnEnabled: true, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />' },
            { id: 'engagement', columnName: 'Engagement', renderDefn: false, ddSort: true, ddGroup: true, ddFilters: true, ddFiltersWithSearch:true, dropDownEnabled: true, hidden: false, locked: false, inlineEditOnColumnEnabled: true, editDefn: '<input vx-keep-watch="ngModel" class="vx-edit-input form-control" ng-model="VX_DATA_POINT" />' },
            { id: 'assignment', columnName: 'Assignment', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true },
            { id: 'category', columnName: 'Category', renderDefn: true, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true, cellDefn: '<span class="sampleCell">{{VX_DATA_POINT.name}}</span>', editDefn: '<select class="selectStyleSampleA" vx-keep-watch="ngModel" ng-options="item.name for item in VX_CONFIG.categories" ng-model="VX_DATA_POINT"></select>', inlineEditOnColumnEnabled: true },
            { id: 'userAlias', columnName: 'User', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: true, dropDownEnabled: true },
            { id: 'labor', columnName: 'Labor', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false },
            { id: 'timezone', columnName: 'Timezone', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, hidden: true },
            { id: 'status', columnName: 'Status', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false },
            { id: 'laborId', columnName: 'Labor ID', renderDefn: false, ddSort: true, ddGroup: false, ddFilters: false, primary: true }
        ]
    };

    self.vxSampleConfig.validateLinkField = function (id, data) {
        var valid = true;
        if (typeof data === 'undefined' || data == '' || data == {} || data.localeCompare('http://google.com') == 0)
            valid = false;
        self.vxSampleConfig.setRowFieldValidation(id, 'link', valid);
    }

    self.vxSampleConfig.fnInlineSaveOverride = function (newrow, oldrow) {
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve({ 'row': newrow, 'save': true });
        }, 8000);
        return defer.promise;        
    }

    self.vxSampleConfig.fnInlineDeleteOverride = function (rows) {
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve({ 'rows': _.initial(rows) });
        }, 8000);
        return defer.promise;
    }

    self.openManageColumns = function () {
        $scope.$broadcast('vxGridOpenManageColumns', { 'id': self.vxSampleConfig.id });
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
        self.vxSampleConfig.virtualization = true;
        self.vxSampleConfig.data = self.vxSampleData;
    }

    self.reloadDataPage = function () {
        self.vxSampleConfig.virtualization = false;
        self.vxSampleConfig.data = self.vxSampleData;
    }

    self.consoleLogData = function () {
        console.log(self.vxSampleConfig.getData());
        console.log(self.smapledt);
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

}]);