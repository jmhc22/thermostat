$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  displayWeather('london')


  $('#city-submit').on('click', function() {
    displayWeather($("#city").val())
  })


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

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city;
    var appid = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var unit = '&units=metric';
    $.get(url+appid+unit, function(data) {
      $('#current-weather').text(data.name + ": " + data.main.temp);
    })
  }
})
