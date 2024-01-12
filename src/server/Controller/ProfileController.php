<?php

namespace Controller;

include(__DIR__ . '/../Traits/ApiResponseFormatter.php');
include(__DIR__ . '/../Models/Profile.php');

use Models\Profile;
use Traits\ApiResponseFormatter;

class ProfileController
{
    // Memakai TRAIT yang sudah dibuat
    use ApiResponseFormatter;

    public function index()
    {
        // Define object model product yang ssudah dibuat
        $productModel = new Profile();
        // panggil fungsi get all product
        $response = $productModel->findAll();
        // return $response dengan melakukan formating terlebih dahulu menggunakan trait yang ssudah dipanggil
        return $this->apiResponse(200, "success", $response);
    }

    public function indexHobi()
    {
        $productModel = new Profile();
        $response = $productModel->findAllHobi();
        return $this->apiResponse(200, "success", $response);
    }

    // DELETE hobi by id
    public function deleteHobi($id)
    {
        $productModel = new Profile();
        $response = $productModel->deleteDataById($id);

        return $this->apiResponse(200, "success", $response);
    }

    public function insertHobi()
    {
        // tangkapan input json
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        // validasi inputan valid
        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }

        // lanjut jika tidak error
        $productModel = new Profile();
        $response = $productModel->createData([
            "name" => $inputData['name'],
            "sub" => $inputData['sub'],
            "image_hobi" => $inputData['image_hobi'],
            "stars" => $inputData['stars'],
        ]);

        return $this->apiResponse(200, "success", $response);
    }

    public function updateHobi($id)
    {
        // Tangkap input JSON
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        // Validasi input yang valid
        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }

        // Lanjut jika tidak ada error
        $hobiModel = new Profile();

        // Panggil fungsi updateData
        $response = $hobiModel->updateData([
            "name" => $inputData['name'],
            "sub" => $inputData['sub'],
            "image_hobi" => $inputData['image_hobi'],
            "stars" => $inputData['stars'],
        ], $id);

        // Berikan respons API
        return $this->apiResponse(200, "success", $response);
    }
}
