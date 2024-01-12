<?php

namespace Routes;

include(__DIR__ . '/../Controller/ProfileController.php');

use Controller\ProfileController;

class ProfileRoutes
{
    public function handle($method, $path)
    {
        // jika request method get dan path sama dengan '/api/galery'
        if ($method === 'GET' && $path === '/api/galery') {
            $controller = new ProfileController();
            echo $controller->index();
        }

        if ($method === 'GET' && $path === '/api/hobi') {
            $controller = new ProfileController();
            echo $controller->indexHobi();
        }

        // jika request method get dan path mengandung '/api/delete/id'
        if ($method === 'DELETE' && strpos($path, '/api/delete/id') === 0) {
            // extract id dari path
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new ProfileController();
            echo $controller->deleteHobi($id);
        }

        // jika request method put dan path mengandung '/api/product'
        if ($method === 'POST' && $path === '/api/addHobi') {
            $controller = new ProfileController();
            echo $controller->insertHobi();
        }

        if ($method === 'PUT' && strpos($path, '/api/hobi/update') === 0) {
            // extract id dan genre_name dari path
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new ProfileController();
            echo $controller->updateHobi($id);
        }
    }
}
