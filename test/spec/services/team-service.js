'use strict';

describe('Service: TeamService', function () {

  // load the service's module
  beforeEach(module('tmntApp'));

  // instantiate service
  var TeamService;
  beforeEach(inject(function (_TeamService_) {
    TeamService = _TeamService_;
  }));

  it('should do something', function () {
    expect(!!TeamService).toBe(true);
  });

});
