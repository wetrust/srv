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
        else if ($tipo == 4){
            $sql = "SELECT * FROM parto WHERE id_paciente = :id_paciente";
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
        else if ($tipo == 4){
            $sql = "INSERT INTO parto (id_paciente, id_rn,nombre_madre,apellido_madre,lugar_parto_rn,nombre_rn,apellido_rn,sexo_rn,fecha_parto_rn,eg_parto,termino_parto,tipo_parto,patologia_materna,tipo_patologia_obstetrica,peso_rn,talla_rn,perimetro_craneo_rn,ipn_rn,peso_placentario,apgar_1,apgar_5,hiperbilirrubinemia,poliglobulia,hospital_ucin,sindrome_respiratorio,alta_con_madre,observaciones) VALUES (:id_paciente, :id_rn,:nombre_madre,:apellido_madre,:lugar_parto_rn,:nombre_rn,:apellido_rn,:sexo_rn,:fecha_parto_rn,:eg_parto,:termino_parto,:tipo_parto,:patologia_materna,:tipo_patologia_obstetrica,:peso_rn,:talla_rn,:perimetro_craneo_rn,:ipn_rn,:peso_placentario,:apgar_1,:apgar_5,:hiperbilirrubinemia,:poliglobulia,:hospital_ucin,:sindrome_respiratorio,:alta_con_madre,:observaciones)";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $data["id_paciente"], ':id_rn' => $data["id_rn"],':nombre_madre' => $data["nombre_madre"],':apellido_madre' => $data["apellido_madre"],':lugar_parto_rn' => $data["lugar_parto_rn"],':nombre_rn' => $data["nombre_rn"],':apellido_rn' => $data["apellido_rn"],':sexo_rn' => $data["sexo_rn"],':fecha_parto_rn' => $data["fecha_parto_rn"],':eg_parto' => $data["eg_parto"],':termino_parto' => $data["termino_parto"],':tipo_parto' => $data["tipo_parto"],':patologia_materna' => $data["patologia_materna"],':tipo_patologia_obstetrica' => $data["tipo_patologia_obstetrica"],':peso_rn' => $data["peso_rn"],':talla_rn' => $data["talla_rn"],':perimetro_craneo_rn' => $data["perimetro_craneo_rn"],':ipn_rn' => $data["ipn_rn"],':peso_placentario' => $data["peso_placentario"],':apgar_1' => $data["apgar_1"],':apgar_5' => $data["apgar_5"],':hiperbilirrubinemia' => $data["hiperbilirrubinemia"],':poliglobulia' => $data["poliglobulia"],':hospital_ucin' => $data["hospital_ucin"],':sindrome_respiratorio' => $data["sindrome_respiratorio"],':alta_con_madre' => $data["alta_con_madre"],':observaciones' => $data["observaciones"]));
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