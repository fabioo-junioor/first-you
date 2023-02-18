<?php
include("config.php");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


$data = json_decode(file_get_contents("php://input"));

if(isset($_GET["buscarUser"])){
  $email = $data->email;
  $senha = $data->senha;

  $executa = mysqli_query($con, "SELECT * FROM usuario
    WHERE email = '$email' AND senha = '$senha'");
  $saida = array();
  $cont = 0;

  while($row = mysqli_fetch_array($executa)){
    array_push($saida, array("idUsuario"=>intval($row['idUsuario']),
                              "nome"=>$row['nome']));
    $cont++;

  }
  if($cont > 0){
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }else{
    array_push($saida, array("idUsuario"=>null,
                              "nome"=>"null"));
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }  
}
if(isset($_GET["buscarEstabelecimento"])){
  $email = $data->email;
  $senha = $data->senha;

  $executa = mysqli_query($con, "SELECT * FROM estabelecimento
    WHERE email = '$email' AND senha = '$senha'");
  $saida = array();
  $cont = 0;

  while($row = mysqli_fetch_array($executa)){
    array_push($saida, array("idEstabelecimento"=>intval($row['idEstabelecimento']),
                              "nome"=>$row['nome']));
    $cont++;

  }
  if($cont > 0){
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }else{
    array_push($saida, array("idEstabelecimento"=>null));
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