<?php

/**
 * PrevisionModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class PrevisionModel
{
    /**
     * Get all prevision (prevision are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT prevision_id, prevision_name FROM prevision";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single prevision
     * @param int $prevision_id id of the specific prevision
     * @return object a single object (the result)
     */
    public static function getPrevision($prevision_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT prevision_id, prevision_name FROM prevision WHERE prevision_id = :prevision_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':prevision_id' => $prevision_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a prevision (create a new one)
     * @param string $prevision_name prevision text that will be created
     * @return bool feedback (was the prevision created properly ?)
     */
    public static function createPrevision($prevision_name)
    {
        if (!$prevision_name || strlen($prevision_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO prevision (prevision_name) VALUES (:prevision_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':prevision_name' => $prevision_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing prevision
     * @param int $prevision_id id of the specific prevision
     * @param string $prevision_name new text of the specific prevision
     * @return bool feedback (was the update successful ?)
     */
    public static function updatePrevision($prevision_id, $prevision_name)
    {
        if (!$prevision_id || !$prevision_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE prevision SET prevision_name = :prevision_name WHERE prevision_id = :prevision_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':prevision_id' => $prevision_id, ':prevision_name' => $prevision_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific prevision
     * @param int $prevision_id id of the prevision
     * @return bool feedback (was the prevision deleted properly ?)
     */
    public static function deletePrevision($prevision_id)
    {
        if (!$prevision_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM prevision WHERE prevision_id = :prevision_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':prevision_id' => $prevision_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
