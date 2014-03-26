 var add = function () {
       var numberA = $('#numA').val();
      var numberB = $('#numB').val();

     
      $('#result').val(Calculator.add(numberA, numberB));
 	
 }; 

var subtract = function () {
       var numberA = $('#numA').val();
      var numberB = $('#numB').val();

     
      $('#result').val(Calculator.subtract(numberA, numberB));
 	
 };

 var divide = function () {
       var numberA = $('#numA').val();
      var numberB = $('#numB').val();

     
      $('#result').val(Calculator.divide(numberA, numberB));
 	
 };

  var multiply = function () {
       var numberA = $('#numA').val();
      var numberB = $('#numB').val();

     
      $('#result').val(Calculator.multiply(numberA, numberB));
 	
 };