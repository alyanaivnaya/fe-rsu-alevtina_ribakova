function Laptop(name, connection, power) {
    Appliance.call(this, name, connection, power);
}

Laptop.prototype = Object.create(Appliance.prototype);