<?php
$conn = mysqli_connect('localhost', 'root', 'dinesh', 'miniproject');
$result = $conn->query("SELECT SUGGESTION_ID,REQUEST,LIKES FROM comments WHERE LIKES>1000 ORDER BY LIKES DESC");
$comments = [];
while ($row = $result->fetch_assoc()) {
  $comments[] = $row;
}
$result->free();
$conn->close();

// format comments as HTML and send response
foreach ($comments as $comment) {
  echo '<div class="subreq" data-ID='.$comment['SUGGESTION_ID'].'>';
  echo '<p>'.$comment['REQUEST'].'</p>';
  echo '<div class="like_section">';
  echo '<button class="like_btn">';
  echo '<img src="./assets/like.png" class="like" >';
  echo ' <span id="count">'.$comment['LIKES'].'</span>';
  echo '</button>';
  echo '</div>';
  echo '<div class="line"></div>';
  echo '</div>';


//   echo '<span class="name">' . htmlspecialchars($comment['name']) . '</span>';
//   echo '<span class="comment">' . htmlspecialchars($comment['comment']) . '</span>';
//   echo '</div>';
}
?>