<?php

class ImagenesController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }


    public function view($user_id, $img_id)
    {
        $this->View->render('imagenes/view'array(
            'user_id' => $user_id,
            'img_id' => $img_id
        ));
    }
}