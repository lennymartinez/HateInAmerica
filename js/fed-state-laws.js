$(function (){
    // Setup common map params
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Roboto Mono'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });

    $.getJSON("data/fed-state-laws-data.json", function(dataset) {
        //  console.log(dataset);
        // $('#container').highcharts('Map', {
        Highcharts.mapChart('container', {
            legend: {
                enabled: false
            },
            chart: {
                backgroundColor: '#EFEEE8',
                events: {
                    load: function() {
                        var chart = $('#container').highcharts(),
                            rogueState = ['Utah'];                        
                        chart.series[0].data.forEach(function(element){
                            if ($.inArray(element.name, rogueState) != -1) {
                                element.update({
                                    // borderColor: 'rgba(158, 37, 49, .75)',
                                    // borderWidth: 2,
                                    //color: '#BADA55',
                                    color: {
                                        pattern: {
                                            path: {
                                                d: 'M 3 3 L 8 3 L 8 8 Z',
                                                // d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
                                                // fill: '#FF0000',
                                                strokeWidth: 2
                                            },
                                            width: 4,
                                            height: 4,
                                            // color: '#5DA7FF',
                                            color: 'url(#highcharts-default-pattern-1)'
                                            // opacity: 0.4
                                        }
                                    }
                                });
                            }
                        });
                    }
                }
            },
            title: {
                text: '',
                floating: true,
                verticalAlign: 'top',
                margin: 0
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
                pointFormat: '<span class="fed-map-tip text-left"><b>{point.name}</b><br/><p>{point.data-point}</p></span>'
            },
            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF'
                }, {
                    from: 0.1,
                    to: 1.9,
                    color: 'rgba(161, 13, 3, .1)'
                }, {
                    from: 2,
                    to: 3.9,
                    color: 'rgba(161, 13, 3, .3)'
                }, {
                    from: 4,
                    to: 5.9,
                    color: 'rgba(161, 13, 3, .4)'
                }, {
                    from: 6,
                    to: 7.9,
                    color: 'rgba(161, 13, 3, .5)'
                }, {
                    from: 8,
                    to: 9.9,
                    color: 'rgba(161, 13, 3, .7)'
                }, {
                    from: 10,
                    to: 10.9,
                    color: 'rgba(161, 13, 3, .8)'
                }, {
                    from: 11,
                    to: 12,
                    color: 'rgba(161, 13, 3, 1)'
                }]
            },
            series: [{
                data: dataset,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                name: 'State Laws',
                states: {
                    hover: {
                        color: '#171717'
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
                data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapliine'),
                color: 'silver',
                showInLegend: false,
                enableMouseTracking: false
            }]
        });
    });
})