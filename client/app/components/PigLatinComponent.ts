import {Component, ViewContainerRef} from "@angular/core";
import { wordHelper } from "../helpers/wordHelper";
import { WordService } from "../services/word.service";
import {ToastsManager} from "ng2-toastr";

@Component({
    selector: 'pig-latin',
    moduleId: module.id,
    templateUrl: '/app/views/home.html',
    styleUrls: ['/app/assets/css/components/piglatin-component.css']
})

export class PigLatinComponent {
    pigLatinReturn:string = "";
    constructor(
        private _wordService: WordService,
        public toastr: ToastsManager, vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    keyInput(keyCode) {
        if(keyCode != 13) {
            this.pigLatinReturn = "";
        }
    }

    parseInput(inputText: string):void {
        if(inputText != '') {
            this.pigLatinReturn = wordHelper.convertWordToPigLatin(inputText);
            this._wordService.storeWord(inputText, this.pigLatinReturn)
                .subscribe((response) => {
                    this.toastr.success('Word added!', 'Success!');
                    this._wordService.emitNewWord(JSON.parse(response._body));
                });
        }
    }
}