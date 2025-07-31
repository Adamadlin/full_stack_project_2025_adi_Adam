<?php
// $xml = simplexml_load_file("../animal_db_xml_files/animals_tb_xml/animals.xml");

// $animal = $xml->addChild("animal");
// $animal->addChild("name", $_POST['name']);
// $animal->addChild("type", $_POST['type']);
// $animal->addChild("age", $_POST['age']);

// $xml->asXML("../animal_db_xml_files/animals_tb_xml/animals.xml");
// echo "Animal saved successfully!";
?>












<?php
$xmlFile = "../animal_db_xml_files/animals_tb_xml/animals.xml";

$doc = new DOMDocument();
$doc->preserveWhiteSpace = false;
$doc->formatOutput = true;
$doc->load($xmlFile);

$dataSection = $doc->getElementsByTagName("data")->item(0);

if (!$dataSection) {
    echo "❌ No <data> section found.";
    exit;
}

// Generate a new animal_id (simple random for now — in production, increment properly)
$newId = rand(1000, 9999);

// Create a new <row> element with attributes matching the table
$row = $doc->createElement("row");
$row->setAttribute("animal_id", $newId);
$row->setAttribute("name", $_POST['name']);
$row->setAttribute("birth_year", date("Y") - intval($_POST['age']));
$row->setAttribute("habitat", "unknown");  // You can make this dynamic later
$row->setAttribute("lifespan", $_POST['age']);
$row->setAttribute("type_id", 1);          // You can make this dynamic too

$dataSection->appendChild($row);
$doc->save($xmlFile);

echo "✅ Animal added correctly!";
?>





<!-- test endpoint: http://localhost:8888/full_stack_project_2025/animal_db_xml_files/animals_tb_xml/animals.xml -->
 <!-- add animal :http://localhost:8888/full_stack_project_2025/php_forms/add_animal_form.php -->
  
 <!-- node js tests  -->

 <!-- 🔹 1. GET all animals
	•	Method: GET
	•	URL: http://localhost:3000/animals
	•	🔍 Expect: a JSON array of animal records -->


<!-- 🔹 2. POST a new animal
	•	Method: POST
	•	URL: http://localhost:3000/animals
	•	Body → raw → JSON: 

    {
  "name": "Elephant",
  "birth_year": 2015,
  "habitat": "Savannah",
  "lifespan": 60
}

	•	✅ Expect: success message like "✅ Animal added."
    -->




    <!-- 🔹 3. PUT (update existing animal)
	•	Method: PUT
	•	URL: http://localhost:3000/animals/1
(change 1 to a real animal_id from your DB)
	•	Body → raw → JSON: 
    
    {
  "name": "Updated Lion",
  "birth_year": 2016,
  "habitat": "Grassland",
  "lifespan": 15
}
    	•	✅ Expect: "🟡 Animal updated."
    -->



    <!-- 🔹 4. DELETE an animal
	•	Method: DELETE
	•	URL: http://localhost:3000/animals/1
(replace 1 with a valid ID)
	•	✅ Expect: "🔴 Animal deleted." -->



    <!-- test step 5

✅ Test It:

Open in your browser:
📍 http://localhost:8888/full_stack_project_2025/php/show_all_json.php -->


<!-- http://localhost:8888/full_stack_project_2025/animal_db_xml_files/animals_tb_xml/animals.xml -->
 <!-- http://localhost:3000/animals -->
  <!-- http://localhost:8888/full_stack_project_2025/php_forms/show_all_json.php -->
   <!-- http://localhost:8888/full_stack_project_2025/php_forms/save_animal_to_xml.php -->
    <!-- http://localhost:8888/full_stack_project_2025/php_forms/add_animal_form.php -->