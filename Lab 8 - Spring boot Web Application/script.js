document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const student = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        course: document.getElementById('course').value
    };

    fetch('http://localhost:8080/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        loadStudents();
        document.getElementById('studentForm').reset();
    })
    .catch(error => console.error('Error:', error));
});

function loadStudents() {
    fetch('http://localhost:8080/students')
        .then(response => response.json())
        .then(students => {
            const studentList = document.getElementById('studentList');
            studentList.innerHTML = '';
            students.forEach(student => {
                studentList.innerHTML += `
                    <div>
                        <p>Name: ${student.name}</p>
                        <p>Email: ${student.email}</p>
                        <p>Course: ${student.course}</p>
                        <hr>
                    </div>
                `;
            });
        });
}

// Load students when page loads
loadStudents();
