<?php

class ImagenesController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }


    public function view($user_id, $img_id, $StudyDate)
    {
        $this->View->renderWithoutHeaderAndFooter('imagenes/view', array(
            'user_id' => $user_id,
            'img_id' => $img_id,
            'StudyDate' => $StudyDate
        ));
    }

    public function send()
    {
        $this->View->renderJSON(DicomModel::sendDicomImages());
    }
}