// $(function() {
(function(H) {
    function deferRender(proceed) {
        var series = this,
            $renderTo = $(this.chart.container.parentNode);

        // It is not appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
        } else { // Hasn't appeared, halt rendering until appear
            $renderTo.appear(); // Intialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    H.wrap(H.Series.prototype, 'render', deferRender);
}(Highcharts));
Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Oswald'
        }
    },
    lang: {
        thousandsSep: ','
    }
});

Highcharts.chart('container', {

    chart: {
        type: 'bar'
    },

    credits: {
        text: '',
        href: ''
    },

    exporting: {
        enabled: false
    },

    title: {
        text: 'Crime rate growth 2015-2016 - Top 18 Universities'
    },

    subtitle: {
        text: 'Source: Department of Education'
    },

    xAxis: {
        categories: ['Ohio State University', 'Keene State College', 'University of Wisconsin at Madison', 'Nassau Community College', 'Metropolitan State University', 'Indiana Univ. - Purdue Univ. at Indianapolis', 'Onondaga Community College', 'University of Akron', 'Dartmouth College', 'Santa Monica College', 'Roxbury Community College', 'Montana State University at Bozeman', 'Brown University', 'Salem College', 'Harvard University', 'University of Michigan (Ann Arbor)', 'University of Southern California', 'Cornell University'],
        title: {
            text: null
        }
    },

    yAxis: {
        min: 0,
        max: 35,
        tickInterval: 3,
        title: {
            text: 'Number of Incidents'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        bar: {
            events: {
                legendItemClick: function () {
                    return false;
                }
            },
            dataLabels: {
                enabled: true
            }
        }
    },

    tooltip: {
        formatter: function () {
            // console.log(this);
            return '<b>' + this.point.college + ' - ' + this.series.name + '</b><br />' + this.point.incidents;
        }
    },

    series: [{
        name: '2015',
        color: '#BADA55',
        data: [
            {
                y: 4,
                college: 'The Ohio State University, OH',
                incidents: '\u25CF Intimidation: <b>2</b><br />\u25CF Destruction/damage/vandalism of property: <b>2</b>'
            },
            {
                y: 2,
                college: 'Keene State College, NH',
                incidents: '\u25CF Destruction/damage/vandalism of property: <b>2</b>'
            },
            {
                y: 2,
                college: 'University of Wisconsin at Madison, WI',
                incidents: '\u25CF Destruction/damage/vandalism of property: <b>2</b>'
            },
            {
                y: 0,
                college: 'Nassau Community College, NY',
                incidents: 'No incidents'
            },
            {
                y: 0,
                college: 'Metropolitan State University, MN',
                incidents: 'No incidents'
            },
            {
                y: 5,
                college: 'Indiana Univeristy - Purdue University at Indianapolis, IN',
                incidents: '\u25CF Rape: <b>1</b><br />\u25CF Destruction/damage/vandalism of property: <b>1</b><br />\u25CF Intimidation: <b>3</b>'
            },
            {
                y: 5,
                college: 'Onondaga Community College, NY',
                incidents: '\u25CF Intimidation: <b>5</b>'
            },
            {
                y: 0,
                college: 'University of Akron, OH',
                incidents: 'No incidents'
            },
            {
                y: 1,
                college: 'Dartmouth College, NH',
                incidents: '\u25CF Destruction/damage/vandalism of property: <b>1</b>'
            },
            {
                y: 0,
                college: 'Santa Monica College, CA',
                incidents: 'No incidents'
            },
            {
                y: 0,
                college: 'Roxbury Community College, MA',
                incidents: 'No incidents'
            },
            {
                y: 0,
                college: 'Montana State University at Bozeman, MT',
                incidents: 'No incidents'
            },
            {
                y: 3,
                college: 'Brown University, RI',
                incidents: '\u25CF Destruction/damage/vandalism of property: <b>3</b>'
            },
            {
                y: 0,
                college: 'Salem College, NC',
                incidents: 'No incidents'
            },
            {
                y: 2,
                college: 'Harvard University, MA',
                incidents: '\u25CF Destruction/damage/vandalism of property: <b>1</b><br />\u25CF Intimidation: <b>1</b>'
            },
            {
                y: 2,
                college: 'University of Michigan at Ann Arbor, MI',
                incidents: '\u25CF Intimidation: <b>2</b>'
            },
            {
                y: 3,
                college: 'University of Southern California, CA',
                incidents: '\u25CF Simple Assault: <b>2</b><br />\u25CF Intimidation: <b>1</b>'
            },
            {
                y: 6,
                college: 'Cornell University, NY',
                incidents: '\u25CF Simple Assault: <b>2</b><br />\u25CF Destruction/damage/vandalism of property: <b>3</b><br />\u25CF Intimidation: <b>1</b>'
            }
        ]
    }, {
        name: '2016',
        color: '#BA8A18',
        data: [
            {
                y: 32,
                college: 'The Ohio State University, OH',
                incidents: '\u25CF Aggravated Assault: <b>14</b><br />\u25CF Simple assault: <b>8</b><br />\u25CF Larceny-theft: <b>1</b><br />\u25CF Intimidation: <b>2</b><br />\u25CF Destruction/damage/vandalism of property: <b>3</b>'
            },
            {
                y: 20,
                college: 'Keene State College, NH',
                incidents: '\u25CF Destruction/damage/vandalism of property: <b>19</b><br />\u25CF Intimidation: <b>1</b>'
            },
            {
                y: 20,
                college: 'University of Wisconsin at Madison, WI',
                incidents: '\u25CF Aggravated Assault: <b>1</b><br />\u25CF Destruction/damage/vandalism of property: <b>16</b><br />\u25CF Intimidation: <b>3</b>'
            },
            {
                y: 15,
                college: 'Nassau Community College, NY',
                incidents: '\u25CF Aggravated Assault: <b>1</b><br />\u25CF Destruction/damage/vandalism of property: <b>13</b><br />\u25CF Intimidation: <b>1</b>'
            },
            {
                y: 13,
                college: 'Metropolitan State University, MN',
                incidents: '\u25CF Simple Assault: <b>1</b><br />\u25CF Larcency-theft: <b>8</b><br />\u25CF Destruction/damage/vandalism of property: <b>3</b><br />\u25CF Intimidation: <b>1</b>'
            },
            {
                y: 13,
                college: 'Indiana Univeristy - Purdue University at Indianapolis, IN',
                incidents: '\u25CF Simple Assault: <b>3</b><br />\u25CF Destruction/damage/vandalism of property: <b>4</b><br />\u25CF Intimidation: <b>6</b>'
            },
            {
                y: 12,
                college: 'Onondaga Community College, NY',
                incidents: '\u25CF Larcency-theft: <b>1</b><br />\u25CF Intimidation: <b>11</b>'
            },
            {
                y: 10,
                college: 'University of Akron, OH',
                incidents: '\u25CF Simple Assault: <b>7</b><br />\u25CF Robbery: <b>1</b><br />\u25CF Destruction/damage/vandalism of property: <b>1</b><br />\u25CF Intimidation: <b>1</b>'
            },
            {
                y: 10,
                college: 'Dartmouth College, NH',
                incidents: '\u25CF Larcency-theft: <b>2</b><br />\u25CF Destruction/damage/vandalism of property: <b>7</b><br />\u25CF Intimidation: <b>1</b>'
            },
            {
                y: 9,
                college: 'Santa Monica College, CA',
                incidents: '\u25CF Simple Assault: <b>4</b><br />\u25CF Destruction/damage/vandalism of property: <b>2</b><br />\u25CF Intimidation: <b>3</b>'
            },
            {
                y: 9,
                college: 'Roxbury Community College, MA',
                incidents: '\u25CF Simple Assault: <b>4</b><br />\u25CF Larcency-theft: <b>4</b><br />\u25CF Rape: <b>1</b>'
            },
            {
                y: 9,
                college: 'Montana State University at Bozeman, MT',
                incidents: '\u25CF Destruction/damage/vandalism of property: <b>2</b><br />\u25CF Intimidation: <b>7</b>'
            },
            {
                y: 9,
                college: 'Brown University, RI',
                incidents: '\u25CF Larcency-theft: <b>1</b><br />\u25CF Destruction/damage/vandalism of property: <b>4</b><br />\u25CF Intimidation: <b>4</b>'
            },
            {
                y: 8,
                college: 'Salem College, NC',
                incidents: '\u25CF Intimidation: <b>8</b>'
            },
            {
                y: 8,
                college: 'Harvard University, MA',
                incidents: '\u25CF Simple Assault: <b>1</b><br />\u25CF Aggravated Assault: <b>3</b><br />\u25CF Destruction/damage/vandalism of property: <b>1</b><br />\u25CF Intimidation: <b>3</b>'
            },
            {
                y: 8,
                college: 'University of Michigan at Ann Arbor, MI',
                incidents: '\u25CF Simple Assault: <b>2</b><br />\u25CF Destruction/damage/vandalism of property: <b>5</b><br />\u25CF Intimidation: <b>1</b>'
            },
            {
                y: 8,
                college: 'University of Southern California, CA',
                incidents: '\u25CF Simple Assault: <b>2</b><br />\u25CF Destruction/damage/vandalism of property: <b>3</b><br />\u25CF Intimidation: <b>3</b>'
            },
            {
                y: 8,
                college: 'Cornell University, NY',
                incidents: '\u25CF Simple Assault: <b>3</b><br />\u25CF Destruction/damage/vandalism of property: <b>3</b><br />\u25CF Intimidation: <b>2</b>'
            }
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
// });