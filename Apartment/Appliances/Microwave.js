function Microwave(name, connection, power) {
    Appliance.call(this, name, connection, power);
}

Microwave.prototype = Object.create(Appliance.prototype);