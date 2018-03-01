<?php

/**
 * ProfesionalReferenteModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class ProfesionalReferenteModel
{
    /**
     * Get all profesional (profesional are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT profesional_id, profesional_name FROM profesionalReferente";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single profesional
     * @param int $profesional_id id of the specific profesional
     * @return object a single object (the result)
     */
    public static function getProfesionalReferente($profesional_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT profesional_id, profesional_name FROM profesionalReferente WHERE profesional_id = :profesional_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':profesional_id' => $profesional_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a profesional (create a new one)
     * @param string $profesional_name profesional text that will be created
     * @return bool feedback (was the profesional created properly ?)
     */
    public static function createProfesionalReferente($profesional_name)
    {
        if (!$profesional_name || strlen($profesional_name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO profesionalReferente (profesional_name) VALUES (:profesional_name)";
        $query = $database->prepare($sql);
        $query->execute(array(':profesional_name' => $profesional_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing profesional
     * @param int $profesional_id id of the specific profesional
     * @param string $profesional_name new text of the specific profesional
     * @return bool feedback (was the update successful ?)
     */
    public static function updateProfesionalReferente($profesional_id, $profesional_name)
    {
        if (!$profesional_id || !$profesional_name) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE profesionalReferente SET profesional_name = :profesional_name WHERE profesional_id = :profesional_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':profesional_id' => $profesional_id, ':profesional_name' => $profesional_name));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific profesional
     * @param int $profesional_id id of the profesional
     * @return bool feedback (was the profesional deleted properly ?)
     */
    public static function deleteProfesionalReferente($profesional_id)
    {
        if (!$profesional_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM profesionalReferente WHERE profesional_id = :profesional_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':profesional_id' => $profesional_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
