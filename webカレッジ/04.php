<?php // 配列
    $a  = array("red","green","blue");
    var_dump($a);
?>
<br>
<br>
<?php
    $a  = array();
    $a[]    = "pink";
    $a[]    = "yellow";
    $a[]    = "orange";
    var_dump($a);
?>
<br>
<br>
<?php // 連想配列
    $fruits             = array();
    $fruits['banana']   = 80;
    $fruits['apple']    = 100;
    $fruits['orange']   = 200;
    var_dump($fruits);
?>
<br>
<br>
<?php // 2次元配列
    $test               = array();
    $test[]             = 100;