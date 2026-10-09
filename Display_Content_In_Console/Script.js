const display = new Map();

function displayData() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const output = document.getElementById("output");

    display.set("name", name);
    display.set("age", age);

    output.textContent = `Map {
  "name" => "${name}",
  "age" => "${age}"
}`;

    console.log(display);
}
