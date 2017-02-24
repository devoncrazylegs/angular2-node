"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var word_service_1 = require("../services/word.service");
var TopTenComponent = (function () {
    function TopTenComponent(_wordService) {
        this._wordService = _wordService;
    }
    TopTenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._wordService.getWords()
            .subscribe(function (response) {
            _this.words = JSON.parse(response._body);
        });
        this._wordService._emitter.subscribe(function (response) {
            _this.words.unshift(response.word);
            if (_this.words.length > 10) {
                _this.words.splice(-1, 1);
            }
        });
    };
    return TopTenComponent;
}());
TopTenComponent = __decorate([
    core_1.Component({
        selector: 'top-ten',
        moduleId: module.id,
        templateUrl: '/app/views/top-ten.html',
        styleUrls: ['/app/assets/css/components/topten-component.css']
    }),
    __metadata("design:paramtypes", [word_service_1.WordService])
], TopTenComponent);
exports.TopTenComponent = TopTenComponent;
//# sourceMappingURL=TopTenComponent.js.map