<?php

class ConfiguracionController extends Controller
{
    /**
     * Construct this object by extending the basic Controller class
     */
    public function __construct()
    {
        parent::__construct();
        Auth::checkAuthentication();
    }

    /**
     * Handles what happens when user moves to URL/index/index - or - as this is the default controller, also
     * when user moves to /index or enter your application at base level
     */
    public function index()
    {
        $this->View->render('configuracion/index');
    }


public function ciudad()
    {
        $this->View->renderJSON(CiudadModel::getAll());
    }
public function ciudad_action()
    {
        $this->View->renderJSON(CiudadModel::createCiudad());
    }
public function lcp()
    {
        $this->View->renderJSON(LcpModel::getAll());
    }
public function me()
    {
        $this->View->renderJSON(MeModel::getAll());
    }
public function pe()
    {
        $this->View->renderJSON(PeModel::getAll());
    }
public function por()
    {
        $this->View->renderJSON(PorModel::getAll());
    }
public function pr()
    {
        $this->View->renderJSON(PrModel::getAll());
    }

    public function pais()
    {
        $this->View->renderJSON(PaisModel::getAll());
    }
    public function savepais()
    {
        $this->View->renderJSON(PaisModel::createPais(Request::post('pais_name')));
    }
    public function eliminarpais($pais_id)
    {
        $result = PaisModel::deletePais($pais_id);

        $this->View->renderJSON(PaisModel::getAll());
    }

    public function region()
    {
        $this->View->renderJSON(RegionModel::getAll());
    }
    public function saveregion()
    {
        $this->View->renderJSON(RegionModel::createRegion(Request::post('region_name')));
    }
    public function eliminarregion($region_id)
    {
        $result = RegionModel::deleteRegion($region_id);

        $this->View->renderJSON(RegionModel::getAll());
    }

    public function hospital()
    {
        $this->View->renderJSON(HospitalModel::getAll());
    }
    public function savehospital()
    {
        $this->View->renderJSON(HospitalModel::createHospital(Request::post('hospital_name')));
    }
    public function eliminarhospital($hospital_id)
    {
        $result = HospitalModel::deleteHospital($hospital_id);

        $this->View->renderJSON(HospitalModel::getAll());
    }

    public function uu()
    {
        $this->View->renderJSON(UuModel::getAll());
    }
    public function saveuu()
    {
        $this->View->renderJSON(UuModel::createUu(Request::post('uu_name')));
    }
    public function eliminaruu($uu_id)
    {
        $result = UuModel::deleteUu($uu_id);

        $this->View->renderJSON(UuModel::getAll());
    }

    public function profesional()
    {
        $this->View->renderJSON(ProfesionalModel::getAll());
    }
    public function saveprofesional()
    {
        $this->View->renderJSON(ProfesionalModel::createProfesional(Request::post('profesional_name')));
    }
    public function eliminarprofesional($profesional_id)
    {
        $result = ProfesionalModel::deleteProfesional($profesional_id);

        $this->View->renderJSON(ProfesionalModel::getAll());
    }

    public function profesionalreferente()
    {
        $this->View->renderJSON(ProfesionalReferenteModel::getAll());
    }
    public function saveprofesionalreferente()
    {
        $this->View->renderJSON(ProfesionalReferenteModel::createProfesionalReferente(Request::post('profesional_name')));
    }
    public function eliminarprofesionalreferente($profesional_id)
    {
        $result = ProfesionalReferenteModel::deleteProfesionalReferente($profesional_id);

        $this->View->renderJSON(ProfesionalReferenteModel::getAll());
    }

    public function lugarcontrol()
    {
        $this->View->renderJSON(LugarControlModel::getAll());
    }
    public function savelugarcontrol()
    {
        $this->View->renderJSON(LugarControlModel::createLugarControl(Request::post('lcp_name')));
    }
    public function eliminarlugarcontrol($lcp_id)
    {
        $result = LugarControlModel::deleteLugarControl($lcp_id);

        $this->View->renderJSON(LugarControlModel::getAll());
    }

    public function motivoexamen()
    {
        $this->View->renderJSON(MotivoExamenModel::getAll());
    }
    public function savemotivoexamen()
    {
        $this->View->renderJSON(MotivoExamenModel::createMotivo(Request::post('motivo_name')));
    }
    public function eliminarmotivoexamen($motivo_id)
    {
        $result = MotivoExamenModel::deleteMotivo($motivo_id);

        $this->View->renderJSON(MotivoExamenModel::getAll());
    }

    public function prevision()
    {
        $this->View->renderJSON(PrevisionModel::getAll());
    }
    public function saveprevision()
    {
        $this->View->renderJSON(PrevisionModel::createPrevision(Request::post('prevision_name')));
    }
    public function eliminarprevision($prevision_id)
    {
        $result = PrevisionModel::deletePrevision($prevision_id);

        $this->View->renderJSON(PrevisionModel::getAll());
    }

    public function obtenernombre($rut)
    {
        $this->View->renderJSON(NombreModel::getAll($rut));
    }

    public function obtenerapellidos()
    {
        $this->View->renderJSON(NombreModel::getPatient());
    }

    public function obtenerut()
    {
        $this->View->renderJSON(NombreModel::getRut());
    }

    public function obtenerexamenes($rut, $studydate)
    {
        $this->View->renderJSON(NombreModel::getAllStudies($rut, $studydate));
    }

    public function getemails()
    {
        $this->View->renderJSON(ConfiguracionEmail::getAllEmails());
    }

    public function setemails()
    {
        $this->View->renderJSON(ConfiguracionEmail::setEmail());
    }

    public function delemail($email_id = null)
    {
        $this->View->renderJSON(ConfiguracionEmail::deleteEmail($email_id));
    }

    public function lugarparto()
    {
        $this->View->renderJSON(LugarPartoModel::getAll());
    }
    public function savelugarparto()
    {
        $this->View->renderJSON(LugarPartoModel::createLugarParto(Request::post('lugar_name')));
    }
    public function eliminarlugarparto($lugar_id)
    {
        $result = LugarPartoModel::deleteLugarParto($lugar_id);

        $this->View->renderJSON(LugarPartoModel::getAll());
    }

    public function patologiaobstetrica()
    {
        $this->View->renderJSON(PatologiaMaternaModel::getAll());
    }
    public function savepatologiaobstetrica()
    {
        $this->View->renderJSON(PatologiaMaternaModel::createPatologia(Request::post('patologia_name')));
    }
    public function eliminarpatologiaobstetrica($patologia_id)
    {
        $result = PatologiaMaternaModel::deletePatologia($patologia_id);
        $this->View->renderJSON(PatologiaMaternaModel::getAll());
    }

    public function tipoexamen()
    {
        $this->View->renderJSON(TipoExamenModel::getAll());
    }
    public function savetipoexamen()
    {
        $this->View->renderJSON(TipoExamenModel::createTipo(Request::post('tipo_name')));
    }
    public function eliminartipoexamen($tipo_id)
    {
        $result = TipoExamenModel::deleteTipo($patologia_id);
        $this->View->renderJSON(TipoExamenModel::getAll());
    }
}