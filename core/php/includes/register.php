<?php require '../header.php'; ?>

<?php
    require '../../../../pallium/core/php/includes/form/form.php';
    $form = new Form($_POST);
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
            <div class="card">
            <form method="POST" action="#">
                <?php
                echo $form->input('Name');
                echo $form->input('Firstname');
                echo $form->inputemail('Email');
                ?>
            </div>
        </div>
        <div class="rightcolumnrow">
            <div class="card">
                <?php
                    echo $form->input('Username');
                    echo $form->inputpsw('Password');
                    echo $form->inputpsw('Confirm password');
                    echo $form->reset();
                    echo $form->submit();
                ?>
            </div>
        </div>
    </div>

<?php require '../footer.php'; ?>