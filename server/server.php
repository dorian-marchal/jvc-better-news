<?php

// Composer autoload
require __DIR__ . '/vendor/autoload.php';

// JSON response
// header('Content-Type: application/json; charset=utf-8');

// Chargement du fichier de config
$configJson = file_get_contents(__DIR__ . '/config.json');
$config = json_decode($configJson);

// Connexion à la base de données
$dbh = new PDO('mysql:dbname=' . $config->db->database, $config->db->username, $config->db->password);
$qb = new FluentPDO($dbh);

// Récupération de l'action à effectuer
$action = val($_GET, 'action');

switch ($action) {
    case 'vote':
        break;
    default:
        break;
}
