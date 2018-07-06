<?php

/**
 * TipoExamenModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class TipoExamenModel
{
    /**
     * Get all examen (examen are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT tipo_id, tipo_name FROM tipo";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single tipo
     * @param int $tipo_id id of the specific tipo
     * @return object a single object (the result)
     */
    public static function getTipo($tipo_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT tipo_id, tipo_name FROM tipo WHERE tipo_id = :tipo_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':tipo_id' => $tipo_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a tipo (create a new one)
     * @param string $tipo_name tipo text that will be created
     * @return bool feedback (was the tipo created properly ?)
     */
    public static function createTipo($tipo_name)
    {
        if (!$tipo_name || strlen($tipo_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO tipo (tipo_name) VALUES (:tipo_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':tipo_name' => $tipo_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing tipo
     * @param int $tipo_id id of the specific tipo
     * @param string $tipo_name new text of the specific tipo
     * @return bool feedback (was the update successful ?)
     */
    public static function updateTipo($tipo_id, $tipo_name)
    {
        if (!$tipo_id || !$tipo_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE tipo SET tipo_name = :tipo_name WHERE tipo_id = :tipo_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':tipo_id' => $tipo_id, ':tipo_name' => $tipo_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific tipo
     * @param int $tipo_id id of the tipo
     * @return bool feedback (was the tipo deleted properly ?)
     */
    public static function deleteTipo($tipo_id)
    {
        if (!$tipo_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM tipo WHERE tipo_id = :tipo_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':tipo_id' => $tipo_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
