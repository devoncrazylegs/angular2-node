import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class WordService {
    public _emitter: EventEmitter<any> = new EventEmitter();
    constructor(
        private _http: Http
    ) {

    }

    storeWord(word: string, pigLatinWord: string): Observable<any> {
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let payload = {
            word,
            pigLatinWord
        };
        return this._http.post('/store', payload, options)
            .map((res) => {
                return res;
            });
    }

    getWords(): Observable<any> {
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get('/store', options)
            .map((res) => {
                return res;
            });
    }

    emitNewWord(wordToEmit: string): void {
        this._emitter.emit(wordToEmit);
    }
}