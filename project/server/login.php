<?php
    include('form_interceptor.php');
    include('persist.php');

    class LoginModel{
        function __construct($username, $password){
            $this->username = $username;
            $this->password = $password;
        }

        public function get_username(){
            return $this->username;
        }
        
        public function get_password(){
            return $this->password;
        }
    }
    $form_interceptor = new FormInterceptor($_POST);
    $login_data = $form_interceptor->get_login_model();
    $repo = new Persistence();

?>