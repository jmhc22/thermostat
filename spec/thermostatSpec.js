describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature', function() {
    it('initial temperature is 20 degrees', function() {
      expect(thermostat.status.temp).toEqual(20);
    });
  });
});
