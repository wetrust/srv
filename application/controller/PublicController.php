<?php

class PublicController extends Controller
{
    public function index(){
        $this->View->renderWithoutHeaderAndFooter('turnos/doctor');
    }
}
