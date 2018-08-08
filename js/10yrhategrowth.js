//$(function () {
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
      text: 'SOURCE: U.S. Department of Education, Office of Postsecondary Education, Campus Safety and Security (CSS) survey.',
      href: ''
    },

    title: {
      text: '10-Year hate growth'
    },
  
    subtitle: {
      text: 'In year 2016, the number of reported hate crimes was 1,300. This is based on 6,506 institutions with 11,260 campuses. The crime data reported by the institutions have not been subjected to independent verification by the U.S. Department of Education. Therefore, the Department cannot vouch for the accuracy of the data reported here.'
    },
    legend: {
      enabled: false
    },
    yAxis: {
      title: {
        text: 'Number of Hate Crimes Reported'
      }
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2005
      }
    },

    tooltip: {
      formatter: function () {
          // console.log(this);
          return '\u25CF ' + this.x + ' Reported hate crimes: <b>' + this.y + '</b>';
      }
    },

    series: [{
      name:"Hate crimes reported",
      data: [44, 74, 48, 60, 947, 1198, 938, 998, 975, 1021, 1043, 1300],
      color: '#BA8A18'
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        }
      }]
    }
  
  });

//});