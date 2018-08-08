get2014Map();

function update_maps(sel_year) {
    var selected_year = sel_year.value;

    if (selected_year == '2014') {
        get2014Map();
    } else if (selected_year == '2015') {
        get2015Map();
    } else if (selected_year == '2016') {
        get2016Map();
    }
}

function get2014Map() {
    // 2014 is default map
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Roboto'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });
    $.getJSON("data/2014indigenous-data.json", function(data2014) {

        $('#container').highcharts('Map', {
            legend: {
                enabled: false
            },
            chart: {
                backgroundColor: '#EFEEE8'
            },
            title: {
                text: 'Missing indigenous women in 2014',
                floating: true,
                verticalAlign: 'top',
                margin: 0,
                style: {
                    fontWeight: '700',
                    fontSize: '1.5em',
                    fontFamily: 'Roboto'
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
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF' //A10D03
                }, {
                    from: 1,
                    to: 70,
                    color: 'rgba(23, 23, 23, .1)'
                }, {
                    from: 71,
                    to: 140,
                    color: 'rgba(23, 23, 23, .2)'
                }, {
                    from: 141,
                    to: 210,
                    color: 'rgba(23, 23, 23, .3)'
                }, {
                    from: 211,
                    to: 280,
                    color: 'rgba(23, 23, 23, .4)'
                }, {
                    from: 281,
                    to: 350,
                    color: 'rgba(23, 23, 23, .5)'
                }, {
                    from: 351,
                    to: 420,
                    color: 'rgba(23, 23, 23, .6)'
                }, {
                    from: 421,
                    to: 490,
                    color: 'rgba(23, 23, 23, .7)'
                }, {
                    from: 491,
                    to: 560,
                    color: 'rgba(23, 23, 23, .8)'
                }, {
                    from: 561,
                    to: 630,
                    color: 'rgba(23, 23, 23, .9)'
                }, {
                    from: 631,
                    to: 700,
                    color: 'rgba(23, 23, 23, 1)'
                }]
            },
            series: [{
                data: data2014,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                name: 'Missing Indigenous Women 2014',
                states: {
                    hover: {
                        color: 'rgba(161, 13, 3, .3)'
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
}

function get2015Map() {
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Roboto'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });
    $.getJSON("data/2015indigenous-data.json", function(data2015) {

        $('#container').highcharts('Map', {
            legend: {
                enabled: false
            },
            chart: {
                backgroundColor: '#EFEEE8'
            },
            title: {
                text: 'Missing indigenous women in 2015',
                floating: true,
                verticalAlign: 'top',
                margin: 0,
                style: {
                    fontWeight: '700',
                    fontSize: '1.5em',
                    fontFamily: 'Roboto'
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
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF' //A10D03
                }, {
                    from: 1,
                    to: 70,
                    color: 'rgba(23, 23, 23, .1)'
                }, {
                    from: 71,
                    to: 140,
                    color: 'rgba(23, 23, 23, .2)'
                }, {
                    from: 141,
                    to: 210,
                    color: 'rgba(23, 23, 23, .3)'
                }, {
                    from: 211,
                    to: 280,
                    color: 'rgba(23, 23, 23, .4)'
                }, {
                    from: 281,
                    to: 350,
                    color: 'rgba(23, 23, 23, .5)'
                }, {
                    from: 351,
                    to: 420,
                    color: 'rgba(23, 23, 23, .6)'
                }, {
                    from: 421,
                    to: 490,
                    color: 'rgba(23, 23, 23, .7)'
                }, {
                    from: 491,
                    to: 560,
                    color: 'rgba(23, 23, 23, .8)'
                }, {
                    from: 561,
                    to: 630,
                    color: 'rgba(23, 23, 23, .9)'
                }, {
                    from: 631,
                    to: 700,
                    color: 'rgba(23, 23, 23, 1)'
                }]
            },
            series: [{
                data: data2015,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                name: 'Missing Indigenous Women 2015',
                states: {
                    hover: {
                        color: 'rgba(161, 13, 3, .3)'
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
}

function get2016Map() {
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Roboto'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });
    $.getJSON("data/2016indigenous-data.json", function(data2016) {

        $('#container').highcharts('Map', {
            legend: {
                enabled: false
            },
            chart: {
                backgroundColor: '#EFEEE8'
            },
            title: {
                text: 'Missing indigenous women in 2016',
                floating: true,
                verticalAlign: 'top',
                margin: 0,
                style: {
                    fontWeight: '700',
                    fontSize: '1.5em',
                    fontFamily: 'Roboto'
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
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF' //A10D03
                }, {
                    from: 1,
                    to: 70,
                    color: 'rgba(23, 23, 23, .1)'
                }, {
                    from: 71,
                    to: 140,
                    color: 'rgba(23, 23, 23, .2)'
                }, {
                    from: 141,
                    to: 210,
                    color: 'rgba(23, 23, 23, .3)'
                }, {
                    from: 211,
                    to: 280,
                    color: 'rgba(23, 23, 23, .4)'
                }, {
                    from: 281,
                    to: 350,
                    color: 'rgba(23, 23, 23, .5)'
                }, {
                    from: 351,
                    to: 420,
                    color: 'rgba(23, 23, 23, .6)'
                }, {
                    from: 421,
                    to: 490,
                    color: 'rgba(23, 23, 23, .7)'
                }, {
                    from: 491,
                    to: 560,
                    color: 'rgba(23, 23, 23, .8)'
                }, {
                    from: 561,
                    to: 630,
                    color: 'rgba(23, 23, 23, .9)'
                }, {
                    from: 631,
                    to: 700,
                    color: 'rgba(23, 23, 23, 1)'
                }]
            },
            series: [{
                data: data2016,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                name: 'Missing Indigenous Women 2014',
                states: {
                    hover: {
                        color: 'rgba(161, 13, 3, .3)'
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
}