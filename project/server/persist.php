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
            $this->dsn = "mysql:host=localhost";
            try{
                $this->connection = new PDO($this->dsn.';dbname='.$this->database_name, $this->user, $this->pass);
                //$this->connection = new PDO('mysql:host=localhost;dbname=php_homeworks', 'php', 'php123');
            }
            catch(PDOException $e){
                $this->create_database();
            }
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }

        private function create_database(){
            $this->connection = new PDO($this->dsn,"root","");
            

            //Creation of user "user_name"
            $this->connection->query("CREATE USER '".$this->user."'@'%' IDENTIFIED BY '".$this->pass."';");
            //Creation of database "new_db"
            $this->connection->query("CREATE DATABASE `".$this->database_name."`;");
            //Adding all privileges on our newly created database
            $this->connection->query("GRANT ALL PRIVILEGES on `".$this->database_name."`.* TO '".$this->user."'@'%' identified by '".$this->pass."';");

        }

        public function check_user($login_model){
            
        }
    }

    
?>