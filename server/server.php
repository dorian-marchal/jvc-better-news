<?php

// Composer autoload
require __DIR__ . '/vendor/autoload.php';

// JSON response
// header('Content-Type: application/json; charset=utf-8');
$res = array();

// Chargement du fichier de config
$configJson = file_get_contents(__DIR__ . '/config.json');
$config = json_decode($configJson);

// Connexion à la base de données
$dbh = new PDO('mysql:dbname=' . $config->db->database, $config->db->username, $config->db->password);
$dbh->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
$qb = new FluentPDO($dbh);

// Récupération de l'action à effectuer
$action = val($_GET, 'action');

switch ($action) {
    case 'vote':

        $voteTypeId = intval(val($_GET, 'vote_type_id'));
        $url = val($_GET, 'url');

        if ($url && $voteTypeId) {

            $newVote = [
                'user_ip' => $_SERVER['REMOTE_ADDR'],
                'url' => $url,
                'vote_type_id' => $voteTypeId,
            ];

            $qb->insertInto('votes')->values($newVote)->execute();
            $res['status'] = 'vote ok';
        }
        break;
    default:
        break;
}

echo json_encode($res);
