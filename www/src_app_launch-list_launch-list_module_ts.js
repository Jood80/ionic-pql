"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_launch-list_launch-list_module_ts"],{

/***/ 446:
/*!***********************************************************!*\
  !*** ./src/app/launch-list/launch-list-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchListPageRoutingModule": () => (/* binding */ LaunchListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _launch_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-list.page */ 367);




const routes = [
    {
        path: '',
        component: _launch_list_page__WEBPACK_IMPORTED_MODULE_0__.LaunchListPage,
    },
];
let LaunchListPageRoutingModule = class LaunchListPageRoutingModule {
};
LaunchListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LaunchListPageRoutingModule);



/***/ }),

/***/ 2731:
/*!***************************************************!*\
  !*** ./src/app/launch-list/launch-list.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchListPageModule": () => (/* binding */ LaunchListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _launch_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-list-routing.module */ 446);
/* harmony import */ var _launch_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch-list.page */ 367);







let LaunchListPageModule = class LaunchListPageModule {
};
LaunchListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _launch_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.LaunchListPageRoutingModule
        ],
        declarations: [_launch_list_page__WEBPACK_IMPORTED_MODULE_1__.LaunchListPage]
    })
], LaunchListPageModule);



/***/ }),

/***/ 367:
/*!*************************************************!*\
  !*** ./src/app/launch-list/launch-list.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchListPage": () => (/* binding */ LaunchListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _launch_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-list.page.html?ngResource */ 3595);
/* harmony import */ var _launch_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch-list.page.scss?ngResource */ 1311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _services_spacexGraphql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/spacexGraphql.service */ 8215);






let LaunchListPage = class LaunchListPage {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    constructor(pastLaunchesService) {
        this.pastLaunchesService = pastLaunchesService;
        this.pastLaunches$ = pastLaunchesService
            .fetch({ limit: 30 })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res.data.launchesPast));
    }
    ngOnInit() { }
};
LaunchListPage.ctorParameters = () => [
    { type: _services_spacexGraphql_service__WEBPACK_IMPORTED_MODULE_2__.PastLaunchesListGQL }
];
LaunchListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-launch-list',
        template: _launch_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_launch_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LaunchListPage);



/***/ }),

/***/ 1311:
/*!**************************************************************!*\
  !*** ./src/app/launch-list/launch-list.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  padding-top: 20px;\n  display: grid;\n  grid-gap: 30px;\n  grid-template-columns: repeat(auto-fill, 350px);\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdW5jaC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoibGF1bmNoLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMzBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAzNTBweCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */";

/***/ }),

/***/ 3595:
/*!**************************************************************!*\
  !*** ./src/app/launch-list/launch-list.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>launch-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"pastLaunches$ | async as pastLaunches\">\n  <main>\n    <section class=\"container\">\n      <ion-card\n        *ngFor=\"let launch of pastLaunches\"\n        [routerLink]=\"['/launch-details', launch.id]\"\n      >\n        <ion-img\n          [src]=\"launch.links.flickr_images[0]\"\n          alt=\"Mission patch of {{launch.mission_name}}\"\n          loading=\"lazy\"\n        ></ion-img>\n        <ion-card-header>\n          <ion-card-subtitle>{{launch.rocket.rocket_name}}</ion-card-subtitle>\n          <ion-card-title>{{launch.mission_name}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>\n            Here’s a small text description for the card component. Nothing\n            more, nothing less.\n          </p>\n          <ion-item>\n            <ion-button fill=\"solid\">Action</ion-button>\n            <ion-icon name=\"heart\" slot=\"end\"></ion-icon>\n            <ion-icon name=\"share\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </section>\n  </main>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_launch-list_launch-list_module_ts.js.map