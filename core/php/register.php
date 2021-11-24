<!DOCTYPE html>

<html>

    <head>
        <meta charset="utf-8">
        <title>Pallium</title>
        <link rel="stylesheet" href="../css/default.css">
        <link rel="stylesheet" href="../css/interact.css">
    </head>
    
    <body>
    
      <div class="background"></div>
    
            <div class="header">
                <h1>Pallium</h1>
            </div>
          
        <div class="row">

<?php
    require 'includes/form/form.php';
    $form = new Form($_POST);

    if(isset($_GET['reg_err'])){
        $err = htmlspecialchars($_GET['reg_err']);

        switch($err){
          case 'success':
            ?>
            <div class="card-cyberpunk">
              <strong>success</strong> inscription reussi
            </div>
          <?php
          break;

          case 'password':
            ?>
            <div class="card-cyberpunk">
              <strong>Erreur</strong>mot de passe
            </div>
          <?php
          break;

          case 'username_lenght':
            ?>
            <div class="card-cyberpunk">
              <strong>Erreur</strong>username trop long
            </div>
          <?php
          break;

          case 'lastname_lenght':
            ?>
            <div class="card-cyberpunk">
              <strong>Erreur</strong>nom de famille trop long
            </div>
          <?php
          break;

          case 'name_lenght':
            ?>
            <div class="card-cyberpunk">
              <strong>Erreur</strong>prenom trop long
            </div>
          <?php
          break;

          case 'already':
            ?>
            <div class="card-cyberpunk">
              <strong>Erreur</strong>compte existant
            </div>
          <?php
          break;
        }
      }
?>

<link rel="stylesheet" href="../../../../pallium/core/css/default.css">
<link rel="stylesheet" href="../../../../pallium/core/css/interact.css">

    <div class="card-cyberpunk">
        <h1 style="text-align: end;">Register</h1>
        <button class="cybr-btn" onclick="window.location.href='../../../../pallium/index.php'" style="margin-top: -100%; --primary-hue: 140; --primary-lightness: 50;" >
            Back<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch">Error_</span>
            <span aria-hidden class="cybr-btn__tag">R25</span>
        </button>
    </div>

    <div class="row">
        <div class="leftcolumnrow">
            <div class="card-cyberpunk-wrapper" style="margin-right: 10px">
            <form action="includes/db/dbregister.php" methode="post">
                <?php
                echo $form->input('Name');
                echo $form->input('Lastname');
                echo $form->inputemail('Email');
                ?>
            </div>
        </div>
        <div class="rightcolumnrow">
            <div class="card-cyberpunk-wrapper" style="margin-left: 10px">
                <?php
                    echo $form->input('Username');
                    echo $form->inputpsw('Password');
                    echo $form->inputpsw('Password_retype');
                ?>
            </div>
            <div class="card-cyberpunk">
                <h1 style="text-align: end;">Register</h1>
                <button class="cybr-btn" style="margin-top: -100%; --primary-hue: 140; --primary-lightness: 50;" >
                    Back<span aria-hidden>_</span>
                    <span aria-hidden class="cybr-btn__glitch">Error_</span>
                    <span aria-hidden class="cybr-btn__tag">R25</span>
                </button>
                </form>
            </div>
        </div>
    </div>

    <div class="footer">
          <h2>Footer</h2>
        </div>
