<?php

class board {

  public function __toString() {
    for ($i=1; $i < 9 ; $i++) { 
      $a[$i] = new square ($i,2,"P");
    }
    foreach ($a as $key => $value) {
      return "x " . $a[$key] . "<br> x ";
      
    }
  }


}