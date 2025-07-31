<?php
header('Content-Type: application/json');

// DB credentials (adjust if needed)
$host = "localhost";
$user = "nodeuser";
$pass = "nodepass";
$dbname = "animals_db";

// Connect to database
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

// Tables you want to include
$tables = ["animals", "animal_diets", "diets", "details", "types"];
$output = [];

foreach ($tables as $table) {
    $result = $conn->query("SELECT * FROM $table");
    $rows = [];

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
    }

    $output[$table] = $rows;
}

echo json_encode($output, JSON_PRETTY_PRINT);
$conn->close();
?>