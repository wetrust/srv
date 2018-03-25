<?php

class PacientesController extends Controller
{
    /**
     * Construct this object by extending the basic Controller class
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Handles what happens when user moves to URL/index/index - or - as this is the default controller, also
     * when user moves to /index or enter your application at base level
     */
    public function nuevo()
    {
        $this->View->render('pacientes/nuevo');
    }

    public function savefur()
    {
        $this->View->renderJSON(UserModel::savefur());
    }

    public function getfur($user_id)
    {
        $this->View->renderJSON(UserModel::getfur($user_id));
    }

    public function savexmprev()
    {
        $this->View->renderJSON(UserModel::savexmprev());
    }
}
