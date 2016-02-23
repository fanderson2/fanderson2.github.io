<!--1. Modify $recipient to your email address
2. Adjust thank you message accordingly-->

<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "em@empeasgood.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank you for your message. I will respond within 24 hours.";
?>