import {Component} from "@angular/core";
import {WordService} from "../services/word.service";

@Component({
    selector: 'top-ten',
    moduleId: module.id,
    templateUrl: '/app/views/top-ten.html',
    styleUrls: ['/app/assets/css/components/topten-component.css']
})

export class TopTenComponent {
    words: Array<any>;
    constructor(
        private _wordService: WordService
    ) {

    }

    ngOnInit() {
        this._wordService.getWords()
            .subscribe((response) => {
                this.words = JSON.parse(response._body);
            });

        this._wordService._emitter.subscribe((response) => {
            this.words.unshift(response.word);
            if(this.words.length >= 10) {
                this.words.splice(-1, 1);
            }
        });
    }
}