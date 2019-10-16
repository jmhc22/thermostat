$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.up(Number($("#amount").val()));
    updateTemperature();
  })

  $('#temperature-down').on('click', function() {
    thermostat.down(Number($("#amount").val()));
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.togglePowerSavingOn();
    $('#power-saving-status').text("on");
    updateTemperature();
  })

  $('#powersaving-off').on('click', function() {
    thermostat.togglePowerSavingOff();
    $('#power-saving-status').text("off");
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.current());
    $('#power-usage').text(thermostat.usage());
    $('#temperature').attr('class', thermostat.usage());
    $('#style').attr('class', thermostat.usage());
  }
})
