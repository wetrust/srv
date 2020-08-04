<?php

class PdfModel extends TCPDF {

    //Page header
    public function Header() {
        // Logo
        // Set font
        $this->SetFont('helvetica', '', 9);
        // Title
    }

    // Page footer
    public function Footer() {
        $this->SetY(-15);
        $this->SetFont('helvetica', 'I', 8);
        $this->Cell(0, 10, 'Página '.$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');
    }
}