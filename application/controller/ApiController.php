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
        $type = Request::get("type");
        $data = Request::get("data");
        $this->View->renderJSON(ApiModel::makeChart($type,$data));
    }
}
