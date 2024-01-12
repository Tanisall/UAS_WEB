<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

include "Routes/ProfileRoutes.php";

use Routes\ProfileRoutes;

// tangkap request method
$method = $_SERVER['REQUEST_METHOD'];
// tangkap request path
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// panggil routes
$productRoute = new ProfileRoutes();
$productRoute->handle($method, $path);
