document.addEventListener('DOMContentLoaded', function() {
    // Load students when page loads
    loadStudents();

    // Handle form submission
    document.getElementById('studentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const student = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            course: document.getElementById('course').value
        };

        // Send POST request to add student
        fetch('/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            loadStudents(); // Reload the students list
            document.getElementById('studentForm').reset(); // Clear the form
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error adding student');
        });
    });
});

function loadStudents() {
    // Fetch students from backend
    fetch('/students')
        .then(response => response.json())
        .then(students => {
            const studentsList = document.getElementById('studentsList');
            studentsList.innerHTML = ''; // Clear existing list

            students.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.course}</td>
                `;
                studentsList.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error loading students');
        });
}
