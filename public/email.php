<?php

	$headers .= 'From:' . $_POST['name'] . " <" . $_POST['email'] . ">" . "\r\n";
    mail('angienguyen@gmail.com.com', $_POST['subject'], $_POST['message'], $headers);
?>
<p>Your email has been sent.</p>