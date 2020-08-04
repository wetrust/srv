<?php

class CrecimientoController extends Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function informe()
    {
        header("Access-Control-Allow-Origin: https://crecimientofetal.cl");
        $data = new stdClass();
        $response = new stdClass();
        $response->return =false;

        $data->informe = (int)Request::post("informe");
        $data->licencia = (string)Request::post("licencia");
        $data->data = (string)Request::post("data");

        if ($data->licencia == ""){
            if ($data->informe == 2){
                CrecimientoModel::ProcessCrecimientoFetal($data->data);
            }
        }
        $this->View->renderJSON($response);
    }
}
