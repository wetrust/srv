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

$html = "<div class='form-group'> <label>Presentaci&oacute;n</label> <select id='presentacion' class='form-control'> <option value='cefalica'>Cef&aacute;lica</option> <option value='podalica'>Pod&aacute;lica</option> <option value='transversa'>transversa</option> <option value='indiferente'>indiferente</option> </select></div><div class='form-group'> <label>Dorso Fetal</label> <select id='dorso' class='form-control'> <option value='anterior'>Anterior</option> <option value='lateral izquiedo'>Lat. Izquierdo</option> <option value='posterior'>Posterior</option> <option value='lateral derecho'>Lat. Derecho</option> </select></div><div class='form-group'> <label>Actividada Cardiaca</label></div><div class='form-group'> <div class='form-check form-check-inline'> <label class='form-check-label'> <input class='form-check-input' type='radio' checked='checked' name='accard' value='1'> Si</label> </div><div class='form-check form-check-inline'> <label class='form-check-label'> <input class='form-check-input' type='radio' name='accard' value='0'> No</label> </div></div><div class='form-group'> <label>Mov. Fetales</label></div><div class='form-group'> <div class='form-check form-check-inline'> <label class='form-check-label'> <input class='form-check-input' type='radio' checked='checked' name='movfet' value='1'> Si</label> </div><div class='form-check form-check-inline'> <label class='form-check-label'> <input class='form-check-input' type='radio' name='movfet' value='0'> No</label> </div></div><div class='form-group'> <label>FCF</label> <select id='fcf' class='form-control'> <option value='90'>90</option> <option value='91'>91</option> <option value='92'>92</option> <option value='93'>93</option> <option value='94'>94</option> <option value='95'>95</option> <option value='96'>96</option> <option value='97'>97</option> <option value='98'>98</option> <option value='99'>99</option> <option value='100'>100</option> <option value='101'>101</option> <option value='102'>102</option> <option value='103'>103</option> <option value='104'>104</option> <option value='105'>105</option> <option value='106'>106</option> <option value='107'>107</option> <option value='108'>108</option> <option value='109'>109</option> <option value='110'>110</option> <option value='111'>111</option> <option value='112'>112</option> <option value='113'>113</option> <option value='114'>114</option> <option value='115'>115</option> <option value='116'>116</option> <option value='117'>117</option> <option value='118'>118</option> <option value='119'>119</option> <option value='120'>120</option> <option value='121'>121</option> <option value='122'>122</option> <option value='123'>123</option> <option value='124'>124</option> <option value='125'>125</option> <option value='126'>126</option> <option value='127'>127</option> <option value='128'>128</option> <option value='129'>129</option> <option value='130'>130</option> <option value='131'>131</option> <option value='132'>132</option> <option value='133'>133</option> <option value='134'>134</option> <option value='135'>135</option> <option value='136'>136</option> <option value='137'>137</option> <option value='138'>138</option> <option value='139'>139</option> <option selected='selected' value='140'>140</option> <option value='141'>141</option> <option value='142'>142</option> <option value='143'>143</option> <option value='144'>144</option> <option value='145'>145</option> <option value='146'>146</option> <option value='147'>147</option> <option value='148'>148</option> <option value='149'>149</option> <option value='150'>150</option> <option value='151'>151</option> <option value='152'>152</option> <option value='153'>153</option> <option value='154'>154</option> <option value='155'>155</option> <option value='156'>156</option> <option value='157'>157</option> <option value='158'>158</option> <option value='159'>159</option> <option value='160'>160</option> <option value='161'>161</option> <option value='162'>162</option> <option value='163'>163</option> <option value='164'>164</option> <option value='165'>165</option> <option value='166'>166</option> <option value='167'>167</option> <option value='168'>168</option> <option value='169'>169</option> <option value='170'>170</option> </select></div><div class='form-group'> <label>Anatom&iacute;a fetal</label> <select multiple='' id='ev-morfo' class='form-control'><option value='Descripcion general detallando distintos segmentos' selected='selected'>Descripción general detallando distintos segmentos</option><option value='no evaluada dirigidamente, pero el aspecto morfológico general es normal'>No evaluada dirigidamente, pero el aspecto morfológico general es normal</option><option value='de aspecto general normal'>de aspecto general normal</option><option value='hallasgos de siguientes patologías:'>hallasgos ecográficos compatible con:</option></select></div><div class='form-group'> <p><strong>Comentarios anatom&iacute;a</strong> </p><textarea id='comentarios-anatomia-informe-eg-texto' class='form-control' rows='3'></textarea></div><div class='row'> <div class='col'> <div class='form-group'> <label>Placenta Ubicaci&oacute;n</label> <select id='ubicacion' class='form-control'> <option value='normal'>Normal</option> <option value='prev. lateral'>previa lateral</option> <option value='prev. marginal'>previa marginal</option> <option value='prev. parcial'>previa parcial</option> <option value='prev. total'>previa total</option> </select> </div></div><div class='col'> <div class='form-group'> <label>Placenta incersi&oacute;n</label> <select id='incersion' class='form-control'> <option value='anterior'>anterior</option> <option value='posterior'>posterior</option> <option value='fundica'>f&uacute;ndica</option> <option value='lat. derecha'>lateral derecha</option> <option value='lat. izquierda'>lateral izquierda</option> <option value='segmentaria'>segmentaria</option> </select> </div></div><div class='col'> <div class='form-group'> <label>Placenta Grado (Grannum)</label> <select id='grado-placenta' class='form-control'> <option value='0'>0</option> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> </select> </div></div></div><div class='row'> <div class='col'> <div class='form-group'> <label><strong class='text-primary'>Líquido amniótico</strong></label> <select id='liq-cualitativo-eco' class='form-control'> <option value='normal'>Normal</option> <option value='disminuido'>Disminuido</option> <option value='aumentado'>Aumentado</option> </select> </div></div><div class='col'> <div class='form-group'> <label><strong class='text-primary'>BVM</strong></label> <div class='input-group mb-2 mr-sm-2 mb-sm-0'> <input type='text' class='form-control' id='bvmEcoDos'> <div class='input-group-addon'>mm.</div></div></div></div></div><div class='row'> <div class='col'> <div class='form-group'> <label>Cord&oacute;n umbilical</label> <select id='cordon' class='form-control'> <option value='inserci&oacute;n central'>Inserci&oacute;n central</option> <option value='inserci&oacute;n marginal'>Inserci&oacute;n marginal</option> <option value='inserci&oacute;n velamentosa'>Inserci&oacute;n velamentosa</option> <option value='inserci&oacute;n no evaluable'>Inserci&oacute;n no evaluable</option> </select> </div></div><div class='col'> <div class='form-group'> <label>N&uacute;mero de vasos</label> <select id='vasos' class='form-control'> <option value='2'>2</option> <option selected='selected' value='3'>3</option> </select> </div></div></div><div class='form-group'> <p><strong>Comentarios adicionales</strong> <small class='text-primary'>(Espacio a completar por el ecografista)</small> </p><textarea id='comentarios-eco-dos-inf-dos' rows='3' class='form-control'></textarea></div>";

// Print text using writeHTMLCell()
$pdf->writeHTMLCell('', '', '', 40, $html, 0, 1, 0, true, '', true);

//Close and output PDF document
$pdf->Output('example_009.pdf', 'I');