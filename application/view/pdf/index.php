<?php
// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Nicola Asuni');
$pdf->SetTitle('TCPDF Example 009');
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
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// -------------------------------------------------------------------

// add a page
$pdf->AddPage();

// set JPEG quality
$pdf->setJPEGQuality(75);

// Image method signature:
// Image($file, $x='', $y='', $w=0, $h=0, $type='', $link='', $align='', $resize=false, $dpi=300, $palign='', $ismask=false, $imgmask=false, $border=0, $fitbox=false, $hidden=false, $fitonpage=false)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

$pdf->SetFont('dejavusans', '', 12, '', true);

// Set some content to print
$html = <<<EOD
<h1>Welcome to <a href="http://www.tcpdf.org" style="text-decoration:none;background-color:#CC0000;color:black;">&nbsp;<span style="color:black;">TC</span><span style="color:white;">PDF</span>&nbsp;</a>!</h1>
<i>This is the first example of TCPDF library.</i>
<p>This text is printed using the <i>writeHTMLCell()</i> method but you can also use: <i>Multicell(), writeHTML(), Write(), Cell() and Text()</i>.</p>
<p>Please check the source code documentation and other examples for further information.</p>
<p style="color:#CC0000;">TO IMPROVE AND EXPAND TCPDF I NEED YOUR SUPPORT, PLEASE <a href="http://sourceforge.net/donate/index.php?group_id=128076">MAKE A DONATION!</a></p>
EOD;

// Print text using writeHTMLCell()
$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);

// Image example with resizing
$pdf->Image(Config::get('DICOM_DIRECTORY') . "/17378168-7/1.2.276.0.26.1.1.1.2.2018.122.54258.3440124_0001_000005_15223582490561.jpg", '', '', 86, 86, 'JPG', '', 'T', true, 150, '', false, false, 1, false, false, false);
$pdf->Image(Config::get('DICOM_DIRECTORY') . "/17378168-7/1.2.276.0.26.1.1.1.2.2018.122.54258.3440124_0001_000005_15223582490561.jpg", '110', '', 86, 86, 'JPG', '', 'T', true, 150, '', false, false, 1, false, false, false);
$pdf->Image(Config::get('DICOM_DIRECTORY') . "/17378168-7/1.2.276.0.26.1.1.1.2.2018.122.54258.3440124_0001_000005_15223582490561.jpg", PDF_MARGIN_LEFT, '120', 86, 86, 'JPG', '', 'T', true, 150, '', false, false, 1, false, false, false);
$pdf->Image(Config::get('DICOM_DIRECTORY') . "/17378168-7/1.2.276.0.26.1.1.1.2.2018.122.54258.3440124_0001_000005_15223582490561.jpg", '110', '', 86, 86, 'JPG', '', 'T', true, 150, '', false, false, 1, false, false, false);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// test fitbox with all alignment combinations

//$horizontal_alignments = array('L', 'C', 'R');
//$vertical_alignments = array('T', 'M', 'B');

//$x = 15;
//$y = 35;
//$w = 30;
//$h = 30;
// test all combinations of alignments
//for ($i = 0; $i < 3; ++$i) {
//    $fitbox = $horizontal_alignments[$i].' ';
//    $x = 15;
//    for ($j = 0; $j < 3; ++$j) {
//        $fitbox[1] = $vertical_alignments[$j];
//        $pdf->Rect($x, $y, $w, $h, 'F', array(), array(128,255,128));
//        $pdf->Image(Config::get('DICOM_DIRECTORY') . "/17378168-7/1.2.276.0.26.1.1.1.2.2018.122.54258.3440124_0001_000005_15223582490561.jpg", $x, $y, $w, $h, 'JPG', '', '', false, 300, '', false, false, 0, $fitbox, false, false);
//        $x += 32; // new column
//    }
//    $y += 32; // new row
//}

//$x = 115;
//$y = 35;
//$w = 25;
//$h = 50;
//for ($i = 0; $i < 3; ++$i) {
//    $fitbox = $horizontal_alignments[$i].' ';
//    $x = 115;
//    for ($j = 0; $j < 3; ++$j) {
//        $fitbox[1] = $vertical_alignments[$j];
//        $pdf->Rect($x, $y, $w, $h, 'F', array(), array(128,255,255));
//        $pdf->Image(Config::get('DICOM_DIRECTORY') . "/17378168-7/1.2.276.0.26.1.1.1.2.2018.122.54258.3440124_0001_000005_15223582490561.jpg", $x, $y, $w, $h, 'JPG', '', '', false, 300, '', false, false, 0, $fitbox, false, false);
//        $x += 27; // new column
//    }
//    $y += 52; // new row
//}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Stretching, position and alignment example

//$pdf->SetXY(110, 200);
//$pdf->Image(Config::get('DICOM_DIRECTORY') . "/17378168-7/1.2.276.0.26.1.1.1.2.2018.122.54258.3440124_0001_000005_15223582490561.jpg", '', '', 40, 40, '', '', 'T', false, 300, '', false, false, 1, false, false, false);
//$pdf->Image(Config::get('DICOM_DIRECTORY') . "/17378168-7/1.2.276.0.26.1.1.1.2.2018.122.54258.3440124_0001_000005_15223582490561.jpg", '', '', 40, 40, '', '', '', false, 300, '', false, false, 1, false, false, false);

// -------------------------------------------------------------------

//Close and output PDF document
$pdf->Output('example_009.pdf', 'I');
