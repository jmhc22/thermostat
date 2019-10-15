describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature', function() {
    it('initial temperature is 20 degrees', function() {
      expect(thermostat.current()).toEqual(20);
    });
  });

  describe('thermostat temperature can be increased', function() {
    it('temperature increases by 1 degree', function(){
      expect(thermostat.current()).toEqual(20);
      thermostat.up(1);
      expect(thermostat.current()).toEqual(21);
    });

    it('temperature increases by 5 degrees', function(){
      expect(thermostat.current()).toEqual(20);
      thermostat.up(5);
      expect(thermostat.current()).toEqual(25);
    });
  });

  describe('thermostat temperature can be decreased', function() {
    it('temperature decreases by 1 degree', function(){
      expect(thermostat.current()).toEqual(20);
      thermostat.down(1);
      expect(thermostat.current()).toEqual(19);
    });

    it('temperature decreases by 3 degrees', function(){
      expect(thermostat.current()).toEqual(20);
      thermostat.down(3);
      expect(thermostat.current()).toEqual(17);
    });
  });
});
