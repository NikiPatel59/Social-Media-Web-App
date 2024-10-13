 <?php
 include('connection.php');
 $sql = "select likee from likes";
 $resultt = $conn->query($sql);
 $row=mysqli_fetch_assoc($resultt);
 print $row["likee"];
  ?>