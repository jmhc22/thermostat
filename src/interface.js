$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


  $.get('http://localhost:9292/temperature', function(data) {
    savedInfo = JSON.parse(data)
    thermostat._temp = Number(savedInfo.temp);
    thermostat._isPowerSaving = JSON.parse(savedInfo.power);
    $('#temperature').text(thermostat._temp);
    updateTemperature();
    $('#power-saving-status').text(thermostat.isSaving());
    displayWeather(savedInfo.location)
  });

  $('#city-submit').on('click', function() {
    displayWeather($("#city").val())
  })


  $('#temperature-up').on('click', function() {
    thermostat.up(Number($("#amount").val()));
    updateTemperature();
    saveTemp();
  })

  $('#temperature-down').on('click', function() {
    thermostat.down(Number($("#amount").val()));
    updateTemperature();
    saveTemp();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
    saveTemp();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.togglePowerSavingOn();
    $('#power-saving-status').text(thermostat.isSaving());
    updateTemperature();
    saveTemp();
    savePowerSavingStatus()
  })

  $('#powersaving-off').on('click', function() {
    thermostat.togglePowerSavingOff();
    $('#power-saving-status').text(thermostat.isSaving());
    savePowerSavingStatus()
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
      $('#current-weather').text(`${data.name}, ${data.sys.country}: ${data.main.temp}`);
      saveLocation(data.name);
    })
  }

  function saveTemp() {
    var data = { temperature: thermostat._temp }
    $.post('http://localhost:9292/temp', data);
  }

  function savePowerSavingStatus() {
    var data = { powersaving: thermostat._isPowerSaving }
    $.post('http://localhost:9292/powersaving', data);
  }

  function saveLocation(city) {
    var data = { location: city }
    $.post('http://localhost:9292/location', data);
  }
})
