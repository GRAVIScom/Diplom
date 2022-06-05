<?php

require 'lib/PHPMailer.php';
require 'lib/SMTP.php';
require 'lib/Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['user_name'];
$email = $_POST['user_mail'];
$text = $_POST['user_message'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; 
    $mail->Username   = 'convertor.pascal.c3@gmail.com'; 
    $mail->Password   = 'convertor'; 
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;
    $mail->setFrom('convertor.pascal.c3@gmail.com', 'Конвертер'); 
    // Получатель письма
    $mail->addAddress('sourceweb53@gmail.com');

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Пользователь прислал вам сообщение';
        $mail->Body    = "Меня зовут ".$name.", вот моя почта ".$email." для связи со мной.Вот что я хочу сказать ".$text;

$mail->send();
 
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

header("HTTP/1.1 301 Moved Permanently");
header("Location: thanks.php");
exit();


?>