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
/* harmony import */ var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/shared-data.service */ "./src/app/services/shared-data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_coupon_header_coupon_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/coupon-header/coupon-header.component */ "./src/app/components/coupon-header/coupon-header.component.ts");
/* harmony import */ var _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-coupon/create-coupon.component */ "./src/app/components/create-coupon/create-coupon.component.ts");
/* harmony import */ var _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/get-all-coupons/get-all-coupons.component */ "./src/app/components/get-all-coupons/get-all-coupons.component.ts");
/* harmony import */ var _components_get_coupon_get_coupon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/get-coupon/get-coupon.component */ "./src/app/components/get-coupon/get-coupon.component.ts");
/* harmony import */ var _components_get_coupon_by_type_get_coupon_by_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/get-coupon-by-type/get-coupon-by-type.component */ "./src/app/components/get-coupon-by-type/get-coupon-by-type.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
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
                _components_coupon_header_coupon_header_component__WEBPACK_IMPORTED_MODULE_8__["CouponHeaderComponent"],
                _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_9__["CreateCouponComponent"],
                _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_10__["GetAllCouponsComponent"],
                _components_get_coupon_get_coupon_component__WEBPACK_IMPORTED_MODULE_11__["GetCouponComponent"],
                _components_get_coupon_by_type_get_coupon_by_type_component__WEBPACK_IMPORTED_MODULE_12__["GetCouponByTypeComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_13__["CustomerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: "createcoupon",
                        component: _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_9__["CreateCouponComponent"],
                    },
                    {
                        path: "getallcoupons",
                        component: _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_10__["GetAllCouponsComponent"],
                    },
                    {
                        path: "customer",
                        component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_13__["CustomerComponent"],
                    },
                ])
            ],
            providers: [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"]],
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
    function Coupon(id, title, startDate, endDate, amount, type, message, price, image, purchased) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.type = type;
        this.message = message;
        this.price = price;
        this.image = image;
        this.purchased = purchased;
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

module.exports = "button:hover, h1:hover, a:hover ,select:hover{\r\n  background-color: rgb(255, 255, 255);\r\n  color: #000000;\r\n}\r\n.button{\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  color: #000000;\r\n  margin: 10px;\r\n  height: 40px;\r\n  border-radius:4px;border:1px solid #AAAAAA;\r\n  box-shadow:         inset 0 0 10px #000000;\r\n}\r\n.btn{\r\n    border: 1px solid rgb(99, 189, 250);\r\n    background-color: rgb(255, 255, 255);\r\n    color: #000000;\r\n    margin: 10px;\r\n    height: 40px;\r\n    padding:0.5em\r\n\r\n}\r\n.disabled  {\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(53, 50, 50);\r\n  color: #978e8e;\r\n  margin: 10px;\r\n  height: 40px;\r\n  border-radius:4px;border:1px solid rgb(51, 50, 50);\r\n  box-shadow:         inset 0 0 10px #3b3a3a;\r\n}\r\ninput{\r\n border: 1px solid rgb(99, 189, 250);\r\n background-color: rgb(255, 255, 255);\r\n width: 100%;\r\n text-align: center;\r\n border-collapse: collapse;\r\n width: 100%; padding:8px;\r\n   height: 40px;\r\n   margin: 10px;\r\n}\r\n/* *********************************\r\n           Variables\r\n  ********************************** */\r\nselect .lt { text-align:center; \r\n    text-align-last:center;\r\n    align-items: center;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0; left: 0; bottom: 0; right: 0;\r\n  }\r\nselect{\r\n    width:230px;\r\n    text-indent: 5px; \r\n    text-align-last:center;\r\n    dispaly:inline-block;\r\n    height:40px;\r\n    border-radius:0;\r\n    display:block;\r\n    margin:10px;\r\n    padding-left:0px;\r\n    border-radius:4px;border:1px solid #AAAAAA;\r\n    box-shadow:         inset 0 0 10px #000000;\r\n  }\r\nelement.style {\r\n    background-color: white;\r\n    }\r\n/* *********************************\r\n     Some Style Overrides on Bootstrap\r\n    ********************************** */\r\n.navbar-inverse {\r\n     background: rgba(62,195,246,0);\r\n    border-bottom: none;\r\n  }\r\n.navbar-inverse .navbar-toggle {\r\n    border: 1px solid #e3d9f3;\r\n    border-color: rgba(13, 10, 202, 0.7);\r\n  }\r\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\r\n     border-color: transparent;\r\n \r\n\r\n  }\r\n.navbar-inverse .navbar-nav > li > a {\r\n  color: black;\r\n    \r\n  \r\n  }\r\n.onclic {\r\n    color: #22F;\r\n}\r\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\r\n  color: #22F;\r\n  }\r\n/* *********************************\r\n             Toolbar Logo\r\n    ********************************** */\r\n.small-logo-container {\r\n      padding-top: navbar-height;\r\n      height: navbar-height;\r\n      overflow: hidden;\r\n    }\r\n.small-logo {\r\n    color: white;\r\n    font-size: 2.5em;\r\n    padding-bottom: small-logo-padding;\r\n  }\r\n/* *********************************\r\n             Big Logo\r\n    ********************************** */\r\n.navbar #logo:hover {\r\n    background:#ed0121;\r\n    transition:all 0.4s;\r\n    \r\n  }\r\n.navbar-inverse .navbar-nav>li>a {\r\n      transition:all 0.4s;\r\n      color:white;\r\n      font-weight:bold;\r\n  }\r\n.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>.active>a {\r\n      background:rgba(255,255,255,0.5);\r\n      color:white;\r\n      text-shadow:none;\r\n  }\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- Fixed navbar -->\n   <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" style=\"height: 20px;\" style=\"background: rgb(34, 85, 105);\">\n    <div class=\"container\">\n      <div class=\"navbar-header\" style=\"height: 20px;\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" style=\"height: 20px;\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <div class=\"small-logo-container\">\n          <a routerLink=\"/customer\" class=\"small-logo\" href=\"#\" style=\"padding-top:15px;\">\n            Customer &nbsp;\n          </a>\n        </div>\n      </div>\n      \n      \n      <div class=\"navbar-header\">\n          <select ng-options=\"t.name group by t.type for t in type\" [(ngModel)]=\"typSelected\" (ngModelChange)='onTypeSelected($event)'>\n            <optgroup label=\"Get Coupons\">\n              <option [value]=\"1\">Get All Coupons</option>\n              <option [value]=\"2\">Get All purchased Coupons</option>\n              <option [value]=\"3\">Get All Unpurchased Coupons</option>\n            </optgroup>\n            <optgroup label=\"Get All Purchased Coupons By Type\">\n              <option [value]=\"4\">Restaurants</option>\n              <option [value]=\"5\">Electricity</option>\n              <option [value]=\"6\">Food</option>\n              <option [value]=\"7\">Health</option>\n              <option [value]=\"8\">Sports</option>\n              <option [value]=\"9\">Camping</option>\n              <option [value]=\"10\">Traveling</option>\n            </optgroup>\n          </select>\n        </div>\n    \n    <div class=\"navbar-header\">\n        <div class=\"navbar-header\">\n          <button class=\"button btn\" type=\"button\" (click)=\"getAllPurchasedCouponsByPrice(price)\" [disabled]=\"price === undefined || price === null || price === '' \">Get Purchased By Price</button> \n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Price\" [(ngModel)]=\"price\" style=\"width: 50px\">\n      </div>\n    \n      <div class=\"navbar-collapse collapse\">\n        <li class=\"nav navbar-nav selected\" style=\"right: 1000px;\" style=\"font-size: 15px;color: white\">\n          <app-coupon-header></app-coupon-header>\n        </li>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <!-- <li><a routerLink=\"/customer\" style=\"font-size: 15px;\" id=\"button\"  class=\"onclic\">Customer</a></li> -->\n          <li><a [routerLink]=\"\" (click)=\"logout()\" ><span class=\"glyphicon glyphicon-log-out\" style=\"font-size: 20px;\" style=\"bottom: 15px\"></span> Logout</a></li>\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n\n  <br>\n  <div class=\"container-fluid big-logo-row\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 big-logo-container\">\n          <h1 class=\"big-logo\"></h1>\n        </div><!--/.col-xs-12 -->\n      </div><!--/.row -->\n    </div><!--/.container -->\n  </div><!--/.container-fluid -->\n<app-customer></app-customer>\n\n  <router-outlet></router-outlet>\n"

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
    function AdminComponent(_dataService) {
        this._dataService = _dataService;
        this.coupon = [];
        this.coupon = _dataService.coupons;
    }
    AdminComponent.prototype.getAllCoupons = function () {
        console.log('in');
        this._dataService.getAllCouponsService();
        console.log(this.coupon);
    };
    AdminComponent.prototype.getallpurchasedcoupons = function () {
        this._dataService.getallpurchasedcouponsService();
    };
    AdminComponent.prototype.getallunpurchasedcoupons = function () {
        this._dataService.getallunpurchasedcouponsService();
    };
    AdminComponent.prototype.getAllPurchasedCouponsByType = function (type) {
        this._dataService.getAllPurchasedCouponsByTypeService(type);
    };
    AdminComponent.prototype.getAllPurchasedCouponsByPrice = function (price) {
        this._dataService.getAllPurchasedCouponsByPriceService(price);
    };
    AdminComponent.prototype.logout = function () {
        window.location.href = 'http://localhost:8080/';
        this._dataService.logout(this.request, this.response);
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.type = [
            { id: 1, type: "Get All Coupons", group: "Get Coupons" },
            { id: 2, type: "Get All purchased Coupons", group: "Get Coupons" },
            { id: 3, type: "Get All Unpurchased Coupons", group: "Get Coupons" },
            { id: 4, type: "RESTAURANTS", group: "Get Coupons By Type" },
            { id: 5, type: "ELECTRICITY", group: "Get Coupons By Type" },
            { id: 6, type: "FOOD", group: "Get Coupons By Type" },
            { id: 7, type: "HEALTH", group: "Get Coupons By Type" },
            { id: 8, type: "SPORTS", group: "Get Coupons By Type" },
            { id: 9, type: "CAMPING", group: "Get Coupons By Type" },
            { id: 10, type: "TRAVELING", group: "Get Coupons By Type" },
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
                this.getallpurchasedcoupons();
                this.price = null;
                break;
            }
            case "3": {
                this.getallunpurchasedcoupons();
                this.price = null;
                break;
            }
            case "4": {
                this.getAllPurchasedCouponsByType("RESTAURANTS");
                this.price = null;
                break;
            }
            case "5": {
                this.getAllPurchasedCouponsByType("ELECTRICITY");
                this.price = null;
                break;
            }
            case "6": {
                this.getAllPurchasedCouponsByType("FOOD");
                this.price = null;
                break;
            }
            case "7": {
                this.getAllPurchasedCouponsByType("HEALTH");
                this.price = null;
                break;
            }
            case "8": {
                this.getAllPurchasedCouponsByType("SPORTS");
                this.price = null;
                break;
            }
            case "9": {
                this.getAllPurchasedCouponsByType("CAMPING");
                this.price = null;
                break;
            }
            case "10": {
                this.getAllPurchasedCouponsByType("TRAVELING");
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
        __metadata("design:paramtypes", [_services_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["SharedDataService"]])
    ], AdminComponent);
    return AdminComponent;
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

module.exports = "<div align=\"center\">\n  <br>\n  <div class=\"clip-text clip-text_one\">&nbsp;&nbsp;&nbsp; Total Coupons: {{coupons.length}} &nbsp;</div>\n</div>"

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

/***/ "./src/app/components/create-coupon/create-coupon.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/create-coupon/create-coupon.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\ninput { \r\n    text-align: center; \r\n}\r\n.button {\r\n\tbox-shadow: 0px 1px 0px 0px #fff6af;\r\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\r\n\tbackground-color:#ffec64;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #ffaa22;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#333333;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffee66;\r\n}\r\n.myButton:hover {\r\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\r\n\tbackground-color:#ffab23;\r\n}\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\ninput:invalid {\r\n  }\r\nform:invalid {\r\n  }\r\ninput:valid {\r\n\tborder-color: #ddffdd;\r\n  }\r\nform:valid {\r\n\tborder: 2px solid #ddffdd;\r\n  }\r\ninput:required {\r\n\t\r\n\tborder-width: 3px;\r\n  }\r\ninput:required:invalid {\r\n\t}\r\n.glow-button:hover {\r\n\t\tcolor: rgba(255, 255, 255, 1);\r\n\t\tbox-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n\t}\r\n[type=\"date\"] {\r\n\t\tbackground:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;\r\n\t}\r\n[type=\"date\"]::-webkit-inner-spin-button {\r\n\t\tdisplay: none;\r\n\t}\r\n[type=\"date\"]::-webkit-calendar-picker-indicator {\r\n\t\topacity: 0;\r\n\t}\r\n/* custom styles */\r\nbody {\r\n\t\tpadding: 4em;\r\n\t\tbackground: #e5e5e5;\r\n\t\tfont: 13px/1.4 Geneva, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;\r\n\t}\r\nlabel {\r\n\t\tdisplay: block;\r\n\t}\r\ninput {\r\n\t\tborder: 1px solid #c4c4c4;\r\n\t\tborder-radius: 5px;\r\n\t\tbackground-color: #fff;\r\n\t\tpadding: 3px 5px;\r\n\t\tbox-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n\t\twidth: 190px;\r\n\t}\r\nselect{\r\n\t\tborder: 1px solid #c4c4c4;\r\n\t\tborder-radius: 5px;\r\n\t\tbackground-color: #fff;\r\n\t\tpadding: 3px 5px;\r\n\t\tbox-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n\t\twidth: 190px;\r\n\t\ttext-align: center;\r\n\t\ttext-align-last:center;\r\n\t}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/create-coupon/create-coupon.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-coupon/create-coupon.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<font size=\"+2\" style=\"font-size:10vw\" style=\"font-family:Times New Roman\">\n  Create New Coupon:\n</font>\n<hr>\n\n<form #createForm=\"ngForm\">\n  <div class=\"form-group\">\n    <!--ID : <input class=disabled type=\"number\" name=\"idtxt\" [(ngModel)]=\"companyAdd.id\" readonly><br>-->\n    <div *ngIf=\"fullName?.touched\">\n      <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n        <font color=\"red\">Name is Required</font>\n      </div>\n    </div>\n    <input type=\"text\" required name=\"coupnametxt\" [(ngModel)]=\"couponAdd.title\" #fullName=\"ngModel\" placeholder=\"Enter Title\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"date\" name=\"startDate\" [(ngModel)]=\"couponAdd.startDate\" placeholder=\"Enter start Date\" date-parser=\"shortDate\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"date\" name=\"endDate\" [(ngModel)]=\"couponAdd.endDate\" placeholder=\"Enter end Date\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"number\" step=\"1\" min=\"0\" ng-pattern=\"integerval\" name=\"amount\" [(ngModel)]=\"couponAdd.amount\" placeholder=\"Enter Amount\"><br>\n  </div>\n  <div class=\"form-group\">\n      <div *ngIf=\"fullName?.touched\">\n          <div *ngIf=\"fullName.errors?.required\" class=\"alert\">\n            <font color=\"red\">type is Required</font>\n          </div>\n        </div>\n          <select required type=\"text\" name=\"type\" [(ngModel)]=\"couponAdd.type\" placeholder=\"Enter type\">\n            <option value=\"\">Choose Type</option>\n            <option>RESTAURANTS</option>\n            <option>ELECTRICITY</option>\n            <option>FOOD</option>\n            <option>HEALTH</option>\n            <option>SPORTS</option>\n            <option>CAMPING</option>\n            <option>TRAVELING</option>\n          </select>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"message\" [(ngModel)]=\"couponAdd.message\" placeholder=\"Enter message\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"number\" step=\"1\" min=\"0\" ng-pattern=\"integerval\" name=\"price\" [(ngModel)]=\"couponAdd.price\" placeholder=\"Enter price\"><br>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"image\" [(ngModel)]=\"couponAdd.image\" placeholder=\"Enter image\"><br>\n    <figure class=\"figure\" >\n    <img [src]=couponAdd.image class=\"figure-img img-fluid rounded\" width=\"200\" alt=\"\">\n  </figure>\n  </div>\n  <button (click)=\"addCoupon(createForm)\" ng-disabled=\"entityPropertyForm.$pristine || entityPropertyForm.$touched\"\n    type=\"submit\" class=\"button glow-button btn btn-default\" [disabled]=\"createForm.invalid\">Add Coupon</button>\n  <br>\n  <br>\n</form>"

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
        // now the coupons is in the service
        this.coupon = _dataService.coupons;
    }
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

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css');\r\n\r\n.sidebarContent {\r\n    margin-bottom:10px;\r\n    min-height:150px;\r\n    background-color:white;\r\n    text-align:center;\r\n    font-size:large;\r\n}\r\n\r\n.mainContent {\r\n    margin-bottom:10px;\r\n    min-height:310px;\r\n    min-width:1250px;\r\n    background-color:white;\r\n    text-align:center;\r\n    font-size:large;\r\n}\r\n\r\n.button {\r\n   border-radius: 10px;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: Arial;\r\n    font-size: 20px;\r\n    padding: 5px 10px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n  }\r\n\r\n.glow-button:hover {\r\n    color: rgba(255, 255, 255, 1);\r\n    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n  }\r\n\r\n.button:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n*:focus {\r\n    outline: none;\r\n  }\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n.bt-glyphicons {\r\n\tmargin:0;\r\n\toverflow:hidden;\r\n}\r\n\r\n.bt-glyphicons-list {\r\n\tmargin: 0;\r\n\tpadding:0;\r\n\tlist-style:none;\r\n}\r\n\r\n.bt-glyphicons li {\r\n\tfloat:left;\r\n\twidth:25%;\r\n\theight:115px;\r\n\tpadding:10px;\r\n\tfont-size:14px;\r\n\tline-height:1.4;\r\n\ttext-align:center;\r\n\tborder:1px solid #fff;\r\n\tbackground-color:#f1f1f1;\r\n}\r\n\r\n.bt-glyphicons .glyphicon {\r\n\tmargin: 5px;\r\n\tfont-size:16px;\r\n}\r\n\r\n.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\r\n  float: left;\r\n  margin: -30px;\r\n  \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/customer/customer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: white\">\n\n  <router-outlet></router-outlet>\n\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n          <app-get-all-coupons></app-get-all-coupons>\n        </div>\n</div>"

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

/***/ "./src/app/components/get-all-coupons/get-all-coupons.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/get-all-coupons/get-all-coupons.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700');\r\n/* The ribbons */\r\n.corner-ribbon{\r\n  width: 200px;\r\n  background: rgb(41, 240, 107);\r\n  position: absolute;\r\n  top: 25px;\r\n  left: -50px;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  letter-spacing: 1px;\r\n  color: #f0f0f0;\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n  /* display:none; */\r\n}\r\n/* Custom styles */\r\n.corner-ribbon.shadow{\r\n  box-shadow: 0 0 3px rgba(0,0,0,.3);\r\n}\r\n/* Different positions*/\r\n.corner-ribbon.top-left{\r\n  top: 25px;\r\n  left: -50px;\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n}\r\n.corner-ribbon.top-right{\r\n  top: 25px;\r\n  right: -50px;\r\n  left: auto;\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n.corner-ribbon.bottom-left{\r\n  top: auto;\r\n  bottom: 25px;\r\n  left: -50px;\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n.corner-ribbon.bottom-right{\r\n  top: auto;\r\n  right: -50px;\r\n  bottom: 25px;\r\n  left: auto;\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n}\r\n/* align-content: center;\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n\r\n/* Colors */\r\n.corner-ribbon.white{background: #f0f0f0; color: #555;}\r\n.corner-ribbon.black{background: #333;}\r\n.corner-ribbon.grey{background: #999;}\r\n.corner-ribbon.blue{background: #39d;}\r\n.corner-ribbon.green{background: rgb(230, 19, 19);}\r\n.corner-ribbon.turquoise{background: #1b9;}\r\n.corner-ribbon.purple{background: #95b;}\r\n.corner-ribbon.red{background: #e43;}\r\n.corner-ribbon.orange{background: #e82;}\r\n.corner-ribbon.yellow{background: #ec0;}\r\ntd,th {\r\n    text-align: center;\r\n  }\r\ntable#companyTable {\r\n        display: table;\r\n        border-collapse: separate;\r\n        /* border-spacing: 2px; */\r\n        text-align: center;\r\n  }\r\ntable.blueTable {\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n}\r\ntable.blueTable input{\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100%;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n  width: 100%; padding:8px;\r\n}\r\ntable.blueTable td, table.blueTable th {\r\n  border: 1px solid #AAAAAA;\r\n  padding: 3px 2px;\r\n}\r\ntable.blueTable tbody td {\r\n  vertical-align:middle;\r\n  font-size: 15px;\r\n}\r\n.table-striped>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th {\r\n  background-color: #ffffff;\r\n}\r\ntable.blueTable tr:nth-child(even) {\r\n  background: rgb(241, 248, 253);\r\n}\r\ntable.blueTable thead {\r\n  background: #1C6EA4;\r\n  background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\r\n  border-bottom: 2px solid #444444;\r\n}\r\ntable.blueTable thead th {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  border-left: 2px solid #D0E4F5;\r\n}\r\ntable.blueTable thead th:first-child {\r\n  border-left: none;\r\n}\r\ntable.blueTable tfoot {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  background: #D0E4F5;\r\n  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\r\n  border-top: 2px solid #444444;\r\n}\r\ntable.blueTable tfoot td {\r\n  font-size: 14px;\r\n}\r\ntable.blueTable tfoot .links {\r\n  text-align: center;\r\n}\r\ntable.blueTable tfoot .links a{\r\n  display: inline-block;\r\n  background: #1C6EA4;\r\n  color: #FFFFFF;\r\n  padding: 2px 8px;\r\n  border-radius: 5px;\r\n}\r\n.gly-spin {\r\n  -webkit-animation: spin 2s infinite linear;\r\n  animation: spin 2s infinite linear;\r\n}\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n  }\r\n}\r\n@keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.gly-rotate-90 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.gly-rotate-180 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.gly-rotate-270 {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n.gly-flip-horizontal {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\r\n  -webkit-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n.gly-flip-vertical {\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\r\n  -webkit-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n.button {\r\n  background-color: rgb(124, 179, 219);\r\n  border-radius: 10px;\r\n  border: none;\r\n  color: rgb(2, 0, 0);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  background-color: Transparent;\r\n  background-repeat:no-repeat;\r\n  border: none;\r\n  cursor:pointer;\r\n  overflow: hidden;       \r\n}\r\n.glow-button:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n.button:hover {\r\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\r\n}\r\n*:focus {\r\n  outline: none;\r\n}\r\n.btn:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n#button:active {\r\n  vertical-align: top;\r\n  padding-top: 8px;\r\n  color: rgb(68, 55, 55);\r\n  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);\r\n}\r\n.one a {\r\n  text-decoration: none;\r\n}\r\n@-webkit-keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n@keyframes shake {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-1px, 0, 0);\r\n            transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-4px, 0, 0);\r\n            transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n            transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n#myInput {\r\n  background-image: url('/customer/css/searchicon.png');\r\n  background-position: 10px 10px;\r\n  background-repeat: no-repeat;\r\n  font-size: 16px;\r\n  padding: 12px 20px 12px 40px;\r\n  border: 1px solid #ddd;\r\n  margin-bottom: 12px;\r\n}\r\n.search {\r\n\r\n}\r\n.searchTerm {\r\n  float: left;\r\n  width: 100%;\r\n  border: 3px solid #00B4CC;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  color: #9DBFAF;\r\n}\r\n.searchTerm:focus{\r\n  color: #00B4CC;\r\n}\r\n.searchButton {\r\n  position: absolute;  \r\n  right: -50px;\r\n  width: 40px;\r\n  height: 36px;\r\n  border: 1px solid #00B4CC;\r\n  background: #00B4CC;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n[type=\"date\"] {\r\n  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;\r\n}\r\n[type=\"date\"]::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n[type=\"date\"]::-webkit-calendar-picker-indicator {\r\n  opacity: 0;\r\n}\r\n/* custom styles */\r\nbody {\r\n  padding: 4em;\r\n  background: #e5e5e5;\r\n  font: 13px/1.4 Geneva, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;\r\n}\r\nlabel {\r\n  display: block;\r\n}\r\ninput {\r\n  border: 1px solid #c4c4c4;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  padding: 3px 5px;\r\n  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n  width: 190px;\r\n}\r\ntextarea{\r\n  border: 1px solid #c4c4c4;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  padding: 3px 5px;\r\n  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n  width: 100px;\r\n  height: 200px;\r\n  resize: vertical;\r\n  overflow: auto;\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  text-align: center;\r\n  text-align-last:center;\r\n  border-collapse: collapse;\r\n}\r\nselect{\r\n  border: 1px solid #c4c4c4;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  padding: 3px 5px;\r\n  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\r\n  width: 140px;\r\n  border: 1px solid rgb(99, 189, 250);\r\n  background-color: rgb(255, 255, 255);\r\n  text-align: center;\r\n  text-align-last:center;\r\n  border-collapse: collapse;\r\n}\r\nexample-card {\r\n  max-width: 400px;\r\n}\r\n.example-header-image {\r\n  background-size: cover;\r\n}\r\nbody {\r\n  font-family: Arial;\r\n}\r\n.coupon {\r\n  border: 5px dotted #bbb;\r\n  width: 80%;\r\n  border-radius: 15px;\r\n  margin: 0 auto;\r\n  max-width: 600px;\r\n}\r\n.container1 {\r\n  padding: 2px 16px;\r\n  background-color: #f1f1f1;\r\n}\r\n.promo {\r\n  background: #ccc;\r\n  padding: 3px;\r\n}\r\n.expire {\r\n  color: red;\r\n}\r\n.flex-grid {\r\n  display: flex;\r\n}\r\n.flex-grid-thirds {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.flex-grid-thirds .col {\r\n  width: 32%;\r\n}\r\n.col {\r\n  flex: 1;\r\n}\r\nbody {\r\n  padding: 10px 0;\r\n  background-color: #f4f4f4;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\na {\r\n  text-decoration: none;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n.btn {\r\n  text-transform: uppercase;\r\n}\r\n.btn.btn-lg {\r\n  padding: 6px 30px;\r\n}\r\n.thumbnail-title {\r\n  font-size: 20px;\r\n  margin-top: 5px;\r\n}\r\n.img-thumb-bg {\r\n  padding: 0;\r\n  overflow: hidden;\r\n  min-height: 200px;\r\n  position: relative;\r\n  border-radius: 3px;\r\n  background-position: center;\r\n  background-color: transparent;\r\n  box-shadow: 4px 4px;\r\n\r\n}\r\n.img-thumb-bg p {\r\n  color: #fff;\r\n  margin-bottom: 0;\r\n  line-height: 16px;\r\n}\r\n.img-thumb-bg .overlay {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  position: absolute;\r\n  transition: all 0.3s ease-in-out;\r\n  background: rgba(0, 0, 0, 0);\r\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #000000 100%);\r\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 50%, #000000 100%);\r\n  background: -webkit-gradient(left top, left bottom, color-stop(50%, rgba(0, 0, 0, 0)), color-stop(100%, #000000));\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000', GradientType=0);\r\n}\r\n.img-thumb-bg .caption {\r\n  bottom: -5px;\r\n  height: 100px;\r\n  font-size: 12px;\r\n  position: absolute;\r\n  padding: 0 20px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.img-thumb-bg .caption .tag a {\r\n  margin-bottom: -5px;\r\n  color: #fff;\r\n  padding: 0 5px;\r\n  font-size: 12px;\r\n  border-radius: 2px;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  background-color: #2980B9;\r\n}\r\n.img-thumb-bg .caption .title {\r\n  margin-top: -5px;\r\n  font-size: 18px;\r\n  line-height: 20px;\r\n  text-transform: uppercase;\r\n}\r\n.img-thumb-bg .caption .title span {\r\n  color: #fff;\r\n  \r\n}\r\n.img-thumb-bg .caption .title span:hover {\r\n  color: #2980B9;\r\n}\r\n.img-thumb-bg .caption .meta-data {\r\n  color: #777;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  margin-bottom: 15px;\r\n}\r\n.img-thumb-bg .caption .meta-data a {\r\n  color: #777;\r\n}\r\n.img-thumb-bg .caption .meta-data a .fa {\r\n  color: #2980B9;\r\n}\r\n.img-thumb-bg .caption .meta-data a:hover {\r\n  color: #2980B9;\r\n}\r\n.img-thumb-bg .caption .content {\r\n  display: none;\r\n}\r\n.img-thumb-bg:hover .overlay {\r\n  background: rgba(46, 49, 58, 0.8);\r\n}\r\n.img-thumb-bg:hover .caption {\r\n  bottom: 60px;\r\n}\r\n.img-thumb-bg:hover .caption .content {\r\n  display: block;\r\n  \r\n}\r\n.price{\r\n  margin-right: 10px;\r\n  margin-top: 5px;\r\n  color: white;\r\n  font-size: 25px;\r\n}\r\n.amount{\r\n  /* padding-right:-70px; */\r\n  /* padding-left:0; */\r\n  /* margin-right: -50px;\r\n  margin-top: 40px;\r\n  color:white;\r\n  font-size: 15px; */\r\n  /* position: absolute;  right: 100 px; */\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  top: 40px;\r\n  text-shadow: 2px 2px #1e1e20;\r\n}\r\n.type{\r\n  margin-top: 5px;\r\n  margin-left: 5px;\r\n\r\n  color: #fff;\r\n  padding: 0 5px;\r\n  font-size: 15px;\r\n  border-radius: 2px;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  background-color: #2980B9;\r\n  text-decoration: none;\r\n  transition: all 0.3s ease-in-out;\r\n  \r\n}\r\n* { color:rgb(82, 56, 56); text-decoration: none;}\r\nh4 , h2 {\r\n  text-align:center;\r\n}\r\nh4 {\r\nbackground-color: rgb(16, 77, 85);\r\n}\r\n.centered {\r\n  top: -25px;\r\n  position: relative;;\r\n  bottom:0px;\r\n  right:25%;\r\n  left:50%;\r\n  margin-left:-150px;\r\n}"

/***/ }),

/***/ "./src/app/components/get-all-coupons/get-all-coupons.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/get-all-coupons/get-all-coupons.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h2 style=\"font-size:10vw\" class=\"typewrite\" style=\"font-family:Times New Roman\">&nbsp; Get Your Coupons Now !\n</h2>\n<h4>\n  <a href=\"\" style=\"font-family:Times New Roman;color:white;\" class=\"typewrite\" data-period=\"2000\" data-type='[ \"35 % off on all Sports Coupons ! \", \"Free Global Shipping over 80$\", \"New Food Coupons\",\"10 % off on all Traveling Coupons\", \"Buy 1 Coupon get 1 free Coupon !\" ]'>\n    <span class=\"wrap\"></span>\n  </a>\n</h4>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 col-sm-6\" *ngFor=\"let coup of coupon; let i = index\">\n      <div class=\"thumbnail img-thumb-bg\" [ngStyle]=\"{'background-image': 'url('+coup.image+')'}\">\n        <span class=\"pull-right price\"><a href=\"\" style=\"color:white ;text-shadow: 2px 2px #4b3737;\"> {{coup.price}} $</a></span>\n        <span class=\"amount\" style=\"color:white\" data-ng-disabled=\"coup.amount.length > 0\"> Left in Stock - {{coup.amount}}</span>\n        <div class=\"tag type\">{{coup.type}}</div>\n        <div class=\"overlay\"></div>\n        <div id=\"cornerRibbon\" name=Purchased [hidden]=\"!coup.purchased\" class=\"corner-ribbon bottom-right sticky shadow\">Purchased !!</div>\n        <div class=\"caption\">\n          <button  id=\"button\" class=button (click)=\"purchaseCoupon(coup.id,coup.title,coup.startDate,coup.endDate,coup.amount,coup.type,coup.message,coup.price,coup.image,coup.Purchased)\">\n            <img class=\"purchaseButton\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJUSURBVGhD7djNi09RHMfxHxpPjZCHsSCUjaeyEBJTY7KhLEgha7b+AIUUCwuSpFhIlnaKhZWZJjIs1Ex5mCnJEtl4zNP7U/er0+3eGznfM27Op16L3/n97jn3/s793nPv7eTk5OTk5OT8R5mKuYHpaF324AN+BL5hCKvRmtxEeBChV5iBVmQ33qPqQOQAWpNyjVyFHchltDYHYQfyXA1FduFQAssQJYthByL6rFxC2O5lKaJFM2Eda4aUfQgH9PAUUaPasM6tThbhjoPXsLEuIGrq6sQjuszbWKrDqKmrk9jRomtjfMEsRE9VncTOEdgYA2rwSFWdxM4t2BhH1eAR7zqZhvCuYhNc4l0n22B9v8UUuMWzTk7D+r6hBs941skjWN+H1eAZrzpZAD33WN/L4RqvOtkP69N7wf2VsE7OYG8Et2F9XkSS6P7HBvWwA0myAu9QtRN/6x4mI1lW4RoeQDd5Wsie4OEfeAlt9wx6uXEKeiJNni0Yhv2bH3EFc9CU9RiEbfcZ17EQydMP7YDtTOgxulGVjah7uaGZmYdk6cILhDuhW+7w80mUMwmjCH9X3i76g1RTemED63TaDN0XnS3aZBzlrIV9/xXbocI+VrTJGySL3m3ZwKoRyxpYu067cnbCvtdpZFkCa5dkLwG3wgYNZ+Rc0SZjKKduRo4XbZJ0Rn6nRk6gHNXICMLflbc7j6TpQ9NVayaqsgFNV60JWUf0BHcftiN6i691ZDaasg538R3a7hO0jszHhKYHK1E3C3XRrbu2q1tzcnJycnL+xXQ6PwHhIXrD7/91JwAAAABJRU5ErkJggg==\" style=\"-webkit-filter: invert(100%);\">\n          </button> \n          <div class=\"title\" ><span data-role=\"disabled\">{{coup.title}}</span></div>\n          <div class=\"clearfix\">\n            <span class=\"meta-data\">Expires: <a href=\"\"></a>{{coup.endDate}}</span>\n\n          </div>\n          <div class=\"content\">\n            <p>{{coup.message}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<table id=\"companyTable\" border=\"1\" class=\"blueTable table table-striped table-bordered table-sm\" cellspacing=\"0\" width=\"100%\">\n  <tbody style=\"display:none\">\n\n    <tr>\n      <th onclick=\"sortTable(0)\" class=\"th-sm\">Id\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n      </th>\n      <th onclick=\"sortTable(1)\" class=\"th-sm\">Title\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n      </th>\n      <th onclick=\"sortTable(2)\" class=\"th-sm\">start Date\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n      </th>\n      <th onclick=\"sortTable(3)\" class=\"th-sm\">end Date\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n      </th>\n      <th onclick=\"sortTable(4)\" class=\"th-sm\" style=\"width: 30px\">amount\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n      </th>\n      <th onclick=\"sortTable(5)\" class=\"th-sm\">type\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n      </th>\n      <th onclick=\"sortTable(6)\" class=\"th-sm\">message\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n      </th>\n      <th onclick=\"sortTable(7)\" class=\"th-sm\" style=\"width: 60px\">price\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n      </th>\n      <th onclick=\"sortTable(8)\" class=\"th-sm\">image\n        <i class=\"fa fa-sort float-right\" aria-hidden=\"true\"></i>\n      </th>\n      <th>\n        Update\n      </th>\n      <th>\n        Delete\n      </th>\n    </tr>\n    <!-- foreach Coupon coupon : coupons-->\n    <tr *ngFor=\"let coup of coupon; let i = index\">\n      <td>{{coup.id}}</td>\n      <td>{{coup.title}}</td>\n      <td>\n        <input id=\"startDate\" name=\"startDate\" type=\"date\" [(ngModel)]=\"coup.startDate\" />\n      </td>\n      <td>\n        <input id=\"endDate\" name=\"endDate\" type=\"date\" [(ngModel)]=\"coup.endDate\" />\n      </td>\n      <td>\n        <input type=\"number\" [(ngModel)]=\"coup.amount\" />\n      </td>\n      <td>\n        <select required type=\"text\" name=\"type\" [(ngModel)]=\"coup.type\" placeholder=\"Enter type\">\n          <option value=\"\">Choose Type</option>\n          <option>RESTAURANTS</option>\n          <option>ELECTRICITY</option>\n          <option>FOOD</option>\n          <option>HEALTH</option>\n          <option>SPORTS</option>\n          <option>CAMPING</option>\n          <option>TRAVELING</option>\n        </select>\n      </td>\n      <td>\n        <textarea type=\"text\" [(ngModel)]=\"coup.message\"></textarea>\n      </td>\n      <td>\n        <input type=\"number\" [(ngModel)]=\"coup.price\" />\n      </td>\n      <td>\n        <input type=\"text\" [(ngModel)]=\"coup.image\" />\n        <figure class=\"figure\">\n          <img [src]=coup.image class=\"figure-img img-fluid rounded\" width=\"200\">\n        </figure>\n      </td>\n      <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"updateCoupon(coup.id,coup.title,coup.startDate,coup.endDate,coup.amount,coup.type,coup.message,coup.price,coup.image)\">\n          <i class=\"fa fa-refresh fa-spin\" style=\"font-size:20px;\"></i>\n        </button>\n      </td>\n      <td><button id=\"button\" class=\"button glow-button btn btn-default\" (click)=\"deleteCoupon(coup.id)\">&#x2718;</button></td>\n    </tr>\n  </tbody>\n\n</table>\n<br>\n<br>\n<span class=\"cp-text centered\" style=\"color:black\">\n    © Copyright 2018 Assaf Ben David. All rights reserved.\n  </span>\n<br>"

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
        this.couponAdd = new _common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", null, null, 0, "", "", 0, "", false);
        this.coup = new _common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", null, null, 0, "", "", 0, "", false);
        this.coupon = [];
        this.purchasedcoupons = []; //purchased Coupons
        this.coupon = _dataService.coupons;
        this.getallpurchasedcoupons();
        this.getallcurrentpurchasedcoupons();
        // this.purchasedcoupons = _dataService.purchasedcoupons;
        this.getAllCoupons();
        // now the company is in the service
    }
    GetAllCouponsComponent.prototype.deleteCoupon = function (id) {
        console.log(id);
        this._dataService.removeCouponService(id);
        this.getAllCoupons();
        //this.company.splice(i, 1);
    };
    GetAllCouponsComponent.prototype.purchaseCoupon = function (id, title, startDate, endDate, amount, type, message, price, image) {
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
        this._dataService.purchaseCouponService(this.coup);
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
        this._dataService.updateCouponService(this.coup);
    };
    GetAllCouponsComponent.prototype.getAllCoupons = function () {
        console.log('in');
        this._dataService.getAllCouponsService();
        console.log(this.coupon);
    };
    GetAllCouponsComponent.prototype.getallpurchasedcoupons = function () {
        this._dataService.getallpurchasedcouponsService();
    };
    GetAllCouponsComponent.prototype.getallcurrentpurchasedcoupons = function () {
        this._dataService.getallcurrentpurchasedcouponsService();
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
        this._dataService.getAllCouponsService();
    };
    GetCouponByTypeComponent.prototype.getCouponById = function (id) {
        this._dataService.getCouponByIdService(id);
    };
    GetCouponByTypeComponent.prototype.getCouponByType = function (type) {
        this._dataService.getCouponByTypeService(type);
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
        this._dataService.getAllCouponsService();
    };
    GetCouponComponent.prototype.getCouponById = function (id) {
        this._dataService.getCouponByIdService(id);
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
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/Coupon */ "./src/app/common/Coupon.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
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
        this.couponAdd = new _common_Coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](0, "", null, null, 0, "", "", 0, "", false);
        this.purchasedcoupons = []; //purchased Coupons
        this.unpurchasedcoupons = []; //purchased Coupons
        this.coupons = []; //purchased Coupons
        this.companies = [];
    }
    SharedDataService.prototype.logout = function (request, response) {
        this.http.post('http://localhost:8080/customerservice/logout', request, response).subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('You are logged out', ' You have been logout of the System.', 'info');
        }, 
        //Error handeling
        function (err) {
            console.error('Error while add Coupon , Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    /**
   * addCompanyService
   */
    SharedDataService.prototype.addCouponService = function (coupons) {
        var _this = this;
        console.log(coupons);
        this.http.post('http://localhost:8080/companyservice/createcoupon', coupons).subscribe(function (resp) {
            _this.getAllCouponsService();
        });
    };
    SharedDataService.prototype.getCouponByIdService = function (id) {
        var _this = this;
        console.log(id);
        console.log('url = http://localhost:8080/companyservice/getcoupon/' + id);
        this.http.get('http://localhost:8080/companyservice/getcoupon/' + id).subscribe(function (resp) {
            var temp = resp.json();
            _this.coupons.length = 0;
            _this.coupons.push(resp.json());
        });
    };
    SharedDataService.prototype.getCouponByTypeService = function (type) {
        var _this = this;
        this.http.get('http://localhost:8080/companyservice/getcouponbytype/' + type).subscribe(function (resp) {
            var temp = resp.json();
            _this.coupons.length = 0;
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var item = temp_1[_i];
                _this.coupons.push(item);
            }
        });
    };
    SharedDataService.prototype.updateCouponService = function (couponAdd) {
        var _this = this;
        var url = 'http://localhost:8080/customerservice/updatecoupon/' + couponAdd.id;
        this.http.put(url, couponAdd).subscribe(function (resp) {
            _this.getAllCouponsService();
        });
    };
    SharedDataService.prototype.purchaseCouponService = function (couponAdd) {
        var _this = this;
        //Send the purchase coupon API to the Service
        var url = 'http://localhost:8080/customerservice/purchasecoupon';
        this.http.post(url, couponAdd).subscribe(function (resp) {
            // this.purchasedcoupons = this.purchasedcoupons;
            couponAdd.amount = couponAdd.amount - 1;
            _this.updateCouponService(couponAdd);
            _this.getallcurrentpurchasedcouponsService();
            // this.getAllCouponsService();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('purchase Coupon was Successful !', ' Managed to purchase Coupon ' + couponAdd.title, 'success');
        }, 
        //Error handeling
        function (err) {
            if (err.status == 409) {
                console.error('Error while get Coupon By Type, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Cannot Purchase!',
                    text: 'You already Purchased this coupon, choose another coupon.',
                    imageUrl: 'https://www.salesbuzz.com/wp-content/uploads/2015/08/shutterstock_168715445.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    animation: false,
                    type: 'error'
                });
            }
            else {
                console.error('Error while get Coupon By Type, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.removeCouponService = function (id) {
        var _this = this;
        this.http.delete('http://localhost:8080/companyservice/removecoupon/' + id).subscribe(function (resp) {
            _this.getAllCouponsService();
        });
    };
    SharedDataService.prototype.containsCoupons = function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            console.log("****************************" + list[i].id + "**********" + obj.id);
            if (list[i].id == obj.id) {
                console.log("*" + list[i].id);
                console.log("**" + obj.id);
                return true;
            }
        }
        return false;
    };
    SharedDataService.prototype.getAllCouponsService = function () {
        var _this = this;
        this.http.get('http://localhost:8080/customerservice/getallcoupons').subscribe(function (resp) {
            var temp = resp.json();
            _this.coupons.length = 0;
            for (var _i = 0, temp_2 = temp; _i < temp_2.length; _i++) {
                var item = temp_2[_i];
                if (_this.containsCoupons(item, _this.purchasedcoupons)) {
                    item.purchased = true;
                }
                _this.coupons.push(item);
            }
            console.log("All coupons " + _this.coupons.length);
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Filter Coupon, Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    SharedDataService.prototype.getallpurchasedcouponsService = function () {
        var _this = this;
        this.http.get('http://localhost:8080/customerservice/getallpurchasedcoupons').subscribe(function (resp) {
            if (resp.json.length == 0) {
                _this.coupons.length = 0;
            }
            var temp = resp.json();
            _this.coupons.length = 0;
            _this.purchasedcoupons.length = 0;
            for (var _i = 0, temp_3 = temp; _i < temp_3.length; _i++) {
                var item = temp_3[_i];
                _this.coupons.push(item);
            }
            _this.purchasedcoupons = _this.coupons.slice();
            console.log("All purchasedcoupons " + _this.purchasedcoupons.length);
            // this.purchasedcoupons.concat(this.coupons);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Filter Coupon was Successful !',
                text: ' Managed to get all purchased coupons.',
                type: 'success',
                timer: 1200
            });
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Filter Coupon, Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    SharedDataService.prototype.getallcurrentpurchasedcouponsService = function () {
        var _this = this;
        this.http.get('http://localhost:8080/customerservice/getallpurchasedcoupons').subscribe(function (resp) {
            var temp = resp.json();
            _this.coupons.length = 0;
            _this.purchasedcoupons.length = 0;
            for (var _i = 0, temp_4 = temp; _i < temp_4.length; _i++) {
                var item = temp_4[_i];
                _this.coupons.push(item);
            }
            _this.getAllCouponsService();
            _this.purchasedcoupons = _this.coupons.slice();
            console.log("All purchasedcoupons " + _this.purchasedcoupons.length);
            // this.purchasedcoupons.concat(this.coupons);
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Filter Coupon, Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    SharedDataService.prototype.getallunpurchasedcouponsService = function () {
        var _this = this;
        this.http.get('http://localhost:8080/customerservice/getallunpurchasedcoupons').subscribe(function (resp) {
            if (resp.json.length == 0) {
                _this.coupons.length = 0;
            }
            var temp = resp.json();
            _this.coupons.length = 0;
            for (var _i = 0, temp_5 = temp; _i < temp_5.length; _i++) {
                var item = temp_5[_i];
                _this.coupons.push(item);
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Filter Coupon was Successful !',
                text: ' Managed to get all purchased coupons.',
                type: 'success',
                timer: 1200
            });
        }, 
        //Error handeling
        function (err) {
            console.error('Error while Filter Coupon, Check you DB and Service!', err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Oops...', 'Something went wrong!', 'error');
        });
    };
    SharedDataService.prototype.getAllPurchasedCouponsByTypeService = function (type) {
        var _this = this;
        this.http.get('http://localhost:8080/customerservice/getallpurchasedcouponsbytype/' + type).subscribe(function (resp) {
            var temp = resp.json();
            _this.coupons.length = 0;
            for (var _i = 0, temp_6 = temp; _i < temp_6.length; _i++) {
                var item = temp_6[_i];
                _this.coupons.push(item);
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Filter Coupon was Successful !',
                text: ' Managed to get Coupons by Type ' + type,
                type: 'success',
                timer: 1200
            });
        }, 
        //Error handeling
        function (err) {
            if (err.status == 404) {
                _this.coupons.length = 0;
                console.error('Error while get Coupon By Type, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    type: 'error',
                    title: 'Cannot get coupons!',
                    text: 'Did not find any Purchased coupon by Type ' + type,
                    animation: true
                });
            }
            else {
                console.error('Error while Filter Coupon, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.getAllPurchasedCouponsByPriceService = function (price) {
        var _this = this;
        console.log('url = http://localhost:8080/customerservice/getAllPurchasedCouponsByPrice/' + price);
        this.http.get('http://localhost:8080/customerservice/getallpurchasedcouponsbyprice/' + price).subscribe(function (resp) {
            var temp = resp.json();
            console.log(_this.coupons.length);
            _this.coupons.length = 0;
            console.log(_this.coupons.length);
            for (var _i = 0, temp_7 = temp; _i < temp_7.length; _i++) {
                var item = temp_7[_i];
                _this.coupons.push(item);
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Filter Coupon was Successful !',
                text: ' Managed to get Coupons by Price ' + price,
                type: 'success',
                timer: 1200
            });
        }, 
        //Error handeling
        function (err) {
            if (err.status == 404) {
                _this.coupons.length = 0;
                console.error('Error while get Coupon By Type, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    type: 'error',
                    title: 'Cannot get coupons!',
                    text: 'Did not find any Purchased coupon by Price ' + price,
                    animation: true
                });
            }
            else {
                console.error('Error while Filter Coupon, Check you DB and Service!', err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Oops...', 'Something went wrong!', 'error');
            }
        });
    };
    SharedDataService.prototype.ngOnInit = function () {
    };
    SharedDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
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

module.exports = __webpack_require__(/*! C:\angularjs\CSCustomer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map