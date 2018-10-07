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
$black_king = new piece("k");
// var_dump($black_king);
echo $black_king; 

$square = new square(1,0,"p");
echo $square;
// var_dump ($square);



$a2 = new square(1, 2);
$b2 = new square(2, 2, $white_queen);
$c2 = new square(3, 2, $black_pawn);
$d2 = new square(4, 2);
echo $a2;
echo $b2;
echo $c2;
echo $d2;

$board = new board();
echo $board;

?>
</body>
</html>