 <?php
 include('connection.php');
 $sql = "select count(comments) from comment";
 $resultt = $conn->query($sql);
 $row=mysqli_fetch_assoc($resultt);
 print $row["count(comments)"];
 ?>