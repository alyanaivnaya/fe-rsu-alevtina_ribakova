function Appliance(name, connection, power) {
    this.name = name;
    this.connection = connection;
    this.power = power;
}

Appliance.prototype.getName = function () {
    return this.name;
};

Appliance.prototype.isConnected = function () {
    return this.connection;
};

Appliance.prototype.setOn = function () {
    this.connection = true;
};

Appliance.prototype.setOff = function () {
    this.connection = false;
};

Appliance.prototype.getPower = function () {
    return this.power;
};

Appliance.prototype.showPower = function () {
    console.info('Power of ' + this.getName() + ' is ' + this.getPower());
};

Appliance.prototype.checkIfHas = function (what) {
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        return true;
    }
};