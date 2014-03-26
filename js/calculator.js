var Calculator = (function() {

    // Private methods
    var checkParams(){
        if (isNaN(paramA)) {
            throw new Error("Parameter A is not a number!")
        };
        if (isNaN(paramB)) {
            throw new Error("Parameter A is not a number!")
        };
    }

    // Private stuff up here
    var paramA = 0;
    var paramB = 0;

    // Public methods
    return {
        add: function(numA, numB) {
            this.paramA = numA;
            this.paramB = numB;

            checkParams();
            
            return (this.paramA + this.paramB);
        },

        subtract: function(numA, numB) {
            this.paramA = numA;
            this.paramB = numB;

            checkParams();
            
            return (this.paramA - this.paramB);
        },

        divide: function(numA, numB) {
          
            this.paramA = numA;
            this.paramB = numB;

            checkParams();
            
            if (numB === 0) {
                throw new Error("Division by zero error!");
            }


            return (this.paramA / this.paramB);

        }

        multiply: function(numA, numB) {
            
            this.paramA = numA;
            this.paramB = numB;

            checkParams();
        
            return (this.paramA * this.paramB);
        }
    }
}())