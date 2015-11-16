<?php
//error_reporting(E_ALL);
//ini_set("display_errors", 1);

// Check for empty fields
if(empty($_POST['subject'])  		||
   empty($_POST['emailadres']) 		||
   empty($_POST['bericht'])	||
   !filter_var($_POST['emailadres'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$subject = $_POST['subject'];	
$email_address = $_POST['emailadres'];
$message = $_POST['bericht'];

//print_r($_POST);
	
// Create the email and send the message
$to = 'info@designosource.be'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $subject";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nEmail: $email_address\n\Subject: $subject\n\nMessage:\n$message";
$headers = "From: noreply@designosource.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
mail($to,$email_subject,$email_body,$headers);
//return true;		

//print_r($headers);

echo "<script>window.location = 'http://www.designosource.be'</script>";

/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {
//if(!empty($_POST['subject'])) {
      $subject = test_input($_POST["subject"]);
     $email = test_input($_POST["emailadres"]);
     $contact_message = test_input($_POST["bericht"]);
    $to = 'info@designosource.be';
    $message = $contact_message;
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);
    header('Location: http://designosource.be');
    //echo "<script>window.location = 'http://www.designosource.be'</script>";
    exit;
}
else {
    header('Location: http://designosource.be');
}
*/
?>




