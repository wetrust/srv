<?php

/**
 * ApunteModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class ApuntesModel
{
    /**
     * Get all apuntes (apuntes are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAllApuntes()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT  apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id LIMIT 10";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id')));

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single apunte
     * @param int $apunte_id id of the specific apunte
     * @return object a single object (the result)
     */
    public static function getApunte($apunte_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id AND apunte_id = :apunte_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_id' => $apunte_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Get a filter apuntes
     * @param int $apunte_id id of the specific apunte
     * @return object a single object (the result)
     */
    public static function getFilterApunte($uno,$dos,$lugar,$actividad,$cancelacion)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $lugar = (is_numeric($lugar) ? intval($lugar) : 99);
        $actividad = (is_numeric($actividad) ? intval($actividad) : 99);
        $cancelacion = (is_numeric($cancelacion) ? intval($cancelacion) : 99);
        
        if (($lugar == 99) && ($actividad == 99) && ($cancelacion == 99)){
            $sql = "SELECT apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
            $query = $database->prepare($sql);
            $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos));
        }
        else{
            if (($lugar !== 99) && ($actividad !== 99) && ($cancelacion !== 99)){
                $sql = "SELECT apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id AND apunte_location = :apunte_location AND apunte_activity = :apunte_activity AND apunte_cancellation = :apunte_cancellation AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_location' => $lugar, ':apunte_activity' => $actividad, ':apunte_cancellation' => $cancelacion));
            }
            else if  (($lugar !== 99) && ($actividad !== 99) && ($cancelacion == 99)){
                $sql = "SELECT apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id AND apunte_location = :apunte_location AND apunte_activity = :apunte_activity  AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_location' => $lugar, ':apunte_activity' => $actividad));
            }
            else if  (($lugar !== 99) && ($actividad == 99) && ($cancelacion !== 99)){
                $sql = "SELECT apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id AND apunte_location = :apunte_location AND apunte_cancellation = :apunte_cancellation AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_location' => $lugar, ':apunte_cancellation' => $cancelacion));
            }
            else if  (($lugar == 99) && ($actividad !== 99) && ($cancelacion !== 99)){
                $sql = "SELECT apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id AND apunte_activity = :apunte_activity AND apunte_cancellation = :apunte_cancellation AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_activity' => $actividad, ':apunte_cancellation' => $cancelacion));
            }
            else if  (($lugar !== 99) && ($actividad == 99) && ($cancelacion == 99)){
                $sql = "SELECT apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id AND apunte_location = :apunte_location AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_location' => $lugar));
            }
            else if  (($lugar == 99) && ($actividad == 99) && ($cancelacion !== 99)){
                $sql = "SELECT apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id AND apunte_cancellation = :apunte_cancellation AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_cancellation' => $cancelacion));
            }
            else if  (($lugar == 99) && ($actividad !== 99) && ($cancelacion == 99)){
                $sql = "SELECT apunte_id, apunte_date, apunte_hour, apunte_participante, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords FROM apuntes WHERE user_id = :user_id AND apunte_activity = :apunte_activity AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_activity' => $actividad));
            }
        }

        // fetch() is the PDO method that gets a single result
        return $query->fetchAll();
    }

    public static function getFilterApunteSum($uno,$dos,$lugar,$actividad,$cancelacion)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $lugar = (is_numeric($lugar) ? intval($lugar) : 99);
        $actividad = (is_numeric($actividad) ? intval($actividad) : 99);
        $cancelacion = (is_numeric($cancelacion) ? intval($cancelacion) : 99);

        if (($lugar == 99) && ($actividad == 99) && ($cancelacion == 99)){
            $sql = "SELECT SUM(apunte_cost) as apunte_costo FROM apuntes WHERE user_id = :user_id AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
            $query = $database->prepare($sql);
            $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos));
        }
        else{
            if (($lugar !== 99) && ($actividad !== 99) && ($cancelacion !== 99)){
                $sql = "SELECT SUM(apunte_cost) as apunte_costo FROM apuntes WHERE user_id = :user_id AND apunte_location = :apunte_location AND apunte_activity = :apunte_activity AND apunte_cancellation = :apunte_cancellation AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_location' => $lugar, ':apunte_activity' => $actividad, ':apunte_cancellation' => $cancelacion));
            }
            else if  (($lugar !== 99) && ($actividad !== 99) && ($cancelacion == 99)){
                $sql = "SELECT SUM(apunte_cost) as apunte_costo FROM apuntes WHERE user_id = :user_id AND apunte_location = :apunte_location AND apunte_activity = :apunte_activity  AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_location' => $lugar, ':apunte_activity' => $actividad));
            }
            else if  (($lugar !== 99) && ($actividad == 99) && ($cancelacion !== 99)){
                $sql = "SELECT SUM(apunte_cost) as apunte_costo FROM apuntes WHERE user_id = :user_id AND apunte_location = :apunte_location AND apunte_cancellation = :apunte_cancellation AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_location' => $lugar, ':apunte_cancellation' => $cancelacion));
            }
            else if  (($lugar == 99) && ($actividad !== 99) && ($cancelacion !== 99)){
                $sql = "SELECT SUM(apunte_cost) as apunte_costo FROM apuntes WHERE user_id = :user_id AND apunte_activity = :apunte_activity AND apunte_cancellation = :apunte_cancellation AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_activity' => $actividad, ':apunte_cancellation' => $cancelacion));
            }
            else if  (($lugar !== 99) && ($actividad == 99) && ($cancelacion == 99)){
                $sql = "SELECT SUM(apunte_cost) as apunte_costo FROM apuntes WHERE user_id = :user_id AND apunte_location = :apunte_location AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_location' => $lugar));
            }
            else if  (($lugar == 99) && ($actividad == 99) && ($cancelacion !== 99)){
                $sql = "SELECT SUM(apunte_cost) as apunte_costo FROM apuntes WHERE user_id = :user_id AND apunte_cancellation = :apunte_cancellation AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_cancellation' => $cancelacion));
            }
            else if  (($lugar == 99) && ($actividad !== 99) && ($cancelacion == 99)){
                $sql = "SELECT SUM(apunte_cost) as apunte_costo FROM apuntes WHERE user_id = :user_id AND apunte_activity = :apunte_activity AND apunte_date BETWEEN :apunte_date AND :apunte_date2";
                $query = $database->prepare($sql);
                $query->execute(array(':user_id' => Session::get('user_id'), ':apunte_date' => $uno, ':apunte_date2' => $dos, ':apunte_activity' => $actividad));
            }
        }

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a apunte (create a new one)
     * @param string $apunte_text apunte text that will be created
     * @return bool feedback (was the apunte created properly ?)
     */
    public static function createApunte($apunte_date, $apunte_hour, $apunte_person, $apunte_activity, $apunte_location, $apunte_cancellation, $apunte_fcancellation, $apunte_cost,  $apunte_text, $apunte_keywords, $location_name, $apunte_participante)
    {

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO apuntes (apunte_date, apunte_hour, apunte_person, apunte_activity, apunte_location, apunte_cancellation, apunte_fcancellation, apunte_cost, apunte_text, apunte_keywords, user_id, apunte_location_name, apunte_participante) VALUES (:apunte_date, :apunte_hour, :apunte_person, :apunte_activity, :apunte_location, :apunte_cancellation, :apunte_fcancellation, :apunte_cost, :apunte_text, :apunte_keywords, :user_id, :apunte_location_name, :apunte_participante)";
        $query = $database->prepare($sql);
        $query->execute(array(':apunte_date' => $apunte_date, ':apunte_hour' => $apunte_hour, ':apunte_person' => $apunte_person, ':apunte_activity' => $apunte_activity, ':apunte_location' => $apunte_location, ':apunte_cancellation' => $apunte_cancellation, ':apunte_fcancellation' => $apunte_fcancellation, ':apunte_cost' => $apunte_cost, ':apunte_text' => $apunte_text, ':apunte_keywords' => $apunte_keywords, ':user_id' => Session::get('user_id'), ':apunte_location_name' => $location_name, ':apunte_participante' => $apunte_participante));

        if ($query->rowCount() == 1) {
            $apunte_id = $database->lastInsertId();
            return self::getApunte($apunte_id);
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing apunte
     * @param int $apunte_id id of the specific apunte
     * @param string $apunte_text new text of the specific apunte
     * @return bool feedback (was the update successful ?)
     */
    public static function updateApunte($apunte_id, $apunte_date, $apunte_hour, $apunte_person, $apunte_activity, $apunte_location, $apunte_cancellation, $apunte_fcancellation, $apunte_cost, $apunte_text, $apunte_keywords, $location_name, $apunte_participante)
    {
        if (!$apunte_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE apuntes SET apunte_date = :apunte_date, apunte_hour = :apunte_hour, apunte_person = :apunte_person, apunte_activity = :apunte_activity, apunte_location = :apunte_location, apunte_cancellation = :apunte_cancellation, apunte_fcancellation = :apunte_fcancellation, apunte_cost = :apunte_cost, apunte_text = :apunte_text, apunte_keywords = :apunte_keywords, apunte_location_name = :apunte_location_name, apunte_participante = :apunte_participante WHERE apunte_id = :apunte_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':apunte_id' => $apunte_id, ':apunte_date' => $apunte_date, ':apunte_hour' => $apunte_hour, ':apunte_person' => $apunte_person, ':apunte_activity' => $apunte_activity, ':apunte_location' => $apunte_location, ':apunte_cancellation' => $apunte_cancellation, ':apunte_fcancellation' => $apunte_fcancellation, ':apunte_cost' => $apunte_cost, ':apunte_text' => $apunte_text, ':apunte_keywords' => $apunte_keywords, ':user_id' => Session::get('user_id'),':apunte_location_name' => $location_name, ':apunte_participante' => $apunte_participante));

        return self::getApunte($apunte_id);
    }

    /**
     * Delete a specific apunte
     * @param int $apunte_id id of the apunte
     * @return bool feedback (was the apunte deleted properly ?)
     */
    public static function deleteApunte($apunte_id)
    {
        if (!$apunte_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM apuntes WHERE apunte_id = :apunte_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':apunte_id' => $apunte_id, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }

    /**
     * Get all actividades (actividades are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAllActividades()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT actividad_id, actividad_text FROM actividades WHERE user_id = :user_id";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id')));

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single actividad
     * @param int $actividad_id id of the specific actividad
     * @return object a single object (the result)
     */
    public static function getActividad($actividad_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT actividad_id, actividad_text FROM actividades WHERE user_id = :user_id AND actividad_id = :actividad_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id'), ':actividad_id' => $actividad_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a actividad (create a new one)
     * @param string $actividad_text actividad text that will be created
     * @return bool feedback (was the actividad created properly ?)
     */
    public static function createActividad($actividad_text)
    {
        if (!$actividad_text || strlen($actividad_text) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO actividades (actividad_text, user_id) VALUES (:actividad_text, :user_id)";
        $query = $database->prepare($sql);
        $query->execute(array(':actividad_text' => $actividad_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing actividad
     * @param int $actividad_id id of the specific actividad
     * @param string $actividad_text new text of the specific actividad
     * @return bool feedback (was the update successful ?)
     */
    public static function updateActividad($actividad_id, $actividad_text)
    {
        if (!$actividad_id || !$actividad_text) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE actividades SET actividad_text = :actividad_text WHERE actividad_id = :actividad_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':actividad_id' => $actividad_id, ':actividad_text' => $actividad_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific actividad
     * @param int $actividad_id id of the actividad
     * @return bool feedback (was the actividad deleted properly ?)
     */
    public static function deleteActividad($actividad_id)
    {
        if (!$actividad_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM actividades WHERE actividad_id = :actividad_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':actividad_id' => $actividad_id, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }

    /**
     * Get all lugares (lugares are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAllLugares()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT lugar_id, lugar_text FROM lugares WHERE user_id = :user_id";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id')));

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single lugar
     * @param int $lugar_id id of the specific lugar
     * @return object a single object (the result)
     */
    public static function getLugar($lugar_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT user_id, lugar_id, lugar_text FROM lugares WHERE user_id = :user_id AND lugar_id = :lugar_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id'), ':lugar_id' => $lugar_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a lugar (create a new one)
     * @param string $lugar_text lugar text that will be created
     * @return bool feedback (was the lugar created properly ?)
     */
    public static function createLugar($lugar_text)
    {
        if (!$lugar_text || strlen($lugar_text) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO lugares (lugar_text, user_id) VALUES (:lugar_text, :user_id)";
        $query = $database->prepare($sql);
        $query->execute(array(':lugar_text' => $lugar_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing lugar
     * @param int $lugar_id id of the specific lugar
     * @param string $lugar_text new text of the specific lugar
     * @return bool feedback (was the update successful ?)
     */
    public static function updateLugar($lugar_id, $lugar_text)
    {
        if (!$lugar_id || !$lugar_text) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE lugares SET lugar_text = :lugar_text WHERE lugar_id = :lugar_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':lugar_id' => $lugar_id, ':lugar_text' => $lugar_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific lugar
     * @param int $lugar_id id of the lugar
     * @return bool feedback (was the lugar deleted properly ?)
     */
    public static function deleteLugar($lugar_id)
    {
        if (!$lugar_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM lugares WHERE lugar_id = :lugar_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':lugar_id' => $lugar_id, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }

    /**
     * Get all keywords (keywords are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAllKeywords()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT user_id, keyword_id, keyword_text FROM keywords WHERE user_id = :user_id";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id')));

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single keyword
     * @param int $keyword_id id of the specific keyword
     * @return object a single object (the result)
     */
    public static function getKeyword($keyword_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT user_id, keyword_id, keyword_text FROM keywords WHERE user_id = :user_id AND keyword_id = :keyword_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id'), ':keyword_id' => $keyword_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a keyword (create a new one)
     * @param string $keyword_text keyword text that will be created
     * @return bool feedback (was the keyword created properly ?)
     */
    public static function createKeyword($keyword_text)
    {
        if (!$keyword_text || strlen($keyword_text) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO keywords (keyword_text, user_id) VALUES (:keyword_text, :user_id)";
        $query = $database->prepare($sql);
        $query->execute(array(':keyword_text' => $keyword_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing keyword
     * @param int $keyword_id id of the specific keyword
     * @param string $keyword_text new text of the specific keyword
     * @return bool feedback (was the update successful ?)
     */
    public static function updateKeyword($keyword_id, $keyword_text)
    {
        if (!$keyword_id || !$keyword_text) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE keywords SET keyword_text = :keyword_text WHERE keyword_id = :keyword_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':keyword_id' => $keyword_id, ':keyword_text' => $keyword_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific keyword
     * @param int $keyword_id id of the keyword
     * @return bool feedback (was the keyword deleted properly ?)
     */
    public static function deleteKeyword($keyword_id)
    {
        if (!$keyword_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM keywords WHERE keyword_id = :keyword_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':keyword_id' => $keyword_id, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }




    /**
     * Get all Cancelaciones (Cancelaciones are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAllCancelaciones()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT cancelacion_id, cancelacion_text FROM cancelaciones WHERE user_id = :user_id";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id')));

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single cancelacion
     * @param int $cancelacion_id id of the specific cancelacion
     * @return object a single object (the result)
     */
    public static function getCancelacion($cancelacion_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT user_id, cancelacion_id, cancelacion_text FROM cancelaciones WHERE user_id = :user_id AND cancelacion_id = :cancelacion_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id'), ':cancelacion_id' => $cancelacion_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a cancelacion (create a new one)
     * @param string $cancelacion_text cancelacion text that will be created
     * @return bool feedback (was the cancelacion created properly ?)
     */
    public static function createCancelacion($cancelacion_text)
    {
        if (!$cancelacion_text || strlen($cancelacion_text) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO cancelaciones (cancelacion_text, user_id) VALUES (:cancelacion_text, :user_id)";
        $query = $database->prepare($sql);
        $query->execute(array(':cancelacion_text' => $cancelacion_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing cancelacion
     * @param int $cancelacion_id id of the specific cancelacion
     * @param string $cancelacion_text new text of the specific cancelacion
     * @return bool feedback (was the update successful ?)
     */
    public static function updateCancelacion($cancelacion_id, $cancelacion_text)
    {
        if (!$cancelacion_id || !$cancelacion_text) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE cancelaciones SET cancelacion_text = :cancelacion_text WHERE cancelacion_id = :cancelacion_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':cancelacion_id' => $cancelacion_id, ':cancelacion_text' => $cancelacion_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific cancelacion
     * @param int $cancelacion_id id of the cancelacion
     * @return bool feedback (was the cancelacion deleted properly ?)
     */
    public static function deleteCancelacion($cancelacion_id)
    {
        if (!$cancelacion_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM cancelaciones WHERE cancelacion_id = :cancelacion_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':cancelacion_id' => $cancelacion_id, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}
