<?php

/**
 * PrevisionModel
 * This is basically a simple CRUD (Create/Read/Update/Delete) demonstration.
 */
class NombreModel
{
    /**
     * Get all notes (notes are just example data that the user has created)
     * @return array an array with several objects (the results)
     */
    public static function getAll($rut)
    {

        $database = "";

        try {
            $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ, PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING);
            $database = new PDO(
               Config::get('DB_TYPE') . ':host=' . Config::get('DB_HOST') . ';dbname=dicom' .
                ';port=' . Config::get('DB_PORT') . ';charset=' . Config::get('DB_CHARSET'),
               Config::get('DB_USER'), Config::get('DB_PASS'), $options
               );
        } catch (PDOException $e) {

            // Echo custom message. Echo error code gives you some info.
            echo 'Database connection can not be estabilished. Please try again later.' . '<br>';
            echo 'Error code: ' . $e->getCode();

            // Stop application :(
            // No connection, reached limit connections etc. so no point to keep it running
            exit;
        }


        $sql = "SELECT * FROM DICOMPatients where PatientID = :PatientID";
        $query = $database->prepare($sql);
        $query->execute(array(':PatientID' => $rut));
        $query->execute();

        // fetchAll() is the PDO method that gets all result rows
        return $query->fetchAll();
    }

    public static function getAllStudies($rut, $studydate)
    {

        $database = "";

        try {
            $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ, PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING);
            $database = new PDO(
               Config::get('DB_TYPE') . ':host=' . Config::get('DB_HOST') . ';dbname=dicom' .
                ';port=' . Config::get('DB_PORT') . ';charset=' . Config::get('DB_CHARSET'),
               Config::get('DB_USER'), Config::get('DB_PASS'), $options
               );
        } catch (PDOException $e) {

            // Echo custom message. Echo error code gives you some info.
            echo 'Database connection can not be estabilished. Please try again later.' . '<br>';
            echo 'Error code: ' . $e->getCode();

            // Stop application :(
            // No connection, reached limit connections etc. so no point to keep it running
            exit;
        }

        $sql = "SELECT * FROM DICOMStudies where PatientID = :PatientID and StudyDate = :StudyDate LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':PatientID' => $rut, ':StudyDate' => $studydate));
        $query->execute();

        $result = new stdClass();
        $result->exist = false;
        // fetchAll() is the PDO method that gets all result rows
        if ($query->rowCount() == 1) {
            $result->exist = true;
            $result->StudyDate = $studydate;
        }

        return $result;
    }

    public static function getPatient()
    {
        $lastname = Request::post('patient_lastname');
        $database = "";

        try {
            $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ, PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING);
            $database = new PDO(
               Config::get('DB_TYPE') . ':host=' . Config::get('DB_HOST') . ';dbname=dicom' .
                ';port=' . Config::get('DB_PORT') . ';charset=' . Config::get('DB_CHARSET'),
               Config::get('DB_USER'), Config::get('DB_PASS'), $options
               );
        } catch (PDOException $e) {

            // Echo custom message. Echo error code gives you some info.
            echo 'Database connection can not be estabilished. Please try again later.' . '<br>';
            echo 'Error code: ' . $e->getCode();

            // Stop application :(
            // No connection, reached limit connections etc. so no point to keep it running
            exit;
        }

        $sql = "SELECT * FROM DICOMPatients where PatientNam LIKE ? LIMIT 5";
        $query = $database->prepare($sql);
        $query->execute(array($lastname. '%'));
        $query->execute();

        return $query->fetchAll();
    }

    public static function getRut()
    {
        $lastname = Request::post('patient_lastname');
        $database = "";

        try {
            $options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ, PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING);
            $database = new PDO(
               Config::get('DB_TYPE') . ':host=' . Config::get('DB_HOST') . ';dbname=dicom' .
                ';port=' . Config::get('DB_PORT') . ';charset=' . Config::get('DB_CHARSET'),
               Config::get('DB_USER'), Config::get('DB_PASS'), $options
               );
        } catch (PDOException $e) {

            // Echo custom message. Echo error code gives you some info.
            echo 'Database connection can not be estabilished. Please try again later.' . '<br>';
            echo 'Error code: ' . $e->getCode();

            // Stop application :(
            // No connection, reached limit connections etc. so no point to keep it running
            exit;
        }

        $lastname = explode(" ", $lastname);

        if (count($lastname) == 2){
            $lastname = $lastname[0] . " ". $lastname[1];
        }
        else if (count($lastname) == 3){
            $lastname = $lastname[0] . " ". $lastname[1] . "^" .$lastname[2];
        }
        else if (count($lastname) == 4){
            $lastname = $lastname[0] . " " . $lastname[1] . "^" .$lastname[2] . " " .$lastname[3];
        }

        $sql = "SELECT * FROM DICOMPatients where PatientNam LIKE ? LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array($lastname. '%'));
        $query->execute();

        return $query->fetch();
    }
}