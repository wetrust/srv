<?php
class ApuntesModel
{
    public static function ProcessCrecimientoFetal($data){

        $this->View->renderWithoutHeaderAndFooter('pdf/crecimientofetal', 
        array(
            'pdf' => new PdfModel(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false),
            'data' => $data
        ));
    }
}
