<?php

/**
 * Class PDF
 *
 * Handles everything regarding PDF File.
 */
class Pdf
{
    /**
     * Try to send a mail by using PHPMailer.
     * Make sure you have loaded PHPMailer via Composer.
     * Depending on your EMAIL_USE_SMTP setting this will work via SMTP credentials or via native mail()
     *
     * @param $user_email
     * @param $from_email
     * @param $from_name
     * @param $subject
     * @param $body
     *
     * @return bool
     * @throws Exception
     * @throws phpmailerException
     */
    public function createPDF($document_body)
    {
        // reference the Dompdf namespace
        use Dompdf\Dompdf;

        // instantiate and use the dompdf class
        $dompdf = new Dompdf();
        $dompdf->loadHtml($document_body);

        // (Optional) Setup the paper size and orientation
        $dompdf->setPaper('letter', 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser
        return $dompdf->stream();
    }
}