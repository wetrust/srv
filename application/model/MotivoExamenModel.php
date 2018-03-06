<?php

/**
 * MotivoExamenModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class MotivoExamenModel
{
    /**
     * Get all motivo (motivo are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT motivo_id, motivo_name FROM motivoexamen";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single motivo
     * @param int $motivo_id id of the specific motivo
     * @return object a single object (the result)
     */
    public static function getMotivo($motivo_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT motivo_id, motivo_name FROM motivoexamen WHERE motivo_id = :motivo_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':motivo_id' => $motivo_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a motivo (create a new one)
     * @param string $motivo_name motivo text that will be created
     * @return bool feedback (was the motivo created properly ?)
     */
    public static function createMotivo($motivo_name)
    {
        if (!$motivo_name || strlen($motivo_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO motivoexamen (motivo_name) VALUES (:motivo_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':motivo_name' => $motivo_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing motivo
     * @param int $motivo_id id of the specific motivo
     * @param string $motivo_name new text of the specific motivo
     * @return bool feedback (was the update successful ?)
     */
    public static function updateMotivo($motivo_id, $motivo_name)
    {
        if (!$motivo_id || !$motivo_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE motivoexamen SET motivo_name = :motivo_name WHERE motivo_id = :motivo_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':motivo_id' => $motivo_id, ':motivo_name' => $motivo_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific motivo
     * @param int $motivo_id id of the motivo
     * @return bool feedback (was the motivo deleted properly ?)
     */
    public static function deleteMotivo($motivo_id)
    {
        if (!$motivo_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM motivoexamen WHERE motivo_id = :motivo_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':motivo_id' => $motivo_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
