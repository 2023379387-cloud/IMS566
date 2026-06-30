// =========================
// REGISTER STUDENT
// =========================

const registerForm = document.querySelector("#registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let students = JSON.parse(localStorage.getItem("students")) || [];

        // Generate Student ID
        let nextId = 1;

        if (students.length > 0) {
            nextId = students[students.length - 1].id + 1;
        }

        const student = {

            id: nextId,

            name: document.querySelector("#fullname").value,

            email: document.querySelector("#email").value,

            username: document.querySelector("#username").value

        };

        students.push(student);

        localStorage.setItem("students", JSON.stringify(students));

        alert("Student Registered Successfully!");

        window.location.href = "students.html";

    });

}


// =========================
// DISPLAY STUDENTS
// =========================

const studentTable = document.querySelector("#studentTable");

if (studentTable) {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    studentTable.innerHTML = "";

    students.forEach(student => {

        studentTable.innerHTML += `

        <tr>

            <td>${student.id}</td>

            <td>${student.name}</td>

            <td>${student.email}</td>

            <td>${student.username}</td>

            <td>

                <button onclick="deleteStudent(${student.id})">

                    🗑 Delete

                </button>

            </td>

        </tr>

        `;

    });

}



// =========================
// DELETE STUDENT
// =========================

function deleteStudent(id){

    if(confirm("Are you sure you want to delete this student?")){

        let students = JSON.parse(localStorage.getItem("students")) || [];

        students = students.filter(student => student.id !== id);

        // Re-number IDs
        students = students.map((student,index)=>{

            return{

                id:index+1,

                name:student.name,

                email:student.email,

                username:student.username

            };

        });

        localStorage.setItem("students",JSON.stringify(students));

        location.reload();

    }

}



// =========================
// TOTAL STUDENTS
// =========================

const totalStudents = document.querySelector("#totalStudents");

if(totalStudents){

    let students = JSON.parse(localStorage.getItem("students")) || [];

    totalStudents.innerHTML = students.length;

}