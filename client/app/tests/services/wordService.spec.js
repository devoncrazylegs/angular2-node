"use strict";
var word_service_1 = require("../../services/word.service");
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
describe('Service: WordService', function () {
    var backend, service;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                http_1.BaseRequestOptions,
                testing_2.MockBackend,
                word_service_1.WordService,
                {
                    deps: [
                        testing_2.MockBackend,
                        http_1.BaseRequestOptions
                    ],
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    }
                }
            ]
        });
        var testbed = testing_1.getTestBed();
        backend = testbed.get(testing_2.MockBackend);
        service = testbed.get(word_service_1.WordService);
    }));
    function setupConnections(backend, options) {
        backend.connections.subscribe(function (connection) {
            if (connection.request.url === '/store') {
                var responseOptions = new http_1.ResponseOptions(options);
                var response = new http_1.Response(responseOptions);
                connection.mockRespond(response);
            }
        });
    }
    it('should return the list of forms from the server on success', testing_1.async(function () {
        setupConnections(backend, {
            body: ["here:erehay", "frog:rogfay", "frog:rogfay", "hello there my name is tim:ellohay heretay ymay amenay sii imtay", "my name is john:ymay amenay sii ohnjay", "crazy:razycay", "I am a c:Ii mai ai cay", "I am a car:Ii mai ai arcay", "basket:asketbay", "car:arcay"],
            status: 200
        });
        service.getWords().subscribe(function (data) {
            expect(data).toBeDefined();
        });
    }));
});
//# sourceMappingURL=wordService.spec.js.map