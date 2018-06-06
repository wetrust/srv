<?php

class EcoModel
{
    public static function getEcos($rut, $tipo)
    {
        $database = DatabaseFactory::getFactory()->getConnection();
        $response = new stdClass;
        $response->status = "ok";

        if ($tipo == 1){
            $sql = "SELECT * FROM eco_prim WHERE id_paciente = :id_paciente";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut));

            $response->data = $query->fetchAll();
            return $response;
        }
        else if ($tipo == 2){
            $sql = "SELECT * FROM historial WHERE user_id = :user_id";
            $query = $database->prepare($sql);
            $query->execute(array(':user_id' => $person_id));

            $response->data = $query->fetchAll();
            return $response;
        }

        $response->status = "fail";
        return $response;
    }

    public static function getEco($rut, $tipo,$numero)
    {
        $database = DatabaseFactory::getFactory()->getConnection();
        $response = new stdClass;
        $response->status = "ok";

        if ($tipo == 1){
            $sql = "SELECT * FROM eco_prim WHERE id_paciente = :id_paciente AND n_examen = :n_examen";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $numero));

            $response->data = $query->fetchAll();
            return $response;
        }
        else if ($tipo == 2){
            $sql = "SELECT * FROM historial WHERE user_id = :user_id AND n_examen = :n_examen";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $numero));

            $response->data = $query->fetchAll();
            return $response;
        }

        $response->status = "fail";
        return $response;
    }
}