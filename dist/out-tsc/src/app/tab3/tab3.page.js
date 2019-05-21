import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadData();
    }
    Tab3Page.prototype.time = function () {
        var currentdate = new Date();
        currentdate.getSeconds();
    };
    Tab3Page.prototype.loadData = function () {
        var _this = this;
        var data;
        data = this.http.get('https://data.metromobilite.fr/api/routers/default/index/stops/SEM:3207/stoptimes');
        data.subscribe(function (result) {
            _this.times = result['0']['times'];
            _this.pattern = result['0']['pattern'];
        });
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, HttpClient])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map