<?php
    include('frontend/login.html');
    include('form_interceptor.php');
    include('persist.php');
    include('usermodel.php');

    if(!isset($_POST['submit'])) exit;
    
    $form_interceptor = new FormInterceptor($_POST);
    $login_data = $form_interceptor->get_user_model();
    $repo = new Persistence();

    $user_dao = new UserDAO($login_data->username, hash("sha256", $login_data->password));
    $result = $repo->check_user($user_dao);
    if($result){
        header("Location: place.php", true, 301);
        exit();
    } else {
        $page = file_get_contents("frontend/login.html");
        echo str_replace("none", "block", $page);
    }
?>