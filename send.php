
<?php
//do przetestowania
if (empty($_POST['wyslij']))
{
    header('Location: index.html');
    exit();
}
else
{    
    $to = 'hiperenigmatic@gmail.com';


    if ((!empty($_POST['imie'])) && (!empty($_POST['nazwisko'])))
        {
        $from = $_POST['imie'] . " " . $_POST['nazwisko'];
        }

    if (!empty($_POST['email']))
        {
        $email = $_POST['email'];
        }


    $subject = "Nowy e-mail od " . $from;

    if (!empty($_POST['wiadomosc']))
        {
        $message = $_POST['wiadomosc'];
        }

    
    if(mail($to, $subject, $message, "From:" . $email)) //tu moja wiedza na razie nie sięga
    {
        echo '<h1>Wiadomość wysłana :)</h1>';
        echo '<a href="index.html">Powrót na stronę główną</a>';  
    }
    else
    {
        echo 'Błąd wysyłania wiadomości' . "<br />";
        echo '<a href="index.html">Powrót na stronę główną</a>';  
    }
}
?>