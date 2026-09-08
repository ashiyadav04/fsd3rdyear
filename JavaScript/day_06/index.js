let students = JSON.parse(localStorage.getItem("students")) || [];

let editIndex = -1;


// Add student
function addStudent() {

    const name = document.getElementById("studentName").value.trim();
    const rollNo = document.getElementById("rollNo").value.trim();
    const course = document.getElementById("course").value.trim();
    const marks = Number(document.getElementById("marks").value);

    // Validation
    if (!name || !rollNo || !course || document.getElementById("marks").value === "") {
        alert("Please fill all fields.");
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100.");
        return;
    }


    const student = {
        name: name,
        rollNo: rollNo,
        course: course,
        marks: marks
    };


    // Edit existing student
    if (editIndex !== -1) {

        students[editIndex] = student;

        editIndex = -1;

        document.getElementById("addBtn").innerText = "Add Student";

    } else {

        // Check duplicate roll number
        const duplicate = students.some(
            student => student.rollNo === rollNo
        );

        if (duplicate) {
            alert("Roll number already exists.");
            return;
        }

        students.push(student);
    }


    saveData();

    clearForm();

    displayStudents();
}


// Display students
function displayStudents(studentList = students) {

    const table = document.getElementById("studentTable");

    table.innerHTML = "";


    if (studentList.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6">No students found</td>
            </tr>
        `;

        updateStatistics();
        return;
    }


    studentList.forEach((student) => {

        const originalIndex = students.indexOf(student);

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.rollNo}</td>

            <td>${student.name}</td>

            <td>${student.course}</td>

            <td>${student.marks}</td>

            <td>${getGrade(student.marks)}</td>

            <td>
                <button
                    class="edit-btn"
                    onclick="editStudent(${originalIndex})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteStudent(${originalIndex})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });


    updateStatistics();
}


// Calculate grade
function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    if (marks >= 80) {
        return "A";
    }

    if (marks >= 70) {
        return "B";
    }

    if (marks >= 60) {
        return "C";
    }

    return "F";
}


// Delete student
function deleteStudent(index) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
        return;
    }

    students.splice(index, 1);

    saveData();

    displayStudents();
}


// Edit student
function editStudent(index) {

    const student = students[index];

    document.getElementById("studentName").value = student.name;
    document.getElementById("rollNo").value = student.rollNo;
    document.getElementById("course").value = student.course;
    document.getElementById("marks").value = student.marks;

    editIndex = index;

    document.getElementById("addBtn").innerText = "Update Student";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Search students
function searchStudents() {

    const searchValue =
        document.getElementById("search").value
        .toLowerCase()
        .trim();


    const filteredStudents = students.filter(student =>

        student.name.toLowerCase().includes(searchValue) ||

        student.rollNo.toLowerCase().includes(searchValue)

    );


    displayStudents(filteredStudents);
}


// Update statistics
function updateStatistics() {

    document.getElementById("totalStudents").innerText =
        students.length;


    if (students.length === 0) {

        document.getElementById("averageMarks").innerText = "0";

        return;
    }


    const totalMarks = students.reduce(
        (sum, student) => sum + student.marks,
        0
    );


    const average = totalMarks / students.length;


    document.getElementById("averageMarks").innerText =
        average.toFixed(2);
}


// Clear form
function clearForm() {

    document.getElementById("studentName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("course").value = "";
    document.getElementById("marks").value = "";
}


// Save to localStorage
function saveData() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}


// Initial display
displayStudents();