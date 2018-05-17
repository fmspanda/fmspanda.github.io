<?php
	//ini_set('display_errors', 1);

	header("Access-Control-Allow-Origin: *");
	//header('Content-type:application/json; charset=utf8');

	$url = $_GET['request'];
	$data = file_get_contents($url);
	
	echo $data;
?>