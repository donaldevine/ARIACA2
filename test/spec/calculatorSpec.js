describe("Calculator", function() {
  var calculator;
  
  beforeEach(function() {
    calculator = new Calculator();
  });


  describe("When two numbers are added", function() {
    it("should return the sum", function() {
      
      //Arrange
      var numberA = 1;
      var numberB = 2;
      var expected = 3;

      //Act
      var result = calculator.add(numberA, numberB);

      //Assert
      expect(result).toEqual(3);

    });
  });

  describe("When two numbers are subtracted", function() {
    it("should return the difference", function() {
      
      //Arrange
      var numberA = 1;
      var numberB = 2;
      var expected = -1;

      //Act
      var result = calculator.subtract(numberA, numberB);

      //Assert
      expect(result).toEqual(expected);

    });
  });  

  describe("When two numbers are multiplied", function() {
    it("should return the product", function() {
      
      //Arrange
      var numberA = 2;
      var numberB = 4;
      var expected = 8;

      //Act
      var result = calculator.multiply(numberA, numberB);

      //Assert
      expect(result).toEqual(expected);

    });
  });  



  describe("When two numbers are divided", function() {

    it("should return the quotient", function() {
      
      //Arrange
      var numberA = 8;
      var numberB = 4;
      var expected = 2;

      //Act
      var result = calculator.divide(numberA, numberB);

      //Assert
      expect(result).toEqual(expected);

    });


    it("should throw an exception if there is an attempt to divide by zero.", function() {
      
      //Arrange
      var numberA = 1;
      var numberB = 0;
      var expected = "Division by zero error!";

      expect(function() {
        
        //Act
        var result = calculator.divide(numberA, numberB);

        //Assert        
      }).toThrowError(expected);
    });
  });
});
