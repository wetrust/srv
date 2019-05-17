<?php

class DicomModel
{
    /**
     * Get all notes (notes are just example data that the user has created)
     * @return array an array with several objects (the results)
     */

    
    public static function loadTags($rut, $file) {

        $folder = Config::get('DICOM_DIRECTORY') . $rut . "/" . $file;
        $dump_cmd = "/usr/bin/dcmdump -M +L +Qn ". $folder;
        $dump = Execute($dump_cmd);
        
        if(!$dump) {
          return false;
        }
        
        $tags = array();
        
        foreach(explode("\n", $dump) as $line) {
            $ge = '';
            $t = preg_match_all("/\((.*)\) [A-Z][A-Z]/", $line, $matches);
            if(isset($matches[1][0])) {
                $ge = $matches[1][0];
                if(!isset($tags["$ge"])) {
                    $tags["$ge"] = '';
                }
            }
            
            if(!$ge) {
                continue;
            }
            $val = '';
            $found = 0;
            $t = preg_match_all("/\[(.*)\]/", $line, $matches);
          
            if(isset($matches[1][0])) {
                $found = 1;
                $val = $matches[1][0];
                if(is_array($tags["$ge"])) { // Already an array
                    $tags["$ge"][] = $val;
                }
                else { // Create new array
                    $old_val = $this->tags["$ge"];
                    if($old_val) {
                        $tags["$ge"] = array();
                        $tags["$ge"][] = $old_val;
                        $tags["$ge"][] = $val;
                    }
                    else {
                        $tags["$ge"] = $val;
                    }
                }
            }
          
            if(is_array($tags["$ge"])) {
                $found = 1;
            }
          
            if(!$found) { // a couple of tags are not in [] preceded by =
                $t = preg_match_all("/\=(.*)\#/", $line, $matches);
                
                if(isset($matches[1][0])) {
                    $found = 1;
                    $val = $matches[1][0];
                    $tags["$ge"] = rtrim($val);
                }
            }
          
            if(!$found) { // a couple of tags are not in []
                $t = preg_match_all("/[A-Z][A-Z] (.*)\#/", $line, $matches);
            
                if(isset($matches[1][0])) {
                    $found = 1;
                    $val = $matches[1][0];
                    
                    if(strstr($val, '(no value available)')) {
                        $val = '';
                    }
              
                    $tags["$ge"] = rtrim($val);
                }
            }
        }

        return $tags;
    }

    public static function get_tag($tags, $group, $element) {
        $val = '';
        if (isset($tags["$group,$element"])) {
          $val = $tags["$group,$element"];
        }
        return ($val);
    }

    public static function multiframeToVideos($rut,$file)
    {
        $videoFile = substr($file, 0, strlen($file) -3) . "mp4";
        $folder = Config::get('DICOM_DIRECTORY') . $rut . "/";
        //comprobar si existe el vide
        if(file_exists($videoFile)){
            return true;
        }

        //comprobar si existe una carpeta temporal para crear el video
        if (!file_exists($folder . "tmp")) {
            mkdir($folder . "tmp", 0777);
        }

        //cambiar al directorio temporal
        $out = chdir ($folder . "tmp");
        //extraer todos los frames del archivo 
        $strCommand =  "/usr/bin/dcml2pnm +Fa +obr". $folder . $file . " \ frame ";
        $out = exec($strCommand);
    
   //     $archivos = scandir($folder . "/tmp");
     //   echo "escaneo de carpeta \n";
       // print_r($archivos);

        //obtener metadata del video

  //      if ($archivos == false){
    //        return false;
      //  }
        //else{
          //  $largo = 7;

            //foreach($archivos as $archivo){
              //  if (strlen($archivo) > 3){
                //    $new_name = str_replace('frame.', '', $archivo);

                //}
                //$tmpString = substr($archivo 0, strlen($archivo) -3);
           // }
      //  }
        $x = 0;
    
        if ($handle = opendir($folder . "/tmp")) {
            while (false !== ($file = readdir($handle))) {
                if ($file == '.' || $file == '..') {
                    continue;
                }
                if (!strstr($file, '.jpg')) {
                    continue;
                }

                //cortar imagen
                $im = @imagecreatefromjpeg($file);
                $im = @imagecrop($im, array( 'x' => 0, 'y' => 12, 'width' => 960, 'height' => 720 ) );

                imagejpeg($im,$file,100);

                // Liberar memoria
                imagedestroy($im);

                //cambiar de nombre
                $new_name = str_replace('frame.', '', $file);
                $new_name = substr($new_name, 1, strlen($new_name) -1);
                $l = strlen($new_name);
                if ($l < 6){
                    $new_name = "0$new_name"; 
                }
                if ($l < 7){
                    $new_name = "0$new_name"; 
                }
                $new_name = "img$new_name"; 
                if ($file != $new_name) {
                    rename($file, $new_name);
                }
                $x++;
            }
            closedir($handle);
          }

          //$framerate = 24;
          //if ($x < 10) {
          //  $framerate = 10;
          //}
        //$vid_cmd = "ffmpeg -r 10  -i img%03d.jpg -profile:v high444 -vcodec libx264 \"$videoFile\"";
        //$out = exec($vid_cmd);
        
        //mover a la carpeta anterior
        //$vid_cmd = "mv \"$videoFile\" \"$folder\"";
        //$out = exec($vid_cmd);
        //cambiar al directorio anterior
        //$out = chdir ($folder);
        //eliminar los archivos temporales
        //$vid_cmd = "rm -R tmp";
        //$out = exec($vid_cmd);

        //$stream = new StreamModel($folder.$videoFile);
        //$stream->start();
        return true;
        //"https://servidor.crecimientofetal.cl/dicom/multiframe/19070494-7/1.2.276.0.26.1.1.1.2.2018.258.36118.6516656_0001_000003_1533917314028b.dcm"
        //"https://servidor.crecimientofetal.cl/data/19070494-7/tmp/output.mp4"
    }

    public static function delete()
    {
        $id = Config::get('DICOM_DIRECTORY') . Request::post('id').".dcm";
        $idJpeg = Config::get('DICOM_DIRECTORY') . Request::post('id').".jpg";
        $vid_cmd = "rm \"$id\"";
        $out = exec($vid_cmd);

        $vid_cmd = "rm \"$idJpeg\"";
        $out = exec($vid_cmd);
        return true;
    }

    public static function getAllImages($rut, $StudyDate, $StudyInsta)
    {
            $database = "";
            $result = new stdClass();
            $StudyDate = intval($StudyDate);
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
            $sql = "SELECT ObjectFile, NumberOfFr FROM DICOMImages where ImagePat = :ImagePat AND SeriesInst like :SeriesInst ";
            $query = $database->prepare($sql);
            $query->execute(array(':ImagePat' => $rut, ':SeriesInst' => $StudyInsta . '%'));

            if ($query->rowCount() > 0) {
                $imagenes = $query->fetchAll();
                $result->exist = true;

                $archivos = scandir(Config::get('DICOM_DIRECTORY') . $rut . "/");

                if ($archivos == false){
                    $result->empty = true;
                }
                else{
                    $result->empty = false;
                    $archivosJPG = array();
                    $archivosJPG = array();

                    foreach($imagenes as $imagen){
                        $strArchivoJPG = Config::get('DICOM_DIRECTORY') . substr($imagen->ObjectFile, 0, strlen($imagen->ObjectFile) -3) . "jpg";
                        $JPGData = array();

                        if ($imagen->NumberOfFr > 0){
                            array_push($JPGData, true);
                        }
                        else{
                            array_push($JPGData, false);  
                        }

                        if(file_exists($strArchivoJPG)){
                            $strArchivoJPG = str_replace($rut . "/", '', $strArchivoJPG);
                            array_push($JPGData, substr($imagen->ObjectFile, 0, strlen($imagen->ObjectFile) -3) . "jpg");
                            array_push($archivosJPG,$JPGData);
                        }
                        else{
                            $strCommand =  "/usr/bin/dcmj2pnm +fo +oj " . Config::get('DICOM_DIRECTORY') . $imagen->ObjectFile .  " " . $strArchivoJPG;
                            $out = exec($strCommand);
                            if(file_exists($strArchivoJPG)){
                                $strArchivoJPG = str_replace($rut . "/", '', $strArchivoJPG);
                                array_push($JPGData, substr($imagen->ObjectFile, 0, strlen($imagen->ObjectFile) -3) . "jpg");
                                array_push($archivosJPG,$JPGData);
                            }   
                        }
                    }

                    $result->JPGFiles = $archivosJPG;
                }
            }
            else{
                $result->exist = false;
            }

        return $result;
    }
    public static function lastpatients()
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
            $sql = "SELECT * FROM dicom.DICOMPatients tab1 Left join crecimientofetal.user_exmprevio tab2 on tab1.PatientID = tab2.user_id ORDER BY AccessTime DESC LIMIT 20";
            $query = $database->prepare($sql);
            $query->execute();

            return $query->fetchAll();
    }

    public static function getpatients($RUT)
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
            $sql = "SELECT PatientID, PatientNam, PatientBir, AccessTime FROM dicom.DICOMPatients WHERE PatientID LIKE ? ORDER BY AccessTime DESC LIMIT 20";
            $query = $database->prepare($sql);
            $query->execute(array($RUT. '%'));

            return $query->fetchAll();
    }

    public static function getStudies($RUT)
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
            $sql = "SELECT StudyDate, StudyTime FROM dicom.DICOMStudies WHERE PatientID = :patient ORDER BY AccessTime DESC LIMIT 20";
            $query = $database->prepare($sql);
            $query->execute(array(':patient' => $RUT));

            return $query->fetchAll();
    }
    /**
     * Get a single note
     * @param int $note_id id of the specific note
     * @return object a single object (the result)
     */
    public static function getNote($note_id)
    {
        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "SELECT user_id, note_id, note_text FROM notes WHERE user_id = :user_id AND note_id = :note_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':user_id' => Session::get('user_id'), ':note_id' => $note_id));

        // fetch() is the PDO method that gets a single result
        return $query->fetch();
    }

    /**
     * Set a note (create a new one)
     * @param string $note_text note text that will be created
     * @return bool feedback (was the note created properly ?)
     */
    public static function createNote($note_text)
    {
        if (!$note_text || strlen($note_text) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO notes (note_text, user_id) VALUES (:note_text, :user_id)";
        $query = $database->prepare($sql);
        $query->execute(array(':note_text' => $note_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    /**
     * Update an existing note
     * @param int $note_id id of the specific note
     * @param string $note_text new text of the specific note
     * @return bool feedback (was the update successful ?)
     */
    public static function updateNote($note_id, $note_text)
    {
        if (!$note_id || !$note_text) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "UPDATE notes SET note_text = :note_text WHERE note_id = :note_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':note_id' => $note_id, ':note_text' => $note_text, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
        return false;
    }

    /**
     * Delete a specific note
     * @param int $note_id id of the note
     * @return bool feedback (was the note deleted properly ?)
     */
    public static function deleteNote($note_id)
    {
        if (!$note_id) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "DELETE FROM notes WHERE note_id = :note_id AND user_id = :user_id LIMIT 1";
        $query = $database->prepare($sql);
        $query->execute(array(':note_id' => $note_id, ':user_id' => Session::get('user_id')));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }


    public static function sendDicomImages()
    {
        $user_id = Request::post('user_id');
        $img_id = Request::post('img_id');
        $studyDate = Request::post('studyDate');
        $user_email = Request::post('user_email');

        $respuesta = new stdClass();
        $mail = new Mail;

        if ($user_id && $img_id && $studyDate && $user_email){

            $files = self::getAllImages($user_id, $studyDate);
            $files = $files->JPGFiles;
            $filesJPG = [];
            $contador = 0;

            $img_id = json_decode($img_id, true);
            foreach($files as $file){
                if (in_array($contador, $img_id)) {
                    array_push($filesJPG, $file[1]);
                }
                $contador++;
            }

            $body = "Servicio envio privado de imágenes ecográficas y/o Informes\n\n---- ADVERTENCIA ----\nLa información contenida en este correo electrónico, y en su caso, cualquier fichero anexo al mismo, son de carácter privado y confidencial siendo para uso exclusivode su destinatario.";

            $envio = $mail->sendMailWithAttachment($user_email, Config::get('EMAIL_PASSWORD_RESET_FROM_EMAIL'), "Crecimiento Fetal", "Imágenes Gineco-Obstétricas", $body, $filesJPG);

            if ($envio == false){
                return $mail->error;
            }
            else{
                return $respuesta->send = $envio;
            }
             
        }
        else{
            return $respuesta->send = false;
        }
        
    }

    public static function sendDicomCine()
    {
        $user_id = Request::post('user_id');
        $img_id = Request::post('img_id');
        $studyDate = Request::post('studyDate');
        $user_email = Request::post('user_email');

        $respuesta = new stdClass();
        $mail = new Mail;

        if ($user_id && $img_id && $studyDate && $user_email){

            $files = self::getAllImages($user_id, $studyDate);
            $files = $files->JPGFiles;
            $filesJPG = [];
            $contador = 0;

            $img_id = json_decode($img_id, true);
            foreach($files as $file){
                if (in_array($contador, $img_id)) {
                    $strArchivoJPG = Config::get('DICOM_DIRECTORY') . $file[1];
                    $strArchivoJPG = str_replace('jpg', 'mp4', $strArchivoJPG);

                    if(file_exists($strArchivoJPG)){
                        $fileTmp = str_replace('jpg', 'mp4', $file[1]);
                        array_push($filesJPG, $fileTmp);
                    }
                }
                $contador++;
            }

            $body = "Servicio envio privado de imágenes ecográficas y/o Informes\n\n---- ADVERTENCIA ----\nLa información contenida en este correo electrónico, y en su caso, cualquier fichero anexo al mismo, son de carácter privado y confidencial siendo para uso exclusivode su destinatario.";

            $envio = $mail->sendMailWithAttachment($user_email, Config::get('EMAIL_PASSWORD_RESET_FROM_EMAIL'), "Crecimiento Fetal", "Imágenes Gineco-Obstétricas", $body, $filesJPG);

            if ($envio == false){
                return $mail->error;
            }
            else{
                return $respuesta->send = $envio;
            }
             
        }
        else{
            return $respuesta->send = false;
        }
        
    }
}
