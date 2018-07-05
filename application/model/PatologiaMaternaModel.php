<?php

/**
 * LugarPartoModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class PatologiaMaternaModel
{
    /**
     * Get all lcp (lcp are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT patologia_id, patologia_name FROM patologia_materna";
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
    public static function getLugarParto($patologia_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT patologia_id, patologia_name FROM patologia_materna WHERE patologia_id = :patologia_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':patologia_id' => $patologia_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a lcp (create a new one)
     * @param string $lcp_name lcp text that will be created
     * @return bool feedback (was the lcp created properly ?)
     */
    public static function createLugarParto($patologia_name)
    {
        if (!$patologia_name || strlen($patologia_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO patologia_materna (patologia_name) VALUES (:patologia_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':patologia_name' => $patologia_name));

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
    public static function updateLugarParto($patologia_id, $patologia_name)
    {
        if (!$lugar_id || !$patologia_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE patologia_materna SET patologia_name = :patologia_name WHERE patologia_id = :patologia_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':patologia_id' => $patologia_id, ':patologia_name' => $patologia_name));

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
    public static function deleteLugarParto($patologia_id)
    {
        if (!$lugar_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM patologia_materna WHERE patologia_id = :patologia_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':patologia_id' => $patologia_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}