<?php
  session_start();

?>

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
          <div class="card-cyberpunk" style="font-size: 30px;">
              <h1 style="text-align: end;">Welcome to pallium <?php echo $_SESSION['username']; ?></h1>
          </div>
              <div class="card-cyberpunk-wrapper">
                  <h1 style="text-align: left;">Login</h1>
              </div>
          </div>
      </div>

          <div class="footer">
          <h2>Footer</h2>
        </div>
          

    </body>

</html>