<?php

/**
 * LugarPartoModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class LugarPartoModel
{
    /**
     * Get all lcp (lcp are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT lugar_id, lugar_name FROM lugar_parto";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single lcp
     * @param int $lcp_id id of the specific lcp
     * @return object a single object (the result)
     */
    public static function getLugarParto($lugar_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT lugar_id, lugar_name FROM lugar_parto WHERE lugar_id = :lugar_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':lugar_id' => $lugar_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a lcp (create a new one)
     * @param string $lcp_name lcp text that will be created
     * @return bool feedback (was the lcp created properly ?)
     */
    public static function createLugarParto($lugar_name)
    {
        if (!$lugar_name || strlen($lugar_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO lugar_parto (lugar_name) VALUES (:lugar_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':lugar_name' => $lugar_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing lcp
     * @param int $lcp_id id of the specific lcp
     * @param string $lcp_name new text of the specific lcp
     * @return bool feedback (was the update successful ?)
     */
    public static function updateLugarParto($lugar_id, $lugar_name)
    {
        if (!$lugar_id || !$lugar_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE lugar_parto SET lugar_name = :lugar_name WHERE lugar_id = :lugar_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':lugar_id' => $lugar_id, ':lugar_name' => $lugar_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific lcp
     * @param int $lcp_id id of the lcp
     * @return bool feedback (was the lcp deleted properly ?)
     */
    public static function deleteLugarParto($lugar_id)
    {
        if (!$lugar_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM lugar_parto WHERE lugar_id = :lugar_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':lugar_id' => $lcp_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
