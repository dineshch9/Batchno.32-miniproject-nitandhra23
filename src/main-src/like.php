<?php

// Connect to database
$servername = "localhost";
$username = "root";
$password = "dinesh";
$dbname = "miniproject";
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get comment ID and user ID from POST request
$comment_id = $_POST['ID'];
$user_id = $_POST['rollno'];

// Check if the user has already liked the comment
$stmt = $conn->prepare("SELECT * FROM likes WHERE SUGGESTION_ID = ? AND ROLLNO = ?");
$stmt->bind_param("ii", $comment_id, $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {

} else {
//   User has not liked the comment before, so insert a new record in the likes table
  $stmt = $conn->prepare("INSERT INTO likes(SUGGESTION_ID,ROLLNO) VALUES (?,?)");
  $stmt->bind_param("ii", $comment_id, $user_id);
  $stmt->execute();







  // Update the like count for the comment
  $stmt = $conn->prepare("UPDATE comments SET LIKES = LIKES + 1 WHERE SUGGESTION_ID = ?");
  $stmt->bind_param("i", $comment_id);
  $stmt->execute();



  $stmt = $conn->prepare("SELECT LIKES FROM comments WHERE SUGGESTION_ID = ? ");
  $stmt->bind_param("i", $comment_id);
  $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  $count = $row['LIKES'];
  http_response_code(201);
  echo $count;


}

// Close database connection
$conn->close();

?>
