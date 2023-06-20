document.getElementById("convertBtn").addEventListener("click", function() {
    // Obtener los valores de entrada
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("from").value;
    var toUnit = document.getElementById("to").value;
  
    // Realizar la conversión
    var convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);
  
    // Mostrar el resultado en una alerta
    alert("Resultado: " + convertedTemperature.toFixed(2));
  });
  
  function convertTemperature(temperature, fromUnit, toUnit) {
    // Convertir la temperatura a Celsius
    if (fromUnit === "fahrenheit") {
      temperature = (temperature - 32) * 5 / 9;
    } else if (fromUnit === "kelvin") {
      temperature = temperature - 273.15;
    }
  
    // Convertir la temperatura de Celsius a la unidad deseada
    if (toUnit === "fahrenheit") {
      temperature = (temperature * 9 / 5) + 32;
    } else if (toUnit === "kelvin") {
      temperature = temperature + 273.15;
    }
  
    return temperature;
  }
  