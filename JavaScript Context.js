
// // Calculator v1
// function Calculator(leftOperand){
//     this.leftOperand = leftOperand;
    
//     this.add = function(rightOperand) {        
//         return (leftOperand + rightOperand);
//     }
//     this.subtract = function(rightOperand) {
//         return (leftOperand - rightOperand);
//     }
//     this.multiply = function(rightOperand) {
//         return (leftOperand * rightOperand);
//     }
//     this.divide = function(rightOperand) {
//         return (leftOperand / rightOperand);
//     }
// }

// var calc = new Calculator(12);
// document.write(calc.multiply(2)); //24
// document.write(calc.add(3)); //15
// document.write(calc.subtract(1)); //11
// document.write(calc.divide(2)); //6

// Calculator v2
function Calculator(leftOperand) {
	this.leftOperand = leftOperand;
    
    this.add = function(rightOperand) {        
        leftOperand = leftOperand + rightOperand;
        return leftOperand;
    }
    this.subtract = function(rightOperand) {        
        leftOperand = leftOperand - rightOperand;
        return leftOperand;
    }
    this.multiply = function(rightOperand) {
        leftOperand = leftOperand * rightOperand;
        return this;
    }
    this.divide = function(rightOperand) {
        leftOperand = leftOperand / rightOperand;
        return this;
    }
}

var calc = new Calculator(12);
alert(calc.multiply(2).add(3)); // 27

// // Calculator v3
// function Calculator(leftOperand){
//     this.leftOperand = leftOperand;
    
//     this.add = function() {  
//         for(var i=0; i<arguments.length; i++) {
//             leftOperand = leftOperand + arguments[i];
//         }      
//         return (leftOperand);
//     }
//     this.subtract = function() {
//         for(var i=0; i<arguments.length; i++) {
//             leftOperand = leftOperand - arguments[i];
//         }
//         return (leftOperand);
//     }
//     this.multiply = function() {
//         for(var i=0; i<arguments.length; i++) {
//             leftOperand = leftOperand * arguments[i];
//         }
//         return (leftOperand);
//     }
//     this.divide = function() {
//         for(var i=0; i<arguments.length; i++) {
//             leftOperand = leftOperand / arguments[i];
//         }
//         return (leftOperand);
//     }
// }

// var calc = new Calculator(12);

//Various number of arguments
// document.write(calc.multiply(2, 2, 4, 5)); 
// document.write(calc.add(3, 1, 2)); 
// document.write(calc.subtract(1, 4, 2, 1)); 
// document.write(calc.divide(2, 6));