<?php
// create new PDF document

class MYPDF extends TCPDF {

    //Page header
    public function Header() {
        // Logo
        //$image_file = K_PATH_IMAGES.'logo_example.jpg';
        //$this->Image($image_file, 10, 10, 15, '', 'JPG', '', 'T', false, 300, '', false, false, 0, false, false, false);
        // Set font
        //$this->SetFont('helvetica', 'B', 20);
        // Title
        //$this->Cell(0, 15, '<< TCPDF Example 003 >>', 0, false, 'C', 0, '', 0, false, 'M', 'M');
    }

    // Page footer
    public function Footer() {
        $this->SetY(-15);
        $this->SetFont('helvetica', 'I', 8);
        $this->Cell(0, 10, 'Página '.$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');
    }
}

$pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('WT');
$pdf->SetTitle('Imágenes Ecográficas');
$pdf->SetSubject('TCPDF Tutorial');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
//$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.' 009', PDF_HEADER_STRING);

// set header and footer fonts
//$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
//$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
//$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// -------------------------------------------------------------------

// add a page
$pdf->AddPage('P', 'LETTER');

// set JPEG quality
$pdf->setJPEGQuality(90);

// Image method signature:
// Image($file, $x='', $y='', $w=0, $h=0, $type='', $link='', $align='', $resize=false, $dpi=300, $palign='', $ismask=false, $imgmask=false, $border=0, $fitbox=false, $hidden=false, $fitonpage=false)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

$pdf->SetFont('dejavusans', '', 8);

// Set some content to print
//$html = '<h1 style="text-align:center">Evaluación ecográfica del crecimiento fetal</h1>
//<div><div style="display: inline-block;width:33%;height:200px;float:left;"><strong>Paciente Sra. (Srta.):</strong>' . $this->user_name .'</div><div style="display: inline-block;width:33%;height:200px;float:left;"><strong>RUT:</strong> ' . $this->user_id .'</div><div style="display: inline-block;width:33%;height:200px;float:left;"><strong>Fecha de Exámen:</strong> ' . $this->StudyDate .'</div></div>';

// Print text using writeHTMLCell()
//$pdf->writeHTMLCell('', 10, '', 40, $html, 0, 1, 0, true, '', true);

$html = '<h1 style="text-align:center">Evaluación ecográfica del crecimiento fetal</h1>
<div><div style="display: inline-block;width:33%;height:200px;float:left;"><strong>Paciente Sra. (Srta.):</strong>' . $this->user_name .'</div><div style="display: inline-block;width:33%;height:200px;float:left;"><strong>RUT:</strong> ' . $this->user_id .'</div><div style="display: inline-block;width:33%;height:200px;float:left;"><strong>Fecha de Exámen:</strong> ' . $this->StudyDate .'</div></div>';

// Print text using writeHTMLCell()
$pdf->writeHTMLCell('', 10, '', 40, $html, 0, 1, 0, true, '', true);


//Close and output PDF document
$pdf->Output('example_009.pdf', 'I');
