<?php

/**
 * PatologiaObstetricaModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class PatologiaObstetricaModel
{
    /**
     * Get all patologia (patologia are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT patologia_id, patologia_name FROM patologia";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single patologia
     * @param int $patologia_id id of the specific patologia
     * @return object a single object (the result)
     */
    public static function getPatologia($patologia_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT patologia_id, patologia_name FROM patologia WHERE patologia_id = :patologia_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':patologia_id' => $patologia_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a patologia (create a new one)
     * @param string $patologia_name patologia text that will be created
     * @return bool feedback (was the patologia created properly ?)
     */
    public static function createPatologia($patologia_name)
    {
        if (!$patologia_name || strlen($patologia_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO patologia (patologia_name) VALUES (:patologia_name)";
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
     * Update an existing patologia
     * @param int $patologia_id id of the specific patologia
     * @param string $patologia_name new text of the specific patologia
     * @return bool feedback (was the update successful ?)
     */
    public static function updatePatologia($patologia_id, $patologia_name)
    {
        if (!$patologia_id || !$patologia_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE patologia SET patologia_name = :patologia_name WHERE patologia_id = :patologia_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':patologia_id' => $patologia_id, ':patologia_name' => $patologia_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific patologia
     * @param int $patologia_id id of the patologia
     * @return bool feedback (was the patologia deleted properly ?)
     */
    public static function deletePatologia($patologia_id)
    {
        if (!$patologia_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM patologia WHERE patologia_id = :patologia_id LIMIT 1";
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
