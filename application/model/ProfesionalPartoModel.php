<?php

/**
 * ProfesionalModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class ProfesionalPartoModel
{
    /**
     * Get all profesional (profesional are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll($tipo)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $tipo = intval($tipo);
        
        if ($tipo == 0){

        }
        else if ($tipo == 1){
            $sql = "SELECT id_profesional, nombre_profesional FROM profesional_alta_parto";
            $query = $database->prepare($sql);
            $query->execute();
        }
        
        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single profesional
     * @param int $id_profesional id of the specific profesional
     * @return object a single object (the result)
     */
    public static function getProfesional($id_profesional)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        if ($tipo == 0){

        }
        else if ($tipo == 1){
            $sql = "SELECT id_profesional, nombre_profesional FROM profesional_alta_parto WHERE id_profesional = :id_profesional LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_profesional' => $id_profesional));
        }

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a profesional (create a new one)
     * @param string $nombre_profesional profesional text that will be created
     * @return bool feedback (was the profesional created properly ?)
     */
    public static function createProfesional($tipo,$nombre_profesional)
    {
        if (!$nombre_profesional || strlen($nombre_profesional) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        if ($tipo == 0){

        }
        else if ($tipo == 1){
            $sql = "INSERT INTO profesional_alta_parto (nombre_profesional) VALUES (:nombre_profesional)";
            $query = $database->prepare($sql);
            $query->execute(array(':nombre_profesional' => $nombre_profesional));
        }

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing profesional
     * @param int $profesional_id id of the specific profesional
     * @param string $profesional_name new text of the specific profesional
     * @return bool feedback (was the update successful ?)
     */
    public static function updateProfesional($id_profesional, $nombre_profesional)
    {
        if (!$id_profesional || !$nombre_profesional) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        if ($tipo == 0){

        }
        else if ($tipo == 1){
            $sql = "UPDATE profesional_alta_parto SET nombre_profesional = :nombre_profesional WHERE id_profesional = :id_profesional LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_profesional' => $id_profesional, ':nombre_profesional' => $nombre_profesional));
        }

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific profesional
     * @param int $profesional_id id of the profesional
     * @return bool feedback (was the profesional deleted properly ?)
     */
    public static function deleteProfesional($tipo,$id_profesional)
    {
        if (!$profesional_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        if ($tipo == 0){

        }
        else if ($tipo == 1){
            $sql = "DELETE FROM profesional_alta_parto WHERE id_profesional = :id_profesional LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_profesional' => $id_profesional));
        }

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
