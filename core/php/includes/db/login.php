<?php
    session_start();
    require_once 'config.php';

    if(issets($_POST['Username']) && isset($_POST['Password'])){
        $username = htmlspecialchars($_POST['Username']);
        $password = htmlspecialchars($_POST['Password']);

        $check = $bdd->prepare('SELECT username, email, password FROM pa_accounts WHERE username = ?');
        $check->execute(array($username));
        $data = $check->fetch();
        $row = $check->rowCount();

        if($row == 1){
            $password = hash('sha256', $password);

            if($data['password'] === $password){
                $_SESSION['user'] = $data['user'];
            }else header('Location:index.php?login_err=password');
        }else header('Location:index.php?login_err=already');
    }else header('Location:index.php');
