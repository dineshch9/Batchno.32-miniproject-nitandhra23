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

$status = $_POST['s'];
$user_id =$_POST['rollno'];


if($status == 'false'){

$result = $conn->query("SELECT SUGGESTION_ID,REQUEST,LIKES FROM comments  WHERE LIKES<1000 ORDER BY LIKES  DESC");
$comments = [];
while ($row = $result->fetch_assoc()) {
  $comments[] = $row;
}
$result->free();


// format comments as HTML and send response
foreach ($comments as $comment) {
  echo '<div class="subreq" data-ID='.$comment['SUGGESTION_ID'].'>';
  echo '<p>'.$comment['REQUEST'].'</p>';
  echo '<div class="like_section">';
  echo '<button class="like_btn">';
  $comment_id =$comment['SUGGESTION_ID'];
  $stmt = $conn->prepare("SELECT * FROM likes WHERE SUGGESTION_ID = ? AND ROLLNO = ?");
$stmt->bind_param("ii", $comment_id, $user_id);
$stmt->execute();
$result = $stmt->get_result();
  if($result->num_rows > 0){
    echo '<img src="./assets/liked.png" class="liked" >';
  }
  else{
    echo '<img src="./assets/like.png" class="like" >';
  }
  echo ' <span id="count">'.$comment['LIKES'].'</span>';
  echo '</button>';
  echo '</div>';
  echo '<div class="line"></div>';
  echo '</div>';}

}

else {

  $result = $conn->query("SELECT SUGGESTION_ID,REQUEST,LIKES FROM comments  WHERE LIKES<1000 ORDER BY TIME DESC");
  $comments = [];
  while ($row = $result->fetch_assoc()) {
    $comments[] = $row;
  }
  $result->free();
  
  
  // format comments as HTML and send response
  foreach ($comments as $comment) {
    echo '<div class="subreq" data-ID='.$comment['SUGGESTION_ID'].'>';
    echo '<p>'.$comment['REQUEST'].'</p>';
    echo '<div class="like_section">';
    echo '<button class="like_btn">';
    $comment_id =$comment['SUGGESTION_ID'];
    $stmt = $conn->prepare("SELECT * FROM likes WHERE SUGGESTION_ID = ? AND ROLLNO = ?");
  $stmt->bind_param("ii", $comment_id, $user_id);
  $stmt->execute();
  $result = $stmt->get_result();
    if($result->num_rows > 0){
      echo '<img src="./assets/liked.png" class="liked" >';
    }
    else{
      echo '<img src="./assets/like.png" class="like" >';
    }
    echo ' <span id="count">'.$comment['LIKES'].'</span>';
    echo '</button>';
    echo '</div>';
    echo '<div class="line"></div>';
    echo '</div>';}
  



}

mysqli_close($conn);
http_response_code(200);
?>