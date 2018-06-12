<?php

/**
 * PaisModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class PaisModel
{
    /**
     * Get all pais (pais are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT pais_id, pais_name FROM pais ORDER BY pais_name";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single pais
     * @param int $pais_id id of the specific pais
     * @return object a single object (the result)
     */
    public static function getPais($pais_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT user_id, pais_id, pais_text FROM pais WHERE user_id = :user_id AND pais_id = :pais_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id'), ':pais_id' => $pais_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a pais (create a new one)
     * @param string $pais_text pais text that will be created
     * @return bool feedback (was the pais created properly ?)
     */
    public static function createPais($pais_name)
    {
        if (!$pais_name || strlen($pais_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO pais (pais_name) VALUES (:pais_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':pais_name' => $pais_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing pais
     * @param int $pais_id id of the specific pais
     * @param string $pais_text new text of the specific pais
     * @return bool feedback (was the update successful ?)
     */
    public static function updatePais($pais_id, $pais_text)
    {
        if (!$pais_id || !$pais_text) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE pais SET pais_text = :pais_text WHERE pais_id = :pais_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':pais_id' => $pais_id, ':pais_text' => $pais_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific pais
     * @param int $pais_id id of the pais
     * @return bool feedback (was the pais deleted properly ?)
     */
    public static function deletePais($pais_id)
    {
        if (!$pais_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM pais WHERE pais_id = :pais_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':pais_id' => $pais_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
