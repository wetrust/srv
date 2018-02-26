<?php

/**
 * UuModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class UuModel
{
    /**
     * Get all uu (uu are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT uu_id, uu_name FROM uu";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single uu
     * @param int $uu_id id of the specific uu
     * @return object a single object (the result)
     */
    public static function getUu($uu_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT uu_id, uu_name FROM uu WHERE uu_id = :uu_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':uu_id' => $uu_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a uu (create a new one)
     * @param string $uu_name uu text that will be created
     * @return bool feedback (was the uu created properly ?)
     */
    public static function createUu($uu_name)
    {
        if (!$uu_name || strlen($uu_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO uu (uu_name) VALUES (:uu_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':uu_name' => $uu_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing uu
     * @param int $uu_id id of the specific uu
     * @param string $uu_name new text of the specific uu
     * @return bool feedback (was the update successful ?)
     */
    public static function updateUu($uu_id, $uu_name)
    {
        if (!$uu_id || !$uu_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE uu SET uu_name = :uu_name WHERE uu_id = :uu_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':uu_id' => $uu_id, ':uu_name' => $uu_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific uu
     * @param int $uu_id id of the uu
     * @return bool feedback (was the uu deleted properly ?)
     */
    public static function deleteUu($uu_id)
    {
        if (!$uu_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM uu WHERE uu_id = :uu_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':uu_id' => $uu_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
