<?php
include("config.php");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


$data = json_decode(file_get_contents("php://input"));

if(isset($_GET["insertUser"])){
  $nome = $data->nome;
  $telefone = $data->telefone;
  $email = $data->email;
  $senha = $data->senha;

  $executa = mysqli_query($con, "SELECT idUsuario FROM usuario WHERE email = '$email'");
  $saida = array();
  $cont = 0;

  while($row = mysqli_fetch_array($executa)){
    array_push($saida, array("idUsuario"=>intval($row['idUsuario'])));
    $cont++;

  }
  if($cont > 0){
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }else{
    $executa2 = mysqli_query($con, "INSERT INTO usuario (nome, telefone, email, senha)
                  VALUES ('$nome', '$telefone', '$email', '$senha')");
    array_push($saida, array("idUsuario"=>"success"));
    
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }  
}
if(isset($_GET["insertEstabelecimento"])){
  $nome = $data->nomeEstab;
  $email = $data->email;
  $senha = $data->senha;
  $telefone = intval($data->telefone);
  $nomeResponsavel = $data->nomeResponsavel;
  $descricao = '';
  
  $executa = mysqli_query($con, "SELECT idEstabelecimento
                          FROM estabelecimento
                          WHERE email = '$email'");
  $saida = array();
  $cont = 0;

  while($row = mysqli_fetch_array($executa)){
    array_push($saida, array("idEstabelecimento"=>intval($row['idEstabelecimento'])));
    $cont++;

  }
  if($cont > 0){
    $saida = converteArrayParaUtf8($saida);
    echo json_encode($saida);
    exit;

  }else{
    $executa2 = mysqli_query($con, "INSERT INTO estabelecimento (nome, telefone, email, senha, nomeResponsavel, descricao, apto)
                  VALUES ('$nome', '$telefone', '$email', '$senha', '$nomeResponsavel', '$descricao', 0)");
    array_push($saida, array("idEstabelecimento"=>"success"));

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