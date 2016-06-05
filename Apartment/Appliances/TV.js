function TV(name, connection, power) {
    Appliance.call(this, name, connection, power);
}

TV.prototype = Object.create(Appliance.prototype);