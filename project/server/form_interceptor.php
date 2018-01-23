<?php
    class FormInterceptor{
        function __construct($post){
            $this->post_object = $post;
        }

        public function get_user_model(){
            $username = $this->post_object['username'];
            $password = $this->post_object['password'];
            return new UserModel($username, $password);
        }

        public function get_image(){
            $img = $_POST['img'];
            $img = str_replace('data:image/png;base64,', '', $img);
            $img = str_replace(' ', '+', $img);
            return base64_decode($img);
        }
    }
?>