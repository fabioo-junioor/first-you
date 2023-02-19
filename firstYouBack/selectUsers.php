<?php
include("config.php");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


$data = json_decode(file_get_contents("php://input"));


if(isset($_GET["buscarUsers"])){
    //$idEstabelecimento = $data->idEstabelecimento;
    $idEstabelecimento = $data->idEstabelecimento;

    $executa = mysqli_query($con, "SELECT (SELECT nome
                                            FROM usuario AS u 
                                            WHERE `u`.idUsuario = `a`.idUsuario) AS nomeUser,
                                    observacao, dataTime, idUsuario, qtdPessoas
                                    FROM agendamento AS a
                                    WHERE idEstabelecimento = '$idEstabelecimento'");
    $saida = array();
    $cont = 0;

    while($row = mysqli_fetch_array($executa)){
        array_push($saida, array("idUsuario"=>intval($row['idUsuario']),
                                "nome"=>$row['nomeUser'],
                                "observacao"=>$row['observacao'],
                                "qtdPessoas"=>$row['qtdPessoas'],
                                "data"=>formataData($row['dataTime'])));
        $cont++;

    }
    if($cont > 0){
        $saida = converteArrayParaUtf8($saida);
        echo json_encode($saida);
        exit;

    }else{
        array_push($saida, array("idUsuario"=>null));
        
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
function formataData($data){
    $newData = DateTime::createFromFormat('Y-m-d', substr($data, 0, 10)); 

    return $newData->format('d/m/Y');

}
mysqli_close($con);

?>