<?php

class ApiController extends Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function graph()
    {
        header("Access-Control-Allow-Origin: *");
        $type = Request::post("type");
        $data = Request::post("data");
        $this->View->renderJSON(ApiModel::makeChart($type,$data));
    }
}
