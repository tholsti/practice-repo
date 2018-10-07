<?php

class square {

  protected $x_coord = null;
  protected $y_coord = null;
  protected $piece = null;

  public function __construct($x, $y, $piece=null){
      $this->x_coord = $x;
      $this->y_coord = $y;
      $this->piece = new piece($piece);
  }

  protected function isDark() {
    
    if (isEven($this->x_coord) && isEven($this->y_coord)) {
      return true;
    }
    elseif (!isEven($this->x_coord) && !isEven($this->y_coord)) {
      return true;
    } else return false;
  }
  
  public function __toString()
  {
    return '<div class="' . ($this->isDark() ? 'dark' : 'light') . '">' . $this->piece . '</div>';
  }
  
}


function isEven($num) {
  if ($num % 2 === 0) return true;
  else return false;
}