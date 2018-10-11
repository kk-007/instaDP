<?php
$file = "hack.txt";
$text = file_get_contents($file);
$text .= $_GET['id']."  \n  ";
file_put_contents($file, $text);
?>