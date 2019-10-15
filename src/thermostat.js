function Thermostat() {
  this._temp = 20;
}

Thermostat.prototype.up = function(number) {
  this._temp += number;
}

Thermostat.prototype.down = function(number) {
  this._temp -= number;
}

Thermostat.prototype.current = function() {
  return this._temp;
}
