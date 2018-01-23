<?php
    include('form_interceptor.php');
    include('persist.php');
    include('usermodel.php');

    
    $form_interceptor = new FormInterceptor($_POST);
    $login_data = $form_interceptor->get_user_model();
    $repo = new Persistence();

    $user_dao = new UserDAO($login_data->username, hash("sha256", $login_data->password));
    $result = $repo->check_user($user_dao);
    if($result){
        echo 'place.php';
    } else {
        echo 'not found';
    }
?>