import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { PigLatinComponent } from "../../components/PigLatinComponent";
import { WordService } from "../../services/word.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { MockWordService } from "../mocks/services/mockWordService";
import { FormsModule } from "@angular/forms";

let comp        : PigLatinComponent,
    fixture     : ComponentFixture<PigLatinComponent>,
    searchInput,
    submitButton;

describe("Component: PigLatinComponent", () => {
    let mockWordService;

    beforeEach(async(() => {
        mockWordService = new MockWordService();

        TestBed.configureTestingModule({
            declarations: [
                PigLatinComponent
            ],
            providers: [
                {
                    provide: WordService, useValue: mockWordService
                }
            ],
            imports: [
                HttpModule,
                FormsModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
        .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(PigLatinComponent);
            });
    }));

    beforeEach(() => {
        searchInput = fixture.nativeElement.querySelector("#word-to-pigify");
        submitButton = fixture.nativeElement.querySelector("#submit-button");
        comp = fixture.componentInstance;
    });

    it("Should dependancy inject an instance of the word service", () => {
        expect(comp._wordService).toBeDefined();
    });

    it("Should check that 'pigLatinReturn' is set and empty", () => {
        expect(comp.pigLatinReturn).toEqual("");
    });

    it("Should reset 'pigLatinReturn to an empty string if any button other than return is pressed", async(() => {
        comp.pigLatinReturn = "test";
        comp.keyInput(2);

        fixture.detectChanges();
        expect(comp.pigLatinReturn).toEqual("");
    }));

    it("Should not change 'pigLatinReturn to an empty string if return key is pressed", async(() => {
        comp.pigLatinReturn = "test";
        comp.keyInput(13);

        fixture.detectChanges();
        expect(comp.pigLatinReturn).toEqual("test");
    }));

    it("Should ensure pigLatinReturn is not changed if input string is empty", () => {
        submitButton.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(comp.pigLatinReturn).toEqual('');
    });

    it("Should check pigLatinReturn holds new value when input has value", () => {
        comp.parseInput('test');
        fixture.detectChanges();
        expect(comp.pigLatinReturn).toEqual('esttay');
    });
});