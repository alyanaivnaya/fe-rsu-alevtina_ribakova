function Washer(name, connection, power) {
    Appliance.call(this, name, connection, power);
}

Washer.prototype = Object.create(Appliance.prototype);