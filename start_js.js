

//task 2
function Area(a, b) {
    return (a * b)/2;
}
var a,b;
a = prompt("Enter the first side length");
b = prompt("Enter the second side length");
alert("Triangle's area is " + Area(a, b))

//task 3
function ArrayReverse(myarray,a) {
	var reversed=[], i=0;
	
	switch (a) {
	case 1:
		for(var i=0;i<myarray.length;i++) {
			reversed[myarray.length-i-1]=myarray[i];
		}
		break;
	case 2:
		while (i<myarray.length) {
			reversed[myarray.length-i-1]=myarray[i];
			i++;
		}
		break;
	case 3:
		do {
			reversed[myarray.length-i-1]=myarray[i];
			i++;
		} while (i<myarray.length)
		break;
	default:
		document.write("error");
	}
	for(var i = 0; i < myarray.length; i++) {
    document.write(reversed[i]+' ');
	}
}

var myarray = ["1", "2", "3", "4"];
var a = parseInt(prompt("Enter type of loop: 1 - for, 2 - while, 3 - do while"));
ArrayReverse(myarray,a);


