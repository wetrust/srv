<?php
class HistorialModel
{
    public static function get()
    {

        $all = trim(Request::post('all'));
        $person_id = trim(Request::post('person'));
        $footprint = trim(Request::post('footprint'));
        $response = new stdClass;
        $response->status = ok;

        if (empty($all) === False){
            if (empty($person_id) === False){
                $database = DatabaseFactory::getFactory()->getConnection();
                $sql = "SELECT * FROM historial WHERE user_id = :user_id";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => $person_id));
                $response->data = $query->fetchAll();
            }
        }
        else
        {
            if (empty($footprint) === False){
                $database = DatabaseFactory::getFactory()->getConnection();
                $sql = "SELECT * FROM historial WHERE footprint = :footprint LIMIT 1";
                $query = $database->prepare($sql);
                $query->execute(array(':footprint' => $footprint));
                $response->data = $query->fetch();
            }
        }
        $response->status = error;
        return $response;
    }

    public static function post()
    {
    
        $data = trim(Request::post('data'));
        $person_id = trim(Request::post('person'));
        $dateStr = trim(Request::post('date'));
        $tipo = trim(Request::post('tipo'));
        $response = new stdClass;
        $response->status = ok;
        
        if (empty($data) === False && empty($person_id) === False && empty($dateStr) === False && empty($tipo) === False){
        
            $database = DatabaseFactory::getFactory()->getConnection();
            $footprint = Csrf::makeToken();
            $sql = "INSERT INTO historial (data, footprint, date, tipo, user_id) VALUES (:data, :footprint, :date, :tipo, :user_id)";
            $query = $database->prepare($sql);
            $query->execute(array(':data' => $data, ':footprint' => $footprint, ':date' => $dateStr, ':tipo' => $tipo, ':user_id' => $person_id));
            
            if ($query->rowCount() == 1) {
                return $response;
            }
        }

        $response->status = error;
        return $response;
    }

    public static function update()
    {
    
        $data = trim(Request::post('data'));
        $footprint = trim(Request::post('footprint'));
        $response = new stdClass;
        $response->status = ok;
        
        if (empty($data) === False && empty($footprint) === False){
            $data =  json_decode($data);
            $masterKey = explode("/", $data->masterKey);
            
            $database = DatabaseFactory::getFactory()->getConnection();
            $sql = "SELECT * FROM historial WHERE footprint = :footprint LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':footprint' => $footprint));
            $response->data = $query->fetch();
            
            if (count($masterKey) == 2){
                $response->data[$masterKey[0]][$masterKey[1]] = $data->value;
            }
            else if (count($masterKey) == 3){
                $response->data[$masterKey[0]][$masterKey[1]][$masterKey[2]] = $data->value;
            }
            else if (count($masterKey) == 4){
                $response->data[$masterKey[0]][$masterKey[1]][$masterKey[2]][$masterKey[3]] = $data->value;
            }
            else if (count($masterKey) == 5){
                $response->data[$masterKey[0]][$masterKey[1]][$masterKey[2]][$masterKey[3]][$masterKey[4]] = $data->value;
            }
            else if (count($masterKey) == 6){
                $response->data[$masterKey[0]][$masterKey[1]][$masterKey[2]][$masterKey[3]][$masterKey[4]][$masterKey[5]] = $data->value;
            }
            else if (count($masterKey) == 7){
                $response->data[$masterKey[0]][$masterKey[1]][$masterKey[2]][$masterKey[3]][$masterKey[4]][$masterKey[5]][$masterKey[6]] = $data->value;
            }
            else if (count($masterKey) == 8){
                $response->data[$masterKey[0]][$masterKey[1]][$masterKey[2]][$masterKey[3]][$masterKey[4]][$masterKey[5]][$masterKey[6]][$masterKey[7]] = $data->value;
            }
            
            $sql = "UPDATE historial SET data = :data WHERE footprint = :footprint LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':data' => json_encode($response->data), ':footprint' => $footprint));

            if ($query->rowCount() == 1) {
                return $response;
            }
        }

        $response->status = error;
        return $response;
    }

    public static function delete()
    {
    
        $footprint = trim(Request::post('footprint'));
        $response = new stdClass;
        $response->status = ok;

        if (empty($footprint) === False){
            $database = DatabaseFactory::getFactory()->getConnection();

            $sql = "DELETE FROM historial WHERE footprint = :footprint LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':footprint' => $footprint));

            if ($query->rowCount() == 1) {
                return $response;
            }
        }

        $response->status = error;
        return $response;
    }
}
