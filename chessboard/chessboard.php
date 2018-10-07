<?php

include "board.php";
include "square.php";
include "piece.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="main.css">
  <title>Document</title>
</head>
<body>
  <?php
$king = new piece("K");
// var_dump($king);
echo $king;
?>
</body>
</html>