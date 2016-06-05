function LivingRoom(name, appliances) {
    // var tv = new TV('LG', true, 1500);
    // var laptop = new Laptop('Acer', true, 700);
    // var lamp = new Lamp('Sconce', false, 300);
    Room.call(this, name, appliances);
}

LivingRoom.prototype = Object.create(Room.prototype); 