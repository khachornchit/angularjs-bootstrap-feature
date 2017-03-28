describe('getValue', function () {

    var someService;

    // load the module 
    beforeEach(module('plutoSolutions.services'));

    // inject the service 
    beforeEach(inject(function (_someService_) {
        someService = _someService_;
    }));

    it('should exist', function () {
        expect(someService).to.be.ok;
    });

    it('should have a method called foo', function () {
        expect(someService.foo).to.be.a('function');
    });

});