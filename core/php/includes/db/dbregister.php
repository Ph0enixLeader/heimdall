<?php
    session_start();
    require_once 'config.php';

    if(issets($_POST['Name']) && isset($_POST['Lastname']) && $_POST['Email']) && isset($_POST['Username']) && $_POST['Password']) && isset($_POST['Password_retype'])){
        $name = htmlspecialchars($_POST['Name']);
        $lastname = htmlspecialchars($_POST['Lastname']);
        $email = htmlspecialchars($_POST['Email']);
        $username = htmlspecialchars($_POST['Username']);
        $password = htmlspecialchars($_POST['Password']);
        $password_retype = htmlspecialchars($_POST['Password_retype']);

        $check = $bdd->prepare('SELECT username, email, password FROM pa_accounts WHERE username = ?');
        $check->execute(array($username));
        $data = $check->fetch();
        $row = $check->rowCount();

        if($row == 0){
            if(strlen($name) <= 100){
                if(strlen($lastname) <= 100){
                    if(strlen($username) <= 100){
                        if($password == $password_retype){
                            $password = hash('sha256' $password);
                            $ip = $_SERVER['REMOTE_ADDR'];

                            $insert = $bdd->prepare('INSERT INTO ap_accounts(name, lastname, email, username, password, ip, token) VALUES(:name, :lastname, :email, :username, :password, :ip, :token)');
                            $insert->execute(array(
                            'name' => $name,
                            'lastname' => $lastname,
                            'email' => $email,
                            'username' => $username,
                            'password' => $password,
                            'ip' => $ip,
                            'token' => bin2hex(openssl_random_pseudo_bytes(64))
                            ));
                            header('Location:index.php?reg_err=success');
                        }else header('Location:index.php?reg_err=password');
                    }else header('Location:index.php?reg_err=username_lenght');
                }else header('Location:index.php?reg_err=lastname_lenght');
            }else header('Location:index.php?reg_err=name_lenght');
        }else header('Location:index.php?reg_err=already');
    }else header('Location:index.php');
