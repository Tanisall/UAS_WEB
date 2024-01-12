<?php

namespace Models;

include(__DIR__ . '/../Config/DatabaseConfig.php');

use Config\DatabaseConfig;
use mysqli;

class Profile extends DatabaseConfig
{
    public $conn;

    // CONNECT KE DATABASE MYSQL
    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    // PROSES MENAMPILKAN SEMUA DATA
    public function findAll()
    {
        $sql = "SELECT id_galery, data_galery, desciption FROM galery";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    public function findAllHobi()
    {
        $sql = "SELECT id, name, sub, image_hobi, stars FROM hobi";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    public function deleteDataById($id)
    {
        $query = "DELETE FROM hobi WHERE id = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
        $this->conn->close();
    }


    public function createData($data)
    {
        // Sesuaikan dengan kunci yang sesuai pada array $data
        $setData = $data['name'];

        $query = "INSERT INTO hobi (name, sub, image_hobi, stars) VALUES (?, ?, ?, ?)";

        $stmt = $this->conn->prepare($query);

        // Sesuaikan jenis data yang di-bind dengan jenis data yang sesuai pada kolom tabel
        $stmt->bind_param(
            "sssi",
            $data['name'],
            $data['sub'],
            $data['image_hobi'],
            $data['stars'],
        );

        $stmt->execute();
        $this->conn->close();
    }

    // Proses update data dengan id
    public function updateData($data, $id)
    {
        $name = $data['name'];
        $sub = $data['sub'];
        $image_hobi = $data['image_hobi'];
        $stars = $data['stars'];

        $query = "
            UPDATE hobi
            SET
                name = ?,
                sub = ?,
                image_hobi = ?,
                stars = ?
            WHERE
                id = ?
        ";

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sssii", $name, $sub, $image_hobi, $stars, $id);
        $stmt->execute();
        $stmt->close();
        $this->conn->close();
    }
}
