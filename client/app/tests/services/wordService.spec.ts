import { WordService } from "../../services/word.service";
import { async, getTestBed, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection} from '@angular/http/testing';

describe('Service: WordService', () => {
    let backend,
        service;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                WordService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(WordService);
    }));

    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === '/store') {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }

    it('should return the list of forms from the server on success', async(() => {
        setupConnections(backend, {
            body: ["here:erehay","frog:rogfay","frog:rogfay","hello there my name is tim:ellohay heretay ymay amenay sii imtay","my name is john:ymay amenay sii ohnjay","crazy:razycay","I am a c:Ii mai ai cay","I am a car:Ii mai ai arcay","basket:asketbay","car:arcay"],
            status: 200
        });

        service.getWords().subscribe((data) => {
            expect(data).toBeDefined();
        });
    }));
});