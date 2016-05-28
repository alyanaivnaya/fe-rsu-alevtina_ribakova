var shape = {
    type: undefined,
    getType: function() {
        document.write(this.type);
    },
    getPerimeter: function() {      
        document.write(this.perimeter);
    },
    draw: function() {
        document.write(this.type + ' is drawn');
    }
}

function Triangle(a,b,c) {
    this.prototype = shape;
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
    this.perimeter = this.a + this.b + this.c;
}

function Square(a,b,c,d) {
    this.prototype = shape;
    this.type = 'square';
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.perimeter = this.a + this.b + this.c + this.d;
}

var greenSquare = new Square(5,5,5,5);

greenSquare.color = 'green';
greenSquare.getColor = function () {
    document.write(this.color);
}
greenSquare.getSquare = function () {
    var square = this.a * this.b * this.c * this.d;
    document.write(square);
}

var redTriangle = new Triangle(4,4,4);


greenSquare.getType();
greenSquare.getPerimeter();
greenSquare.draw();
// greenSquare.getColor();
// greenSquare.getSquare();
redTriangle.getType();
redTriangle.getPerimeter();
redTriangle.draw();
// greenSquare.getColor();
// greenSquare.getSquare();