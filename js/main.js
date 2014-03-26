 var add = function () {
       var numberA = $('#numA').val();
      var numberB = $('#numB').val();

     
      $('#result').val(Calculator.add(numberA, numberB));
 	
 }; 

window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
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