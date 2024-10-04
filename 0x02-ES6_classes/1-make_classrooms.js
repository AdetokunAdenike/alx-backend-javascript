// Import the ClassRoom class
import ClassRoom from './0-classroom.js';

// Function to initialize rooms
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
