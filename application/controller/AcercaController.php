<?php

class AcercaController extends Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->View->renderWithoutHeaderAndFooter('index/acerca');
    }
}
