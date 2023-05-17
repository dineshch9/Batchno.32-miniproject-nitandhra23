<?php
// Set up MySQL database connection
$servername = "localhost";
$username = "root";
$password = "dinesh";
$dbname = "miniproject";
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check if connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data and insert into database
$FirstName = $_POST["FirstName"];
$LastName = $_POST["LastName"];
$email = $_POST["email"];
$Amount = $_POST["Amount"];
$Affliation = $_POST["Affliation"];
$Department = $_POST["Department"];
$State = $_POST["State"];
$Transaction = $_POST["Transaction"];
$Contact = $_POST["Contact"];
$wish = $_POST["wish"];
$mode = $_POST["mode"];
$sql = "INSERT INTO donar(FirstName,LastName,email,Amount,Batch,Department,State,TransactionID,Contact,WISH,MODE) VALUES ('$FirstName','$LastName','$email','$Amount','$Affliation','$Department','$State','$Transaction','$Contact','$wish','$mode')";

if (mysqli_query($conn, $sql)) {
    // Registration successful, display success message
    echo '<div style="background-color: skyblue; color: white; padding: 10px;">';
    echo 'successfully submitted!';
    echo '</div>';
    // Add a button with a link to go back to home page
    echo '<div style="text-align:center;background-color:silver"';
    echo '</div>';
    echo '<a href="donation.html"><button style="padding: 10px 10px;">Return to Home</button></a>';
    echo '</div>';
} else {
    // Registration unsuccessful, display error message
    echo '<div style="background-color: red; color: white; padding: 10px;">';
    echo 'Error: ' . mysqli_error($conn);
    echo '</div>';
}

// Close database connection
mysqli_close($conn);
?>
