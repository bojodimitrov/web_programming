<?php
    class UserDAO{
        function __construct($username, $password_hash){
            $this->username = $username;
            $this->password_hash = $password_hash;
        }

        public function get_username(){
            return $this->username;
        }
        
        public function get_password_hash(){
            return $this->password_hash;
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

            $this->login_query = "SELECT * from Users where Username = :username and PasswordHash = :password_hash";
            $this->register_query = "INSERT INTO Users (Username, PasswordHash) VALUES (:username, :password_hash)";
        }

        private function create_database(){
            $this->connection = new PDO($this->dsn,"root","");
            

            //Creation of user "user_name"
            $this->connection->query("CREATE USER '".$this->user."'@'%' IDENTIFIED BY '".$this->pass."';");
            //Creation of database "new_db"
            $this->connection->query("CREATE DATABASE `".$this->database_name."`;");
            //Adding all privileges on our newly created database
            $this->connection->query("GRANT ALL PRIVILEGES on `".$this->database_name."`.* TO '".$this->user."'@'%' identified by '".$this->pass."';");

            $this->connection = new PDO($this->dsn.';dbname='.$this->database_name, $this->user, $this->pass);

            $this->connection->query("CREATE TABLE Users(
                User_ID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                Username VARCHAR(50) NOT NULL,
                PasswordHash VARCHAR(256) NOT NULL
            )");
        }

        public function check_user($user_dao){
            $query = $this->connection->prepare($this->login_query);
            $query->bindParam(":username", $user_dao->username);
            $query->bindParam(":password_hash", $user_dao->password_hash);
            $query->execute();
            $result = $query->fetchAll();
            if(count($result) > 0){
                return True;
            }
            else{
                return False;
            };
        }

        public function register_user($user_dao){
            $query = $this->connection->prepare($this->register_query);
            $query->bindParam(":username", $user_dao->username);
            $query->bindParam(":password_hash", $user_dao->password_hash);
            $query->execute();
        }

        public function save_image($fileData){
            $fileName = 'frontend/visuals/resources/the_place.png';
            file_put_contents($fileName, $fileData);
        }
    }
?>