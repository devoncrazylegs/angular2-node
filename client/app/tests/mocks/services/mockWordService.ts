import { Observable } from "rxjs/Rx";

export class MockWordService {
    constructor() {

    }

    storeWord() {
        return Observable.from(['Ok']);
    }

    getWords() {
        return Observable.from([]);
    }
}