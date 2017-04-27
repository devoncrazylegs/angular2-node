"use strict";
var testing_1 = require("@angular/core/testing");
var PigLatinComponent_1 = require("../../components/PigLatinComponent");
var word_service_1 = require("../../services/word.service");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var mockWordService_1 = require("../mocks/services/mockWordService");
var forms_1 = require("@angular/forms");
var comp, fixture, searchInput, submitButton;
describe("Component: PigLatinComponent", function () {
    var mockWordService;
    beforeEach(testing_1.async(function () {
        mockWordService = new mockWordService_1.MockWordService();
        testing_1.TestBed.configureTestingModule({
            declarations: [
                PigLatinComponent_1.PigLatinComponent
            ],
            providers: [
                {
                    provide: word_service_1.WordService, useValue: mockWordService
                }
            ],
            imports: [
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(PigLatinComponent_1.PigLatinComponent);
        });
    }));
    beforeEach(function () {
        searchInput = fixture.nativeElement.querySelector("#word-to-pigify");
        submitButton = fixture.nativeElement.querySelector("#submit-button");
        comp = fixture.componentInstance;
    });
    it("Should dependancy inject an instance of the word service", function () {
        expect(comp._wordService).toBeDefined();
    });
    it("Should check that 'pigLatinReturn' is set and empty", function () {
        expect(comp.pigLatinReturn).toEqual("");
    });
    it("Should reset 'pigLatinReturn to an empty string if any button other than return is pressed", testing_1.async(function () {
        comp.pigLatinReturn = "test";
        comp.keyInput(2);
        fixture.detectChanges();
        expect(comp.pigLatinReturn).toEqual("");
    }));
    it("Should not change 'pigLatinReturn to an empty string if return key is pressed", testing_1.async(function () {
        comp.pigLatinReturn = "test";
        comp.keyInput(13);
        fixture.detectChanges();
        expect(comp.pigLatinReturn).toEqual("test");
    }));
    it("Should ensure pigLatinReturn is not changed if input string is empty", function () {
        submitButton.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(comp.pigLatinReturn).toEqual('');
    });
    it("Should check pigLatinReturn holds new value when input has value", function () {
        comp.parseInput('test');
        fixture.detectChanges();
        expect(comp.pigLatinReturn).toEqual('esttay');
    });
});
//# sourceMappingURL=PigLatin.component.spec.js.map