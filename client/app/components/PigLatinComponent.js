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
var wordHelper_1 = require("../helpers/wordHelper");
var word_service_1 = require("../services/word.service");
var ng2_toastr_1 = require("ng2-toastr");
var PigLatinComponent = (function () {
    function PigLatinComponent(_wordService, toastr, vcr) {
        this._wordService = _wordService;
        this.toastr = toastr;
        this.pigLatinReturn = "";
        this.toastr.setRootViewContainerRef(vcr);
    }
    PigLatinComponent.prototype.keyInput = function (keyCode) {
        if (keyCode != 13) {
            this.pigLatinReturn = "";
        }
    };
    PigLatinComponent.prototype.parseInput = function (inputText) {
        var _this = this;
        if (inputText != '') {
            this.pigLatinReturn = wordHelper_1.wordHelper.convertWordToPigLatin(inputText);
            this._wordService.storeWord(inputText, this.pigLatinReturn)
                .subscribe(function (response) {
                _this.toastr.success('Word added!', 'Success!');
                _this._wordService.emitNewWord(JSON.parse(response._body));
            });
        }
    };
    return PigLatinComponent;
}());
PigLatinComponent = __decorate([
    core_1.Component({
        selector: 'pig-latin',
        moduleId: module.id,
        templateUrl: '/app/views/home.html',
        styleUrls: ['/app/assets/css/components/piglatin-component.css']
    }),
    __metadata("design:paramtypes", [word_service_1.WordService,
        ng2_toastr_1.ToastsManager, core_1.ViewContainerRef])
], PigLatinComponent);
exports.PigLatinComponent = PigLatinComponent;
//# sourceMappingURL=PigLatinComponent.js.map