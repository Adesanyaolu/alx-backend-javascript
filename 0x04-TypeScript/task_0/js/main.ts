// Create an interface 
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

// Create 2 Students from the interface 
let student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'alabata'
};

let student2: Student = {
    firstName: 'Adesanya',
    lastName: 'Adenuga',
    age: 28,
    location: 'Canada'
};

const studentsList: Student[] = [student1, student2];

// Render a table 
const table = document.createElement('table');

// Create the header row for First Name
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
firstNameHeader.innerHTML = "First Name";
headerRow.appendChild(firstNameHeader);

// Create row for location 
var locationRow = document.createElement("tr");
var locationHeader = document.createElement("th");
locationHeader.innerHTML = "Location";
locationRow.appendChild(locationHeader);

// Loop through the studentsList array 
for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i];
    var row = document.createElement("tr");
    // Append Firstname
    var firstNameCell = document.createElement("td");
    firstNameCell.innerHTML = student.firstName;
    row.appendChild(firstNameCell);
    // Append Location 
    var locationCell = document.createElement("td");
    locationCell.innerHTML = student.location;
    row.appendChild(locationCell);
}

// document.body.append(table);


// console.log(table)

// console.log("Hello World")

// let sample: string = "Hello World";

// console.log (sample);

const hi = document.createElement('p');
hi.innerHTML = "Hello World";
document.body.append(hi);
console.log(hi);