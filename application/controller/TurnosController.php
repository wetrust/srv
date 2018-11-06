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
            case "profesionales":
                $resultado = TurnosModel::getAllProfesionales();
                break;
            case "profesionalesNuevo":
                $resultado = TurnosModel::createProfesional(Request::post('nombre'),Request::post('rut'), Request::post('correo'),Request::post('telefono'));
                break;
            case "profesionalesEliminar":
                $resultado = TurnosModel::deleteProfesional(Request::post('id'));
                break;
            case "turnos":
                $resultado = TurnosModel::getAllTurnos(Request::post('dia'),Request::post('mes'), Request::post('ano'));
                break;
            case "turnosNuevo":
                $resultado = TurnosModel::createTurnos(Request::post('profesional'),Request::post('fechainic'),Request::post('horainic'),Request::post('fechafin'),Request::post('horafin'));
                break;
            case "turnosEliminar":
                $resultado = TurnosModel::deteleTurnos(Request::post('id'));
                break;
        }

        return $this->View->renderJSON($resultado);

    }
}