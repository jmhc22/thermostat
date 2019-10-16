function Thermostat() {
  this._temp = 20;
  this._isPowerSaving = true;
  this._tempLimit = function() {
      if(this._isPowerSaving) {
      return 25;
    } else {
      return 32;
    }
  }
}

Thermostat.prototype.up = function(number) {
  if(this._temp + number <= this._tempLimit()) {
    this._temp += number;
  } else {
    this._temp = this._tempLimit();
  }
}

Thermostat.prototype.down = function(number) {
  if(this._temp - number >= 10) {
    this._temp -= number;
  } else {
    this._temp = 10;
  }
}

Thermostat.prototype.current = function() {
  return this._temp;
}

Thermostat.prototype.togglePowerSavingOff = function() {
  this._isPowerSaving = false;
}

Thermostat.prototype.togglePowerSavingOn = function() {
  this._isPowerSaving = true;
  if(this._temp > 25) {
    this._temp = 25;
  }
}

Thermostat.prototype.reset = function() {
  this._temp = 20;
}

Thermostat.prototype.usage = function() {
  if(this._temp < 18) {
    return "low-usage";
  } else if(this._temp >= 25) {
    return "high-usage";
  } else {
    return "medium-usage";
  }
}
