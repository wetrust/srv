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
public function prevision()
    {
        $this->View->renderJSON(PrevisionModel::getAll());
    }
}