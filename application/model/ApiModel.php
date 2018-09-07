<?php

class ApiModel
{

    public static function makeChart($type = NULL,$data = NULL){

        //tipos de gráfico
        //LCN, Saco Gestacional, DBP,DOF, CC, CA, LF, BVM
        //LH, Diámetro Cerebeloso transverso
        //Peso Fetal Estimado, Relación Cráneo Abdómen (CC/CA)
        //Arteria Uterina, Arteria umbilical, arteria cerebral media
        //cuociente cerebro placentario, ductus venoso, pick acm

        if (isset($type) == false){
            $chart = new stdClass();
            $chart->error = true;
            $chart->data = "fuck you human";
            return $chart;
        }

        if ($type == "LCN"){}
        else if ($type == "SG"){}
        else if ($type == "DBP"){}
        else if ($type == "DOF"){}
        else if ($type == "CC"){}
        else if ($type == "CA"){}
        else if ($type == "LF"){}
        else if ($type == "BVM"){}
        else if ($type == "LH"){}
        else if ($type == "DCT"){}
        else if ($type == "PFE"){
            return self::PFE($data);
        }
        else if ($type == "CCCA"){}
        else if ($type == "AUT"){}
        else if ($type == "AUM"){}
        else if ($type == "ACM"){}
        else if ($type == "CCP"){}
        else if ($type == "DV"){}
        else if ($type == "ACM"){}
        else{
            $chart = new stdClass();
            $chart->error = true;
            $chart->data = "fuck you human";
            return $chart;
        }
    }

    public static function PFE($data = NULL){

        $chart = new stdClass();

        $chart->chart = new stdClass();
        $chart->chart->animation = false;
        $chart->boost = new stdClass();
        $chart->boost->enabled = true;
        $chart->boost->useGPUTranslations = true;
        $chart->title = new stdClass();
        $chart->title->text = "Peso Fetal Estimado";
        $chart->subtitle = new stdClass();
        $chart->subtitle->text = "Hadlock y col. Radiology 181: 129 - 133; 1991";
        $chart->plotOptions = new stdClass();
        $chart->plotOptions->series = new stdClass();
        $chart->plotOptions->series->pointStart = 16; //semana en que comienza el gráfico
        $chart->plotOptions->series->pointInterval = 1;
        $chart->plotOptions->series->enableMouseTracking = false;
        $chart->plotOptions->series->animation = false;
        $chart->plotOptions->series->dashStyle = "Dot";
        $chart->plotOptions->series->marker = new stdClass();
        $chart->plotOptions->series->marker->enabled = true;
        $chart->plotOptions->series->marker->symbol = "square";
        $chart->yAxis = new stdClass();
        $chart->yAxis->allowDecimals = false;
        $chart->yAxis->tickInterval = 300; // pasos
        $chart->yAxis->title = new stdClass();
        $chart->yAxis->title->text = 'Kilogramos';  //Unidad de medida
        $chart->colors= array("#C70039", "#313131","#313131","#C70039","#009688");
        $chart->xAxis = new stdClass();
        $chart->xAxis->min = 16;  //semana en que comienza el gráfico
        $chart->xAxis->max = 40;  //semana en que termina el gráfico
        $chart->xAxis->allowDecimals = false;
        $chart->credits = new stdClass();
        $chart->credits->enabled = false;

        $pct3PesoEge = array(110,136,167,205,248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714);
        $pct10PesoEge = array(121,150,185,227,275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985);
        $pct90PesoEge = array(171,212,261,319,387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234);
        $pct97PesoEge = array(183,226,279,341,414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474);
        $Peso = array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

        $Serie1 = new stdClass();
        $Serie1->type = "line";
        $Serie1->name = 'Pct 3';
        $Serie1->marker = new stdClass();
        $Serie1->marker->enabled = false;
        $Serie1->data = $pct3PesoEge;

        $Serie2 = new stdClass();
        $Serie2->type = "line";
        $Serie2->name = 'Pct 10';
        $Serie2->dashStyle = "Dash";
        $Serie2->marker = new stdClass();
        $Serie2->marker->enabled = false;
        $Serie2->data = $pct10PesoEge;

        $Serie3 = new stdClass();
        $Serie3->type = "line";
        $Serie3->name = 'Pct 90';
        $Serie3->dashStyle = "Dash";
        $Serie3->marker = new stdClass();
        $Serie3->marker->enabled = false;
        $Serie3->data = $pct90PesoEge;

        $Serie4 = new stdClass();
        $Serie4->type = "line";
        $Serie4->name = 'Pct 97';
        $Serie4->marker = new stdClass();
        $Serie4->marker->enabled = false;
        $Serie4->data = $pct97PesoEge;

        if (isset($data)){
            $data = json_decode($data, true);
            if(array_key_exists("EG",$data) && array_key_exists("PESO",$data)){
                if (is_numeric($data["EG"]) && is_numeric($data["PESO"])){
                    $EG = intval($data["EG"]) - 16;
                    $Peso[$EG] = intval($data["PESO"]);
                }
            } 
        }

        $Serie5 = new stdClass();
        $Serie5->type = "line";
        $Serie5->name = 'Peso';
        $Serie5->dashStyle = "Dot";
        $Serie5->lineWidth = 0;
        $Serie5->data = $Peso;

        $chart->series = array($Serie1,$Serie2,$Serie3,$Serie4,$Serie5);

        return $chart;
    }
}
