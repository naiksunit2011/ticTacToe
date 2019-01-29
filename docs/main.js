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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-board></app-board>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ticTacToe';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/board/board.component */ "./src/app/component/board/board.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/board/board.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/board/board.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board-outer-wrapper\">\n  \n  <div class=\"board-text\">Current Player : {{currentPlayer}}</div>\n  \n  <div class=\"board-row\" *ngFor=\"let row of rowCount\" id=\"row_{{row}}\">\n    <div class=\"board-field\" *ngFor=\"let field of fieldCount\" id=\"{{row}}_{{field}}\" (click)=\"addPosition(row+'_'+field)\">\n      <div class=\"fieldX\" *ngIf=\"arrX.indexOf(row+'_'+field) > -1\" >X</div>\n      <div class=\"fieldO\" *ngIf=\"arrO.indexOf(row+'_'+field) > -1\" >O</div>\n    </div>\n  </div>\n\n  <div class=\"board-text\">{{winnerMsg}}</div>\n  <div *ngIf=\"winnerMsg != ''\">\n    <div (click)=\"restart()\">Restart Game</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/board/board.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/board/board.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board-outer-wrapper {\n  width: 156px;\n  margin: 0 auto;\n  text-align: center; }\n\n.board-text {\n  padding: 5px; }\n\n.board-row {\n  height: 50px; }\n\n.board-field {\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n  border: 1px solid;\n  border-radius: 5px; }\n\n.fieldX, .fieldO {\n  float: left;\n  padding: 8px 0 0 14px;\n  font-size: 30px; }\n\n.fieldX {\n  color: red; }\n\n.fieldO {\n  color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JvYXJkL0Q6XFxwcm9qZWN0c1xcdGljVGFjVG9lL3NyY1xcYXBwXFxjb21wb25lbnRcXGJvYXJkXFxib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkLW91dGVyLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDoxNTZweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvYXJkLXRleHR7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmJvYXJkLXJvd3tcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uYm9hcmQtZmllbGR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZmllbGRYLC5maWVsZE97XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweCAwIDAgMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZmllbGRYe1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmZpZWxkT3tcclxuICAgIGNvbG9yOiBncmVlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/board/board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/board/board.component.ts ***!
  \****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        this.X = "X";
        this.O = "O";
        this.posMap = {};
        this.arrX = [];
        this.arrO = [];
        this.winnerCombination = [];
        this.isAiPlayer = true;
        this.winnerMsg = "";
        this.emptyPosArr = [];
        this.emptyPosArr = ["0_0", "0_1", "0_2", "1_0", "1_1", "1_2", "2_0", "2_1", "2_2"];
        this.posMap = {
            "0_0": 1,
            "0_1": 2,
            "0_2": 3,
            "1_0": 4,
            "1_1": 5,
            "1_2": 6,
            "2_0": 7,
            "2_1": 8,
            "2_2": 9
        };
        this.winnerCombination = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
        this.fieldCount = [0, 1, 2];
        this.rowCount = [0, 1, 2];
        this.currentPlayer = "O"; //computer player
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.startGame();
    };
    BoardComponent.prototype.startGame = function () {
        var startPos = Math.floor(Math.random() * Math.floor(3)) + "_" + Math.floor(Math.random() * Math.floor(3));
        this.addPosition(startPos);
    };
    BoardComponent.prototype.checkWinner = function (arr) {
        var length = arr.length;
        breakAllLoop: for (var i = 0; i < length; i++) {
            for (var j = i + 1; j < length; j++) {
                for (var k = j + 1; k < length; k++) {
                    var a = this.posMap[arr[i]];
                    var b = this.posMap[arr[j]];
                    var c = this.posMap[arr[k]];
                    for (var winArr in this.winnerCombination) {
                        if (this.winnerCombination[winArr].includes(a) && this.winnerCombination[winArr].includes(b) && this.winnerCombination[winArr].includes(c)) {
                            this.endGame();
                            break breakAllLoop;
                        }
                    }
                }
            }
        }
    };
    BoardComponent.prototype.checkWinnerDummy = function (arr) {
        var length = arr.length;
        var isWinner = false;
        breakAllLoop: for (var i = 0; i < length; i++) {
            for (var j = i + 1; j < length; j++) {
                for (var k = j + 1; k < length; k++) {
                    var a = this.posMap[arr[i]];
                    var b = this.posMap[arr[j]];
                    var c = this.posMap[arr[k]];
                    for (var winArr in this.winnerCombination) {
                        if (this.winnerCombination[winArr].includes(a) && this.winnerCombination[winArr].includes(b) && this.winnerCombination[winArr].includes(c)) {
                            isWinner = true;
                            break breakAllLoop;
                        }
                    }
                }
            }
        }
        return isWinner;
    };
    BoardComponent.prototype.endGame = function () {
        this.winnerMsg = "Player " + this.currentPlayer + " is winner!!!";
    };
    BoardComponent.prototype.addPosition = function (position) {
        if (this.winnerMsg == "") {
            if (this.currentPlayer == "X") {
                this.arrX.push(position);
                var emptyPosArrIndex = this.emptyPosArr.indexOf(position);
                if (emptyPosArrIndex > -1) {
                    this.emptyPosArr.splice(emptyPosArrIndex, 1);
                }
                this.checkWinner(this.arrX);
                this.currentPlayer = "O";
                if (this.isAiPlayer == true)
                    this.takeAiPlayerAction(this.arrO, this.arrX, this.emptyPosArr);
            }
            else {
                this.arrO.push(position);
                var emptyPosArrIndex = this.emptyPosArr.indexOf(position);
                if (emptyPosArrIndex > -1) {
                    this.emptyPosArr.splice(emptyPosArrIndex, 1);
                }
                this.checkWinner(this.arrO);
                this.currentPlayer = "X";
            }
        }
    };
    BoardComponent.prototype.takeAiPlayerAction = function (arrO, arrX, emptyPosArr) {
        var res_1 = false;
        var res_2 = false;
        var dummyArrO = arrO.slice();
        var dummyArrX = arrX.slice();
        var dummyEmptyPosArr = emptyPosArr.slice();
        allBreak1: for (var emptyPos in dummyEmptyPosArr) {
            res_1 = this.algorithm1(dummyEmptyPosArr[emptyPos], dummyArrO);
            if (res_1 == true) {
                this.addPosition(dummyEmptyPosArr[emptyPos]);
                break allBreak1;
            }
        }
        if (res_1 == false) {
            allBreak2: for (var emptyPos in dummyEmptyPosArr) {
                res_2 = this.algorithm2(dummyEmptyPosArr[emptyPos], dummyArrX);
                if (res_2 == true) {
                    this.addPosition(dummyEmptyPosArr[emptyPos]);
                    break allBreak2;
                }
            }
        }
        else {
            return;
        }
        if (res_2 == false) {
            dummyEmptyPosArr.splice(0, 1);
            this.takeAiPlayerAction(dummyArrO, dummyArrX, dummyEmptyPosArr);
        }
        else {
            return;
        }
    };
    //self win
    BoardComponent.prototype.algorithm1 = function (position, newArrO) {
        //var newArrO = this.dummyArrO.slice();
        newArrO.push(position);
        return this.checkWinnerDummy(newArrO);
    };
    //opponent win
    BoardComponent.prototype.algorithm2 = function (position, newArrX) {
        //var newArrX = this.dummyArrX.slice();
        newArrX.push(position);
        return this.checkWinnerDummy(newArrX);
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/component/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/component/board/board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\ticTacToe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map