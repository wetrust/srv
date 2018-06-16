function construirGraficos() {
        $('#graficolcn').highcharts({
        title: {
            text: 'LCN',
            x: -20 //center
        },
        xAxis: {
            categories: ['6', '7', '8', '9', '10',  '11', '12', '13', '14', '15']
        },
        yAxis: {
            title: {
                text: 'Milimetros (mm)'
            },
            tickPositions: [0.2, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11]
        },
        credits: {enabled:false},
        colors: ['#313131', '#313131', '#313131'],
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
         },
        series: [{
            name: '(-) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.26, 0.77, 1.4, 2.05, 2.75,3.65, 4.64, 5.82, 7.1, 8.02]
        }, {
            name: 'Media',
            type: "line",
            marker: { enabled: false },
            data: [0.38, 0.89, 1.54, 2.25, 3.05,4.05, 5.29, 6.65, 7.98, 9.01]
        }, {
            name: '(+) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.53, 1.04, 1.71, 2.49, 3.42,4.64, 6.12, 7.67, 9.01, 10.01]
        }]
    });
}



$( '#graficoTallaPeso' ).on( 'click', function() {
    $('#graficosTitle').html("Análisis Talla Peso según referencias postnatales");
    $('#graficosBody').html("<div id='viewGraficoTallaPeso'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoTallaPeso').highcharts({
    title: {
        text: 'Análisis Talla Peso según referencias postnatales'
    },
    subtitle: {
        text: 'Alarcón y col. 2008'
    },
    xAxis: [{
        categories: ['24', '25', '26', '27', '28', '29',
            '30', '31', '32', '33', '34', '35','36','37','38','39','40','41','42'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Talla Fetal',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true,
        min:5,
        max: 55,
        tickAmount: 5

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Peso',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} kgs',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        min:5
    }],
    tooltip: {
        shared: true
    },
    credits: { enabled: false },
    series: [{
        name: 'Peso PCT90',
        type: 'spline',
        yAxis: 1,
        data: [899,966,1074,1219,1395,1597,1820,2059,2308,2562,2817,3067,3307,3532,3736,3914,4061,4173,4244],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    },{
        name: 'Peso PCT50',
        type: 'spline',
        yAxis: 1,
        data: [750,810,905,1032,1185,1361,1555,1763,1980,2202,2424,2642,2852,3049,3228,3386,3517,3618,3684],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    },{
        name: 'Peso PCT10',
        type: 'spline',
        yAxis: 1,
        data: [630,661,728,826,951,1099,1265,1446,1637,1834,2032,2263,2438,2596,2795,2903,3024,3116,3176],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    },{
        name: 'Peso',
        type: 'spline',
        yAxis: 1,
        data: (function () {
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                        data.push({ y: 0, });
                }
                data.push({
                        y: parseInt(document.getElementById("pfe").value),
                });
                for (i = edadGest + 1; i <= 41; i++) {
                        data.push({
                            y: 0,
                        });
                }
                return data;
        }()),
        dashStyle: "Dot",
        marker: { symbol: 'square' },
        lineWidth: 0,
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    }, {
        name: 'Talla PCT 90',
        type: 'spline',
        data: [34.1,35.7,37.2,38.7,40.1,41.6,43.1,44.3,45.6,46.8,47.9,49.1,49.9,50.8,51.5,52.1,52.6,52.9,53.1],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }, {
        name: 'Talla PCT 50',
        type: 'spline',
        data: [31.6,33.1,34.5,36.1,37.5,39.1,40.5,41.9,43.3,44.6,45.8,46.9,47.9,48.7,49.6,50.3,50.8,51.1,51.3],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }, {
        name: 'Talla PCT 10',
        type: 'spline',
        data: [29.8,31.1,32.3,33.6,35.1,36.5,37.7,39.1,40.5,41.8,43.1,44.2,45.3,46.3,47.2,47.9,48.5,48.8,49.1],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }, {
        name: 'Talla',
        type: 'spline',
        data: (function () {
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                        data.push({ y: 0, });
                }
                data.push({
                        y: parseInt(document.getElementById("tallaFetal").value),
                });
                for (i = edadGest + 1; i <= 41; i++) {
                        data.push({
                            y: 0,
                        });
                }
                return data;
        }()),
        dashStyle: "Dot",
        marker: { symbol: 'square' },
        lineWidth: 0,
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }]
});
    $('#popupGraficos').modal('show');
});

$( '#graficoIPN' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico IPN Referencia Neonatal SOCHIPE");
    $('#graficosBody').html("<div id='viewGraficoIPN'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoIPN').highcharts({
        title: {
            text: 'IPN / EG',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: '' },
            tickPositions: [1, 1.6, 2.2, 2.8, 3.4, 4]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories:
            ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 10',
            marker: { enabled: false },
            data: [1.79, 1.83, 1.87, 1.91, 1.95, 1.99, 2.04, 2.08, 2.12, 2.16, 2.2, 2.25, 2.29, 2.33, 2.37, 2.41, 2.45, 2.5, 2.54]
        }, {
            type: "line",
            name: 'Pct. 90',
            marker: { enabled: false },
            data: [2.54,2.57,2.59,2.62,2.65,2.68,2.71,2.74,2.77,2.8,2.83,2.86,2.89,2.92,2.95,2.98,3.01,3.04,3.07]
        }, {
            type: "line",
            name: 'IPN',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseFloat(document.getElementById("ipn").value),
                });
                for (i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });
            $('#popupGraficos').modal('show');
});

$( '#graficoTalla' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Talla Fetal Estimada Referencia Neonatal SOCHIPE");
    $('#graficosBody').html("<div id='viewGraficoTalla'></div><p><small>Talla (Formula = lf * 0.55 + 9.6) </small></p>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoTalla').highcharts({
        title: {
            text: 'Talla Fetal estimada',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'mm' },
            tickPositions: [25, 35, 45, 55]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Talla PCT 90',
            marker: { enabled: false },
            data:  [34.1,35.7,37.2,38.7,40.1,41.6,43.1,44.3,45.6,46.8,47.9,49.1,49.9,50.8,51.5,52.1,52.6,52.9,53.1]
        }, {
            type: "line",
            name: 'Talla PCT 50',
            marker: { enabled: false },
            data: [31.6,33.1,34.5,36.1,37.5,39.1,40.5,41.9,43.3,44.6,45.8,46.9,47.9,48.7,49.6,50.3,50.8,51.1,51.3]
        }, {
            type: "line",
            name: 'Talla PCT 10',
            marker: { enabled: false },
            data: [29.8,31.1,32.3,33.6,35.1,36.5,37.7,39.1,40.5,41.8,43.1,44.2,45.3,46.3,47.2,47.9,48.5,48.8,49.1]
        }, {
            type: "line",
            name: 'talla',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseInt(document.getElementById("tallaFetal").value),
                });
                for (i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });
            $('#popupGraficos').modal('show');
});