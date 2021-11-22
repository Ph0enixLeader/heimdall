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
?>

<link rel="stylesheet" href="../../../../pallium/core/css/default.css">
<link rel="stylesheet" href="../../../../pallium/core/css/interact.css">

    <div class="card-cyberpunk">
        <h1 style="text-align: end;">Register</h1>
        <button class="cybr-btn" onclick="window.location.href='/'" style="margin-top: -100%; --primary-hue: 140; --primary-lightness: 50;" >
            Back<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch">Error_</span>
            <span aria-hidden class="cybr-btn__tag">R25</span>
        </button>
    </div>

    <div class="row">
        <div class="leftcolumnrow">
            <div class="card-cyberpunk-wrapper" style="margin-right: 10px">
            <form method="POST" action="#">
                <?php
                echo $form->input('Name');
                echo $form->input('Firstname');
                echo $form->inputemail('Email');
                ?>
            </div>
        </div>
        <div class="rightcolumnrow">
        <div class="card-cyberpunk-wrapper" style="margin-left: 10px">
                <?php
                    echo $form->input('Username');
                    echo $form->inputpsw('Password');
                    echo $form->inputpsw('Confirm password');
                ?>
            </div>
        </div>
    </div>

    <div class="footer">
          <h2>Footer</h2>
        </div>
