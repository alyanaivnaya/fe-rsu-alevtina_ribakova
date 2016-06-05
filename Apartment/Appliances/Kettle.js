function Kettle(name, connection, power) {
    Appliance.call(this, name, connection, power);
}

Kettle.prototype = Object.create(Appliance.prototype);