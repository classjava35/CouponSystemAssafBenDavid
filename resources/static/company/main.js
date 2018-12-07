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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_coupon_header_coupon_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/coupon-header/coupon-header.component */ "./src/app/components/coupon-header/coupon-header.component.ts");
/* harmony import */ var _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/create-coupon/create-coupon.component */ "./src/app/components/create-coupon/create-coupon.component.ts");
/* harmony import */ var _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-company/create-company.component */ "./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/get-all-coupons/get-all-coupons.component */ "./src/app/components/get-all-coupons/get-all-coupons.component.ts");
/* harmony import */ var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_get_company_get_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/get-company/get-company.component */ "./src/app/components/get-company/get-company.component.ts");
/* harmony import */ var _components_get_coupon_get_coupon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/get-coupon/get-coupon.component */ "./src/app/components/get-coupon/get-coupon.component.ts");
/* harmony import */ var _components_get_coupon_by_type_get_coupon_by_type_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/get-coupon-by-type/get-coupon-by-type.component */ "./src/app/components/get-coupon-by-type/get-coupon-by-type.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"],
                _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_13__["GetAllCompaniesComponent"],
                _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_11__["CreateCompanyComponent"],
                _components_get_company_get_company_component__WEBPACK_IMPORTED_MODULE_14__["GetCompanyComponent"],
                _components_coupon_header_coupon_header_component__WEBPACK_IMPORTED_MODULE_9__["CouponHeaderComponent"],
                _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_10__["CreateCouponComponent"],
                _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_12__["GetAllCouponsComponent"],
                _components_get_coupon_get_coupon_component__WEBPACK_IMPORTED_MODULE_15__["GetCouponComponent"],
                _components_get_coupon_by_type_get_coupon_by_type_component__WEBPACK_IMPORTED_MODULE_16__["GetCouponByTypeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: "createcoupon",
                        component: _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_10__["CreateCouponComponent"],
                    },
                    {
                        path: "getallcoupons",
                        component: _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_12__["GetAllCouponsComponent"],
                    },
                    {
                        path: "company",
                        component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"],
                    },
                ])
            ],
            providers: [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/Coupon.ts":
/*!**********************************!*\
  !*** ./src/app/common/Coupon.ts ***!
  \**********************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
var Coupon = /** @class */ (function () {
    //id : number;
    function Coupon(id, title, startDate, endDate, amount, type, message, price, image) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.type = type;
        this.message = message;
        this.price = price;
        this.image = image;
        //this.id = id;
    }
    return Coupon;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:hover, h1:hover, a:hover ,select:hover{\r\n  background-color: rgb(255, 255, 255);\r\n  color: #000000;\r\n}\r\n.button{\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  color: #000000;\r\n  margin: 10px;\r\n  height: 40px;\r\n  border-radius:4px;border:1px solid #AAAAAA;\r\n  box-shadow:         inset 0 0 10px #000000;\r\n}\r\n.btn{\r\n    border: 1px solid rgb(99, 189, 250);\r\n    background-color: rgb(255, 255, 255);\r\n    color: #000000;\r\n    margin: 10px;\r\n    height: 40px;\r\n\r\n}\r\n.disabled  {\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(53, 50, 50);\r\n  color: #978e8e;\r\n  margin: 10px;\r\n  height: 40px;\r\n  border-radius:4px;border:1px solid rgb(51, 50, 50);\r\n  box-shadow:         inset 0 0 10px #3b3a3a;\r\n}\r\ninput{\r\n border: 1px solid rgb(99, 189, 250);\r\n background-color: rgb(255, 255, 255);\r\n width: 100%;\r\n text-align: center;\r\n border-collapse: collapse;\r\n width: 100%; padding:8px;\r\n   height: 40px;\r\n   margin: 10px;\r\n}\r\n/* *********************************\r\n           Variables\r\n  ********************************** */\r\nselect .lt { text-align:center; \r\n    text-align-last:center;\r\n    align-items: center;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0; left: 0; bottom: 0; right: 0;\r\n  }\r\nselect{\r\n    width:230px;\r\n    text-indent: 5px; \r\n    text-align-last:center;\r\n        dispaly:inline-block;\r\n    height:40px;\r\n    border-radius:0;\r\n    display:block;\r\n    margin:10px;\r\n    padding-left:0px;\r\n    border-radius:4px;border:1px solid #AAAAAA;\r\n    box-shadow:         inset 0 0 10px #000000;\r\n  }\r\nelement.style {\r\n    background-color: white;\r\n    }\r\n/* *********************************\r\n     Some Style Overrides on Bootstrap\r\n    ********************************** */\r\n.navbar-inverse {\r\n     background: rgba(62,195,246,0);\r\n    border-bottom: none;\r\n  }\r\n.navbar-inverse .navbar-toggle {\r\n    border: 1px solid #e3d9f3;\r\n    border-color: rgba(13, 10, 202, 0.7);\r\n  }\r\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\r\n     border-color: transparent;\r\n \r\n\r\n  }\r\n.navbar-inverse .navbar-nav > li > a {\r\n  color: black;\r\n    \r\n  \r\n  }\r\n.onclic {\r\n    color: #22F;\r\n}\r\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\r\n  color: #22F;\r\n  }\r\n/* *********************************\r\n             Toolbar Logo\r\n    ********************************** */\r\n.small-logo-container {\r\n      padding-top: navbar-height;\r\n      height: navbar-height;\r\n      overflow: hidden;\r\n      margin-left: -140px;\r\n    }\r\n.small-logo {\r\n    color: white;\r\n    font-size: 2.5em;\r\n    padding-bottom: small-logo-padding;\r\n  }\r\n/* *********************************\r\n             Big Logo\r\n    ********************************** */\r\n.navbar #logo:hover {\r\n    background:#ed0121;\r\n    transition:all 0.4s;\r\n    \r\n  }\r\n.navbar-inverse .navbar-nav>li>a {\r\n      transition:all 0.4s;\r\n      color:white;\r\n      font-weight:bold;\r\n  }\r\n.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>.active>a {\r\n      background:rgba(255,255,255,0.5);\r\n      color:white;\r\n      text-shadow:none;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- Fixed navbar -->\n   <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" style=\"background: rgb(34, 85, 105);\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <div class=\"small-logo-container\">\n          <a class=\"small-logo\" href=\"#\">\n            Company &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          </a>\n        </div>\n      </div>\n\n      <div class=\"navbar-header\">\n        <select ng-options=\"t.name group by t.type for t in type\" [(ngModel)]=\"typSelected\" (ngModelChange)='onTypeSelected($event)'>\n          <optgroup label=\"Get Coupons\">\n            <option [value]=\"1\">Get All Coupons</option>\n          </optgroup>\n          <optgroup label=\"Get All Coupons By Type\">\n            <option [value]=\"2\">Restaurants</option>\n            <option [value]=\"3\">Electricity</option>\n            <option [value]=\"4\">Food</option>\n            <option [value]=\"5\">Health</option>\n            <option [value]=\"6\">Sports</option>\n            <option [value]=\"7\">Camping</option>\n            <option [value]=\"8\">Traveling</option>\n          </optgroup>\n        </select>\n      </div>\n  \n  <div class=\"navbar-header\">\n      <div class=\"navbar-header\">\n        <button class=\"button btn\" type=\"button\" (click)=\"getCouponsById(price)\" [disabled]=\"price === undefined || price === null || price === '' \">Get Coupon By ID</button> \n      </div>\n      <input type=\"text\" class=\"form-control\" placeholder=\"ID\" [(ngModel)]=\"price\" style=\"width: 50px\">\n    </div>\n\n      <div class=\"navbar-collapse collapse\">\n        <li class=\"nav navbar-nav selected\" style=\"right: 1000px;\" style=\"font-size: 15px;\">\n          <app-coupon-header></app-coupon-header>\n        </li>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <!-- <li><a routerLink=\"/company\" style=\"font-size: 15px;\" id=\"button\"  class=\"onclic\">Company</a></li> -->\n          <li><a [routerLink]=\"\" (click)=\"logout()\" ><span class=\"glyphicon glyphicon-log-out\" style=\"font-size: 20px;\" style=\"bottom: 15px\"></span> Logout</a></li>\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n\n  <div class=\"container-fluid big-logo-row\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 big-logo-container\">\n          <h1 class=\"big-logo\"></h1>\n        </div><!--/.col-xs-12 -->\n      </div><!--/.row -->\n    </div><!--/.container -->\n  </div><!--/.container-fluid -->\n<app-company></app-company>\n\n  <router-outlet></router-outlet>\n"

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
        this.coupon = [];
        this.coupon = _dataService.coupons;
    }
    AdminComponent.prototype.getAllCoupons = function () {
        this._dataService.getAllCouponsService();
    };
    AdminComponent.prototype.getCouponByTypeService = function (type) {
        this._dataService.getCouponByTypeService(type);
    };
    AdminComponent.prototype.getCouponsById = function (id) {
        this._dataService.getCouponByIdService(id);
    };
    AdminComponent.prototype.logout = function () {
        window.location.href = 'http://localhost:8080/';
        this._dataService.logout(this.request, this.response);
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.type = [
            { id: 1, type: "Get All Coupons", group: "Get Coupons" },
            { id: 2, type: "RESTAURANTS", group: "Get Coupons By Type" },
            { id: 3, type: "ELECTRICITY", group: "Get Coupons By Type" },
            { id: 4, type: "FOOD", group: "Get Coupons By Type" },
            { id: 5, type: "HEALTH", group: "Get Coupons By Type" },
            { id: 6, type: "SPORTS", group: "Get Coupons By Type" },
            { id: 7, type: "CAMPING", group: "Get Coupons By Type" },
            { id: 8, type: "TRAVELING", group: "Get Coupons By Type" },
        ];
        this.typSelected = 1; //define the default value for the selected Type dropdown
    };
    AdminComponent.prototype.onTypeSelected = function (id) {
        switch (id) {
            case "1": {
                this.getAllCoupons();
                this.price = null;
                break;
            }
            case "2": {
                this.getCouponByTypeService("RESTAURANTS");
                this.price = null;
                break;
            }
            case "3": {
                this.getCouponByTypeService("ELECTRICITY");
                this.price = null;
                break;
            }
            case "4": {
                this.getCouponByTypeService("FOOD");
                this.price = null;
                break;
            }
            case "5": {
                this.getCouponByTypeService("HEALTH");
                this.price = null;
                break;
            }
            case "6": {
                this.getCouponByTypeService("SPORTS");
                this.price = null;
                break;
            }
            case "7": {
                this.getCouponByTypeService("CAMPING");
                this.price = null;
                break;
            }
            case "8": {
                this.getCouponByTypeService("TRAVELING");
                this.price = null;
                break;
            }
            default: {
                console.log("Invalid choice");
                this.price = null;
                break;
            }
        }
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

/***/ "./src/app/components/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/company/company.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css');\r\n\r\n\r\n.sidebarContent {\r\n    margin-bottom:10px;\r\n    min-height:150px;\r\n    background-color:white;\r\n    text-align:center;\r\n    font-size:large;\r\n    \r\n}\r\n\r\n\r\n.mainContent {\r\n    margin-bottom:10px;\r\n    min-height:310px;\r\n    min-width:1300px;\r\n    background-color:white;\r\n    text-align:center;\r\n    font-size:large;\r\n}\r\n\r\n\r\n.button {\r\n   border-radius: 10px;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: Arial;\r\n    font-size: 20px;\r\n    padding: 5px 10px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n  }\r\n\r\n\r\n.glow-button:hover {\r\n    color: rgba(255, 255, 255, 1);\r\n    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n  }\r\n\r\n\r\n.button:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n\r\n*:focus {\r\n    outline: none;\r\n  }\r\n\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n\r\n.bt-glyphicons {\r\n\tmargin:0;\r\n\toverflow:hidden;\r\n}\r\n\r\n\r\n.bt-glyphicons-list {\r\n\tmargin: 0;\r\n\tpadding:0;\r\n\tlist-style:none;\r\n}\r\n\r\n\r\n.bt-glyphicons li {\r\n\tfloat:left;\r\n\twidth:25%;\r\n\theight:115px;\r\n\tpadding:10px;\r\n\tfont-size:14px;\r\n\tline-height:1.4;\r\n\ttext-align:center;\r\n\tborder:1px solid #fff;\r\n\tbackground-color:#f1f1f1;\r\n}\r\n\r\n\r\n.bt-glyphicons .glyphicon {\r\n\tmargin: 5px;\r\n\tfont-size:16px;\r\n}\r\n\r\n\r\n.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\r\n  float: left;\r\n  margin: -70px;\r\n  border-width: 0.1px;\r\n}\r\n\r\n\r\n.col-md-12{\r\n  margin: -130px;\r\n  border-image-width: 1px;\r\n}\r\n\r\n\r\n.col-md-9{\r\nborder-width: none;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/company/company.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: white\">\n\n  <router-outlet></router-outlet>\n\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\" >\n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"background-color: rgb(216, 241, 250) ; border-width: inherit\">\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n            <div class=\"sidebarContent\">\n              <app-create-coupon></app-create-coupon>\n            </div>\n        \n            <!-- <div class=\"sidebarContent\">\n              <app-get-coupon></app-get-coupon>\n            </div> -->\n\n\n        <!-- <div class=\"sidebarContent\">\n          <app-get-coupon-by-type></app-get-coupon-by-type>\n        </div> -->\n      </div>\n    </div>      \n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"background-color: rgb(216, 241, 250); border-width: inherit\">\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-9\" style=\"background-color: rgb(216, 241, 250)\">\n        <div class=\"mainContent\">\n            <br>\n            <br>\n            <br>\n          <app-get-all-coupons></app-get-all-coupons>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

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

/***/ "./src/app/components/coupon-header/coupon-header.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/coupon-header/coupon-header.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupon-header/coupon-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/coupon-header/coupon-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n  <br>\n  <div class=\"clip-text clip-text_one\" style=\"      color:white;\n  \">&nbsp;&nbsp;&nbsp; Total Coupons: {{coupons.length}} &nbsp;</div>\n</div>"

/***/ }),

/***/ "./src/app/components/coupon-header/coupon-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/coupon-header/coupon-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: CouponHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponHeaderComponent", function() { return CouponHeaderComponent; });
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


var CouponHeaderComponent = /** @class */ (function () {
    function CouponHeaderComponent(_dataService) {
        this.coupons = _dataService.coupons;
        // this.customers = _dataService.customers;
        // this.company = _dataService.companies;
    }
    CouponHeaderComponent.prototype.ngOnInit = function () {
    };
    CouponHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupon-header',
            template: __webpack_require__(/*! ./coupon-header.component.html */ "./src/app/components/coupon-header/coupon-header.component.html"),
            styles: [__webpack_require__(/*! ./coupon-header.component.css */ "./src/app/components/coupon-header/coupon-header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], CouponHeaderComponent);
    return CouponHeaderComponent;
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

module.exports = "<br>\n<br>\n<font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">\n  Create New Company:\n</font>\n<hr>\n\n<form createForm=\"ngForm\">\n  <div class=\"form-group\">\n    <!--ID : <input class=disabled type=\"number\" name=\"idtxt\" [(ngModel)]=\"companyAdd.id\" readonly><br>-->\n    <div *ngIf=\"fullName?.touched\">\n      <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n        <font color=\"red\">Name is Required</font>\n      </div>\n    </div>\n    <input type=\"text\" required name=\"compnametxt\" [(ngModel)]=\"couponAdd.title\" #fullName=\"ngModel\" placeholder=\"Enter Name\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"Date\" [(ngModel)]=\"couponAdd.startDate\" placeholder=\"Enter Start Date\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"Date\" [(ngModel)]=\"couponAdd.endDate\" placeholder=\"Enter End Date\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"number\" [(ngModel)]=\"couponAdd.amount\" placeholder=\"Enter Amount\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"text\" [(ngModel)]=\"couponAdd.type\" placeholder=\"Enter Type\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"text\" [(ngModel)]=\"couponAdd.message\" placeholder=\"Enter Message\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"number\" [(ngModel)]=\"couponAdd.price\" placeholder=\"Enter Price\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"text\" [(ngModel)]=\"couponAdd.image\" placeholder=\"Enter Image\"><br>\n  </div>\n  <button (click)=\"addCoupon(createForm)\" ng-disabled=\"entityPropertyForm.$pristine || entityPropertyForm.$touched\"\n    type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\">Add Coupon</button>\n  <br>\n  <br>\n</form>"

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
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/Coupon */ "./src/app/common/Coupon.ts");
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
        this.couponAdd = new _common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        // now the coupons is in the service
        this.coupons = _dataService.coupons;
    }
    CreateCompanyComponent.prototype.addCoupon = function (createForm) {
        console.log("Form Value is: ", createForm.value);
        this.coupons.push(this.couponAdd);
        this.couponAdd = new _common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this._dataService.addCouponService(this.couponAdd);
        this.lastCreatedCoupon = this.couponAdd.id;
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

module.exports = "\r\n\r\ninput { \r\n    text-align: center; \r\n}\r\n.button {\r\n\tbox-shadow: 0px 1px 0px 0px #fff6af;\r\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\r\n\tbackground-color:#ffec64;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #ffaa22;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#333333;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffee66;\r\n}\r\n.myButton:hover {\r\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\r\n\tbackground-color:#ffab23;\r\n}\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\ninput:invalid {\r\n  }\r\nform:invalid {\r\n  }\r\ninput:valid {\r\n\tborder-color: #ddffdd;\r\n  }\r\nform:valid {\r\n\tborder: 2px solid #ddffdd;\r\n  }\r\ninput:required {\r\n\t\r\n\tborder-width: 3px;\r\n  }\r\ninput:required:invalid {\r\n\t}\r\n.glow-button:hover {\r\n\t\tcolor: rgba(255, 255, 255, 1);\r\n\t\tbox-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n\t}\r\n[type=\"date\"] {\r\n\t\tbackground:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;\r\n\t}\r\n[type=\"date\"]::-webkit-inner-spin-button {\r\n\t\tdisplay: none;\r\n\t}\r\n[type=\"date\"]::-webkit-calendar-picker-indicator {\r\n\t\topacity: 0;\r\n\t}\r\n/* custom styles */\r\nbody {\r\n\t\tpadding: 4em;\r\n\t\tbackground: #e5e5e5;\r\n\t\tfont: 13px/1.4 Geneva, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;\r\n\t}\r\nlabel {\r\n\t\tdisplay: block;\r\n\t}\r\ninput {\r\n\t\tborder: 1px solid #c4c4c4;\r\n\t\tborder-radius: 5px;\r\n\t\tbackground-color: #fff;\r\n\t\tpadding: 3px 5px;\r\n\t\tbox-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n\t\twidth: 190px;\r\n\t}\r\nselect{\r\n\t\tborder: 1px solid #c4c4c4;\r\n\t\tborder-radius: 5px;\r\n\t\tbackground-color: #fff;\r\n\t\tpadding: 3px 5px;\r\n\t\tbox-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n\t\twidth: 190px;\r\n\t\ttext-align: center;\r\n\t\ttext-align-last:center;\r\n\t}\r\nspan.info{\r\n\t\tmargin-left: 10px;\r\n\t\tdisplay:block;\r\n\t\tcolor: #0c0c0c;\r\n\t\tfont-size: 11px;\r\n\t\tfont-style: italic;\r\n\t\tfont-weight:bold;\r\n\t}"

/***/ }),

/***/ "./src/app/components/create-coupon/create-coupon.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-coupon/create-coupon.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">\n  Create New Coupon:\n</font>\n\n<form #createForm=\"ngForm\">\n  <div class=\"form-group\">\n    <!--ID : <input class=disabled type=\"number\" name=\"idtxt\" [(ngModel)]=\"companyAdd.id\" readonly><br>-->\n    <div *ngIf=\"fullName?.touched\">\n      <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n        <font color=\"red\">Name is Required</font>\n      </div>\n    </div>\n    <span class=\"info\">Enter Coupon Title</span>\n    <input type=\"text\" required name=\"coupnametxt\" [(ngModel)]=\"couponAdd.title\" #fullName=\"ngModel\" placeholder=\"Enter Coupon Title\"><br>\n  </div>\n  <div class=\"form-group\">\n      <span class=\"info\">Choose Start Date</span>\n    <input type=\"date\" name=\"startDate\" id = \"datePicker\" [ngModel]=\"couponAdd.startDate | date: 'yyyy-MM-dd'\" placeholder=\"Enter start Date\"><br>\n  </div>\n  <div class=\"form-group\">\n      <span class=\"info\">Choose End Date</span>\n    <input type=\"date\" name=\"endDate\" [ngModel]=\"couponAdd.endDate | date: 'yyyy-MM-dd'\" placeholder=\"Enter end Date\"><br>\n  </div>\n  <div class=\"form-group\">\n      <span class=\"info\">Enter Amount</span>\n    <input type=\"number\" step=\"1\" min=\"0\" ng-pattern=\"integerval\" name=\"amount\" [(ngModel)]=\"couponAdd.amount\" placeholder=\"Enter Amount\"><br>\n  </div>\n  <div class=\"form-group\">\n      <span class=\"info\">Choose Coupon Type</span>\n      <div *ngIf=\"fullName?.touched\">\n          <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n            <font color=\"red\">type is Required</font>\n          </div>\n        </div>\n          <select required type=\"text\" name=\"type\" [(ngModel)]=\"couponAdd.type\" placeholder=\"Enter type\">\n            <option value=\"\">Choose Type</option>\n            <option>RESTAURANTS</option>\n            <option>ELECTRICITY</option>\n            <option>FOOD</option>\n            <option>HEALTH</option>\n            <option>SPORTS</option>\n            <option>CAMPING</option>\n            <option>TRAVELING</option>\n          </select>\n  </div>\n  <div class=\"form-group\">\n      <span class=\"info\">Enter Coupon Message</span>\n    <input type=\"text\" name=\"message\" [(ngModel)]=\"couponAdd.message\" placeholder=\"Enter message\"><br>\n  </div>\n  <div class=\"form-group\">\n      <span class=\"info\">Enter Coupon Price</span>\n    <input type=\"number\" step=\"1\" min=\"0\" ng-pattern=\"integerval\" name=\"price\" [(ngModel)]=\"couponAdd.price\" placeholder=\"Enter price\"><br>\n  </div>\n  <div class=\"form-group\">\n      <span class=\"info\">Enter Image URL</span>\n    <input type=\"text\" name=\"image\" [(ngModel)]=\"couponAdd.image\" placeholder=\"Enter image URL\"><br>\n    <figure class=\"figure\" >\n    <img [src]=couponAdd.image class=\"figure-img img-fluid rounded\" width=\"200\" alt=\"\">\n  </figure>\n  </div>\n  <button (click)=\"addCoupon(createForm)\" ng-disabled=\"entityPropertyForm.$pristine || entityPropertyForm.$touched\"\n    type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\">Add Coupon</button>\n  <br>\n  <br>\n</form>"

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
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/Coupon */ "./src/app/common/Coupon.ts");
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
        this.couponAdd = new _common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this.today = new Date();
        var d = new Date();
        this.couponAdd.startDate = new Date();
        this.couponAdd.endDate = this.addDays(d, 30);
        // now the coupons is in the service
        this.coupon = _dataService.coupons;
    }
    CreateCouponComponent.prototype.addDays = function (date, days) {
        date.setDate(date.getDate() + days);
        return date;
    };
    CreateCouponComponent.prototype.addCoupon = function (createForm) {
        console.log("Form Value is: ", createForm.value);
        //this.company.push(this.companyAdd);
        //this.companyAdd = new Company(0,"","","");
        this._dataService.addCouponService(this.couponAdd);
        //this.lastCreatedCompany = this.companyAdd.id;
        createForm.resetForm();
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

/***/ "./src/app/components/get-all-companies/get-all-companies.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n\r\ntd,th {\r\n    text-align: center;\r\n  }\r\n\r\ntable#companyTable {\r\n        display: table;\r\n        border-collapse: separate;\r\n        border-spacing: 2px;\r\n        text-align: center;\r\n  }\r\n\r\ntable.blueTable {\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntable.blueTable input{\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n  width: 100%; padding:8px;\r\n}\r\n\r\ntable.blueTable td, table.blueTable th {\r\n  border: 1px solid #AAAAAA;\r\n  padding: 3px 2px;\r\n}\r\n\r\ntable.blueTable tbody td {\r\n  vertical-align:middle;\r\n  font-size: 15px;\r\n}\r\n\r\n.table-striped>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th {\r\n  background-color: #ffffff;\r\n}\r\n\r\ntable.blueTable tr:nth-child(even) {\r\n  background: rgb(241, 248, 253);\r\n}\r\n\r\ntable.blueTable thead {\r\n  background: #1C6EA4;\r\n  background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\r\n  border-bottom: 2px solid #444444;\r\n}\r\n\r\ntable.blueTable thead th {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  border-left: 2px solid #D0E4F5;\r\n}\r\n\r\ntable.blueTable thead th:first-child {\r\n  border-left: none;\r\n}\r\n\r\ntable.blueTable tfoot {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  background: #D0E4F5;\r\n  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\r\n  border-top: 2px solid #444444;\r\n}\r\n\r\ntable.blueTable tfoot td {\r\n  font-size: 14px;\r\n}\r\n\r\ntable.blueTable tfoot .links {\r\n  text-align: center;\r\n}\r\n\r\ntable.blueTable tfoot .links a{\r\n  display: inline-block;\r\n  background: #1C6EA4;\r\n  color: #FFFFFF;\r\n  padding: 2px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.gly-spin {\r\n  -webkit-animation: spin 2s infinite linear;\r\n  animation: spin 2s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n.gly-rotate-90 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.gly-rotate-180 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.gly-rotate-270 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n\r\n.gly-flip-horizontal {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\r\n  -webkit-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n\r\n.gly-flip-vertical {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\r\n  -webkit-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n\r\n.button {\r\n  background-color: rgb(124, 179, 219);\r\n  border-radius: 10px;\r\n  border: none;\r\n  color: rgb(2, 0, 0);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.glow-button:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n\r\n.button:hover {\r\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n}\r\n\r\n*:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n#button:active {\r\n  vertical-align: top;\r\n  padding-top: 8px;\r\n  color: rgb(68, 55, 55);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n\r\n.one a {\r\n  text-decoration: none;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n#myInput {\r\n  background-image: url('/company/css/searchicon.png');\r\n  background-position: 10px 10px;\r\n  background-repeat: no-repeat;\r\n  font-size: 16px;\r\n  padding: 12px 20px 12px 40px;\r\n  border: 1px solid #ddd;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.searchTerm {\r\n  float: left;\r\n  width: 100%;\r\n  border: 3px solid #00B4CC;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  color: #9DBFAF;\r\n}\r\n\r\n.searchTerm:focus{\r\n  color: #00B4CC;\r\n}\r\n\r\n.searchButton {\r\n  position: absolute;  \r\n  right: -50px;\r\n  width: 40px;\r\n  height: 36px;\r\n  border: 1px solid #00B4CC;\r\n  background: #00B4CC;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n\r\n.cp-text{ color: rgba(0,0,0,.7); text-shadow: 0 1px rgba(255, 255, 255, 0.1);}\r\n"

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h2 style=\"font-size:10vw\" style=\"font-family:Times New Roman\">All Companies</h2>\n\n<div class=\"wrap\">\n    <div class=\"search\">\n  <input class=searchTerm type=\"text\" id=\"search-bar\" onkeyup=\"myFunction()\" placeholder=\"Search for Coupons..\" title=\"Type in a name\">\n   </div>\n</div>\n\n<table id=\"companyTable\" border=\"1\" class=\"blueTable table table-striped table-bordered table-sm\" cellspacing=\"0\" width=\"100%\">\n  <tr>\n    <th onclick=\"sortTable(0)\" class=\"th-sm\">Id\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th onclick=\"sortTable(1)\" class=\"th-sm\">Title\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th onclick=\"sortTable(2)\" class=\"th-sm\">Start Date\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n    <th onclick=\"sortTable(3)\" class=\"th-sm\">End Date\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n    </th>\n  <th onclick=\"sortTable(3)\" class=\"th-sm\">Amount\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n  </th>    \n  <th onclick=\"sortTable(3)\" class=\"th-sm\">Type\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n  </th>    \n  <th onclick=\"sortTable(3)\" class=\"th-sm\">Message\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n  </th>    \n  <th onclick=\"sortTable(3)\" class=\"th-sm\">Price\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n  </th>\n  <th onclick=\"sortTable(3)\" class=\"th-sm\">Image\n    <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>      \n</th>\n    <th>\n      Update\n    </th>\n    <th>\n      Delete\n    </th>\n  </tr>\n  <!-- foreach Coupon coupon : coupons-->\n  <tr *ngFor=\"let coup of coupons; let i = index\">\n    <td>{{coup.id}}</td>\n    <td>{{coup.title}}</td>\n    <td>\n      <input type=\"date\" [(ngModel)]=\"coup.startDate\" />\n    </td>\n    <td>\n      <input type=\"date\" [(ngModel)]=\"coup.endDate\" />\n    </td>\n    <td>\n      <input type=\"number\" [(ngModel)]=\"coup.amount\" />\n    </td>\n    <td>\n      <input type=\"text\" [(ngModel)]=\"coup.type\" />\n    </td>\n    <td>\n      <input type=\"text\" [(ngModel)]=\"coup.message\" />\n    </td>\n    <td>\n      <input type=\"number\" [(ngModel)]=\"coup.price\" />\n    </td>\n    <td>\n      <input type=\"text\" [(ngModel)]=\"coup.image\" />\n    </td>\n    <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"updateCoupon(coup.id,coup.title,coup.startDate,coup.endDate,coup.amount,coup.type,coup.message,coup.price,coup.image)\">\n        <i class=\"fa fa-refresh fa-spin\" style=\"font-size:20px;\"></i>\n      </button>\n    </td>\n    <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"deleteCoupon(coup.id)\">&#x2718;</button></td>\n  </tr>\n</table>\n<br>\n<br>\n\n<br>\n<p>\n    <span class=\"cp-text\" style=\"color:black\">\n        © Copyright 2018 Assaf Ben David. All rights reserved.\n      </span>\n <!-- {{companyAdd | json}}-->\n</p>\n"

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
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Coupon */ "./src/app/common/Coupon.ts");
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
        this.coup = new _common_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this.coupons = [];
        this.coupons = _dataService.coupons;
        this.getAllCoupons();
        // now the company is in the service
    }
    GetAllCompaniesComponent.prototype.deleteCoupon = function (id) {
        console.log(id);
        this._dataService.removeCouponService(id);
        this.getAllCoupons();
    };
    GetAllCompaniesComponent.prototype.updateCoupon = function (id, title, startDate, endDate, amount, type, message, price, image) {
        console.log(id, title, startDate, endDate, amount, type, message, price, image);
        // let companyUpd = this._dataService.getCompanyByIdService(id)
        this.coup.id = id;
        this.coup.title = title;
        this.coup.startDate = startDate;
        this.coup.endDate = endDate;
        this.coup.amount = amount;
        this.coup.type = type;
        this.coup.message = message;
        this.coup.price = price;
        this.coup.image = image;
        console.log("Coupon Instance from function: " + this.coup);
        this._dataService.updateCouponService(id, this.coup);
    };
    GetAllCompaniesComponent.prototype.getAllCoupons = function () {
        console.log('in');
        this._dataService.getAllCouponsService();
        console.log(this.coupons);
    };
    GetAllCompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-companies',
            template: __webpack_require__(/*! ./get-all-companies.component.html */ "./src/app/components/get-all-companies/get-all-companies.component.html"),
            styles: [__webpack_require__(/*! ./get-all-companies.component.css */ "./src/app/components/get-all-companies/get-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], GetAllCompaniesComponent);
    return GetAllCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/get-all-coupons/get-all-coupons.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/get-all-coupons/get-all-coupons.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n\r\ntd,th {\r\n    text-align: center;\r\n  }\r\n\r\ntable#companyTable {\r\n        display: table;\r\n        border-collapse: separate;\r\n        /* border-spacing: 2px; */\r\n        text-align: center;\r\n  }\r\n\r\ntable.blueTable {\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntable.blueTable input{\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n  width: 100%; padding:8px;\r\n}\r\n\r\ntable.blueTable td, table.blueTable th {\r\n  border: 1px solid #AAAAAA;\r\n  padding: 3px 2px;\r\n}\r\n\r\ntable.blueTable tbody td {\r\n  vertical-align:middle;\r\n  font-size: 15px;\r\n}\r\n\r\n.table-striped>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th {\r\n  background-color: #ffffff;\r\n}\r\n\r\ntable.blueTable tr:nth-child(even) {\r\n  background: rgb(241, 248, 253);\r\n}\r\n\r\ntable.blueTable thead {\r\n  background: #1C6EA4;\r\n  background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\r\n  border-bottom: 2px solid #444444;\r\n}\r\n\r\ntable.blueTable thead th {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  border-left: 2px solid #D0E4F5;\r\n}\r\n\r\ntable.blueTable thead th:first-child {\r\n  border-left: none;\r\n}\r\n\r\ntable.blueTable tfoot {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  background: #D0E4F5;\r\n  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\r\n  border-top: 2px solid #444444;\r\n}\r\n\r\ntable.blueTable tfoot td {\r\n  font-size: 14px;\r\n}\r\n\r\ntable.blueTable tfoot .links {\r\n  text-align: center;\r\n}\r\n\r\ntable.blueTable tfoot .links a{\r\n  display: inline-block;\r\n  background: #1C6EA4;\r\n  color: #FFFFFF;\r\n  padding: 2px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.gly-spin {\r\n  -webkit-animation: spin 2s infinite linear;\r\n  animation: spin 2s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n.gly-rotate-90 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.gly-rotate-180 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.gly-rotate-270 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n\r\n.gly-flip-horizontal {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\r\n  -webkit-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n\r\n.gly-flip-vertical {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\r\n  -webkit-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n\r\n.button {\r\n  background-color: rgb(124, 179, 219);\r\n  border-radius: 10px;\r\n  border: none;\r\n  color: rgb(2, 0, 0);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.glow-button:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n\r\n.button:hover {\r\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n}\r\n\r\n*:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n#button:active {\r\n  vertical-align: top;\r\n  padding-top: 8px;\r\n  color: rgb(68, 55, 55);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n\r\n.one a {\r\n  text-decoration: none;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n#myInput {\r\n  background-image: url('/company/css/searchicon.png');\r\n  background-position: 10px 10px;\r\n  background-repeat: no-repeat;\r\n  font-size: 16px;\r\n  padding: 12px 20px 12px 40px;\r\n  border: 1px solid #ddd;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.search {\r\n\r\n}\r\n\r\n.searchTerm {\r\n  float: left;\r\n  width: 100%;\r\n  border: 3px solid #00B4CC;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  color: #9DBFAF;\r\n}\r\n\r\n.searchTerm:focus{\r\n  color: #00B4CC;\r\n}\r\n\r\n.searchButton {\r\n  position: absolute;  \r\n  right: -50px;\r\n  width: 40px;\r\n  height: 36px;\r\n  border: 1px solid #00B4CC;\r\n  background: #00B4CC;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n\r\n[type=\"date\"] {\r\n  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;\r\n}\r\n\r\n[type=\"date\"]::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\n[type=\"date\"]::-webkit-calendar-picker-indicator {\r\n  opacity: 0;\r\n}\r\n\r\n/* custom styles */\r\n\r\nbody {\r\n  padding: 4em;\r\n  background: #e5e5e5;\r\n  font: 13px/1.4 Geneva, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n}\r\n\r\ninput {\r\n  border: 1px solid #c4c4c4;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  padding: 3px 5px;\r\n  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n  width: 190px;\r\n}\r\n\r\ntextarea{\r\n  border: 1px solid #c4c4c4;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  padding: 3px 5px;\r\n  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n  width: 100px;\r\n  height: 200px;\r\n  resize: vertical;\r\n  overflow: auto;\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  text-align: center;\r\n  text-align-last:center;\r\n  border-collapse: collapse;\r\n}\r\n\r\nselect{\r\n  border: 1px solid #c4c4c4;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  padding: 3px 5px;\r\n  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n  width: 140px;\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  text-align: center;\r\n  text-align-last:center;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.cp-text{ color: rgba(0,0,0,.7); text-shadow: 0 1px rgba(255, 255, 255, 0.1);}\r\n"

/***/ }),

/***/ "./src/app/components/get-all-coupons/get-all-coupons.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/get-all-coupons/get-all-coupons.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h2 style=\"font-size:10vw\" style=\"font-family:Times New Roman\">All Coupons</h2>\n\n<div class=\"wrap\">\n  <div class=\"search\">\n    <input class=searchTerm type=\"text\" id=\"search-bar\" onkeyup=\"myFunction()\" placeholder=\"Search for Coupons title..\"\n      title=\"Type in a name\">\n  </div>\n</div>\n\n<table id=\"companyTable\" border=\"1\" class=\"blueTable table table-striped table-bordered table-sm\" cellspacing=\"0\" width=\"100%\">\n  <tr>\n    <th onclick=\"sortTable(0)\" class=\"th-sm\" style=\"width: 10px\">Id\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n    </th>\n    <th onclick=\"sortTable(1)\" class=\"th-sm\">Title\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n    </th>\n    <th onclick=\"sortTable(2)\" class=\"th-sm\" style=\"width: 20px\">start Date\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n    </th>\n    <th onclick=\"sortTable(3)\" class=\"th-sm\" style=\"width: 20px\">end Date\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n    </th>\n    <th onclick=\"sortTable(4)\" class=\"th-sm\" style=\"width: 30px\">amount\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n    </th>\n    <th onclick=\"sortTable(5)\" class=\"th-sm\">type\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n    </th>\n    <th onclick=\"sortTable(6)\" class=\"th-sm\">message\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n    </th>\n    <th onclick=\"sortTable(7)\" class=\"th-sm\" style=\"width: 70px\">price\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n    </th>\n    <th onclick=\"sortTable(8)\" class=\"th-sm\">image\n      <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n    </th>\n    <th>\n      Update\n    </th>\n    <th>\n      Delete\n    </th>\n  </tr>\n  <!-- foreach Coupon coupon : coupons-->\n  <tr *ngFor=\"let coup of coupon; let i = index\">\n    <td>{{coup.id}}</td>\n    <td>{{coup.title}}</td>\n    <td>{{coup.startDate}}\n      <!-- <input id=\"startDate\" name=\"startDate\" type=\"date\" [(ngModel)]=\"coup.startDate\"/> -->\n    </td>\n    <td>\n      <input id=\"endDate\" name=\"endDate\" type=\"date\" [(ngModel)]=\"coup.endDate\"/>\n    </td>\n    <td>{{coup.amount}}\n      <!-- <input type=\"number\" [(ngModel)]=\"coup.amount\" /> -->\n    </td>\n    <td> {{coup.type}}\n    <!-- <select required type=\"text\" name=\"type\" [(ngModel)]=\"coup.type\" placeholder=\"Enter type\">\n        <option value=\"\">Choose Type</option>\n        <option>RESTAURANTS</option>\n        <option>ELECTRICITY</option>\n        <option>FOOD</option>\n        <option>HEALTH</option>\n        <option>SPORTS</option>\n        <option>CAMPING</option>\n        <option>TRAVELING</option>\n      </select> -->\n    </td>\n    <td>{{coup.message}}\n      <!-- <textarea type=\"text\" [(ngModel)]=\"coup.message\"></textarea> -->\n    </td>\n    <td>\n      <input type=\"number\" step=\"1\" min=\"0\" [(ngModel)]=\"coup.price\" />\n    </td>\n    <td>\n      <input disabled type=\"text\" [(ngModel)]=\"coup.image\" />\n      <figure class=\"figure\" >\n          <img [src]=coup.image class=\"figure-img img-fluid rounded\" width=\"200\">\n        </figure>\n    </td>\n    <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"updateCoupon(coup.id,coup.title,coup.startDate,coup.endDate,coup.amount,coup.type,coup.message,coup.price,coup.image)\">\n        <i class=\"fa fa-refresh fa-spin\" style=\"font-size:20px;\"></i>\n      </button>\n    </td>\n    <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"deleteCoupon(coup.id)\">&#x2718;</button></td>\n  </tr>\n</table>\n<br>\n<br>\n\n<br>\n<p>\n    <span class=\"cp-text\" style=\"color:black\">\n        © Copyright 2018 Assaf Ben David. All rights reserved.\n      </span>\n  <!-- {{companyAdd | json}}-->\n</p>"

/***/ }),

/***/ "./src/app/components/get-all-coupons/get-all-coupons.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/get-all-coupons/get-all-coupons.component.ts ***!
  \*************************************************************************/
/*! exports provided: GetAllCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsComponent", function() { return GetAllCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/Coupon */ "./src/app/common/Coupon.ts");
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



var GetAllCouponsComponent = /** @class */ (function () {
    function GetAllCouponsComponent(_dataService) {
        this._dataService = _dataService;
        this.couponAdd = new _common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this.coup = new _common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this.coupon = [];
        this.coupon = _dataService.coupons;
        this.getAllCoupons();
        // now the company is in the service
    }
    GetAllCouponsComponent.prototype.deleteCoupon = function (id) {
        console.log(id);
        this._dataService.removeCouponService(id);
        this.getAllCoupons();
        //this.company.splice(i, 1);
    };
    GetAllCouponsComponent.prototype.updateCoupon = function (id, title, startDate, endDate, amount, type, message, price, image) {
        console.log(id, title, startDate, endDate, amount, type, message, price, image);
        // let companyUpd = this._dataService.getCompanyByIdService(id)
        this.coup.id = id;
        this.coup.title = title;
        this.coup.startDate = startDate;
        this.coup.endDate = endDate;
        this.coup.amount = amount;
        this.coup.type = type;
        this.coup.message = message;
        this.coup.price = price;
        this.coup.image = image;
        console.log("Coupn Instance from function: " + this.coup);
        this._dataService.updateCouponService(id, this.coup);
    };
    GetAllCouponsComponent.prototype.getAllCoupons = function () {
        console.log('in');
        this._dataService.getAllCouponsService();
        console.log(this.coupon);
    };
    GetAllCouponsComponent.prototype.ngOnInit = function () {
    };
    GetAllCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-coupons',
            template: __webpack_require__(/*! ./get-all-coupons.component.html */ "./src/app/components/get-all-coupons/get-all-coupons.component.html"),
            styles: [__webpack_require__(/*! ./get-all-coupons.component.css */ "./src/app/components/get-all-coupons/get-all-coupons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])
    ], GetAllCouponsComponent);
    return GetAllCouponsComponent;
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

module.exports = "<form #createForm=\"ngForm\">\n<br>\n<font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Get Company</font>\n\n\n\n    <br>\n        <Span style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Search By Coupon ID </Span>\n        <div class=\"form-group\">\n            <div *ngIf=\"fullName?.touched\">\n                <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n                    <font color=\"red\">ID is Required</font>\n                </div>\n            </div>\n            <input required class=disabled id=\"myInput\" value=\"\" type=\"number\" [(ngModel)]=\"coupon.id\" #fullName=\"ngModel\" name=\"idtxt\" id=\"idLabel\"><br>\n            <button (click)=\"getCouponById(coupon.id)\" \n            type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\" placeholder=\"Enter Id\">Get\n            Company By Id</button>\n        </div>\n    </form>\n    <form>\n    <button class=button (click)=\"getAllCoupons()\"  type=\"submit\"\n        class=\"button glow-button btn btn-default\">Get All Coupons</button>\n    <br>\n</form>"

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
        this.coupon = [];
        this.coupon = _dataService.coupons;
        this.getAllCoupons();
        // now the company is in the service
    }
    GetCompanyComponent.prototype.getAllCoupons = function () {
        console.log('in');
        this._dataService.getAllCouponsService();
        console.log(this.coupon);
    };
    GetCompanyComponent.prototype.getCouponById = function (id) {
        console.log(id);
        this._dataService.getCouponByIdService(id);
        console.log(this.coupon);
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

/***/ "./src/app/components/get-coupon-by-type/get-coupon-by-type.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/get-coupon-by-type/get-coupon-by-type.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:required {\r\n    border-width: 3px;\r\n  }\r\n\r\ninput { \r\n    text-align: center; \r\n}\r\n\r\n.button {\r\n\tbox-shadow: 0px 1px 0px 0px #fff6af;\r\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\r\n\tbackground-color:#ffec64;\r\n\tborder-radius:6px;\r\n\t/* border:1px solid #ffaa22; */\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#333333;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffee66;\r\n}\r\n\r\n.myButton:hover {\r\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\r\n\tbackground-color:#ffab23;\r\n}\r\n\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\ninput:invalid {\r\n}\r\n\r\nform:invalid {\r\n}\r\n\r\ninput:valid {\r\nborder-color: #ddffdd;\r\n}\r\n\r\nform:valid {\r\n/* border: 2px solid #ddffdd; */\r\n}\r\n\r\ninput:required {\r\nborder-width: 3px;\r\n}\r\n\r\ninput:required:invalid {\r\n}\r\n\r\n.glow-button:hover {\r\n\t\tcolor: rgba(255, 255, 255, 1);\r\n\t\tbox-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n\t}\r\n\r\n/* Clear button styles\r\n--------------------------------------------- */\r\n\r\n::-ms-clear {\r\n\tdisplay: none;\r\n  }\r\n\r\n.form-control-clear {\r\n\tz-index: 10;\r\n\tpointer-events: auto;\r\n\tcursor: pointer;\r\n  }\r\n\r\n/* Custom page CSS (Not required)\r\n  --------------------------------------------- */\r\n\r\n#exampleContainer {\r\n\tpadding: 50px;\r\n\t}\r\n\r\n.glow-button:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/get-coupon-by-type/get-coupon-by-type.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/get-coupon-by-type/get-coupon-by-type.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #createForm=\"ngForm\">\n  <br>\n  <font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Get Coupon</font>\n  \n  \n  \n      <br>\n          <Span style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Search By Type </Span>\n          <div class=\"form-group\">\n              <div *ngIf=\"fullName?.touched\">\n                  <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n                      <font color=\"red\">type is Required</font>\n                  </div>\n              </div>\n              <input required class=disabled id=\"myInput\" value=\"\" type=\"text\" [(ngModel)]=\"coupon.type\" #fullName=\"ngModel\" name=\"idtype\" id=\"idLabel\"><br>\n              <button (click)=\"getCouponByType(coupon.type)\" \n              type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\" placeholder=\"Enter Type\">Get\n              Coupon By Type</button>\n          </div>\n      </form>\n      <form>\n      <button class=button (click)=\"getAllCoupons()\"  type=\"submit\"\n          class=\"button glow-button btn btn-default\">Get All Coupons</button>\n      <br>\n  </form>"

/***/ }),

/***/ "./src/app/components/get-coupon-by-type/get-coupon-by-type.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-coupon-by-type/get-coupon-by-type.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GetCouponByTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponByTypeComponent", function() { return GetCouponByTypeComponent; });
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


var GetCouponByTypeComponent = /** @class */ (function () {
    function GetCouponByTypeComponent(_dataService) {
        this._dataService = _dataService;
        this.coupon = [];
        this.coupon = _dataService.coupons;
        this.getAllCoupons();
        // now the company is in the service
    }
    GetCouponByTypeComponent.prototype.getAllCoupons = function () {
        console.log('in');
        this._dataService.getAllCouponsService();
        console.log(this.coupon);
    };
    // public getCouponById(id:number){
    //   console.log(id);
    //   this._dataService.getCouponByIdService(id);   
    //    console.log(this.coupon);
    // }
    GetCouponByTypeComponent.prototype.getCouponByType = function (type) {
        console.log(type);
        this._dataService.getCouponByTypeService(type);
        console.log(this.coupon);
    };
    GetCouponByTypeComponent.prototype.ngOnInit = function () {
    };
    GetCouponByTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-coupon-by-type',
            template: __webpack_require__(/*! ./get-coupon-by-type.component.html */ "./src/app/components/get-coupon-by-type/get-coupon-by-type.component.html"),
            styles: [__webpack_require__(/*! ./get-coupon-by-type.component.css */ "./src/app/components/get-coupon-by-type/get-coupon-by-type.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], GetCouponByTypeComponent);
    return GetCouponByTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/get-coupon/get-coupon.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/get-coupon/get-coupon.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:required {\r\n    border-width: 3px;\r\n  }\r\n\r\ninput { \r\n    text-align: center; \r\n}\r\n\r\n.button {\r\n\tbox-shadow: 0px 1px 0px 0px #fff6af;\r\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\r\n\tbackground-color:#ffec64;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #ffaa22;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#333333;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffee66;\r\n}\r\n\r\n.myButton:hover {\r\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\r\n\tbackground-color:#ffab23;\r\n}\r\n\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\ninput:invalid {\r\n}\r\n\r\nform:invalid {\r\n}\r\n\r\ninput:valid {\r\nborder-color: #ddffdd;\r\n}\r\n\r\nform:valid {\r\n/* border: 2px solid #ddffdd; */\r\n}\r\n\r\ninput:required {\r\nborder-width: 3px;\r\n}\r\n\r\ninput:required:invalid {\r\n}\r\n\r\n.glow-button:hover {\r\n\t\tcolor: rgba(255, 255, 255, 1);\r\n\t\tbox-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n\t}\r\n\r\n/* Clear button styles\r\n--------------------------------------------- */\r\n\r\n::-ms-clear {\r\n\tdisplay: none;\r\n  }\r\n\r\n.form-control-clear {\r\n\tz-index: 10;\r\n\tpointer-events: auto;\r\n\tcursor: pointer;\r\n  }\r\n\r\n/* Custom page CSS (Not required)\r\n  --------------------------------------------- */\r\n\r\n#exampleContainer {\r\n\tpadding: 50px;\r\n\t}\r\n\r\n.glow-button:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/get-coupon/get-coupon.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/get-coupon/get-coupon.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #createForm=\"ngForm\">\n  <br>\n  <font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Get Coupon</font>\n  \n  \n  \n      <br>\n          <Span style=\"font-size:10vw\" style=\"font-family:Times New Roman\">Search By Coupon ID </Span>\n          <div class=\"form-group\">\n              <div *ngIf=\"fullName?.touched\">\n                  <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n                      <font color=\"red\">ID is Required</font>\n                  </div>\n              </div>\n              <input required class=disabled id=\"myInput\" value=\"\" type=\"number\" [(ngModel)]=\"coupon.id\" #fullName=\"ngModel\" name=\"idtxt\" id=\"idLabel\"><br>\n              <button (click)=\"getCouponById(coupon.id)\" \n              type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\" placeholder=\"Enter Id\">Get\n              Coupon By Id</button>\n          </div>\n      </form>\n      <form>\n      <button class=button (click)=\"getAllCoupons()\"  type=\"submit\"\n          class=\"button glow-button btn btn-default\">Get All Coupons</button>\n      <br>\n  </form>"

/***/ }),

/***/ "./src/app/components/get-coupon/get-coupon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/get-coupon/get-coupon.component.ts ***!
  \***************************************************************/
/*! exports provided: GetCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponComponent", function() { return GetCouponComponent; });
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


var GetCouponComponent = /** @class */ (function () {
    function GetCouponComponent(_dataService) {
        this._dataService = _dataService;
        this.coupon = [];
        this.coupon = _dataService.coupons;
        this.getAllCoupons();
        // now the company is in the service
    }
    GetCouponComponent.prototype.getAllCoupons = function () {
        console.log('in');
        this._dataService.getAllCouponsService();
        console.log(this.coupon);
    };
    GetCouponComponent.prototype.getCouponById = function (id) {
        console.log(id);
        this._dataService.getCouponByIdService(id);
        console.log(this.coupon);
    };
    GetCouponComponent.prototype.ngOnInit = function () {
    };
    GetCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-coupon',
            template: __webpack_require__(/*! ./get-coupon.component.html */ "./src/app/components/get-coupon/get-coupon.component.html"),
            styles: [__webpack_require__(/*! ./get-coupon.component.css */ "./src/app/components/get-coupon/get-coupon.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], GetCouponComponent);
    return GetCouponComponent;
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function SharedDataService(http, router) {
        this.http = http;
        this.router = router;
        this.coupons = [];
        this.companies = [];
    }
    SharedDataService.prototype.logout = function (request, response) {
        this.http.post('http://localhost:8080/companyservice/logout', request, response).subscribe(function (resp) {
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
    SharedDataService.prototype.addCouponService = function (Coupon) {
        var _this = this;
        var title = Coupon.title;
        this.http.post('http://localhost:8080/companyservice/createcoupon', Coupon).subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Coupon Created!', ' Coupon has been created.', 'success');
            _this.getAllCouponsService();
        }, 
        //Error handeling
        function (err) {
            if (err.status == 409) {
                console.error('Error while create Coupon , there is a coupon in this name' + title + ' , Choose another name !', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    type: 'error',
                    title: 'Cannot Create coupon!',
                    text: 'A coupon with the same name : ' + title + ' already exist, choose another name ',
                    animation: true
                });
            }
            else {
                console.error('Error while add Coupon , Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.getCouponByIdService = function (id) {
        var _this = this;
        this.http.get('http://localhost:8080/companyservice/getcoupon/' + id).subscribe(function (resp) {
            //Drop all coupons from the coupons array
            _this.coupons.length = 0;
            //Return one Coupon by ID from the API service
            _this.coupons.push(resp.json());
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Filter Coupon was Successful !', ' Managed to get Coupon by Id.' + id, 'success');
        }, 
        //Error handeling
        function (err) {
            if (err.status == 404) {
                console.error('Error while get Coupon By Type, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    type: 'error',
                    title: 'Cannot get coupons!',
                    text: 'Did not find any Purchased coupon by id ' + id,
                    animation: true
                });
            }
            else {
                console.error('Error while Filter Coupon, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.getCouponByTypeService = function (type) {
        var _this = this;
        //Send the get Coupon By Type API to the Service
        this.http.get('http://localhost:8080/companyservice/getcouponbytype/' + type).subscribe(function (resp) {
            var temp = resp.json();
            _this.coupons.length = 0;
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var item = temp_1[_i];
                _this.coupons.push(item);
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Filter Coupon was Successful !', ' Managed to get Coupons by Type.', 'success');
        }, 
        //Error handeling
        function (err) {
            if (err.status == 500) {
                console.error('Error while get Coupon By Type, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    type: 'error',
                    title: 'Cannot get coupons!',
                    text: 'Did not find any Purchased coupon by id ' + type,
                    animation: true
                });
            }
            else {
                console.error('Error while Filter Coupon, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.updateCouponService = function (id, coupons) {
        var _this = this;
        //Send the Update API to the Service
        var url = 'http://localhost:8080/companyservice/updatecoupon/' + id;
        this.http.put(url, coupons).subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Updated!', ' Coupon has been updated.', 'success');
            //Reload all Coupons after delete Coupon action
            _this.getAllCouponsService();
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Deleting Coupon Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    SharedDataService.prototype.removeCouponService = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Coupon!',
            type: 'warning',
            showCancelButton: true,
            showLoaderOnConfirm: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            //If the User press Confirm button "Yes Delete it"
            if (result.value) {
                //Send the Delete API to the Service
                _this.http.delete('http://localhost:8080/companyservice/removecoupon/' + id).subscribe(function (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', ' Coupon has been deleted.', 'success');
                    //Reload all Coupons after delete Coupon action
                    _this.getAllCouponsService();
                }, 
                //Error handeling
                function (err) {
                    console.error('Error while Deleting Coupon Check you DB and Service!', err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
                });
                //If the User press Cancel button "No, keep it"
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Cancelled', 'Your Coupon is safe :)', 'error');
            }
        });
    };
    SharedDataService.prototype.getAllCouponsService = function () {
        var _this = this;
        this.http.get('http://localhost:8080/companyservice/getallcoupons').subscribe(function (resp) {
            //Create a temp coupons array
            var temp = resp.json();
            //drop all current coupons array
            _this.coupons.length = 0;
            //Build items into new temp array
            for (var _i = 0, temp_2 = temp; _i < temp_2.length; _i++) {
                var item = temp_2[_i];
                _this.coupons.push(item);
            }
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Deleting Coupon Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    SharedDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = __webpack_require__(/*! C:\angularjs\CSCompany\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map