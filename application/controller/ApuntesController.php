<?php

/**
 * The note controller: Just an example of simple create, read, update and delete (CRUD) actions.
 */
class ApuntesController extends Controller
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
        $this->View->renderWithoutHeaderAndFooter('apuntes/index');
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
            case "tabla":
                $resultado = ApuntesModel::getAllApuntes();
                break;
            case "apunte":
                $resultado = ApuntesModel::getApunte(Request::post('id'));
                break;
            case "nuevo":
                $resultado = ApuntesModel::createApunte(Request::post('fecha'),Request::post('hora'),Request::post('paciente'),Request::post('actividad'),Request::post('lugar'),Request::post('cancelacion'),Request::post('fcancelacion'),Request::post('valor'),Request::post('comentarios'),Request::post('palabras'));
                break;
            case "guardar":
                $resultado = ApuntesModel::updateApunte(Request::post('id'),Request::post('fecha'),Request::post('hora'),Request::post('paciente'),Request::post('actividad'),Request::post('lugar'),Request::post('cancelacion'),Request::post('fcancelacion'),Request::post('valor'),Request::post('comentarios'),Request::post('palabras'));
                break;
            case "eliminar":
                $resultado = ApuntesModel::deleteApunte(Request::post('id'));
                break;
            case "actividad":
                $resultado = ApuntesModel::getAllActividades();
                break;
            case "nuevoActividad":
                $resultado = ApuntesModel::createActividad(Request::post('actividad_text'));
                break;
            case "lugar":
                $resultado = ApuntesModel::getAllLugares();
                break;
            case "nuevoLugar":
                $resultado = ApuntesModel::createLugar(Request::post('lugar_text'));
                break;
            case "cancelacion":
                $resultado = ApuntesModel::getAllCancelaciones();
                break;
            case "eliminarLugar":
                $resultado = ApuntesModel::deleteLugar(Request::post('id'));
                break;
            case "nuevaCancelacion":
                $resultado = ApuntesModel::createCancelacion(Request::post('cancelacion_text'));
                break;
            case "eliminarCancelacion":
                $resultado = ApuntesModel::deleteCancelacion(Request::post('id'));
                break;
        }

        return $this->View->renderJSON($resultado);

    }

    /**
     * This method controls what happens when you move to /note/edit(/XX) in your app.
     * Shows the current content of the note and an editing form.
     * @param $note_id int id of the note
     */
    public function edit($note_id)
    {
        $this->View->render('note/edit', array(
            'note' => NoteModel::getNote($note_id)
        ));
    }

    /**
     * This method controls what happens when you move to /note/editSave in your app.
     * Edits a note (performs the editing after form submit).
     * POST request.
     */
    public function editSave()
    {
        NoteModel::updateNote(Request::post('note_id'), Request::post('note_text'));
        Redirect::to('note');
    }

    /**
     * This method controls what happens when you move to /note/delete(/XX) in your app.
     * Deletes a note. In a real application a deletion via GET/URL is not recommended, but for demo purposes it's
     * totally okay.
     * @param int $note_id id of the note
     */
    public function delete($note_id)
    {
        NoteModel::deleteNote($note_id);
        Redirect::to('note');
    }
}
