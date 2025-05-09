<?php
include 'config.php';
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD Operations</title>
</head>
<body>
    <h1>Student Management System</h1>
    
    <!-- Create Form -->
    <h2>Add New Student</h2>
    <form action="create.php" method="POST">
        Name: <input type="text" name="name" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        Phone: <input type="text" name="phone" required><br><br>
        <input type="submit" value="Add Student">
    </form>

    <hr>

    <!-- Display Records -->
    <h2>Student List</h2>
    <?php
    $sql = "SELECT * FROM students";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        echo "<table border='1'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
        </tr>";

        while($row = mysqli_fetch_assoc($result)) {
            echo "<tr>
                <td>".$row['id']."</td>
                <td>".$row['name']."</td>
                <td>".$row['email']."</td>
                <td>".$row['phone']."</td>
                <td>
                    <a href='update.php?id=".$row['id']."'>Edit</a> |
                    <a href='delete.php?id=".$row['id']."' onclick='return confirm(\"Are you sure?\");'>Delete</a>
                </td>
            </tr>";
        }
        echo "</table>";
    } else {
        echo "No records found";
    }
    ?>
</body>
</html>
