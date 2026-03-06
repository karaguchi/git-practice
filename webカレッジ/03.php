<?php // 03-01
    $a = 10;
    var_dump($a);
    $a = "Hello";
    var_dump($a);
?>
<br>
<br>
<?php // 変数 上書き可能
    $num = 10;
    $s = 'シングルクォートは変数展開されない:$num' . '<br>';
    echo $s;
    $d = "ダブルクォートは変数展開される:$num" . "<br>";
    echo $d;
?>
<br>
<br>
<?php //定数 変数と区別するために大文字で書く癖を付ける
    define ('DB_USER', 'root');
    echo DB_USER;
    define ('DB_USER', 'root2');
    echo DB_USER;
