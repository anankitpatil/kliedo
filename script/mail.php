<?php
if(isset($_REQUEST))
{
	$name = $_POST['name'];
	$email = $_POST['email'];

	$subject = 'kliedo.co | Welcome to Kliedo ' . $name;
	$message = "Dear Kliedo Friend,

We're delighted to have you on board for this exciting journey, as you are once step closer to have access to the right tools to support your creativity at the right time. Currently, we are in the process of building a portal that is tailored for your creative pursuits. So hold on for exciting updates and sneak peeks in to a growth-oriented ecosystem for the creative classes.

Help us in spreading the word!

- The Kliedo Team
Create. Collaborate. Grow.";
	$headers = 'From: The Kliedo Team<vanjul@kliedo.co>' . "\r\n" .
		'Reply-To: ' . 'The Kliedo Team' . ' <' . 'vanjul@kliedo.co' . ">\r\n" .
		'X-Mailer: PHP/' . phpversion();

	if(mail($email, $subject, $message, $headers)){
		echo 'We have mailed your feedback across. We will get in touch soon!';
	} else {
		echo 'Something went wrong. Please refresh the page and try again.';
	};
}
?>
