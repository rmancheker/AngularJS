<?php 
	header('Access-Control-Allow-Origin':*);
	$data = array(
		"x1"=>array('name' => 'Rishabh' , 'age'=>5),
		"x2"=>array('name' => 'Rhea' , 'age'=>8),
		"x3"=>array('name' => 'Dilesha' , 'age'=>4)
		);


echo json_encode($data);
?>