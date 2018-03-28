<?php ob_start();?>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<style>body{font-size: 16px;color: black;}</style>
<title>Title</title>
</head>
<body>
<h2>Hello</h2>
</body>
</html>
<?php
$html = ob_get_clean();
use Dompdf\Dompdf;
$dompdf = new Dompdf();
$dompdf->loadHtml($html);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();

$pdf_gen = $dompdf->output();

if(!file_put_contents($full_path, $pdf_gen)){
echo 'Not OK!';
}else{
echo 'OK';
}?>