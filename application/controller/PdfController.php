<?php

class PdfController extends Controller
{
    /**
     * Construct this object by extending the basic Controller class
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Handles what happens when user moves to URL/index/index - or - as this is the default controller, also
     * when user moves to /index or enter your application at base level
     */
    public function index($user_id, $img_id, $StudyDate)
    {
       // header("Content-Type: application/pdf");
       //require Config::get('PATH_VIEW') . 'pdf/index.php';
       $this->View->renderWithoutHeaderAndFooter('pdf/index');
    }
}
