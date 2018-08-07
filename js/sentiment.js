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
        type: 'line'
    },

    credits: {
      text: 'SOURCE: Twitter',
      href: ''
    },

    title: {
      text: 'Quantifying Sentiment'
    },
  
    subtitle: {
      text: 'Number of posts tracked on twitter'
    },
    
    legend: {
      enabled: false
    },
    
    xAxis: {
        type: 'datetime'
    },
    
    yAxis: {
      title: {
        text: 'Number of Posts'
      }
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: Date.UTC(2018, 5, 10),
        pointInterval: 24 * 3600 * 1000 // one day
      }
    },

    tooltip: {
      formatter: function () {
          // console.log(this);
          if (this.point.myTitle === '') {
            return '\u25CF Number of posts: <b>' + this.y + '</b>';
          } else {
            return '<b>' + this.point.myTitle + '</b><br /><br />' + this.point.myText + '<br /><br />\u25CF Number of posts: <b>' + this.y + '</b>';
          }
      }
    },

    responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          }
        }]
    },

    series: [{
        name:"Hate crimes reported",
        color: '#BA8A18',
        data: [
        {
            y: 12, 
            myTitle: '',
            myText: ''
        }, {
            y: 9, 
            myTitle: '',
            myText: ''
        }, {
            y: 11, 
            myTitle: 'Reunification of children under the age of 5',
            myText: 'The Trump Administration completes reunification for eligible children under the age of 5. According to the Department of Justice, at this point 57 of the 103 children have been reunified',
            marker: {
                symbol: 'diamond',
                radius: 8
            }
        }, {
            y: 9, 
            myTitle: '',
            myText: ''
        }, {
            y: 10, 
            myTitle: '',
            myText: ''
        }, {
            y: 13,
            myTitle: 'Hundreds march in protest',
            myText: 'The Department of Homeland Security announces that nearly 2,000 children have been separated during the  zero-tolerance initiative. The announcement cues hundreds to march for the “Families Belong Together” movement.',
            marker: {
                symbol: 'diamond',
                radius: 8
            }
        }, {
            y: 7, 
            myTitle: '',
            myText: ''
        }, {
            y: 1, 
            myTitle: '',
            myText: ''
        }, {
            y: 34, 
            myTitle: 'The administration is "doing its job"',
            myText: 'Homeland Security Secretary Kirstjen Nielsen says the adminstration "will not apologize" for separating families at the border, claiming the agency was just doing its job.',
            marker: {
                symbol: 'diamond',
                radius: 8
            }
        }, {
            y: 61, 
            myTitle: 'Republicans separate from Trump',
            myText: 'The G.O.P moves to end the separation of families at the border – a decision that divided Republicans from President Trump.',
            marker: {
                symbol: 'diamond',
                radius: 8
            }
        }, {
            y: 56, 
            myTitle: 'The executive order post public pressure',
            myText: 'Trump signs an executive order to keep families together at the U.S. Mexico border after an explosive public outrage. “I didn’t like the sight or feeling of families being separated,” Trump said.',
            marker: {
                symbol: 'diamond',
                radius: 8
            }
        }, {
            y: 45, 
            myTitle: 'Pentagon to house migrant children',
            myText: 'The Pentagon agrees to accommodate as many as 20,000 unaccompanied migrant children from the U.S.-Mexico border.',
            marker: {
                symbol: 'diamond',
                radius: 8
            }
        }, {
            y: 34, 
            myTitle: '',
            myText: ''
        }, {
            y: 13, 
            myTitle: '',
            myText: ''
        }, {
            y: 12, 
            myTitle: '',
            myText: ''
        }]
    }]
 
  });