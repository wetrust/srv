<?php

/**
 * RegionModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class RegionModel
{
    /**
     * Get all region (region are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT region_id, region_name FROM region";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single region
     * @param int $region_id id of the specific region
     * @return object a single object (the result)
     */
    public static function getRegion($region_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT region_id, region_name FROM region WHERE region_id = :region_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':region_id' => $region_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a region (create a new one)
     * @param string $region_name region text that will be created
     * @return bool feedback (was the region created properly ?)
     */
    public static function createRegion($region_name)
    {
        if (!$region_name || strlen($region_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO region (region_name) VALUES (:region_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':region_name' => $region_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing region
     * @param int $region_id id of the specific region
     * @param string $region_name new text of the specific region
     * @return bool feedback (was the update successful ?)
     */
    public static function updateRegion($region_id, $region_name)
    {
        if (!$region_id || !$region_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE region SET region_name = :region_name WHERE region_id = :region_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':region_id' => $region_id, ':region_name' => $region_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific region
     * @param int $region_id id of the region
     * @return bool feedback (was the region deleted properly ?)
     */
    public static function deleteRegion($region_id)
    {
        if (!$region_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM region WHERE region_id = :region_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':region_id' => $region_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
