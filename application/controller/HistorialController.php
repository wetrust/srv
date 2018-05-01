<?php
class HistorialController extends Controller
{
    /**
     * Construct this object by extending the basic Controller class
     */
    public function __construct()
    {
        parent::__construct();
        Auth::checkAuthentication();
    }

    public function get()
    {
        $this->View->renderJSON(HistorialModel::get());
    }

    public function post()
    {
        $this->View->renderJSON(HistorialModel::post());
    }

    public function update()
    {
        $this->View->renderJSON(HistorialModel::update());
    }

    public function delete($footprint)
    {
        $this->View->renderJSON(HistorialModel::delete());
    }
}
