<?php
$channelUrl = $_GET['url'];
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/x-mpegURL');
header('Access-Control-Allow-Origin: *');

$content = file_get_contents($channelUrl);

if ($content === FALSE) {
    echo 'Error reading content from the provided URL.';
} else {
    echo $content;
}
?>
