<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>traitement</title>
    </head>
    <body>
        <?php
                 echo "merci d'avoir remplis le formulaire ! je vous contacterais dès que possible !<br/>";
        echo '<a  href="index.html">cliquez ici pour revenir sur le portfolio </a><br/>'; 
        // On récupere les infos du formulaire
        $name=$_POST['nom']; 
        $Fname=$_POST['firstname'];
        $mail=$_POST['mail'];
        $message= $_POST['message'];

        //connexion bdd 
        $link = mysqli_connect("localhost", "root", "MySQL","portfolio");

        // on crée la requête 
        $query="INSERT INTO `contact` (`id`, `nom`, `prenom`, `mail`, `message`) VALUES (NULL,'" .$name ."','" . $Fname ."','" . $mail."','".$message."');";

        $result=mysqli_query($link,$query);
        mysql_close($link);
       


        ?>

    </body>
</html>