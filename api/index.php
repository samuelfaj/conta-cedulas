<?php
    error_reporting(E_ERROR);
    header('Content-Type: application/json');

    require_once '../vendor/autoload.php';

    $params = explode('/', $_GET['params']);
    $class  = "Classes\\" . $params[0];
    $call   = array(new $class, $params[1]);

    echo json_encode(call_user_func_array($call, array_slice($params, 2)));