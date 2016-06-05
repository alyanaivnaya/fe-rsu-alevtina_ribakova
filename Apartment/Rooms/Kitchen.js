function Kitchen(name, appliances) {
    // var microwave = new Microwave('Samsung', true, 1000);
    // var kettle = new Kettle('Vitek', true, 800);
    // var lamp = new Lamp('Desktop', false, 300);
    Room.call(this, name, appliances);
}

Kitchen.prototype = Object.create(Room.prototype); 