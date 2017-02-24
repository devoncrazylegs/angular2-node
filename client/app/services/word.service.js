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
var http_1 = require("@angular/http");
var WordService = (function () {
    function WordService(_http) {
        this._http = _http;
        this._emitter = new core_1.EventEmitter();
    }
    WordService.prototype.storeWord = function (word, pigLatinWord) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var payload = {
            word: word,
            pigLatinWord: pigLatinWord
        };
        return this._http.post('/store', payload, options)
            .map(function (res) {
            return res;
        });
    };
    WordService.prototype.getWords = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get('/store', options)
            .map(function (res) {
            return res;
        });
    };
    WordService.prototype.emitNewWord = function (wordToEmit) {
        this._emitter.emit(wordToEmit);
    };
    return WordService;
}());
WordService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WordService);
exports.WordService = WordService;
//# sourceMappingURL=word.service.js.map