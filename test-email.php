<?php
$errors = '';
    	$tprice2 = $_POST['tPrice2'];

    	$yourname = $_POST['p6i1'];
    	$attorneyname = $_POST['p6i2'];
    	$companyname = $_POST['p6i3'];
	$address1 = $_POST['p6i4'];
	$address2 = $_POST['p6i5'];
    	$city = $_POST['p6i6'];
    	$state = $_POST['p6i7'];
    	$zip = $_POST['p6i8'];
    	$email = $_POST['p6i9'];

    	$casecaption = $_POST['p5i1'];
    	$casenumber1 = $_POST['p5i2'];
    	$casenumber2 = $_POST['p5i3'];
    	$judgename = $_POST['p5i5'];
    	$speakernames = $_POST['p5i6'];
    	$relspel = $_POST['p5i7'];
    	$other = $_POST['p5i8'];
    	$chapter = $_POST['p5i9'];
    	$forappeal = $_POST['p5i10'];

    	$jurisdiction = $_POST['p1i1'];
    	$orderingaudio = $_POST['p1i2'];
    	$hardcopy = $_POST['p1i3'];
    	$audiolength = $_POST['p1i4'];
    	$turnaround = $_POST['turnaround'];
    	$priceagree = $_POST['p1i5'];
    	$credit = $_POST['p3i2'];
    	$tos = $_POST['p3i3'];

        if(empty($yourname)){$errors .= "\n Error: all fields are required";}
        if(empty($email)){$errors .= "\n Error: all fields are required";}
        if(empty($audiolength)){$errors .= "\n Error: all fields are required";}
        if(empty($tos)){$errors .= "\n Error: all fields are required";}

        if( empty($errors)){
                $from = $yourname;
                $to = "inquiries@aquoco.co";
                $subject = "Transcript Order:  $yourname";
                $message = "You have received a new transcript order. " .
                "Here are the details:\n \n". 
                        "Name: $yourname \n". 
                        "Email:  $email \n". 
                        "Jurisdiction:  $jurisdiction \n". 
                        "Are we ordering audio:  $orderingaudio \n". 
                        "Hard Copy Y/N:  $hardcopy \n \n". 
                        "Audio Length:  $audiolength \n". 
                        "Turnaround:  $turnaround \n". 
                        "Price Estimate:  $tprice2 \n". 
                        "Agreed to Rate:  $priceagree \n". 
                        "Want to be factoring approved:  $credit \n". 
                        "Terms of Service Agreement:  $tos \n \n". 
                        "Attorney's Name:  $attorneyname \n". 
                        "Company Name:  $companyname \n". 
                        "Address 1:  $address1  \n". 
                        "Address 2:  $address2  \n". 
                        "Address 3:  $city, $state  $zip \n \n". 
                        "Case Caption:  $casecaption \n". 
                        "Case Number 1:  $casenumber1 \n". 
                        "Case Number 2:  $casenumber2 \n". 
                        "Judge's Name:  $judgename \n". 
                        "Relevant Spellings:  $relspel \n". 
                        "Chapter:  $chapter \n". 
                        "For appeal Y/N:  $forappeal \n \n \n". 
                        "|$yourname; $attorneyname; $companyname; $email; $hardcopy; $turnaround; $audiolength; $address1; 
                                $address2; $city; $state; $zip; $casecaption; $casenumber1; $casenumber2; $judgename; $relspel; $chapter; $forappeal
                                        \n \n \n";

                $headers = "From:" . $from;
                mail($to,$subject,$message, $headers);
                header("Location: https://www.aquoco.co/Price-Quote.html#six");	
        }
?>