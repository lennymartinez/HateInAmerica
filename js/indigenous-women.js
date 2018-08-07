$(function() {
    // Setup common map params
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Oswald'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });

    // Default and when 2014 map button is clicked
    $('#map2014').click(function () {
        $.getJSON("data/2014indigenous-data.json", function(data2014) {

            $('#container').highcharts('Map', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#EFEFEF'
                },
                title: {
                    text: 'Missing indigenous women in 2014',
                    floating: true,
                    verticalAlign: 'top',
                    margin: 0,
                    style: {
                        fontWeight: '700',
                        fontSize: '1.5em'
                    }
                },
                mapNavigation: {
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b><br />&#8226; Active: <b>{point.active}</b></br />&#8226; Purged: <b>{point.purged}</b></br /><b>&#8226; Total missing: {point.value}</b>'
                },
                colorAxis: {
                    // stops: [
                    //     [0.2, '#E17F7B'],
                    //     [0.4, '#CF5050'],
                    //     [0.6, '#9E2531'],
                    //     [0.8, '#7F1E28'],
                    //     [1, '#5E161D']
                    // ],                    
                    // min: 75,
                    // max: 700
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: '#FFFFFF' //A10D03
                    }, {
                        from: 1,
                        to: 14,
                        color: 'rgba(161, 13, 3, .1)'
                    }, {
                        from: 15,
                        to: 49,
                        color: 'rgba(161, 13, 3, .3)'
                    }, {
                        from: 50,
                        to: 99,
                        color: 'rgba(161, 13, 3, .5)'
                    }, {
                        from: 100,
                        to: 399,
                        color: 'rgba(161, 13, 3, .7)'
                    }, {
                        from: 400,
                        to: 700,
                        color: 'rgba(161, 13, 3, 1)'
                    }]
                },
                series: [{
                    data: data2014,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: 'Missing Indigenous Women 2014',
                    states: {
                        hover: {
                            color: '#9E2531'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}'
                    }
                },
                {
                    name: 'Separators',
                    type: 'mapline',
                    data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
                    color: 'silver',
                    showInLegend: true,
                    enableMouseTracking: false
                }]
            });
        });
    });

    // 2015 map button is clicked
    $('#map2015').click(function () {
        $.getJSON("data/2015indigenous-data.json", function(data2015) {

            $('#container').highcharts('Map', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#EFEFEF'
                },
                title: {
                    text: 'Missing indigenous women in 2015',
                    floating: true,
                    verticalAlign: 'top',
                    margin: 0,
                    style: {
                        fontWeight: '700',
                        fontSize: '1.5em'
                    }
                },
                mapNavigation: {
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b><br />&#8226; Active: <b>{point.active}</b></br />&#8226; Purged: <b>{point.purged}</b></br /><b>&#8226; Total missing: {point.value}</b>'
                },
                colorAxis: {
                    // stops: [
                    //     [0.2, '#E17F7B'],
                    //     [0.4, '#CF5050'],
                    //     [0.6, '#9E2531'],
                    //     [0.8, '#7F1E28'],
                    //     [1, '#5E161D']
                    // ],
                    // min: 75,
                    // max: 700
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: '#FFFFFF' //A10D03
                    }, {
                        from: 1,
                        to: 14,
                        color: 'rgba(161, 13, 3, .1)'
                    }, {
                        from: 15,
                        to: 49,
                        color: 'rgba(161, 13, 3, .3)'
                    }, {
                        from: 50,
                        to: 99,
                        color: 'rgba(161, 13, 3, .5)'
                    }, {
                        from: 100,
                        to: 399,
                        color: 'rgba(161, 13, 3, .7)'
                    }, {
                        from: 400,
                        to: 700,
                        color: 'rgba(161, 13, 3, 1)'
                    }]
                },
                series: [{
                    data: data2015,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: 'Missing Indigenous Women 2015',
                    states: {
                        hover: {
                            color: '#9E2531'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}'
                    }
                },
                {
                    name: 'Separators',
                    type: 'mapline',
                    data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
                    color: 'silver',
                    showInLegend: true,
                    enableMouseTracking: false
                }]
            });
        });
    });

    // 2016 map button is clicked
    $('#map2016').click(function () {
        $.getJSON("data/2016indigenous-data.json", function(data2016) {

            $('#container').highcharts('Map', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#EFEFEF'
                },
                title: {
                    text: 'Missing indigenous women in 2016',
                    floating: true,
                    verticalAlign: 'top',
                    margin: 0,
                    style: {
                        fontWeight: '700',
                        fontSize: '1.5em'
                    }
                },
                mapNavigation: {
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b><br />&#8226; Active: <b>{point.active}</b></br />&#8226; Purged: <b>{point.purged}</b></br /><b>&#8226; Total missing: {point.value}</b>'
                },
                colorAxis: {
                    // stops: [
                    //     [0.2, '#E17F7B'],
                    //     [0.4, '#CF5050'],
                    //     [0.6, '#9E2531'],
                    //     [0.8, '#7F1E28'],
                    //     [1, '#5E161D']
                    // ],
                    // min: 75,
                    // max: 700
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: '#FFFFFF' //A10D03
                    }, {
                        from: 1,
                        to: 14,
                        color: 'rgba(161, 13, 3, .1)'
                    }, {
                        from: 15,
                        to: 49,
                        color: 'rgba(161, 13, 3, .3)'
                    }, {
                        from: 50,
                        to: 99,
                        color: 'rgba(161, 13, 3, .5)'
                    }, {
                        from: 100,
                        to: 399,
                        color: 'rgba(161, 13, 3, .7)'
                    }, {
                        from: 400,
                        to: 700,
                        color: 'rgba(161, 13, 3, 1)'
                    }]
                },
                series: [{
                    data: data2016,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: 'Missing Indigenous Women 2016',
                    states: {
                        hover: {
                            color: '#9E2531'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}'
                    }
                },
                {
                    name: 'Separators',
                    type: 'mapline',
                    data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
                    color: 'silver',
                    showInLegend: true,
                    enableMouseTracking: false
                }]
            });
        });
    });
 
})