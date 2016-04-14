function factorial(n) {
	var a=1;
	for (var i=1;i<=n;i++) {
		a=a*i;
	}
	return a;
}
var n = parseInt(prompt("Enter n"));
document.write(n+"!="+factorial(n));