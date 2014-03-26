var Calculator = (function() {

    // Private methods
    var checkParams = function(){
        if (isNaN(paramA)) {
            throw new Error("Parameter A is not a number!");
        }
        if (isNaN(paramB)) {
            throw new Error("Parameter B is not a number!");
        }
    };

    // Private stuff up here
    var paramA = 0;
    var paramB = 0;

    // Public methods
    return {
        add: function(numA, numB) {
            paramA = numA;
            paramB = numB;

            checkParams();
            
            return (paramA + paramB);
        },
        subtract: function(numA, numB) {
            paramA = numA;
            paramB = numB;

            checkParams();
            
            return (paramA - paramB);
        },
        divide: function(numA, numB) {
          
            paramA = numA;
            paramB = numB;

            checkParams();
            
            if (numB === 0) {
                throw new Error("Division by zero error!");
            }

            return (paramA / paramB);

        },
        multiply: function(numA, numB) {
            
            paramA = numA;
            paramB = numB;

            checkParams();
        
            return (paramA * paramB);
        }
    };
}());