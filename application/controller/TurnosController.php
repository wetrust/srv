<?php

class TurnosController extends Controller
{
    /**
     * Construct this object by extending the basic Controller class
     */
    public function __construct()
    {
        parent::__construct();

        // VERY IMPORTANT: All controllers/areas that should only be usable by logged-in users
        // need this line! Otherwise not-logged in users could do actions. If all of your pages should only
        // be usable by logged-in users: Put this line into libs/Controller->__construct
        Auth::checkAuthentication();
    }

    /**
     * This method controls what happens when you move to /note/index in your app.
     * Gets all notes (of the user).
     */
    public function index()
    {
        $this->View->renderWithoutHeaderAndFooter('turnos/index');
    }

    public function calendario()
    {
        $this->View->renderJSON();
    }

    /**
     * This method controls what happens when you move to /dashboard/create in your app.
     * Creates a new note. This is usually the target of form submit actions.
     * POST request.
     */
    public function api()
    {
        $accion = Request::post('accion');
        $resultado = "";
        switch ($accion) {
            case "calendario":
                $resultado = TurnosModel::calendar(Request::post('mes'),Request::post('ano'));
                break;
            case "tablad":
                $resultado = ApuntesModel::getAllApuntesDate();
                break;
            case "apunte":
                $resultado = ApuntesModel::getApunte(Request::post('id'));
                break;
            case "nuevo":
                $resultado = ApuntesModel::createApunte(Request::post('fecha'),Request::post('hora'),Request::post('actividad'),Request::post('lugar'),Request::post('cancelacion'),Request::post('fcancelacion'),Request::post('valor'),Request::post('comentarios'),Request::post('palabras'),Request::post('location_name'), Request::post('participante'), Request::post('nombre'),Request::post('minutos'));
                break;
            case "guardar":
                $resultado = ApuntesModel::updateApunte(Request::post('id'),Request::post('fecha'),Request::post('hora'),Request::post('actividad'),Request::post('lugar'),Request::post('cancelacion'),Request::post('fcancelacion'),Request::post('valor'),Request::post('comentarios'),Request::post('palabras'),Request::post('location_name'), Request::post('participante'), Request::post('nombre'),Request::post('minutos'));
                break;
            case "eliminar":
                $resultado = ApuntesModel::deleteApunte(Request::post('id'));
                break;
            case "actividad":
                $resultado = ApuntesModel::getAllActividades();
                break;
            case "actividadUna":
                $resultado = ApuntesModel::getActividad(Request::post('id'));
                break;
            case "nuevoActividad":
                $resultado = ApuntesModel::createActividad(Request::post('actividad_text'),Request::post('actividad_preset'),Request::post('actividad_apuntes'));
                break;
            case "eliminarActividad":
                $resultado = ApuntesModel::deleteActividad(Request::post('id'));
                break;
            case "lugar":
                $resultado = ApuntesModel::getAllLugares();
                break;
            case "nuevoLugar":
                $resultado = ApuntesModel::createLugar(Request::post('lugar_text'));
                break;
            case "eliminarLugar":
                $resultado = ApuntesModel::deleteLugar(Request::post('id'));
                break;
            case "cancelacion":
                $resultado = ApuntesModel::getAllCancelaciones();
                break;
            case "nuevaCancelacion":
                $resultado = ApuntesModel::createCancelacion(Request::post('cancelacion_text'));
                break;
            case "eliminarCancelacion":
                $resultado = ApuntesModel::deleteCancelacion(Request::post('id'));
                break;
            case "participante":
                $resultado = ApuntesModel::getAllParticipante();
                break;
            case "nuevoParticipante":
                $resultado = ApuntesModel::createParticipante(Request::post('participante_text'));
                break;
            case "eliminarParticipante":
                $resultado = ApuntesModel::deleteParticipante(Request::post('id'));
                break;
            case "calculos":
                $resultado = ApuntesModel::getFilterApunte(Request::post('uno'),Request::post('dos'),Request::post('lugar'),Request::post('actividad'),Request::post('cancelacion'));
                break;
            case "calculosSum":
                $resultado = ApuntesModel::getFilterApunteSum(Request::post('uno'),Request::post('dos'),Request::post('lugar'),Request::post('actividad'),Request::post('cancelacion'));
                break;
            case "busqueda":
                $resultado = ApuntesModel::findText(Request::post('texto'));
                break;
            case "usuarios":
                $resultado = UserModel::getPublicProfilesOfAllUsers();
                break;
            case "eliminarUsuario":
                $resultado = UserModel::deleteUser(Request::post('id'));
                break;
            case "predeterminados":
                $resultado = UserModel::actividadPreset();
                break;
            case "predeterminadosChange":
                $resultado = UserModel::actividadPresetChange();
                break;
            case "otros":
                $resultado = ApuntesModel::getAllOtros();
                break;
            case "nuevoOtros":
                $resultado = ApuntesModel::createOtros(Request::post('otros_text'));
                break;
            case "eliminarOtros":
                $resultado = ApuntesModel::deleteOtros(Request::post('id'));
                break;
        }

        return $this->View->renderJSON($resultado);

    }
}