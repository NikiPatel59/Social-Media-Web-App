<?php
 include('connection.php');
 $sql = "update likes set likee=likee+1 where likee=".$_POST["likcount"];
 $result = $conn->query($sql);
 $sql = "select likee from likes";
 $resultt = $conn->query($sql);
 $row=mysqli_fetch_assoc($resultt);
  print $row["likee"];
 ?>