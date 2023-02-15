<?php
include("config.php");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


$data = json_decode(file_get_contents("php://input"));

if(isset($_GET["insertAgendamento"])){
  $idUsuario = $data->idUsuario;
  $idEstabelecimento = $data->idEstabelecimento;
  $qtdPessoas = $data->qtdPessoas;
  $observacao = $data->observacao;
  /*
  $idUsuario = 1;
  $idEstabelecimento = 3;
  $qtdPessoas = 10;
  $observacao = 'a';
  */
  $executa = mysqli_query($con, "SELECT idAgendamento FROM agendamento
                                  WHERE idEstabelecimento = '$idEstabelecimento'
                                  AND idUsuario = '$idUsuario'");
  $saida = array();
  $cont = 0;

  while($row = mysqli_fetch_array($executa)){
    array_push($saida, array("idAgendamento"=>$row['idAgendamento']));
    $cont++;

  }
  if($cont > 0){
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }else{
    $executa2 = mysqli_query($con, "INSERT INTO agendamento (idUsuario, idEstabelecimento, qtdPessoas, observacao, dataTime)
                                VALUES ('$idUsuario', '$idEstabelecimento', '$qtdPessoas', '$observacao', now())");
    array_push($saida, array("idAgendamento"=>"success"));
    
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }  
}
if(isset($_GET["deleteAgendamento"])){
  $idUsuario = $data->idUsuario;
  $idEstabelecimento = $data->idEstabelecimento;

  $executa = mysqli_query($con, "SELECT idAgendamento FROM agendamento
                                  WHERE idEstabelecimento = '$idEstabelecimento'
                                  AND idUsuario = '$idUsuario'");
  $saida = array();
  $cont = 0;

  while($row = mysqli_fetch_array($executa)){
    array_push($saida, array("idAgendamento"=>"success"));
    $cont++;

  }
  if($cont > 0){
    $executa2 = mysqli_query($con, "DELETE FROM agendamento
                                    WHERE idUsuario = '$idUsuario'
                                    AND idEstabelecimento = '$idEstabelecimento'");
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }else{    
    array_push($saida, array("idAgendamento"=>"null"));
    
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