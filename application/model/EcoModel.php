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
            $sql = "SELECT * FROM parto ORDER BY id_parto DESC";
            $query = $database->prepare($sql);
            $query->execute();

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
        else if ($tipo == 4){

            $tipoB = Request::post('tipoB');

            if ($tipoB == 0){
                $sql = "SELECT * FROM parto WHERE id_paciente = :id_paciente";
                $query = $database->prepare($sql);
                $query->execute(array(':id_paciente' => $rut));
            }
            else if ($tipoB == 1){
                $sql = "SELECT * FROM parto WHERE id_rn = :id_rn";
                $query = $database->prepare($sql);
                $query->execute(array(':id_rn' => $rut));
            }
            else if ($tipoB == 2){
                $sql = "SELECT * FROM parto WHERE apellido_madre = :apellido_madre";
                $query = $database->prepare($sql);
                $query->execute(array(':apellido_madre' => $rut));
            }
            
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

            $sql = "SELECT * FROM eco_prim WHERE id_paciente = :id_paciente and n_examen = :n_examen LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $data["examen"]));

            if ($query->rowCount() == 1) {
                self::updateEco($rut,$tipo,$data);
                return self::getEcos($rut, $tipo);
            }
            else {
                $sql = "INSERT INTO eco_prim (id_paciente, eg_examen, n_examen,embrion,prom_saco,fecha_examen,comentarios, douglas, douglas_comentarios, anexo_der, anexo_izq, embrion_desc, fcf,saco_vitelino, saco_gest, saco_vitelino_mm,utero_ubic_uno,utero_ubic_dos,cuerpo_uterino) VALUES (:id_paciente,:eg_examen, :n_examen,:embrion,:prom_saco,:fecha_examen, :comentarios, :douglas, :douglas_comentarios, :anexo_der, :anexo_izq, :embrion_desc, :fcf, :saco_vitelino, :saco_gest, :saco_vitelino_mm, :utero_ubic_uno, :utero_ubic_dos, :cuerpo_uterino)";
                $query = $database->prepare($sql);
                $query->execute(array(':id_paciente' => $rut, ':eg_examen' => $data["eg"],':n_examen' => $data["examen"], ':embrion' => $data["embrion"], ':prom_saco' => $data["saco"], ':fecha_examen' => $data["fecha"],':comentarios' => $data["comentarios"], ':douglas' => $data["douglas"], ':douglas_comentarios' => $data["douglas_comentarios"], ':anexo_der' => $data["anexo_der"], ':anexo_izq' => $data["anexo_izq"], ':embrion_desc' => $data["embrion_desc"], ':fcf' => $data["fcf"],':saco_vitelino' => $data["saco_vitelino"], ':saco_gest' => $data["saco_gest"], ':saco_vitelino_mm' => $data["saco_vitelino_mm"],':utero_ubic_uno' => $data["utero_ubic_uno"],':utero_ubic_dos' => $data["utero_ubic_dos"],':cuerpo_uterino' => $data["cuerpo_uterino"]));
            }
        } else if ($tipo == 2){

            $sql = "SELECT * FROM eco_segundo WHERE id_paciente = :id_paciente and n_examen = :n_examen LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $data["examen"]));

            if ($query->rowCount() == 1) {
                self::updateEco($rut,$tipo,$data);
                return self::getEcos($rut, $tipo);
            }
            else {
                $sql = "INSERT INTO eco_segundo (id_paciente, n_examen, fecha_examen, eg_examen, pfe_examen, pctpeso_examen, ccca_examen, dbp_examen, dof_examen, cc_examen, ca_examen, lf_examen, lh_examen, cerebelo_examen, bvm_examen, ccca_pct, bvm_pct, ca_pct) VALUES (:id_paciente, :n_examen, :fecha_examen, :eg_examen, :pfe_examen, :pctpeso_examen, :ccca_examen, :dbp_examen, :dof_examen, :cc_examen, :ca_examen, :lf_examen, :lh_examen, :cerebelo_examen, :bvm_examen, :ccca_pct, :bvm_pct, :ca_pct)";
                $query = $database->prepare($sql);
                $query->execute(array(':id_paciente' => $rut,':n_examen' => $data["examen"], ':fecha_examen' => $data["fecha"], ':eg_examen' => $data["eg"], ':pfe_examen' => $data["fecha"], ':pctpeso_examen' => $data["pctpeso"], ':ccca_examen' => $data["ccca"], ':dbp_examen' => $data["dbp"], ':dof_examen' => $data["dof"], ':cc_examen' => $data["cc"], ':ca_examen' => $data["ca"], ':lf_examen' => $data["lf"], ':lh_examen' => $data["lh"], ':cerebelo_examen' => $data["cerebelo"], ':bvm_examen' => $data["bvm"], ':ccca_pct' => $data["cccapct"], ':bvm_pct' => $data["bvmpct"], ':ca_pct' => $data["capct"]));
            }
        } else if ($tipo == 3){

            $sql = "SELECT * FROM eco_doppler WHERE id_paciente = :id_paciente and n_examen = :n_examen LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $data["examen"]));

            if ($query->rowCount() == 1) {
                self::updateEco($rut,$tipo,$data);
                return self::getEcos($rut, $tipo);
            }
            else {
                $sql = "INSERT INTO eco_doppler (id_paciente, n_examen, fecha_examen, eg_examen, uterina_derecha, uterina_pct_derecha, uterina_izquierda, uterina_pct_izquierda, uterinas, uterinas_pct, arteria_umbilical, arteria_pct_umbilical, arteria_media, arteria_pct_media, ccp, ccp_pct, ductus, ductus_pct, acm,liquido,bvm,motivo,antecedentes_obstetricos,presentacion,motilidad_fetal,placenta_ubic,comentarios) VALUES (:id_paciente, :n_examen, :fecha_examen, :eg_examen, :uterina_derecha, :uterina_pct_derecha, :uterina_izquierda, :uterina_pct_izquierda, :uterinas, :uterinas_pct, :arteria_umbilical, :arteria_pct_umbilical, :arteria_media, :arteria_pct_media, :ccp, :ccp_pct, :ductus, :ductus_pct, :acm,:liquido,:bvm,:motivo,:antecedentes_obstetricos,:presentacion,:motilidad_fetal,:placenta_ubic,:comentarios)";
                $query = $database->prepare($sql);
                $query->execute(array(':id_paciente' => $rut, ':n_examen' => $data["examen"], ':fecha_examen' => $data["fecha"], ':eg_examen' => $data["eg"], ':uterina_derecha' => $data["aud"],':uterina_pct_derecha' => $data["audPctTxt"], ':uterina_izquierda' => $data["aui"],':uterina_pct_izquierda' => $data["auiPctTxt"], ':uterinas' => $data["auprom"], ':uterinas_pct' => $data["auPctTxt"], ':arteria_umbilical' => $data["ipau"], ':arteria_pct_umbilical' => $data["ipauPctTxt"], ':arteria_media' => $data["ipacm"], ':arteria_pct_media' => $data["ipacmPctTxt"], ':ccp' => $data["ccp"], ':ccp_pct' => $data["ccpPctTxt"], ':ductus' => $data["dv"], ':ductus_pct' => $data["dvPctTxt"],':acm' => $data["psmACM"],':liquido' => $data["liquido"],':bvm' => $data["bvm"],':motivo' => $data["motivo"], ':antecedentes_obstetricos' => $data["antecedentes_obstetricos"],':presentacion' => $data["presentacion"],':motilidad_fetal' => $data["motilidad_fetal"],':placenta_ubic' => $data["placenta_ubic"],':comentarios' => $data["comentarios"]));
            }
        }
        else if ($tipo == 4){

            $sql = "SELECT * FROM parto WHERE id_paciente = :id_paciente LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut));

            if ($query->rowCount() == 1) {
                self::updateEco($rut,$tipo,$data);
                return self::getEcos($rut, $tipo);
            }
            else {
                $data["solicito_consentimiento"] = ($data["solicito_consentimiento"] == "true" ? 1 : 0);
                $data["acepto_consentimiento"] = ($data["acepto_consentimiento"] == "true" ? 1 : 0);

                $sql = "INSERT INTO parto (id_paciente ,id_rn, nombre_madre ,apellido_madre ,lugar_parto_rn ,nombre_rn ,apellido_rn , sexo_rn,fecha_parto_rn ,eg_parto ,termino_parto ,tipo_parto ,tipo_patologia_obstetrica ,peso_rn ,talla_rn ,perimetro_craneo_rn ,ipn_rn ,peso_eg_nacional ,peso_eg_regional ,peso_eg_ajustado ,ipn_eg_ajustado ,peso_placentario ,apgar_1 ,apgar_5 ,hipoglicemia_riesgo ,hipoglicemia_sospechada ,hipoglicemia_confirmada ,hiperbilirrubinemia ,poliglobulia ,hospital_ucin ,sindrome_respiratorio ,alta_con_madre ,observaciones ,meconio ,conducta_tres ,glicemia_tres,dextro_tres,conducta_dos,glicemia_dos,dextro_dos ,conducta_uno ,glicemia_uno ,dextro_uno ,prof_alta_rn ,prof_atencion_parto,solicito_consentimiento,acepto_consentimiento) VALUES (:id_paciente,:id_rn,:nombre_madre,:apellido_madre,:lugar_parto_rn,:nombre_rn,:apellido_rn,:sexo_rn, :fecha_parto_rn,:eg_parto,:termino_parto,:tipo_parto,:tipo_patologia_obstetrica,:peso_rn,:talla_rn,:perimetro_craneo_rn,:ipn_rn,:peso_eg_nacional,:peso_eg_regional,:peso_eg_ajustado,:ipn_eg_ajustado,:peso_placentario,:apgar_1,:apgar_5,:hipoglicemia_riesgo,:hipoglicemia_sospechada,:hipoglicemia_confirmada,:hiperbilirrubinemia,:poliglobulia,:hospital_ucin,:sindrome_respiratorio,:alta_con_madre,:observaciones,:meconio,:conducta_tres,:glicemia_tres,:dextro_tres,:conducta_dos,:glicemia_dos,:dextro_dos,:conducta_uno ,:glicemia_uno, :dextro_uno ,:prof_alta_rn ,:prof_atencion_parto,:solicito_consentimiento,:acepto_consentimiento)";
                $query = $database->prepare($sql);
                $query->execute(array(':id_paciente' => $rut,':id_rn' => $data["id_rn"],':nombre_madre' => $data["nombre_madre"],':apellido_madre' => $data["apellido_madre"],':lugar_parto_rn' => $data["lugar_parto_rn"],':nombre_rn' => $data["nombre_rn"],':apellido_rn' => $data["apellido_rn"],':sexo_rn' => $data["sexo_rn"],':fecha_parto_rn' => $data["fecha_parto_rn"],':eg_parto' => $data["eg_parto"],':termino_parto' => $data["termino_parto"],':tipo_parto' => $data["tipo_parto"],':tipo_patologia_obstetrica' => $data["tipo_patologia_obstetrica"],':peso_rn' => $data["peso_rn"],':talla_rn' => $data["talla_rn"],':perimetro_craneo_rn' => $data["perimetro_craneo_rn"],':ipn_rn' => $data["ipn_rn"],':peso_eg_nacional' => $data["peso_eg_nacional"],':peso_eg_regional' => $data["peso_eg_regional"],':peso_eg_ajustado' => $data["peso_eg_ajustado"],':ipn_eg_ajustado' => $data["ipn_eg_ajustado"],':peso_placentario' => $data["peso_placentario"],':apgar_1' => $data["apgar_1"],':apgar_5' => $data["apgar_5"],':hipoglicemia_riesgo' => $data["hipoglicemia_riesgo"],':hipoglicemia_sospechada' => $data["hipoglicemia_sospechada"],':hipoglicemia_confirmada' => $data["hipoglicemia_confirmada"],':hiperbilirrubinemia' => $data["hiperbilirrubinemia"],':poliglobulia' => $data["poliglobulia"],':hospital_ucin' => $data["hospital_ucin"],':sindrome_respiratorio' => $data["sindrome_respiratorio"],':alta_con_madre' => $data["alta_con_madre"],':observaciones' => $data["observaciones"],':meconio' => $data["meconio"],':conducta_tres' => $data["conducta_tres"],':glicemia_tres' => $data["glicemia_tres"],':dextro_tres' => $data["dextro_tres"],':conducta_dos' => $data["conducta_dos"],':glicemia_dos' => $data["glicemia_dos"],':dextro_dos' => $data["dextro_dos"],':conducta_uno' => $data["conducta_uno"],':glicemia_uno' => $data["glicemia_uno"],':dextro_uno' => $data["dextro_uno"],':prof_alta_rn' => $data["prof_alta_rn"],':prof_atencion_parto' =>$data["prof_atencion_parto"], ':solicito_consentimiento'=>$data["solicito_consentimiento"], ':acepto_consentimiento'=>$data["acepto_consentimiento"]));
            }
        }

        if ($query->rowCount() == 1) {
            return self::getEcos($rut, $tipo);
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }

    public static function updateEco($rut,$tipo,$data)
    {
        if (!$rut || strlen($rut) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        if ($tipo == 1){
            $sql = "UPDATE eco_prim SET eg_examen = :eg_examen, embrion = :embrion,prom_saco = :prom_saco,fecha_examen = :fecha_examen, comentarios = :comentarios, douglas = :douglas, douglas_comentarios = :douglas_comentarios, anexo_der = :anexo_der, anexo_izq = :anexo_izq, embrion_desc = :embrion_desc, fcf = :fcf,saco_vitelino = :saco_vitelino, saco_gest = :saco_gest, saco_vitelino_mm = :saco_vitelino_mm,utero_ubic_uno = :utero_ubic_uno,utero_ubic_dos = :utero_ubic_dos,cuerpo_uterino = :cuerpo_uterino WHERE id_paciente = :id_paciente And n_examen = :n_examen LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut, ':eg_examen' => $data["eg"],':n_examen' => $data["examen"], ':embrion' => $data["embrion"], ':prom_saco' => $data["saco"], ':fecha_examen' => $data["fecha"],  ':comentarios'  => $data["comentarios"], ':douglas'  => $data["douglas"], ':douglas_comentarios'  => $data["douglas_comentarios"], ':anexo_der'  => $data["anexo_der"], ':anexo_izq'  => $data["anexo_izq"], ':embrion_desc' => $data["embrion_desc"], ':fcf' => $data["fcf"], ':saco_vitelino' => $data["saco_vitelino"], ':saco_gest' => $data["saco_gest"], ':saco_vitelino_mm' => $data["saco_vitelino_mm"],':utero_ubic_uno' => $data["utero_ubic_uno"],':utero_ubic_dos' => $data["utero_ubic_dos"],':cuerpo_uterino' => $data["cuerpo_uterino"]));
        }
        else if ($tipo == 2){
            $sql = "UPDATE eco_segundo SET id_paciente = :id_paciente, n_examen = :n_examen, fecha_examen = :fecha_examen, eg_examen = :eg_examen, pfe_examen = :pfe_examen, pctpeso_examen = :pctpeso_examen, ccca_examen = :ccca_examen, dbp_examen = :dbp_examen, dof_examen = :dof_examen, cc_examen = :cc_examen, ca_examen = :ca_examen, lf_examen = :lf_examen, lh_examen = :lh_examen, cerebelo_examen = :cerebelo_examen, bvm_examen = :bvm_examen, ccca_pct = :ccca_pct, bvm_pct = :bvm_pct, ca_pct = :ca_pct WHERE id_paciente = :id_paciente And n_examen = :n_examen LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':n_examen' => $data["examen"], ':fecha_examen' => $data["fecha"], ':eg_examen' => $data["eg"], ':pfe_examen' => $data["fecha"], ':pctpeso_examen' => $data["pctpeso"], ':ccca_examen' => $data["ccca"], ':dbp_examen' => $data["dbp"], ':dof_examen' => $data["dof"], ':cc_examen' => $data["cc"], ':ca_examen' => $data["ca"], ':lf_examen' => $data["lf"], ':lh_examen' => $data["lh"], ':cerebelo_examen' => $data["cerebelo"], ':bvm_examen' => $data["bvm"], ':ccca_pct' => $data["cccapct"], ':bvm_pct' => $data["bvmpct"], ':ca_pct' => $data["capct"]));
        }
        else if ($tipo == 3){
            $sql = "UPDATE eco_doppler SET id_paciente = :id_paciente, n_examen = :n_examen, fecha_examen = :fecha_examen, eg_examen = :eg_examen, uterina_derecha = :uterina_derecha, uterina_pct_derecha = :uterina_pct_derecha, uterina_izquierda = :uterina_izquierda, uterina_pct_izquierda = :uterina_pct_izquierda, uterinas = :uterinas, uterinas_pct = :uterinas_pct, arteria_umbilical = :arteria_umbilical, arteria_pct_umbilical = :arteria_pct_umbilical, arteria_media = :arteria_media, arteria_pct_media = :arteria_pct_media, ccp = :ccp, ccp_pct = :ccp_pct, ductus = :ductus, ductus_pct = :ductus_pct, acm = :acm,liquido = :liquido,bvm = :bvm,motivo = :motivo,antecedentes_obstetricos = :antecedentes_obstetricos,presentacion = :presentacion,motilidad_fetal = :motilidad_fetal,placenta_ubic = :placenta_ubic,comentarios = :comentarios WHERE id_paciente = :id_paciente And n_examen = :n_examen LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut, ':n_examen' => $data["examen"], ':fecha_examen' => $data["fecha"], ':eg_examen' => $data["eg"], ':uterina_derecha' => $data["aud"],':uterina_pct_derecha' => $data["audPctTxt"], ':uterina_izquierda' => $data["aui"],':uterina_pct_izquierda' => $data["auiPctTxt"], ':uterinas' => $data["auprom"], ':uterinas_pct' => $data["auPctTxt"], ':arteria_umbilical' => $data["ipau"], ':arteria_pct_umbilical' => $data["ipauPctTxt"], ':arteria_media' => $data["ipacm"], ':arteria_pct_media' => $data["ipacmPctTxt"], ':ccp' => $data["ccp"], ':ccp_pct' => $data["ccpPctTxt"], ':ductus' => $data["dv"], ':ductus_pct' => $data["dvPctTxt"],':acm' => $data["psmACM"],':liquido' => $data["liquido"],':bvm' => $data["bvm"],':motivo' => $data["motivo"], ':antecedentes_obstetricos' => $data["antecedentes_obstetricos"],':presentacion' => $data["presentacion"],':motilidad_fetal' => $data["motilidad_fetal"],':placenta_ubic' => $data["placenta_ubic"],':comentarios' => $data["comentarios"]));
        }
        else if ($tipo == 4){
            $sql = "UPDATE parto SET nombre_madre = :nombre_madre,apellido_madre = :apellido_madre,lugar_parto_rn = :lugar_parto_rn,nombre_rn = :nombre_rn,apellido_rn = :apellido_rn,  sexo_rn = :sexo_rn, fecha_parto_rn = :fecha_parto_rn,eg_parto = :eg_parto,termino_parto = :termino_parto,tipo_parto = :tipo_parto,tipo_patologia_obstetrica = :tipo_patologia_obstetrica,peso_rn = :peso_rn,talla_rn = :talla_rn,perimetro_craneo_rn = :perimetro_craneo_rn,ipn_rn = :ipn_rn,peso_eg_nacional = :peso_eg_nacional,peso_eg_regional = :peso_eg_regional,peso_eg_ajustado = :peso_eg_ajustado,ipn_eg_ajustado = :ipn_eg_ajustado,peso_placentario = :peso_placentario,apgar_1 = :apgar_1,apgar_5 = :apgar_5,hipoglicemia_riesgo = :hipoglicemia_riesgo,hipoglicemia_sospechada = :hipoglicemia_sospechada,hipoglicemia_confirmada = :hipoglicemia_confirmada,hiperbilirrubinemia = :hiperbilirrubinemia,poliglobulia = :poliglobulia,hospital_ucin = :hospital_ucin,sindrome_respiratorio = :sindrome_respiratorio,alta_con_madre = :alta_con_madre,observaciones = :observaciones,meconio = :meconio,conducta_tres = :conducta_tres,glicemia_tres = :glicemia_tres,dextro_tres = :dextro_tres,conducta_dos = :conducta_dos,glicemia_dos = :glicemia_dos,dextro_dos = :dextro_dos,conducta_uno = :conducta_uno,glicemia_uno = :glicemia_uno,dextro_uno = :dextro_uno,prof_alta_rn = :prof_alta_rn,prof_atencion_parto = :prof_atencion_parto WHERE id_paciente = :id_paciente LIMIT 1";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut,':nombre_madre' => $data["nombre_madre"],':apellido_madre' => $data["apellido_madre"],':lugar_parto_rn' => $data["lugar_parto_rn"],':nombre_rn' => $data["nombre_rn"],':apellido_rn' => $data["apellido_rn"],':sexo_rn' => $data["sexo_rn"],':fecha_parto_rn' => $data["fecha_parto_rn"],':eg_parto' => $data["eg_parto"],':termino_parto' => $data["termino_parto"],':tipo_parto' => $data["tipo_parto"],':tipo_patologia_obstetrica' => $data["tipo_patologia_obstetrica"],':peso_rn' => $data["peso_rn"],':talla_rn' => $data["talla_rn"],':perimetro_craneo_rn' => $data["perimetro_craneo_rn"],':ipn_rn' => $data["ipn_rn"],':peso_eg_nacional' => $data["peso_eg_nacional"],':peso_eg_regional' => $data["peso_eg_regional"],':peso_eg_ajustado' => $data["peso_eg_ajustado"],':ipn_eg_ajustado' => $data["ipn_eg_ajustado"],':peso_placentario' => $data["peso_placentario"],':apgar_1' => $data["apgar_1"],':apgar_5' => $data["apgar_5"],':hipoglicemia_riesgo' => $data["hipoglicemia_riesgo"],':hipoglicemia_sospechada' => $data["hipoglicemia_sospechada"],':hipoglicemia_confirmada' => $data["hipoglicemia_confirmada"],':hiperbilirrubinemia' => $data["hiperbilirrubinemia"],':poliglobulia' => $data["poliglobulia"],':hospital_ucin' => $data["hospital_ucin"],':sindrome_respiratorio' => $data["sindrome_respiratorio"],':alta_con_madre' => $data["alta_con_madre"],':observaciones' => $data["observaciones"],':meconio' => $data["meconio"],':conducta_tres' => $data["conducta_tres"],':glicemia_tres' => $data["glicemia_tres"],':dextro_tres' => $data["dextro_tres"],':conducta_dos' => $data["conducta_dos"],':glicemia_dos' => $data["glicemia_dos"],':dextro_dos' => $data["dextro_dos"],':conducta_uno' => $data["conducta_uno"],':glicemia_uno' => $data["glicemia_uno"],':dextro_uno' => $data["dextro_uno"],':prof_alta_rn' => $data["prof_alta_rn"],':prof_atencion_parto' =>$data["prof_atencion_parto"]));
        }

        if ($query->rowCount() == 1) {
            return true;
        }

        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_EDITING_FAILED'));
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
        else if ($tipo == 4){
            $sql = "DELETE FROM parto WHERE id_paciente = :id_paciente";
            $query = $database->prepare($sql);
            $query->execute(array(':id_paciente' => $rut));
        }

        if ($query->rowCount() == 1) {
            return self::getEcos($rut, $tipo);
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_DELETION_FAILED'));
        return false;
    }
}