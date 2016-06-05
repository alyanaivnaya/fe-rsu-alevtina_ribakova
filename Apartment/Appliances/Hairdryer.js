function Hairdryer(name, connection, power) {
    Appliance.call(this, name, connection, power);
}

Hairdryer.prototype = Object.create(Appliance.prototype);