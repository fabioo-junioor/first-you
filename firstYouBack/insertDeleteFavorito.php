<?php
include("config.php");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


$data = json_decode(file_get_contents("php://input"));

if(isset($_GET["insertFavorito"])){
  $idUsuario = $data->idUsuario;
  $idEstabelecimento = $data->idEstabelecimento;

  $executa = mysqli_query($con, "SELECT idFavorito FROM favorito
                                  WHERE idEstabelecimento = '$idEstabelecimento'
                                  AND idUsuario = '$idUsuario'");
  $saida = array();
  $cont = 0;

  while($row = mysqli_fetch_array($executa)){
    array_push($saida, array("idFavorito"=>intval($row['idFavorito'])));
    $cont++;

  }
  if($cont > 0){
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }else{
    $executa2 = mysqli_query($con, "INSERT INTO favorito (idUsuario, idEstabelecimento, dataTime)
                                VALUES ('$idUsuario', '$idEstabelecimento', now())");
    array_push($saida, array("idFavorito"=>intval("1")));
    
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }  
}
if(isset($_GET["deleteFavorito"])){
  $idUsuario = $data->idUsuario;
  $idEstabelecimento = $data->idEstabelecimento;

  $executa = mysqli_query($con, "SELECT idFavorito FROM favorito
                                  WHERE idEstabelecimento = '$idEstabelecimento'
                                  AND idUsuario = '$idUsuario'");
  $saida = array();
  $cont = 0;

  while($row = mysqli_fetch_array($executa)){
    array_push($saida, array("idFavorito"=>intval("1")));
    $cont++;

  }
  if($cont > 0){
    $executa2 = mysqli_query($con, "DELETE FROM favorito
                                    WHERE idUsuario = '$idUsuario'
                                    AND idEstabelecimento = '$idEstabelecimento'");
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }else{    
    array_push($saida, array("idFavorito"=>null));
    
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }  
}

function converteArrayParaUtf8($saida){
    array_walk_recursive($saida, function(&$item,$key){
         if (!mb_detect_encoding($item, 'utf-8', true)) {
                $item = utf8_encode($item);

            }
    });
    return $saida;

}
mysqli_close($con);

?>