<?php

/**
 * NoteModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class TurnosModel
{

    public static function calendar($mes, $ano){
        
        try {
            $fecha = new DateTime($ano . '-' . $mes .'-01');
            $diaDeLaSemana = $fecha->format('N'); 
            $diasEnElMes = $fecha->format('t');

            $return = new stdClass();
            $return->fecha = $fecha;
            $return->diaDeLaSemana = $diaDeLaSemana;
            $return->diasEnElMes = $diasEnElMes;
            $return->turnos = self::getMonthTurnos($mes, $ano);

            return $return;

        } catch (Exception $e) {
            echo $e->getMessage();
            exit(1);
        }
    }
    
    public static function getAllProfesionales()
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT profesional_id, profesional_name, profesional_rut, profesional_telefono, profesional_correo FROM profesionales";
        $query = $database->prepare($sql);
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single keyword
     * @param int $keyword_id id of the specific keyword
     * @return object a single object (the result)
     */
    public static function getProfesional($keyword_id)
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
    public static function createProfesional($name,$rut, $correo,$telefono)
    {
        if (!$name || strlen($name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO profesionales (profesional_name, profesional_rut, profesional_telefono, profesional_correo) VALUES (:profesional_name, :profesional_rut, :profesional_telefono, :profesional_correo)";
        $query = $database->prepare($sql);
        $query->execute(array(':profesional_name' => $name, ':profesional_rut' => $rut, ':profesional_telefono' => $telefono, ':profesional_correo' => $correo));

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
    public static function deleteProfesional($profesional_id)
    {
        if (!$profesional_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM profesionales WHERE profesional_id = :profesional_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':profesional_id' => $profesional_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }

    public static function getMonthTurnos($mes, $ano)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $fecha1 = $ano . "-" . $mes . "-" .'-01';
        $fecha = new DateTime($ano . '-' . $mes .'-01');
        $fecha2 = $ano . "-" . $mes . "-" . $fecha->format('t');

        $sql = "SELECT turno_id, turno_profesional, turno_fechain, turno_turno, turno_profesional_nombre FROM turnos WHERE turno_fechain BETWEEN :turno_fechain AND :turno_fechaout";
        $query = $database->prepare($sql);
        $query->execute(array(':turno_fechain' => $fecha1, ':turno_fechaout' => $fecha2));

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    public static function getAllTurnos($dia, $mes, $ano)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $fecha = $ano . "-" . $mes . "-" . $dia;
        $sql = "SELECT turno_id, turno_profesional, turno_fechain, turno_turno, turno_profesional_nombre FROM turnos WHERE turno_fechain = :turno_fechain";
        $query = $database->prepare($sql);
        $query->execute(array(':turno_fechain' => $fecha));

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    /**
     * Get a single keyword
     * @param int $keyword_id id of the specific keyword
     * @return object a single object (the result)
     */
    public static function getTurnos($fechainic)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT turno_profesional, turno_fechain, turno_turno, turno_profesional_nombre FROM turnos WHERE turno_fechain = :turno_fechain LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':turno_fechain' => $fechainic));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a keyword (create a new one)
     * @param string $keyword_text keyword text that will be created
     * @return bool feedback (was the keyword created properly ?)
     */
    public static function createTurnos($profesional,$profesional_nombre, $fechainic,$turno)
    {
        if (!$profesional) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return 'fuck';
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO turnos (turno_profesional, turno_profesional_nombre, turno_fechain, turno_turno) VALUES (:turno_profesional, :turno_profesional_nombre, :turno_fechain, :turno_turno)";
        $query = $database->prepare($sql);
        $query->execute(array(':turno_profesional' => $profesional, ':turno_profesional_nombre' => $profesional_nombre, ':turno_fechain' => $fechainic, ':turno_turno' => intval($turno)));

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
    public static function updateTurnos($keyword_id, $keyword_text)
    {
        if (!$keyword_id || !$keyword_text) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE turnos SET keyword_text = :keyword_text WHERE keyword_id = :keyword_id AND user_id = :user_id LIMIT 1";
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
    public static function deleteTurnos($turno_id)
    {
        if (!$turno_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM turnos WHERE turno_id = :turno_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':turno_id' => $turno_id));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }

}
