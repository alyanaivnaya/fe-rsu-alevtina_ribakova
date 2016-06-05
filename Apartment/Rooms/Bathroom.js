function Bathroom(name, appliances) {
    // var hairdryer = new Hairdryer('Babyliss', false, 800);
    // var washer = new Washer('Bosch', true, 2000);
    Room.call(this, name, appliances);
}

Bathroom.prototype = Object.create(Room.prototype); 