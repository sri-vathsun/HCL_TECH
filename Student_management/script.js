function insertStudent(event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var regno = document.getElementById("regno").value.trim();
    var grade = document.getElementById("grade").value.trim();

    if (name === "" || regno === "" || grade === "") {
        alert("Please fill in all fields.");
        return;
    }   
    var students = JSON.parse(localStorage.getItem("students") || "[]");
    students.push({
        name: name,
        regno: regno,
        grade: grade
    });
    localStorage.setItem("students", JSON.stringify(students));
    alert("Student inserted successfully.");
    window.location.replace("view.html");
}

function displayStudents() {
    var tbody = document.getElementById("studentTableBody");
    var students = JSON.parse(localStorage.getItem("students") || "[]");
    tbody.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
        var row = tbody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.textContent = students[i].name;
        cell2.textContent = students[i].regno;
        cell3.textContent = students[i].grade;
    }
}

function deleteStudent(event) {
    event.preventDefault();
    var regno = document.getElementById("regno").value.trim();
    if (regno === "") {
        alert("Please enter a registration number.");
        return;
    }
    var students = JSON.parse(localStorage.getItem("students") || "[]");
    var updatedStudents = students.filter(function(student) {
        return student.regno !== regno;
    });
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    alert("Student deleted successfully.");
    window.location.replace("view.html");
}