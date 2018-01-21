<?php
    class LoginDAO{
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

    class Persistence{
        function __construct(){
            $this->database_name = 'the_place';
            $this->user = 'the_place_user';
            $this->pass = 'the_place_pass';
            $dsn = "mysql:host=localhost";
            $pdo = new PDO($dsn,"root","");
            try{
                $this->connection = new PDO('mysql:host=localhost;dbname=php_homeworks', 'php', 'php123');
            }
            catch(Exception $e){

            }
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }

        private function create_database(){
            

            //Creation of user "user_name"
            $pdo->query("CREATE USER 'user_name'@'%' IDENTIFIED BY 'pass_word';");
            //Creation of database "new_db"
            $pdo->query("CREATE DATABASE `new_db`;");
            //Adding all privileges on our newly created database
            $pdo->query("GRANT ALL PRIVILEGES on `new_db`.* TO 'user_name'@'%';");
        }

    }
?>