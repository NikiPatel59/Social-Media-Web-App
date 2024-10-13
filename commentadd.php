<?php
 include('connection.php');
 $sql = "insert into comment (comments,currentdate)". "values ('" . $_POST["inp"]. "',now())";
 $result = $conn->query($sql);
 if ($result == true){
   $sql = "select count(comments) from comment";
   $resulttt = $conn->query($sql);
  $row=mysqli_fetch_assoc($resulttt);
  print $row["count(comments)"];
 }
 else{
   echo "Hello";
 }
 ?>