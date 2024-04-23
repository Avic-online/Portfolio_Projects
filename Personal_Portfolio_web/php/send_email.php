<!-- php code to automatically send email to web visitors -->

<?php

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $to_email = $_POST["email"];
    $subject = "We Have Received Your information, Kindly await our response";
    $message = $_POST["message"];
    $headers = "From: avic9ja@gmail.com";

    if (mail($to_email, $subject, $message, $headers)) {
        echo "Thanks for Your feedback";
    } else {
        echo "Kindly make sure your email is correct";
    }
}

?>

