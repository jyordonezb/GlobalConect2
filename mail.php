<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
 $comentario = $_POST['comentarios'];

$formcontent="

 Nombre : $nombre \n
 Correo : $correo \n
 Comentario : $comentario

 ";

$recipient ="globalconecthn@gmial.com, portaltecnologyhn@gmial.com";

$subjet ="Consulta de  pagina GlobalConect de $nombre";

$header = "form: $mail \r\n";
$header .= "Conten-Type: text/plain; charset=UTF-8";
mail($recipient,$subjet,$formcontent,$header) or die ("Error!");
header("Location: index.html");


?>