<?php
//Принимаем постовые данные
$whatever 		= 	 $_POST['whatever'];
$username 		= 	 $_POST['username'];
$email 				= 	 $_POST['email'];
$user_message = 	 $_POST['user_message'];

//Тут указываем на какой ящик посылать письмо
$to = "1993leito@mail.ru";


//Далее идет тема и само сообщение
$subject = "Заявка с сайта";


$message = "Письмо отправлено из моей формы    <br />
Заполненнная форма:       ".htmlspecialchars($whatever)."     <br />
Имя:       								".htmlspecialchars($username)."     <br />
Сообщение: 								".htmlspecialchars($user_message)." <br />
Email:     								".htmlspecialchars($email);


$headers = "From: example.ru <no-reply@mysite.ru>\r\nContent-type: text/html; charset=utf-8 \r\n";
mail ($to, $subject, $message, $headers);
// header(alert("hello"));
exit;
?>