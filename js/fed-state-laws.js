$(function (){
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

    $.getJSON("data/fed-state-laws-data.json", function(dataset) {
        //  console.log(dataset);
        // $('#container').highcharts('Map', {
        Highcharts.mapChart('container', {
            legend: {
                enabled: false
            },
            chart: {
                // backgroundColor: '#EFEFEF',
                events: {
                    load: function() {
                        var chart = $('#container').highcharts(),
                            rogueState = ['Utah'];                        
                        chart.series[0].data.forEach(function(element){
                            if ($.inArray(element.name, rogueState) != -1) {
                                element.update({
                                    // borderColor: 'rgba(158, 37, 49, .75)',
                                    // borderWidth: 2,
                                    // color: '#BADA55',
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
                text: 'chart sub-title goes here',
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
                pointFormat: '<b>{point.name}</b><br />{point.data-point}'
            },
            colorAxis: {
                // stops: [
                //     [0, '#EFEFEF'],
                //     // [5, '#BADA55'],
                //     [0.2106, '#5DA7FF'], 
                //     [0.4218, '#3BE0E8'], 
                //     [0.6618, '#4DFFA9'], 
                //     [0.8873, '#3EE83B']
                //     // [0.5364, '#C2FF40'], 
                //     // [0.6756, '#C2FF40']  
                // ],
                // min: 0,
                // max: 11
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: 'rgba(255, 255, 255, .9)'
                }, {
                    from: 0.1,
                    to: 1.9,
                    color: 'rgba(154, 174, 255, .4)'
                }, {
                    from: 2,
                    to: 3.9,
                    color: 'rgba(126, 143, 209, .5)'
                }, {
                    from: 4,
                    to: 5.9,
                    color: 'rgba(80, 91, 133, .6)'
                }, {
                    from: 6,
                    to: 7.9,
                    color: 'rgba(58, 66, 97, .7)'
                }, {
                    from: 8,
                    to: 9.9,
                    color: 'rgba(126, 143, 209, .5)'
                }, {
                    from: 10,
                    to: 12,
                    color: 'rgba(38, 43, 63, .8)'
                }]
            },
            series: [{
                data: dataset,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                name: 'State Laws',
                states: {
                    hover: {
                        color: '#5DA7FF'
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