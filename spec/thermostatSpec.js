describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('new Thermostat', function() {
    it('initial temperature is 20 degrees', function() {
      expect(thermostat.current()).toEqual(20);
    });
    it('power saving is on by default', function() {
      expect(thermostat._isPowerSaving).toBe(true);
    });
  });

  describe('.up', function() {
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

    it('temperature only goes to 25 degrees if power saving', function(){
      expect(thermostat.current()).toEqual(20);
      thermostat.up(10);
      expect(thermostat.current()).toEqual(25);
    });

    it('temperature goes to 32 degrees if not power saving', function(){
      expect(thermostat.current()).toEqual(20);
      thermostat.togglePowerSavingOff();
      thermostat.up(15);
      expect(thermostat.current()).toEqual(32);
    });
  });

  describe('.down', function() {
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

    it('temp cannot be lowered below 10', function() {
      thermostat.down(10);
      thermostat.down(1);
      expect(thermostat.current()).toEqual(10);
    });

    it('if down number makes temp go below 10 will still only be set to 10', function() {
      thermostat.down(15);
      expect(thermostat.current()).toEqual(10);
    });

    it('if temp is above 25 and you turn on power saving it will snap down to 25', function() {
      thermostat.togglePowerSavingOff();
      thermostat.up(8);
      expect(thermostat.current()).toEqual(28);
      thermostat.togglePowerSavingOn();
      expect(thermostat.current()).toEqual(25);
    });
  });

  describe('.reset', function() {
    it('resets temp to 20 degrees', function() {
      thermostat.down(5);
      thermostat.reset();
      expect(thermostat.current()).toEqual(20);
    });
  });

  describe('.usage', function() {
    it('reports low-usage for temps below 18', function() {
      thermostat.down(3);
      expect(thermostat.usage()).toEqual("low-usage");
    });

    it('reports medium-usage for temps between 18 and 24', function() {
      thermostat.up(4);
      expect(thermostat.usage()).toEqual("medium-usage");
    });

    it('reports high-usage for temps above 24', function() {
      thermostat.togglePowerSavingOff();
      thermostat.up(8);
      expect(thermostat.usage()).toEqual("high-usage");
    });
  });
});
