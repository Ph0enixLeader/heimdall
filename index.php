<!DOCTYPE html>

<html>

    <head>
        <meta charset="utf-8">
        <title>Pallium</title>
        <link rel="stylesheet" href="core/css/default.css">
        <link rel="stylesheet" href="core/css/interact.css">
    </head>
    
    <body>
    
    <?php

      if(isset($_GET['login_err'])){
        $err = htmlspecialchars($_GET['login_err']);

        switch($err){
          case 'password':
            ?>
            <div class="card-cyberpunk">
              <strong>Erreur</strong>mot de passe incorrect
            </div>
          <?php
          break;

          case 'already':
            ?>
            <div class="card-cyberpunk">
              <strong>Erreur</strong>compte inexistant
            </div>
          <?php
          break;
        }
      }
    ?>
      <div class="background"></div>
    
            <div class="header">
                <h1>Pallium</h1>
            </div>
          
        <div class="row">
          <div class="card-cyberpunk" style="font-size: 30px;">
              <h1 style="text-align: end;">Welcome to pallium</h1>
          </div>
              <div class="card-cyberpunk-wrapper">
                <form action="core/php/includes/db/login.php" method="post">
                  <h1 style="text-align: left;">Login</h1>
                  <?php
                    echo $form->input('Username');
                    echo $form->inputpsw('Password');
                  ?>
                  <button class="cybr-btn" style="--primary-hue: 200; --primary-lightness: 50;">
                    Login<span aria-hidden>_</span>
                    <span aria-hidden class="cybr-btn__glitch">Login_</span>
                    <span aria-hidden class="cybr-btn__tag">J117</span>
                  </button>
                </form>
                  <button class="cybr-btn" onclick="window.location.href='/'" style="--primary-hue: 0; --primary-lightness: 50; --shadow-primary-hue: 200;">
                    Forgot password?<span aria-hidden>_</span>
                    <span aria-hidden class="cybr-btn__glitch">Forgot password?_</span>
                    <span aria-hidden class="cybr-btn__tag">J117</span>
                  </button>
                  <button class="cybr-btn" onclick="window.location.href='core/php/register.php'" style="--primary-hue: 200; --primary-lightness: 50;">
                    Sign-up<span aria-hidden>_</span>
                    <span aria-hidden class="cybr-btn__glitch">Sign-up_</span>
                    <span aria-hidden class="cybr-btn__tag">J117</span>
                  </button>
              </div>
          </div>
      </div>

      <div class="footer">
        <h2>Footer</h2>
      </div>
          

    </body>

</html>
