<?php
$nome = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$mensagem = $_POST["mensagem"];
// Inclui o arquivo class.phpmailer.php localizado na pasta phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';


define('USER', 'noreply@wasatastrologia.com.br');  // Usuário do servidor SMTP
define('PWD', 'Daemmerung');   // Senha do servidor SMTP

// Inicia a classe PHPMailer
$mail = new PHPMailer();
// Define os dados do servidor e tipo de conexão
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsSMTP(); // Define que a mensagem será SMTP
$mail->Host = "br780.hostgator.com.br"; // Endereço do servidor SMTP
$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)
$mail->Username = USER;
$mail->Password = PWD;
// Define o remetente
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->From = "noreply@wasatastrologia.com.br"; // Seu e-mail
$mail->FromName = "noreply - Wasat Astrologia"; // Seu nome
// Define os destinatário(s)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->AddAddress('contato@wasatastrologia.com.br', 'Contato - Wasat Astrologia');
// Define os dados técnicos da Mensagem
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
// Define a mensagem (Texto e Assunto)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->Subject  = "Contato Wasat Astrologia"; // Assunto da mensagem
$mail->Body = $mail->Body = "<html lang='pt-BR'>
                              <head>
                                <meta charset='utf-8'>
                              </head>
                              <body>
                              Contato enviado pelo formul&aacute;rio do Site:
                                <ul style='list-style: none'>
                                  <li>Nome: ". $nome. "</li>
                                  <li>E-Mail: " .$email. "</li>
                                  <li>Telefone: ".$telefone."</li>
                                </ul>
                                <p>Mensagem:<br>
                                  <blockquote><i> &nbsp; ".$mensagem."</i></blockquote>
                                </p>
                              </body>
                              </html>" ;
$mail->AltBody = "Oi, você recebeu uma mensagem enviada pelo formulário do Site
                   Esses são os dados do cliente:

                   Nome: $nome
                   E-Mail: $email
                   Telefone: $telefone

                   Essa é a mensagem que ele mandou:
                   $mensagem \r\n :)";

$mail->Send();

echo "<script language='javascript'>alert('Seu contato foi enviado!'); history.back();</script>";