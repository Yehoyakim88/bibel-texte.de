<?php

########### CONFIG ###############

$recipient = 'jk.duerr@t-online.de';
// $redirect = './../index.html';

########### CONFIG END ###########



########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $subject = "Contact From " . $_POST['name'];
        $headers = "Via www.joachim-k-duerr.de From: " . $_POST['mail'];

        mail($recipient, $subject, $_POST['message'], $headers);
        // header("Location: " . $redirect);
        #echo '<script type="text/javascript">';
        #echo ' alert("JavaScript Alert Box by PHP")';  //not showing an alert box.
        #echo '</script>';
        echo "<script>
        alert('Message sent. Thank you! Click on \'Ok\' to get back to page');
        window.location.href='./../';
        </script>";
       

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
#$redirect = './../index.html';
#header("Location: " . $redirect);
