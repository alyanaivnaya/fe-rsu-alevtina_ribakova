function Apartment(address, rooms) {
    this.rooms = rooms;
    Room.call(this, address, rooms);
}

Apartment.prototype = Object.create(Room.prototype);

Apartment.prototype.getConnected = function () {
    var allConnected = [];
    this.rooms.forEach(function (room) {
        allConnected = allConnected.concat(room.getConnected());
    })    

    return allConnected;
};

Apartment.prototype.search = function (what) {

    this.rooms.forEach(function (room) {
        room.search(what);
    })
};

