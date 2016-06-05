function Lamp(name, connection, power) {
    Appliance.call(this, name, connection, power);
}

Lamp.prototype = Object.create(Appliance.prototype);