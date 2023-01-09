"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_launch-details_launch-details_module_ts"],{

/***/ 387:
/*!*****************************************************************!*\
  !*** ./src/app/launch-details/launch-details-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchDetailsPageRoutingModule": () => (/* binding */ LaunchDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _launch_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-details.page */ 4848);




const routes = [
    {
        path: '',
        component: _launch_details_page__WEBPACK_IMPORTED_MODULE_0__.LaunchDetailsPage
    }
];
let LaunchDetailsPageRoutingModule = class LaunchDetailsPageRoutingModule {
};
LaunchDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LaunchDetailsPageRoutingModule);



/***/ }),

/***/ 5376:
/*!*********************************************************!*\
  !*** ./src/app/launch-details/launch-details.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchDetailsPageModule": () => (/* binding */ LaunchDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _launch_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-details-routing.module */ 387);
/* harmony import */ var _launch_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch-details.page */ 4848);







let LaunchDetailsPageModule = class LaunchDetailsPageModule {
};
LaunchDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _launch_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.LaunchDetailsPageRoutingModule
        ],
        declarations: [_launch_details_page__WEBPACK_IMPORTED_MODULE_1__.LaunchDetailsPage]
    })
], LaunchDetailsPageModule);



/***/ }),

/***/ 4848:
/*!*******************************************************!*\
  !*** ./src/app/launch-details/launch-details.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchDetailsPage": () => (/* binding */ LaunchDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _launch_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-details.page.html?ngResource */ 573);
/* harmony import */ var _launch_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch-details.page.scss?ngResource */ 3469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_spacexGraphql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spacexGraphql.service */ 8215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







let LaunchDetailsPage = class LaunchDetailsPage {
    constructor(route, launchDetailsService) {
        this.route = route;
        this.launchDetailsService = launchDetailsService;
    }
    ngOnInit() {
        this.launchDetails$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((params) => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((id) => this.launchDetailsService.fetch({ id })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res.data.launch));
    }
};
LaunchDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_spacexGraphql_service__WEBPACK_IMPORTED_MODULE_2__.LaunchDetailsGQL }
];
LaunchDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-launch-details',
        template: _launch_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_launch_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LaunchDetailsPage);



/***/ }),

/***/ 3469:
/*!********************************************************************!*\
  !*** ./src/app/launch-details/launch-details.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".photo-grid {\n  padding-top: 30px;\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill, 300px);\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdW5jaC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoibGF1bmNoLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLWdyaWQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMzAwcHgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 573:
/*!********************************************************************!*\
  !*** ./src/app/launch-details/launch-details.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>launch-details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"launchDetails$ | async as launchDetails\">\n  <main>\n    <section style=\"padding-top: 20px\">\n      <ion-card style=\"width: 400px; margin: auto\">\n        <ion-avatar>\n          <img\n            height=\"256\"\n            width=\"256\"\n            [src]=\"launchDetails.links.mission_patch\"\n            alt=\"Mission patch of {{ launchDetails.mission_name }}\"\n          />\n        </ion-avatar>\n        <ion-card-header>\n          <ion-card-title>{{ launchDetails.mission_name }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          {{launchDetails.details}}\n          <section class=\"photo-grid\">\n            <img\n              *ngFor=\"let pic of launchDetails.links.flickr_images\"\n              [src]=\"pic\"\n              alt=\"Picture of {{ launchDetails.mission_name }}\"\n              height=\"300\"\n              width=\"300\"\n              loading=\"lazy\"\n            />\n          </section>\n        </ion-card-content>\n      </ion-card>\n    </section>\n  </main>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_launch-details_launch-details_module_ts.js.map