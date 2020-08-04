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
                $this->View->renderWithoutHeaderAndFooter('pdf/crecimientofetal', 
                array(
                    'pdf' => new PdfModel(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false),
                    'data' => $data->data
                ));
            }
        }
        $this->View->renderJSON($response);
    }
}
