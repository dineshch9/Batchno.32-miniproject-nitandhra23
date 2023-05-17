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
$REQUEST = $_POST['comment'];
$CREATER  = $_POST['CREATER'];
$ID =time()+$CREATER;
$stmt = $conn->prepare("INSERT INTO likes(SUGGESTION_ID,ROLLNO) VALUES (6,7)");
//   $stmt->bind_param("ii", $comment_id, $user_id);
  $stmt->execute();



$sql = "INSERT INTO comments(SUGGESTION_ID,REQUEST,CREATER) VALUES ($ID,'$REQUEST',$CREATER)";


if (mysqli_query($conn, $sql)) {
    // Registration successful, display success message
    echo '<div style="background-color: skyblue; color: white; padding: 10px;">';
    echo 'You are successfully registered!';
    echo '</div>';
    // Add a button with a link to go back to home page
    echo '<div style="text-align:center;background-color:silver"';
    echo '</div>';
    echo '<a href="upi.html"><button style="padding: 10px 10px;">Return to Home</button></a>';
    echo '</div>';
} else {
    // Registration unsuccessful, display error message
    echo '<div style="background-color: red; color: white; padding: 10px;">';
    echo 'Error: ' . mysqli_error($conn);
    echo '</div>';
}

// Close database connection
mysqli_close($conn);
http_response_code(200);
?>
