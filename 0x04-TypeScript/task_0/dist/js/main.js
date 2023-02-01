;
// Create 2 Students from the interface 
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'alabata'
};
var student2 = {
    firstName: 'Adesanya',
    lastName: 'Adenuga',
    age: 28,
    location: 'Canada'
};
var studentsList = [student1, student2];
// Render a table 
var table = document.createElement('table');
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
var hi = document.createElement('p');
hi.innerHTML = "Hello World";
document.body.append(hi);
console.log(hi);
//# sourceMappingURL=main.js.map