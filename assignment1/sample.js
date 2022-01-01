console.log("This id first node");

var jsonPerson = '{"first_name":"billy", "age":23}';
var personObject = JSON.parse(jsonPerson);
console.log(personObject);