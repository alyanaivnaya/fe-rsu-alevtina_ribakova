function Room(name, appliances) {
    this.appliances = appliances;
    Appliance.call(this, name, this.getPower());
}

Room.prototype = Object.create(Appliance.prototype);

Room.prototype.getConnected = function () {
    var allConnected = [];

    for (var i = 0; i < this.appliances.length; i++) {
        if (this.appliances[i].isConnected()) {
            allConnected = allConnected.concat(this.appliances[i]);
        }        
    }

    return allConnected;
};

Room.prototype.showConnected = function () {
    var allConnected = this.getConnected();
    console.info('Now connected: ');
    if (allConnected.length !== 0) {
        for (var i = 0; i < allConnected.length; i++) {
            console.info(allConnected[i].getName());
        }
    }
    else {
        console.info('no connected aplliances searched');
    }
};

Room.prototype.getPower = function () {
    var totalPower = 0;
    var allConnected = this.getConnected();

    for (var i = 0; i < allConnected.length; i++) {
        totalPower += allConnected[i].getPower();
    }

    return totalPower;
};

Room.prototype.showPower = function () {
    var totalPower = this.getPower();
    console.info('Now total power is ' + totalPower + ' watts');
};

Room.prototype.search = function (what) {
    var roomName = this.getName();

    this.appliances.forEach(function (appliance) {
        if (appliance.checkIfHas(what)) {
            console.info('"' + what + '" has been found in ' + roomName + ' (' + appliance.getName() + ')');
        }
    })
};