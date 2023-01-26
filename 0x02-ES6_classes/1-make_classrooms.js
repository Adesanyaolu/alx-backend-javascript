import ClassRoom from './0-classroom.js';

function initializeRooms() {
    const roomSizes = [19, 20, 34];
    const rooms = [];

    for (let size of roomSizes) {
        const room = new ClassRoom(size);
        rooms.push(room);
    }
    return rooms;
}

const myRooms = initializeRooms();
console.log(myRooms); // Output: [ClassRoom { _maxStudentsSize: 19 }, ClassRoom { _maxStudentsSize: 20 }, ClassRoom { _maxStudentsSize: 34 }]

