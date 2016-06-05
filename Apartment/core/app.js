function Application() {

}

Application.prototype.start = function () {
    // var small = new Small();
    // small.showWeight();
    // small.search('xxl');

    // var middle = new Middle();
    // middle.showWeight();
    // middle.search('apple');

    // var full = new Full();
    // full.showWeight();
    // full.search('lime');
    
    var myApartment = new MyApartment();
    
    myApartment.showConnected();    
    myApartment.showPower();
    myApartment.search('lamp');    
};