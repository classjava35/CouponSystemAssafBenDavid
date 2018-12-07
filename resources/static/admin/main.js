(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Common/Coupon.ts":
/*!**********************************!*\
  !*** ./src/app/Common/Coupon.ts ***!
  \**********************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
var Coupon = /** @class */ (function () {
    //id : number;
    function Coupon(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
        //this.id = id;
    }
    return Coupon;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-admin></app-admin>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CouponSystem';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_get_company_get_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/get-company/get-company.component */ "./src/app/components/get-company/get-company.component.ts");
/* harmony import */ var _components_get_customer_get_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/get-customer/get-customer.component */ "./src/app/components/get-customer/get-customer.component.ts");
/* harmony import */ var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/get-all-customers/get-all-customers.component */ "./src/app/components/get-all-customers/get-all-customers.component.ts");
/* harmony import */ var _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-company/create-company.component */ "./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-customer/create-customer.component */ "./src/app/components/create-customer/create-customer.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_coupon_table_coupon_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/coupon-table/coupon-table.component */ "./src/app/components/coupon-table/coupon-table.component.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/create-coupon/create-coupon.component */ "./src/app/components/create-coupon/create-coupon.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_company_header_company_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/company-header/company-header.component */ "./src/app/components/company-header/company-header.component.ts");
/* harmony import */ var _components_customer_header_customer_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/customer-header/customer-header.component */ "./src/app/components/customer-header/customer-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_13__["CustomerComponent"],
                _components_get_company_get_company_component__WEBPACK_IMPORTED_MODULE_0__["GetCompanyComponent"],
                _components_get_customer_get_customer_component__WEBPACK_IMPORTED_MODULE_1__["GetCustomerComponent"],
                _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_2__["GetAllCompaniesComponent"],
                _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_3__["GetAllCustomersComponent"],
                _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_4__["CreateCompanyComponent"],
                _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_5__["CreateCustomerComponent"],
                _components_coupon_table_coupon_table_component__WEBPACK_IMPORTED_MODULE_14__["TableComponent"],
                _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_16__["CreateCouponComponent"],
                _components_company_header_company_header_component__WEBPACK_IMPORTED_MODULE_18__["CompanyHeaderComponent"],
                _components_customer_header_customer_header_component__WEBPACK_IMPORTED_MODULE_19__["CustomerHeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                    {
                        path: "createcompany",
                        component: _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_4__["CreateCompanyComponent"],
                    },
                    {
                        path: "getallcompanies",
                        component: _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_2__["GetAllCompaniesComponent"],
                    },
                    {
                        path: "getcompany",
                        component: _components_get_company_get_company_component__WEBPACK_IMPORTED_MODULE_0__["GetCompanyComponent"],
                    },
                    {
                        path: "company",
                        component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"],
                    },
                    {
                        path: "customer",
                        component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_13__["CustomerComponent"],
                    },
                ])
            ],
            providers: [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_15__["SharedDataService"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/Company.ts":
/*!***********************************!*\
  !*** ./src/app/common/Company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    //id : number;
    function Company(id, compName, password, email, coupon) {
        this.id = id;
        this.compName = compName;
        this.password = password;
        this.email = email;
        //this.id = id;
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/common/Customer.ts":
/*!************************************!*\
  !*** ./src/app/common/Customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    //id : number;
    function Customer(id, custName, password, coupon) {
        this.id = id;
        this.custName = custName;
        this.password = password;
        //this.id = id;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:hover, h1:hover, a:hover ,select:hover{\r\n  background-color: rgb(255, 255, 255);\r\n  color: #000000;\r\n}\r\n.button{\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  color: #000000;\r\n  margin: 10px;\r\n  height: 40px;\r\n  border-radius:4px;border:1px solid #AAAAAA;\r\n  box-shadow:         inset 0 0 10px #000000;\r\n}\r\n.btn{\r\n    border: 1px solid rgb(99, 189, 250);\r\n    background-color: rgb(255, 255, 255);\r\n    color: #000000;\r\n    margin: 10px;\r\n    height: 40px;\r\n\r\n}\r\n.disabled  {\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(53, 50, 50);\r\n  color: #978e8e;\r\n  margin: 10px;\r\n  height: 40px;\r\n  border-radius:4px;border:1px solid rgb(51, 50, 50);\r\n  box-shadow:         inset 0 0 10px #3b3a3a;\r\n}\r\ninput{\r\n border: 1px solid rgb(99, 189, 250);\r\n background-color: rgb(255, 255, 255);\r\n width: 100%;\r\n text-align: center;\r\n border-collapse: collapse;\r\n width: 100%; padding:8px;\r\n   height: 40px;\r\n   margin: 10px;\r\n}\r\n/* *********************************\r\n           Variables\r\n  ********************************** */\r\nselect .lt { text-align:center; \r\n    text-align-last:center;\r\n    align-items: center;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0; left: 0; bottom: 0; right: 0;\r\n  }\r\nselect{\r\n    width:230px;\r\n    text-indent: 5px; \r\n    text-align-last:center;\r\n        dispaly:inline-block;\r\n    height:40px;\r\n    border-radius:0;\r\n    display:block;\r\n    margin:10px;\r\n    padding-left:0px;\r\n    border-radius:4px;border:1px solid #AAAAAA;\r\n    box-shadow:         inset 0 0 10px #000000;\r\n  }\r\nelement.style {\r\n    background-color: white;\r\n    }\r\n/* *********************************\r\n     Some Style Overrides on Bootstrap\r\n    ********************************** */\r\n.navbar-inverse {\r\n     background: rgba(62,195,246,0);\r\n    border-bottom: none;\r\n  }\r\n.navbar-inverse .navbar-toggle {\r\n    border: 1px solid #e3d9f3;\r\n    border-color: rgba(13, 10, 202, 0.7);\r\n  }\r\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\r\n     border-color: transparent;\r\n \r\n\r\n  }\r\n.navbar-inverse .navbar-nav > li > a {\r\n  color: black;\r\n    \r\n  \r\n  }\r\n.onclic {\r\n    color: #22F;\r\n}\r\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\r\n  color: #22F;\r\n  }\r\n/* *********************************\r\n             Toolbar Logo\r\n    ********************************** */\r\n.small-logo-container {\r\n      padding-top: navbar-height;\r\n      height: navbar-height;\r\n      overflow: hidden;\r\n    }\r\n.small-logo {\r\n    color: white;\r\n    font-size: 2.5em;\r\n    padding-bottom: small-logo-padding;\r\n  }\r\n/* *********************************\r\n             Big Logo\r\n    ********************************** */\r\n.navbar #logo:hover {\r\n    background:#ed0121;\r\n    transition:all 0.4s;\r\n    \r\n  }\r\n.navbar-inverse .navbar-nav>li>a {\r\n      transition:all 0.4s;\r\n      color:white;\r\n      font-weight:bold;\r\n  }\r\n.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>.active>a {\r\n      background:rgba(255,255,255,0.5);\r\n      color:white;\r\n      text-shadow:none;\r\n  }\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- Fixed navbar -->\n   <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" style=\"background: rgb(34, 85, 105);\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <div class=\"small-logo-container\">\n          <a class=\"small-logo\" href=\"#\">\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Admin &nbsp;&nbsp;&nbsp;&nbsp;\n          </a>\n        </div>\n      </div>\n\n\n\n      <div class=\"navbar-collapse collapse\">\n        <li class=\"nav navbar-nav selected\" style=\"right: 1000px;\" style=\"font-size: 15px;\">\n          <app-company-header></app-company-header>\n        </li>\n        <li class=\"nav navbar-nav selected\" style=\"right: 1000px;\" style=\"font-size: 15px;\" >\n          <app-customer-header></app-customer-header>\n        </li>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/company\" style=\"font-size: 15px;\" id=\"button\"  class=\"onclic\">Company</a></li>\n          <li><a routerLink=\"/customer\" style=\"font-size: 15px;\" id=\"button\" class=\"onclic\">Customer</a></li>\n          <li><a [routerLink]=\"\" (click)=\"logout()\" ><span class=\"glyphicon glyphicon-log-out\" style=\"font-size: 20px;\" style=\"bottom: 15px\"></span> Logout</a></li>\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n\n  <div class=\"container-fluid big-logo-row\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 big-logo-container\">\n          <h1 class=\"big-logo\"></h1>\n        </div><!--/.col-xs-12 -->\n      </div><!--/.row -->\n    </div><!--/.container -->\n  </div><!--/.container-fluid -->\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(_dataService, router) {
        this._dataService = _dataService;
        this.router = router;
    }
    AdminComponent.prototype.logout = function () {
        window.location.href = 'http://localhost:8080/';
        this._dataService.logout(this.request, this.response);
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/company/']);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/company-header/company-header.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/company-header/company-header.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/company-header/company-header.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/company-header/company-header.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n  <br>\n  <div class=\"clip-text clip-text_one\" style=\"      color:white;\">&nbsp;&nbsp;&nbsp; Total Companies: {{company.length}} &nbsp;</div>\n</div>"

/***/ }),

/***/ "./src/app/components/company-header/company-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/company-header/company-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyHeaderComponent", function() { return CompanyHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyHeaderComponent = /** @class */ (function () {
    function CompanyHeaderComponent(_dataService) {
        // this.coupons = _dataService.coupons;
        // this.customers = _dataService.customers;
        this.company = _dataService.companies;
    }
    CompanyHeaderComponent.prototype.ngOnInit = function () {
    };
    CompanyHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-header',
            template: __webpack_require__(/*! ./company-header.component.html */ "./src/app/components/company-header/company-header.component.html"),
            styles: [__webpack_require__(/*! ./company-header.component.css */ "./src/app/components/company-header/company-header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], CompanyHeaderComponent);
    return CompanyHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/company/company.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css');\r\n\r\n\r\n.sidebarContent {\r\n    margin-bottom:10px;\r\n    min-height:150px;\r\n    background-color:white;\r\n    text-align:center;\r\n    font-size:large;\r\n}\r\n\r\n\r\n.mainContent {\r\n    margin-bottom:10px;\r\n    min-height:310px;\r\n    background-color:white;\r\n    text-align:center;\r\n    font-size:large;\r\n}\r\n\r\n\r\n.button {\r\n   border-radius: 10px;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: Arial;\r\n    font-size: 20px;\r\n    padding: 5px 10px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n  }\r\n\r\n\r\n.glow-button:hover {\r\n    color: rgba(255, 255, 255, 1);\r\n    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n  }\r\n\r\n\r\n.button:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n\r\n*:focus {\r\n    outline: none;\r\n  }\r\n\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n\r\n.bt-glyphicons {\r\n\tmargin:0;\r\n\toverflow:hidden;\r\n}\r\n\r\n\r\n.bt-glyphicons-list {\r\n\tmargin: 0;\r\n\tpadding:0;\r\n\tlist-style:none;\r\n}\r\n\r\n\r\n.bt-glyphicons li {\r\n\tfloat:left;\r\n\twidth:25%;\r\n\theight:115px;\r\n\tpadding:10px;\r\n\tfont-size:14px;\r\n\tline-height:1.4;\r\n\ttext-align:center;\r\n\tborder:1px solid #fff;\r\n\tbackground-color:#f1f1f1;\r\n}\r\n\r\n\r\n.bt-glyphicons .glyphicon {\r\n\tmargin: 5px;\r\n\tfont-size:16px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/company/company.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: white\">\n\n  <router-outlet></router-outlet>\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\" style=\"background-color: lightblue\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"background-color: lightblue\">\n        \n            <div class=\"sidebarContent\">\n              <app-create-company></app-create-company>\n            </div>\n        \n            <div class=\"sidebarContent\">\n              <app-get-company></app-get-company>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"background-color: lightgreen\">\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-9\" style=\"background-color: lightblue\">\n        <div class=\"mainContent\">\n          <app-get-all-companies></app-get-all-companies>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/coupon-table/coupon-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/coupon-table/coupon-table.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupon-table/coupon-table.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/coupon-table/coupon-table.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<hr>\n<table border = \"1\">\n  <tr>\n    <th>\n      ID\n    </th>\n    <th>\n        TITLE\n    </th>\n    <th>\n          PRICE\n    </th>          \n    <th>\n      DELETE\n    </th>\n  </tr>\n  <!-- foreach Coupon coupon : coupons-->\n  <tr *ngFor=\"let coup of coupons; let i = index\">\n    <td>{{coup.id}}</td>\n    <td>{{coup.title}}</td>\n    <td>{{coup.price}}</td>\n    <td><button (click)=\"deleteCoupon(i)\">X</button></td>\n  </tr>\n</table>\n<br>\n<br>\n<hr>\nNEW COUPON:\n<br>\nID : <input type=\"number\" name=\"idtxt\" [(ngModel)]=\"couponAdd.id\"><br>\nTITLE : <input type=\"text\" name=\"titletxt\" [(ngModel)]=\"couponAdd.title\"><br>\nPRICE : <input type=\"number\" name=\"pricetxt\" [(ngModel)]=\"couponAdd.price\"><br>\n<button (click)=\"addCoupon()\">ADD COUPON</button>\n<br>\n<br>\n<p>\n  {{couponAdd | json}}\n</p>"

/***/ }),

/***/ "./src/app/components/coupon-table/coupon-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/coupon-table/coupon-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Common_Coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Common/Coupon */ "./src/app/Common/Coupon.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = /** @class */ (function () {
    function TableComponent(_dataService) {
        this._dataService = _dataService;
        this.couponAdd = new _Common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", 0);
        // now the coupons is in the service
        this.coupons = _dataService.coupons;
    }
    TableComponent.prototype.deleteCoupon = function (i) {
        this.coupons.splice(i, 1);
    };
    TableComponent.prototype.addCoupon = function () {
        this.coupons.push(this.couponAdd);
        this.couponAdd = new _Common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", 0);
    };
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./coupon-table.component.html */ "./src/app/components/coupon-table/coupon-table.component.html"),
            styles: [__webpack_require__(/*! ./coupon-table.component.css */ "./src/app/components/coupon-table/coupon-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/components/create-company/create-company.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\ninput { \r\n    text-align: center; \r\n}\r\n.button {\r\n\tbox-shadow: 0px 1px 0px 0px #fff6af;\r\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\r\n\tbackground-color:#ffec64;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #ffaa22;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#333333;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffee66;\r\n}\r\n.myButton:hover {\r\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\r\n\tbackground-color:#ffab23;\r\n}\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\ninput:invalid {\r\n  }\r\nform:invalid {\r\n  }\r\ninput:valid {\r\n\tborder-color: #ddffdd;\r\n  }\r\nform:valid {\r\n\tborder: 2px solid #ddffdd;\r\n  }\r\ninput:required {\r\n\t\r\n\tborder-width: 3px;\r\n  }\r\ninput:required:invalid {\r\n\t}\r\n.glow-button:hover {\r\n\t\tcolor: rgba(255, 255, 255, 1);\r\n\t\tbox-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n\t}\r\n\r\n\t"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">\n  Create New Company:\n</font>\n<hr>\n\n<form #createForm=\"ngForm\">\n  <div class=\"form-group\">\n    <!--ID : <input class=disabled type=\"number\" name=\"idtxt\" [(ngModel)]=\"companyAdd.id\" readonly><br>-->\n    <div *ngIf=\"fullName?.touched\">\n      <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n        <font color=\"red\">Name is Required</font>\n      </div>\n    </div>\n    <input type=\"text\" required name=\"compnametxt\" [(ngModel)]=\"companyAdd.compName\" #fullName=\"ngModel\" placeholder=\"Enter Name\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"passwordtxt\" [(ngModel)]=\"companyAdd.password\" placeholder=\"Enter Password\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" name=\"emailtxt\" [(ngModel)]=\"companyAdd.email\" placeholder=\"Enter Email\"><br>\n  </div>\n  <button (click)=\"addCompany(createForm)\" ng-disabled=\"entityPropertyForm.$pristine || entityPropertyForm.$touched\"\n    type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\">Add Company</button>\n  <br>\n  <br>\n</form>"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/Company */ "./src/app/common/Company.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCompanyComponent = /** @class */ (function () {
    function CreateCompanyComponent(_dataService) {
        this._dataService = _dataService;
        this.companyAdd = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
        // now the coupons is in the service
        this.company = _dataService.companies;
    }
    CreateCompanyComponent.prototype.addCompany = function (createForm) {
        console.log("Form Value is: ", createForm.value);
        //this.company.push(this.companyAdd);
        //this.companyAdd = new Company(0,"","","");
        this._dataService.addCompanyService(this.companyAdd);
        //this.lastCreatedCompany = this.companyAdd.id;
        createForm.resetForm();
    };
    CreateCompanyComponent.prototype.ngOnInit = function () {
    };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.component.html */ "./src/app/components/create-company/create-company.component.html"),
            styles: [__webpack_require__(/*! ./create-company.component.css */ "./src/app/components/create-company/create-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/create-coupon/create-coupon.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/create-coupon/create-coupon.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-coupon/create-coupon.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-coupon/create-coupon.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<hr>\nCreate NEW COUPON:\n<br>\nID : <input type=\"number\" name=\"idtxt\" [(ngModel)]=\"couponAdd.id\"><br>\nTITLE : <input type=\"text\" name=\"titletxt\" [(ngModel)]=\"couponAdd.title\"><br>\nPRICE : <input type=\"number\" name=\"pricetxt\" [(ngModel)]=\"couponAdd.price\"><br>\n<button (click)=\"addCoupon()\">ADD COUPON</button>\n<br>\n<br>\n<p>\n  {{couponAdd | json}}\n</p>\n"

/***/ }),

/***/ "./src/app/components/create-coupon/create-coupon.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-coupon/create-coupon.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCouponComponent", function() { return CreateCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Common_Coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Common/Coupon */ "./src/app/Common/Coupon.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCouponComponent = /** @class */ (function () {
    function CreateCouponComponent(_dataService) {
        this._dataService = _dataService;
        this.couponAdd = new _Common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", 0);
        // now the coupons is in the service
        // this.coupons = _dataService.coupons;
    }
    CreateCouponComponent.prototype.deleteCoupon = function (i) {
        this.coupons.splice(i, 1);
    };
    CreateCouponComponent.prototype.addCoupon = function () {
        this.coupons.push(this.couponAdd);
        this.couponAdd = new _Common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", 0);
    };
    CreateCouponComponent.prototype.ngOnInit = function () {
    };
    CreateCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-coupon',
            template: __webpack_require__(/*! ./create-coupon.component.html */ "./src/app/components/create-coupon/create-coupon.component.html"),
            styles: [__webpack_require__(/*! ./create-coupon.component.css */ "./src/app/components/create-coupon/create-coupon.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
    ], CreateCouponComponent);
    return CreateCouponComponent;
}());



/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\ninput { \r\n    text-align: center; \r\n}\r\n.button {\r\n\tbox-shadow: 0px 1px 0px 0px #fff6af;\r\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\r\n\tbackground-color:#ffec64;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #ffaa22;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#333333;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffee66;\r\n}\r\n.myButton:hover {\r\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\r\n\tbackground-color:#ffab23;\r\n}\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\ninput:invalid {\r\n}\r\nform:invalid {\r\n}\r\ninput:valid {\r\nborder-color: #ddffdd;\r\n}\r\nform:valid {\r\nborder: 2px solid #ddffdd;\r\n}\r\ninput:required {\r\nborder-width: 3px;\r\n}\r\ninput:required:invalid {\r\n}\r\n.glow-button:hover {\r\n\t\tcolor: rgba(255, 255, 255, 1);\r\n\t\tbox-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n\t}\r\n\r\n\t"

/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">\n  Create New Customer:\n</font>\n<hr>\n<form #createForm=\"ngForm\">\n  <div class=\"form-group\">\n    <div *ngIf=\"fullName?.touched\">\n      <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n          <font color=\"red\">Name is Required</font>\n      </div>\n  </div>\n    <input type=\"text\" required name=\"custnametxt\" [(ngModel)]=\"customerAdd.custName\" #fullName=\"ngModel\" placeholder=\"Enter Name\"><br>\n</div>\n<div class=\"form-group\">\n  <input type=\"text\" name=\"passwordtxt\" [(ngModel)]=\"customerAdd.password\" placeholder=\"Enter Password\"><br>\n</div>\n  <button (click)=\"addCustomer(createForm)\" ng-disabled=\"entityPropertyForm.$pristine || entityPropertyForm.$touched\" type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\">Add Customer</button>\n  <br>\n  <br>\n</form>\n\n\n\n<!--\n\n\n<div class=\"container\">\n  <h1>Create Company Form</h1>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"compnametxt\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"compname\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"passwordtxt\">Password</label>\n      <input type=\"text\" class=\"form-control\" id=\"password\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"emailtxt\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n\n    <button (click)=\"addCompany()\" type=\"submit\" class=\"button\">Add Company</button>\n\n  </form>\n</div>\n-->\n<!--\n<div class=\"panel panel-default\" style=\"max-width: 70%;margin-left:15%; margin-top: 10%\">\n  <div class=\"panel-heading\">\n<h2 style=\"text-align: center\">\n  New Company</h2>\n</div>\n<div class=\"panel-body\">\n  <form class=\"form-horizontal\" style=\"margin-left: 15%\">\n    <div class=\"form-group\">\n      <label for=\"inputCompanyName\" class=\"control-label col-sm-2\">Name</label>\n      <div class=\"col-sm-6\">\n        <input class=\"form-control\" placeholder=\"Creation Username\" type=\"text\" id=\"inputUserName\" />\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputPassword\" class=\"control-label col-sm-2\">Password</label>\n      <div class=\"col-sm-6\">\n        <input class=\"form-control\" placeholder=\"Creation Password\" type=\"password\" id=\"inputPassword\" />\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputEmail\" class=\"control-label col-sm-2\">Email</label>\n      <div class=\"col-sm-6\">\n        <input class=\"form-control\" placeholder=\"Creation Email\" type=\"email\" id=\"inputEmail\" />\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n</div>\n-->"

/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/Customer */ "./src/app/common/Customer.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent(_dataService) {
        this._dataService = _dataService;
        this.customerAdd = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        this.customer = _dataService.customers;
    }
    CreateCustomerComponent.prototype.addCustomer = function (createForm) {
        console.log("Form Value is: ", createForm.value);
        //this.company.push(this.companyAdd);
        //this.companyAdd = new Company(0,"","","");
        this._dataService.addCustomerService(this.customerAdd);
        //this.lastCreatedCompany = this.companyAdd.id;
        createForm.resetForm();
    };
    CreateCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/components/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/*! ./create-customer.component.css */ "./src/app/components/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/customer-header/customer-header.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/customer-header/customer-header.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer-header/customer-header.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/customer-header/customer-header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n    <br>\n  <div class=\"clip-text clip-text_one\" style=\"      color:white;\">&nbsp; Total Customers: {{customer.length}} &nbsp;</div>\n</div>"

/***/ }),

/***/ "./src/app/components/customer-header/customer-header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/customer-header/customer-header.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHeaderComponent", function() { return CustomerHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerHeaderComponent = /** @class */ (function () {
    function CustomerHeaderComponent(_dataService) {
        // this.coupons = _dataService.coupons;
        // this.customers = _dataService.customers;
        this.customer = _dataService.customers;
    }
    CustomerHeaderComponent.prototype.ngOnInit = function () {
    };
    CustomerHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-header',
            template: __webpack_require__(/*! ./customer-header.component.html */ "./src/app/components/customer-header/customer-header.component.html"),
            styles: [__webpack_require__(/*! ./customer-header.component.css */ "./src/app/components/customer-header/customer-header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], CustomerHeaderComponent);
    return CustomerHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css');\r\n\r\n\r\n.sidebarContent {\r\n    margin-bottom:10px;\r\n    min-height:150px;\r\n    background-color:white;\r\n    text-align:center;\r\n    font-size:large;\r\n}\r\n\r\n\r\n.mainContent {\r\n    margin-bottom:10px;\r\n    min-height:310px;\r\n    background-color:white;\r\n    text-align:center;\r\n    font-size:large;\r\n}\r\n\r\n\r\n.button {\r\n   border-radius: 10px;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: Arial;\r\n    font-size: 20px;\r\n    padding: 5px 10px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n  }\r\n\r\n\r\n.glow-button:hover {\r\n    color: rgba(255, 255, 255, 1);\r\n    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n  }\r\n\r\n\r\n.button:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n\r\n*:focus {\r\n    outline: none;\r\n  }\r\n\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n\r\n.bt-glyphicons {\r\n\tmargin:0;\r\n\toverflow:hidden;\r\n}\r\n\r\n\r\n.bt-glyphicons-list {\r\n\tmargin: 0;\r\n\tpadding:0;\r\n\tlist-style:none;\r\n}\r\n\r\n\r\n.bt-glyphicons li {\r\n\tfloat:left;\r\n\twidth:25%;\r\n\theight:115px;\r\n\tpadding:10px;\r\n\tfont-size:14px;\r\n\tline-height:1.4;\r\n\ttext-align:center;\r\n\tborder:1px solid #fff;\r\n\tbackground-color:#f1f1f1;\r\n}\r\n\r\n\r\n.bt-glyphicons .glyphicon {\r\n\tmargin: 5px;\r\n\tfont-size:16px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/customer/customer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: white\">\n\n  <router-outlet></router-outlet>\n\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\" style=\"background-color: lightblue\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"background-color: lightblue\">\n        \n            <div class=\"sidebarContent\">\n              <app-create-customer></app-create-customer>\n            </div>\n        \n            <div class=\"sidebarContent\">\n              <app-get-customer></app-get-customer>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"background-color: lightgreen\">\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-9\" style=\"background-color: lightblue\">\n        <div class=\"mainContent\">\n          <app-get-all-customers></app-get-all-customers>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n\r\ntd,th {\r\n    text-align: center;\r\n  }\r\n\r\ntable#companyTable {\r\n        display: table;\r\n        border-collapse: separate;\r\n        border-spacing: 2px;\r\n        text-align: center;\r\n  }\r\n\r\ntable.blueTable {\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntable.blueTable input{\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n  width: 100%; padding:8px;\r\n}\r\n\r\ntable.blueTable td, table.blueTable th {\r\n  border: 1px solid #AAAAAA;\r\n  padding: 3px 2px;\r\n}\r\n\r\ntable.blueTable tbody td {\r\n  vertical-align:middle;\r\n  font-size: 15px;\r\n}\r\n\r\n.table-striped>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th {\r\n  background-color: #ffffff;\r\n}\r\n\r\ntable.blueTable tr:nth-child(even) {\r\n  background: rgb(241, 248, 253);\r\n}\r\n\r\ntable.blueTable thead {\r\n  background: #1C6EA4;\r\n  background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\r\n  border-bottom: 2px solid #444444;\r\n}\r\n\r\ntable.blueTable thead th {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  border-left: 2px solid #D0E4F5;\r\n}\r\n\r\ntable.blueTable thead th:first-child {\r\n  border-left: none;\r\n}\r\n\r\ntable.blueTable tfoot {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  background: #D0E4F5;\r\n  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\r\n  border-top: 2px solid #444444;\r\n}\r\n\r\ntable.blueTable tfoot td {\r\n  font-size: 14px;\r\n}\r\n\r\ntable.blueTable tfoot .links {\r\n  text-align: center;\r\n}\r\n\r\ntable.blueTable tfoot .links a{\r\n  display: inline-block;\r\n  background: #1C6EA4;\r\n  color: #FFFFFF;\r\n  padding: 2px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.gly-spin {\r\n  -webkit-animation: spin 2s infinite linear;\r\n  animation: spin 2s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n.gly-rotate-90 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.gly-rotate-180 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.gly-rotate-270 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n\r\n.gly-flip-horizontal {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\r\n  -webkit-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n\r\n.gly-flip-vertical {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\r\n  -webkit-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n\r\n.button {\r\n  background-color: rgb(124, 179, 219);\r\n  border-radius: 10px;\r\n  border: none;\r\n  color: rgb(2, 0, 0);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.glow-button:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n\r\n.button:hover {\r\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n}\r\n\r\n*:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n#button:active {\r\n  vertical-align: top;\r\n  padding-top: 8px;\r\n  color: rgb(68, 55, 55);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n\r\n.one a {\r\n  text-decoration: none;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n#myInput {\r\n  background-image: url('/admin/css/searchicon.png');\r\n  background-position: 10px 10px;\r\n  background-repeat: no-repeat;\r\n  font-size: 16px;\r\n  padding: 12px 20px 12px 40px;\r\n  border: 1px solid #ddd;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.search {\r\n\r\n}\r\n\r\n.searchTerm {\r\n  float: left;\r\n  width: 100%;\r\n  border: 3px solid #00B4CC;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  color: #9DBFAF;\r\n}\r\n\r\n.searchTerm:focus{\r\n  color: #00B4CC;\r\n}\r\n\r\n.searchButton {\r\n  position: absolute;  \r\n  right: -50px;\r\n  width: 40px;\r\n  height: 36px;\r\n  border: 1px solid #00B4CC;\r\n  background: #00B4CC;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n\r\n.cp-text{ color: rgba(0,0,0,.7); text-shadow: 0 1px rgba(255, 255, 255, 0.1);}"

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h2 style=\"font-size:10vw\" style=\"font-family:Times New Roman\">All Companies</h2>\n\n<div class=\"wrap\">\n    <div class=\"search\">\n  <input class=searchTerm type=\"text\" id=\"search-bar\" onkeyup=\"myFunction()\" placeholder=\"Search for Companies..\" title=\"Type in a name\">\n   </div>\n</div>\n\n<table id=\"companyTable\" border=\"1\" class=\"blueTable table table-striped table-bordered table-sm\" cellspacing=\"0\" width=\"100%\">\n  <tr>\n    <th onclick=\"sortTable(0)\" class=\"th-sm\">Id\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th onclick=\"sortTable(1)\" class=\"th-sm\">Company Name\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th onclick=\"sortTable(2)\" class=\"th-sm\">Password\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th onclick=\"sortTable(3)\" class=\"th-sm\">Email\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th>\n      Update\n    </th>\n    <th>\n      Delete\n    </th>\n  </tr>\n  <!-- foreach Coupon coupon : coupons-->\n  <tr *ngFor=\"let comp of company; let i = index\">\n    <td>{{comp.id}}</td>\n    <td>{{comp.compName}}</td>\n    <td>\n      <input type=\"text\" [(ngModel)]=\"comp.password\" />\n    </td>\n    <td>\n      <input type=\"email\" [(ngModel)]=\"comp.email\" />\n    </td>\n    <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"updateCompany(comp.id,comp.compName,comp.password,comp.email)\">\n        <i class=\"fa fa-refresh fa-spin\" style=\"font-size:20px;\"></i>\n      </button>\n    </td>\n    <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"deleteCompany(comp.id)\">&#x2718;</button></td>\n  </tr>\n</table>\n<br>\n<br>\n\n<br>\n<p>\n  <span class=\"cp-text\" style=\"color:black\">\n  © Copyright 2018 Assaf Ben David. All rights reserved.\n</span>\n <!-- {{companyAdd | json}}-->\n</p>\n"

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GetAllCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function() { return GetAllCompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/Company */ "./src/app/common/Company.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllCompaniesComponent = /** @class */ (function () {
    function GetAllCompaniesComponent(_dataService) {
        this._dataService = _dataService;
        this.companyAdd = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
        this.comp = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
        this.company = [];
        this.customer = [];
        this.company = _dataService.companies;
        this.getAllCompanies();
        this.customer = _dataService.customers;
        this.getAllCustomers();
        // now the company is in the service
    }
    GetAllCompaniesComponent.prototype.deleteCompany = function (id) {
        console.log(id);
        this._dataService.removeCompanyService(id);
        this.getAllCompanies();
        //this.company.splice(i, 1);
    };
    GetAllCompaniesComponent.prototype.updateCompany = function (id, compName, password, email) {
        console.log(id, compName, password, email);
        // let companyUpd = this._dataService.getCompanyByIdService(id)
        this.comp.id = id;
        this.comp.compName = compName;
        this.comp.password = password;
        this.comp.email = email;
        console.log("Company Instance from function: " + this.comp);
        this._dataService.updateCompanyService(id, this.comp);
    };
    GetAllCompaniesComponent.prototype.getAllCustomers = function () {
        this._dataService.getAllCustomersService();
    };
    GetAllCompaniesComponent.prototype.getAllCompanies = function () {
        console.log('in');
        this._dataService.getAllCompaniesService();
        console.log(this.company);
    };
    GetAllCompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-companies',
            template: __webpack_require__(/*! ./get-all-companies.component.html */ "./src/app/components/get-all-companies/get-all-companies.component.html"),
            styles: [__webpack_require__(/*! ./get-all-companies.component.css */ "./src/app/components/get-all-companies/get-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
    ], GetAllCompaniesComponent);
    return GetAllCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/get-all-customers/get-all-customers.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n\r\ntd,th {\r\n    text-align: center;\r\n  }\r\n\r\ntable#companyTable {\r\n        display: table;\r\n        border-collapse: separate;\r\n        border-spacing: 2px;\r\n        text-align: center;\r\n  }\r\n\r\ntable.blueTable {\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntable.blueTable input{\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n  width: 100%; padding:8px;\r\n}\r\n\r\ntable.blueTable td, table.blueTable th {\r\n  border: 1px solid #AAAAAA;\r\n  padding: 3px 2px;\r\n}\r\n\r\ntable.blueTable tbody td {\r\n  vertical-align:middle;\r\n  font-size: 15px;\r\n}\r\n\r\n.table-striped>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th {\r\n  background-color: #ffffff;\r\n}\r\n\r\ntable.blueTable tr:nth-child(even) {\r\n  background: rgb(241, 248, 253);\r\n}\r\n\r\ntable.blueTable thead {\r\n  background: #1C6EA4;\r\n  background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\r\n  border-bottom: 2px solid #444444;\r\n}\r\n\r\ntable.blueTable thead th {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  border-left: 2px solid #D0E4F5;\r\n}\r\n\r\ntable.blueTable thead th:first-child {\r\n  border-left: none;\r\n}\r\n\r\ntable.blueTable tfoot {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  background: #D0E4F5;\r\n  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\r\n  border-top: 2px solid #444444;\r\n}\r\n\r\ntable.blueTable tfoot td {\r\n  font-size: 14px;\r\n}\r\n\r\ntable.blueTable tfoot .links {\r\n  text-align: center;\r\n}\r\n\r\ntable.blueTable tfoot .links a{\r\n  display: inline-block;\r\n  background: #1C6EA4;\r\n  color: #FFFFFF;\r\n  padding: 2px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.gly-spin {\r\n  -webkit-animation: spin 2s infinite linear;\r\n  animation: spin 2s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n.gly-rotate-90 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.gly-rotate-180 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.gly-rotate-270 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n\r\n.gly-flip-horizontal {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\r\n  -webkit-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n\r\n.gly-flip-vertical {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\r\n  -webkit-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n\r\n.button {\r\n  background-color: rgb(124, 179, 219);\r\n  border-radius: 10px;\r\n  border: none;\r\n  color: rgb(2, 0, 0);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.glow-button:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n\r\n.button:hover {\r\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n}\r\n\r\n*:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n#button:active {\r\n  vertical-align: top;\r\n  padding-top: 8px;\r\n  color: rgb(68, 55, 55);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n\r\n.one a {\r\n  text-decoration: none;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n.search {\r\n  width: 100%;\r\n}\r\n\r\n.searchTerm {\r\n  float: left;\r\n  width: 100%;\r\n  border: 3px solid #00B4CC;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  color: #9DBFAF;\r\n}\r\n\r\n.searchTerm:focus{\r\n  color: #00B4CC;\r\n}\r\n\r\n.searchButton {\r\n  position: absolute;  \r\n  right: -50px;\r\n  width: 40px;\r\n  height: 36px;\r\n  border: 1px solid #00B4CC;\r\n  background: #00B4CC;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n\r\n.cp-text{ color: rgba(0,0,0,.7); text-shadow: 0 1px rgba(255, 255, 255, 0.1);}"

/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-all-customers/get-all-customers.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h2 style=\"font-size:10vw\" style=\"font-family:Times New Roman\">All Customers</h2>\n<div class=\"wrap\">\n    <div class=\"search\">\n  <input class=searchTerm type=\"text\" id=\"search-bar\" onkeyup=\"myFunction()\" placeholder=\"Search for Customers..\" title=\"Type in a name\">\n   </div>\n</div>\n<table id=\"companyTable\" border=\"1\" class=\"blueTable table table-striped table-bordered table-sm\" cellspacing=\"0\" width=\"100%\">\n  <tr>\n    <th onclick=\"sortTable(0)\" class=\"th-sm\">Id\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th onclick=\"sortTable(1)\" class=\"th-sm\">Customer Name\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th onclick=\"sortTable(2)\" class=\"th-sm\">Password\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th>\n      Update\n    </th>\n    <th>\n      Delete\n    </th>\n  </tr>\n  <!-- foreach Coupon coupon : coupons-->\n  <tr *ngFor=\"let cust of customer; let i = index\">\n    <td>{{cust.id}}</td>\n    <td>{{cust.custName}}</td>\n    <td>\n      <input type=\"text\" [(ngModel)]=\"cust.password\" />\n    </td>\n    <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"updateCustomer(cust.id,cust.custName,cust.password)\">\n        <i class=\"fa fa-refresh fa-spin\" style=\"font-size:20px;\"></i>\n      </button>\n    </td>\n    <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"deleteCustomer(cust.id)\">&#x2718;</button></td>\n  </tr>\n</table>\n<br>\n<br>\n\n<br>\n<p>\n    <span class=\"cp-text\" style=\"color:black\">\n        © Copyright 2018 Assaf Ben David. All rights reserved.\n      </span>\n <!-- {{companyAdd | json}}-->\n</p>\n"

/***/ }),

/***/ "./src/app/components/get-all-customers/get-all-customers.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-all-customers/get-all-customers.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GetAllCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function() { return GetAllCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/Customer */ "./src/app/common/Customer.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllCustomersComponent = /** @class */ (function () {
    function GetAllCustomersComponent(_dataService) {
        this._dataService = _dataService;
        this.customerAdd = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        this.cust = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        this.customer = [];
        this.company = [];
        this.customer = _dataService.customers;
        this.getAllCustomers();
        this.company = _dataService.companies;
        this.getAllCompanies();
    }
    GetAllCustomersComponent.prototype.deleteCustomer = function (id) {
        console.log(id);
        this._dataService.removeCustomerService(id);
        this.getAllCustomers();
        //this.company.splice(i, 1);
    };
    GetAllCustomersComponent.prototype.updateCustomer = function (id, custName, password) {
        console.log(id, custName, password);
        // let companyUpd = this._dataService.getCompanyByIdService(id)
        this.cust.id = id;
        this.cust.custName = custName;
        this.cust.password = password;
        console.log("Customer Instance from function: " + this.cust);
        this._dataService.updateCustomerService(id, this.cust);
    };
    GetAllCustomersComponent.prototype.getAllCustomers = function () {
        this._dataService.getAllCustomersService();
    };
    GetAllCustomersComponent.prototype.getAllCompanies = function () {
        console.log('in');
        this._dataService.getAllCompaniesService();
        console.log(this.company);
    };
    GetAllCustomersComponent.prototype.ngOnInit = function () {
    };
    GetAllCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-customers',
            template: __webpack_require__(/*! ./get-all-customers.component.html */ "./src/app/components/get-all-customers/get-all-customers.component.html"),
            styles: [__webpack_require__(/*! ./get-all-customers.component.css */ "./src/app/components/get-all-customers/get-all-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
    ], GetAllCustomersComponent);
    return GetAllCustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/get-company/get-company.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/get-company/get-company.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:required {\r\n    border-width: 3px;\r\n  }\r\n\r\ninput { \r\n    text-align: center; \r\n}\r\n\r\n.button {\r\n\tbox-shadow: 0px 1px 0px 0px #fff6af;\r\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\r\n\tbackground-color:#ffec64;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #ffaa22;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#333333;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffee66;\r\n}\r\n\r\n.myButton:hover {\r\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\r\n\tbackground-color:#ffab23;\r\n}\r\n\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\ninput:invalid {\r\n}\r\n\r\nform:invalid {\r\n}\r\n\r\ninput:valid {\r\nborder-color: #ddffdd;\r\n}\r\n\r\nform:valid {\r\nborder: 2px solid #ddffdd;\r\n}\r\n\r\ninput:required {\r\nborder-width: 3px;\r\n}\r\n\r\ninput:required:invalid {\r\n}\r\n\r\n.glow-button:hover {\r\n\t\tcolor: rgba(255, 255, 255, 1);\r\n\t\tbox-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n\t}\r\n\r\n/* Clear button styles\r\n--------------------------------------------- */\r\n\r\n::-ms-clear {\r\n\tdisplay: none;\r\n  }\r\n\r\n.form-control-clear {\r\n\tz-index: 10;\r\n\tpointer-events: auto;\r\n\tcursor: pointer;\r\n  }\r\n\r\n/* Custom page CSS (Not required)\r\n  --------------------------------------------- */\r\n\r\n#exampleContainer {\r\n\tpadding: 50px;\r\n\t}\r\n\r\n.glow-button:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/get-company/get-company.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/get-company/get-company.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #createForm=\"ngForm\">\n<br>\n<font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Get Company</font>\n\n\n\n    <br>\n        <Span style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Search By Company ID </Span>\n        <div class=\"form-group\">\n            <div *ngIf=\"fullName?.touched\">\n                <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n                    <font color=\"red\">ID is Required</font>\n                </div>\n            </div>\n            <input required class=disabled id=\"myInput\" value=\"\" type=\"number\" [(ngModel)]=\"company.id\" #fullName=\"ngModel\" name=\"idtxt\" id=\"idLabel\"><br>\n            <button (click)=\"getCompanyById(company.id)\" \n            type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\" placeholder=\"Enter Id\">Get\n            Company By Id</button>\n        </div>\n    </form>\n    <form>\n    <button class=button (click)=\"getAllCompanies()\"  type=\"submit\"\n        class=\"button glow-button btn btn-default\">Get All Companies</button>\n    <br>\n</form>"

/***/ }),

/***/ "./src/app/components/get-company/get-company.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/get-company/get-company.component.ts ***!
  \*****************************************************************/
/*! exports provided: GetCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyComponent", function() { return GetCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetCompanyComponent = /** @class */ (function () {
    function GetCompanyComponent(_dataService) {
        this._dataService = _dataService;
        this.company = [];
        this.company = _dataService.companies;
        this.getAllCompanies();
        // now the company is in the service
    }
    GetCompanyComponent.prototype.getAllCompanies = function () {
        console.log('in');
        this._dataService.getAllCompaniesService();
        console.log(this.company);
    };
    GetCompanyComponent.prototype.getCompanyById = function (id) {
        console.log(id);
        this._dataService.getCompanyByIdService(id);
        console.log(this.company);
    };
    GetCompanyComponent.prototype.ngOnInit = function () {
    };
    GetCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-company',
            template: __webpack_require__(/*! ./get-company.component.html */ "./src/app/components/get-company/get-company.component.html"),
            styles: [__webpack_require__(/*! ./get-company.component.css */ "./src/app/components/get-company/get-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], GetCompanyComponent);
    return GetCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/get-customer/get-customer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/get-customer/get-customer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:required {\r\n\tborder-width: 3px;\r\n  }\r\n\r\ninput { \r\n    text-align: center; \r\n}\r\n\r\n.button {\r\n\tbox-shadow: 0px 1px 0px 0px #fff6af;\r\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\r\n\tbackground-color:#ffec64;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #ffaa22;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#333333;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffee66;\r\n}\r\n\r\n.myButton:hover {\r\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\r\n\tbackground-color:#ffab23;\r\n}\r\n\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\ninput:invalid {\r\n}\r\n\r\nform:invalid {\r\n}\r\n\r\ninput:valid {\r\nborder-color: #ddffdd;\r\n}\r\n\r\nform:valid {\r\nborder: 2px solid #ddffdd;\r\n}\r\n\r\ninput:required {\r\nborder-width: 3px;\r\n}\r\n\r\ninput:required:invalid {\r\n}\r\n\r\n.glow-button:hover {\r\n\t\tcolor: rgba(255, 255, 255, 1);\r\n\t\tbox-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n\t}\r\n\r\n/* Clear button styles\r\n--------------------------------------------- */\r\n\r\n::-ms-clear {\r\n\tdisplay: none;\r\n  }\r\n\r\n.form-control-clear {\r\n\tz-index: 10;\r\n\tpointer-events: auto;\r\n\tcursor: pointer;\r\n  }\r\n\r\n/* Custom page CSS (Not required)\r\n  --------------------------------------------- */\r\n\r\n#exampleContainer {\r\n\tpadding: 50px;\r\n\t}\r\n\r\n.glow-button:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/get-customer/get-customer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/get-customer/get-customer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #createForm=\"ngForm\">\n  <br>\n  <font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Get Customer</font>\n  \n  \n  \n      <br>\n          <Span style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Search By Customer ID </Span>\n      \n          <div class=\"form-group\">\n              <div *ngIf=\"fullName?.touched\">\n                <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n                  <font color=\"red\">ID is Required</font>\n                </div>\n              </div>\n                  <input required class=disabled id=\"myInput\" value=\"1\" type=\"number\" name=\"idtxt\" [(ngModel)]=\"customer.id\" #fullName=\"ngModel\" id=\"idLabel\"><br>\n              <button (click)=\"getCustomerById(customer.id)\" \n                  type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\" placeholder=\"Enter Id\">Get\n                  Customer By Id</button>\n          </div>\n      </form>\n      <form>\n      <button class=button (click)=\"getAllCustomers()\"  type=\"submit\"\n          class=\"button glow-button btn btn-default\">Get All Customers</button>\n      <br>\n  </form>"

/***/ }),

/***/ "./src/app/components/get-customer/get-customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/get-customer/get-customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: GetCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerComponent", function() { return GetCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetCustomerComponent = /** @class */ (function () {
    function GetCustomerComponent(_dataService) {
        this._dataService = _dataService;
        this.customer = [];
        this.customer = _dataService.customers;
        this.getAllCustomers();
        // now the company is in the service
    }
    GetCustomerComponent.prototype.getAllCustomers = function () {
        console.log('in');
        this._dataService.getAllCustomersService();
        console.log(this.customer);
    };
    GetCustomerComponent.prototype.getCustomerById = function (id) {
        console.log(id);
        this._dataService.getCustomerByIdService(id);
        console.log(this.customer);
    };
    GetCustomerComponent.prototype.ngOnInit = function () {
    };
    GetCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-customer',
            template: __webpack_require__(/*! ./get-customer.component.html */ "./src/app/components/get-customer/get-customer.component.html"),
            styles: [__webpack_require__(/*! ./get-customer.component.css */ "./src/app/components/get-customer/get-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], GetCustomerComponent);
    return GetCustomerComponent;
}());



/***/ }),

/***/ "./src/app/services/shared-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/shared-data.service.ts ***!
  \*************************************************/
/*! exports provided: SharedDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDataService", function() { return SharedDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedDataService = /** @class */ (function () {
    function SharedDataService(http) {
        this.http = http;
        this.coupons = [];
        this.companies = [];
        this.customers = [];
    }
    SharedDataService.prototype.logout = function (request, response) {
        this.http.post('http://localhost:8080/adminservice/logout', request, response).subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('You are logged out', ' You have been logout of the System.', 'info');
        }, 
        //Error handeling
        function (err) {
            console.error('Error while add Coupon , Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    /**
   * addCompanyService
   */
    SharedDataService.prototype.addCompanyService = function (company) {
        var _this = this;
        console.log(company);
        this.http.post('http://localhost:8080/adminservice/createcompany', company).subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Company Created!', ' Company has been created.', 'success');
            _this.getAllCompaniesService();
        }, 
        //Error handeling
        function (err) {
            if (err.status == 409) {
                console.error('Error while get Coupon By Type, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: 'Cannot Create Company!',
                    text: 'Cannot create Company with the same name, choose another Company Name.',
                    animation: false,
                    type: 'error'
                });
            }
            else {
                console.error('Error while add Company , Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.getCompanyByIdService = function (id) {
        var _this = this;
        console.log(id);
        console.log('url = http://localhost:8080//adminservice/getcompany/' + id);
        this.http.get('http://localhost:8080//adminservice/getcompany/' + id).subscribe(function (resp) {
            var temp = resp.json();
            _this.companies.length = 0;
            _this.companies.push(resp.json());
            console.log(resp.json());
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Filter company was Successful !', ' Managed to get company by Id.' + id, 'success');
        }, 
        //Error handeling
        function (err) {
            if (err.status == 404) {
                console.error('Error while get company By Id, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    type: 'error',
                    title: 'Cannot get company!',
                    text: 'Did not find any company by id ' + id,
                    animation: true
                });
            }
            else {
                console.error('Error while Filter company, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.updateCompanyService = function (id, company) {
        var _this = this;
        var url = 'http://localhost:8080/adminservice/updatecompany/' + id;
        this.http.put(url, company).subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Updated!', ' Company has been updated.', 'success');
            _this.getAllCompaniesService();
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Deleting Coupon Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    SharedDataService.prototype.removeCompanyService = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Company!',
            type: 'warning',
            showCancelButton: true,
            showLoaderOnConfirm: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            //If the User press Confirm button "Yes Delete it"
            if (result.value) {
                //Send the Delete API to the Service
                _this.http.delete('http://localhost:8080/adminservice/removecompany/' + id).subscribe(function (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', 'Company has been deleted.', 'success');
                    _this.getAllCompaniesService();
                }, 
                //Error handeling
                function (err) {
                    console.error('Error while Deleting Company Check you DB and Service!', err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
                });
                //If the User press Cancel button "No, keep it"
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Cancelled', 'Your Company is safe :)', 'error');
            }
        });
    };
    SharedDataService.prototype.getAllCompaniesService = function () {
        var _this = this;
        this.http.get('http://localhost:8080/adminservice/getallcompanies').subscribe(function (resp) {
            var temp = resp.json();
            console.log(_this.companies.length);
            _this.companies.length = 0;
            console.log(_this.companies.length);
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var item = temp_1[_i];
                _this.companies.push(item);
            }
            console.log(resp.json());
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Deleting Company Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    /**
  * addCustomerService
  */
    SharedDataService.prototype.addCustomerService = function (customer) {
        var _this = this;
        this.http.post('http://localhost:8080/adminservice/createcustomer', customer).subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Customer Created!', ' Customer has been created.', 'success');
            _this.getAllCustomersService();
        }, 
        //Error handeling
        function (err) {
            if (err.status == 409) {
                console.error('Error while get Coupon By Type, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: 'Cannot Create Customer!',
                    text: 'Cannot create Customer with the same name, choose another Customer Name.',
                    animation: false,
                    type: 'error'
                });
            }
            else {
                console.error('Error while add Customer , Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.getCustomerByIdService = function (id) {
        var _this = this;
        this.http.get('http://localhost:8080//adminservice/getcustomer/' + id).subscribe(function (resp) {
            var temp = resp.json();
            _this.customers.length = 0;
            _this.customers.push(resp.json());
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Filter customer was Successful !', ' Managed to get customer by Id.' + id, 'success');
        }, 
        //Error handeling
        function (err) {
            if (err.status == 404) {
                console.error('Error while get customer By Id, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    type: 'error',
                    title: 'Cannot get customer!',
                    text: 'Did not find any customer by id ' + id,
                    animation: true
                });
            }
            else {
                console.error('Error while Filter customer, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.updateCustomerService = function (id, customer) {
        var _this = this;
        var url = 'http://localhost:8080/adminservice/updatecustomer/' + id;
        this.http.put(url, customer).subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Updated!', ' Customer has been updated.', 'success');
            _this.getAllCustomersService();
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Deleting Customer Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    SharedDataService.prototype.removeCustomerService = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Customer!',
            type: 'warning',
            showCancelButton: true,
            showLoaderOnConfirm: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            //If the User press Confirm button "Yes Delete it"
            if (result.value) {
                //Send the Delete API to the Service
                _this.http.delete('http://localhost:8080/adminservice/removecustomer/' + id).subscribe(function (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', ' Customer has been deleted.', 'success');
                    //Reload all Coupons after delete Customer action
                    _this.getAllCustomersService();
                }, 
                //Error handeling
                function (err) {
                    console.error('Error while Deleting Customer Check you DB and Service!', err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
                });
                //If the User press Cancel button "No, keep it"
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Cancelled', 'Your Customer is safe :)', 'error');
            }
        });
    };
    SharedDataService.prototype.getAllCustomersService = function () {
        var _this = this;
        this.http.get('http://localhost:8080/adminservice/getallcustomers').subscribe(function (resp) {
            var temp = resp.json();
            _this.customers.length = 0;
            for (var _i = 0, temp_2 = temp; _i < temp_2.length; _i++) {
                var item = temp_2[_i];
                _this.customers.push(item);
            }
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Deleting Customer Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    SharedDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SharedDataService);
    return SharedDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angularjs\CSAdmin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map