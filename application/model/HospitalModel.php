<?php

/**
 * HospitalModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class HospitalModel
{
    /**
     * Get all hospital (hospital are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT hospital_id, hospital_name FROM hospital";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single hospital
     * @param int $hospital_id id of the specific hospital
     * @return object a single object (the result)
     */
    public static function getHospital($hospital_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT hospital_id, hospital_name FROM hospital WHERE hospital_id = :hospital_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':hospital_id' => $hospital_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a hospital (create a new one)
     * @param string $hospital_name hospital text that will be created
     * @return bool feedback (was the hospital created properly ?)
     */
    public static function createHospital($hospital_name)
    {
        if (!$hospital_name || strlen($hospital_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO hospital (hospital_name) VALUES (:hospital_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':hospital_name' => $hospital_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing hospital
     * @param int $hospital_id id of the specific hospital
     * @param string $hospital_name new text of the specific hospital
     * @return bool feedback (was the update successful ?)
     */
    public static function updateHospital($hospital_id, $hospital_name)
    {
        if (!$hospital_id || !$hospital_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE hospital SET hospital_name = :hospital_name WHERE hospital_id = :hospital_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':hospital_id' => $hospital_id, ':hospital_name' => $hospital_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific hospital
     * @param int $hospital_id id of the hospital
     * @return bool feedback (was the hospital deleted properly ?)
     */
    public static function deleteHospital($hospital_id)
    {
        if (!$hospital_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM hospital WHERE hospital_id = :hospital_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':hospital_id' => $hospital_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
