<?php
    include('form_interceptor.php');
    include('persist.php');

    $form_interceptor = new FormInterceptor($_POST);
    $image = $form_interceptor->get_image();
    $repo = new Persistence();

    $repo->save_image($image);
?>