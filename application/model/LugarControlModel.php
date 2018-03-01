<?php

/**
 * LugarControlModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class LugarControlModel
{
    /**
     * Get all lcp (lcp are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT lcp_id, lcp_name FROM lcp";
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
    public static function getLugarControl($lcp_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT lcp_id, lcp_name FROM lcp WHERE lcp_id = :lcp_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':lcp_id' => $lcp_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a lcp (create a new one)
     * @param string $lcp_name lcp text that will be created
     * @return bool feedback (was the lcp created properly ?)
     */
    public static function createLugarControl($lcp_name)
    {
        if (!$lcp_name || strlen($lcp_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO lcp (lcp_name) VALUES (:lcp_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':lcp_name' => $lcp_name));

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
    public static function updateLugarControl($lcp_id, $lcp_name)
    {
        if (!$lcp_id || !$lcp_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE lcp SET lcp_name = :lcp_name WHERE lcp_id = :lcp_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':lcp_id' => $lcp_id, ':lcp_name' => $lcp_name));

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
    public static function deleteLugarControl($lcp_id)
    {
        if (!$lcp_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM lcp WHERE lcp_id = :lcp_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':lcp_id' => $lcp_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
