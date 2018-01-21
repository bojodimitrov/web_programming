<?php
    class FormInterceptor{
        function __construct($post){
            $this->post_object = $post;
        }

        public function get_login_model(){
            $username = $this->post_object['username'];
            $password = $this->post_object['password'];
            return new LoginModel($username, $password);
        }
    }
?>