<?php
include("include/head.html");

$p = @$_GET['p'];

switch($p){
    case 'home':
        require("include/home.html");
        break;
    case 'detail1':
        require("include/detail1.html");
        break;
    case 'detail2':
        require("include/detail2.html");
        break;
    case 'detail3':
        require("include/detail3.html");
        break;
    case 'detail4':
        require("include/detail4.html");
        break;
    case 'detail5':
        require("include/detail5.html");
        break;
    case 'detail6':
        require("include/detail6.html");
        break;
    default:
        require("include/home.html");
        break;
}



?>
