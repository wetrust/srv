<?php

class EcoModel
{
    public static function getEcos($rut, $tipo)
    {
        $database = DatabaseFactory::getFactory()->getConnection();
        $response = new stdClass;
        $response->status = "ok";

        if ($tipo == 1){
            $sql = "SELECT * FROM eco_prim WHERE id_paciente = :id_paciente";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut));

            $response->data = $query->fetchAll();
            return $response;
        }
        else if ($tipo == 2){
            $sql = "SELECT * FROM eco_segundo WHERE id_paciente = :id_paciente";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut));

            $response->data = $query->fetchAll();
            return $response;
        }
        else if ($tipo == 3){
            $sql = "SELECT * FROM eco_doppler WHERE id_paciente = :id_paciente";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut));

            $response->data = $query->fetchAll();
            return $response;
        }

        $response->status = "fail";
        return $response;
    }

    public static function getEco($rut, $tipo,$numero)
    {
        $database = DatabaseFactory::getFactory()->getConnection();
        $response = new stdClass;
        $response->status = "ok";

        if ($tipo == 1){
            $sql = "SELECT * FROM eco_prim WHERE id_paciente = :id_paciente AND n_examen = :n_examen";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $numero));

            $response->data = $query->fetchAll();
            return $response;
        }
        else if ($tipo == 2){
            $sql = "SELECT * FROM eco_segundo WHERE id_paciente = :id_paciente AND n_examen = :n_examen";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $numero));

            $response->data = $query->fetchAll();
            return $response;
        }
        else if ($tipo == 3){
            $sql = "SELECT * FROM eco_doppler WHERE id_paciente = :id_paciente AND n_examen = :n_examen";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $numero));

            $response->data = $query->fetchAll();
            return $response;
        }

        $response->status = "fail";
        return $response;
    }

    public static function setEco($rut,$tipo,$data)
    {
        if (!$rut || strlen($rut) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();
        $data = json_decode($data, true);
        if ($tipo == 1){
            $sql = "INSERT INTO eco_prim (id_paciente, eg_examen, n_examen,embrion,prom_saco,fecha_examen) VALUES (:id_paciente,:eg_examen, :n_examen,:embrion,:prom_saco,:fecha_examen)";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut, ':eg_examen' => $data["eg"],':n_examen' => $data["examen"], ':embrion' => $data["embrion"], ':prom_saco' => $data["saco"], ':fecha_examen' => $data["fecha"]));
        } else if ($tipo == 2){
            $sql = "INSERT INTO eco_segundo (id_paciente, n_examen, fecha_examen, eg_examen, pfe_examen, pctpeso_examen, ccca_examen, dbp_examen, dof_examen, cc_examen, ca_examen, lf_examen, lh_examen, cerebelo_examen, bvm_examen, ccca_pct, bvm_pct, ca_pct) VALUES (:id_paciente, :n_examen, :fecha_examen, :eg_examen, :pfe_examen, :pctpeso_examen, :ccca_examen, :dbp_examen, :dof_examen, :cc_examen, :ca_examen, :lf_examen, :lh_examen, :cerebelo_examen, :bvm_examen, :ccca_pct, :bvm_pct, :ca_pct)";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $data["examen"], ':fecha_examen' => $data["fecha"], ':eg_examen' => $data["eg"], ':pfe_examen' => $data["fecha"], ':pctpeso_examen' => $data["pctpeso"], ':ccca_examen' => $data["ccca"], ':dbp_examen' => $data["dbp"], ':dof_examen' => $data["dof"], ':cc_examen' => $data["cc"], ':ca_examen' => $data["ca"], ':lf_examen' => $data["lf"], ':lh_examen' => $data["lh"], ':cerebelo_examen' => $data["cerebelo"], ':bvm_examen' => $data["bvm"], ':ccca_pct' => $data["cccapct"], ':bvm_pct' => $data["bvmpct"], ':ca_pct' => $data["capct"]));
        } else if ($tipo == 3){
            $sql = "INSERT INTO eco_doppler (id_paciente, n_examen, fecha_examen, eg_examen, uterina_derecha, uterina_pct_derecha, uterina_izquierda, uterina_pct_izquierda, uterinas, uterinas_pct, arteria_umbilical, arteria_pct_umbilical, arteria_media, arteria_pct_media, ccp, ccp_pct, ductus, ductus_pct, acm) VALUES (:id_paciente, :n_examen, :fecha_examen, :eg_examen, :uterina_derecha, :uterina_pct_derecha, :uterina_izquierda, :uterina_pct_izquierda, :uterinas, :uterinas_pct, :arteria_umbilical, :arteria_pct_umbilical, :arteria_media, :arteria_pct_media, :ccp, :ccp_pct, :ductus, :ductus_pct, :acm)";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut, ':n_examen' => $data["examen"], ':fecha_examen' => $data["fecha"], ':eg_examen' => $data["eg"], ':uterina_derecha' => $data["aud"],':uterina_pct_derecha' => $data["audPctTxt"], ':uterina_izquierda' => $data["aui"],':uterina_pct_izquierda' => $data["auiPctTxt"], ':uterinas' => $data["auprom"], ':uterinas_pct' => $data["auPctTxt"], ':arteria_umbilical' => $data["ipau"], ':arteria_pct_umbilical' => $data["ipauPctTxt"], ':arteria_media' => $data["ipacm"], ':arteria_pct_media' => $data["ipacmPctTxt"], ':ccp' => $data["ccp"], ':ccp_pct' => $data["ccpPctTxt"], ':ductus' => $data["dv"], ':ductus_pct' => $data["dvPctTxt"],':acm' => $data["psmACM"]));
        }

        if ($query->rowCount() == 1) {
            return self::getEcos($rut, $tipo);
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    public static function deleteEco($rut,$tipo,$data)
    {
        if (!$rut) {
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();
        $data = json_decode($data, true);

        if ($tipo == 1){
            $sql = "DELETE FROM eco_prim WHERE id_paciente = :id_paciente AND eg_examen = :eg_examen LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut, ':eg_examen' => $data["eg"]));
        }
        else if ($tipo == 2){
            $sql = "DELETE FROM eco_segundo WHERE id_paciente = :id_paciente AND eg_examen = :eg_examen LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut, ':eg_examen' => $data["eg"]));
        }
        else if ($tipo == 3){
            $sql = "DELETE FROM eco_doppler WHERE id_paciente = :id_paciente AND eg_examen = :eg_examen LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut, ':eg_examen' => $data["eg"]));
        }

        if ($query->rowCount() == 1) {
            return self::getEcos($rut, $tipo);
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}