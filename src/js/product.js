/**
 * @name Lightbox
 * @function handle slider carousel for detail item
 * @function handle lightbox popup for detail item
 */


$(document).ready(function(){
  var $detailCarousel = $('#detail_carousel');

  // slick carousel album
  $detailCarousel.slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    autoplay: false
  });

  $detailCarousel.each(function() {
    $(this).magnificPopup({
      delegate: '.image a',
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });
});


/**
 * @name Product Chart
 * @function handle product chart
 */

var coinData = {
  status: 'up',
  dataCollection: [13, 10, 4, 6, 8, 9, 13, 16, 17, 20, 14, 16]
};

function chartConfig(st, values) {
  var color = '';
  var cl = '';
  var gradient = ctx.createLinearGradient(0, 100, 0, 600);
  if (st === 'up') {
    cl = '93, 214, 98';
    color = 'rgb('+cl+')';

    gradient.addColorStop(0, 'rgba('+cl+', 0.5)');   
    gradient.addColorStop(0.15, 'rgba('+cl+', 0.0)');   
    gradient.addColorStop(1, 'rgba('+cl+', 0.0)');   
  } else if (st === 'down') {
    cl = '255, 114, 114';
    color = 'rgb('+cl+')';

    gradient.addColorStop(0, 'rgba('+cl+', 0.5)');   
    gradient.addColorStop(0.15, 'rgba('+cl+', 0.0)');   
    gradient.addColorStop(1, 'rgba('+cl+', 0.0)');   
  } else {
    cl = '185, 185, 185';
    color = 'rgb('+cl+')';

    gradient.addColorStop(0, 'rgba('+cl+', 0.5)');   
    gradient.addColorStop(0.2, 'rgba('+cl+', 0.0)');   
    gradient.addColorStop(1, 'rgba('+cl+', 0.0)');   
  }
  return {
    borderColor: color,
    backgroundColor: gradient,
    pointStyle: 'cross',
    fill: true,
    data: values
  }
}

var chartStyle = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  }
}

if($('#chart_product_detail').length > 0) {
  var ctx = document.getElementById('chart_product_detail').getContext('2d');
  new Chart(
    ctx,
    {
      type: 'line',
      data: {
        labels: ['1PM', '3PM', '5PM', '7PM', '9PM', '11PM', '1AM', '3AM', '5AM', '7AM', '9AM', '11AM'],
        datasets: [chartConfig(coinData.status, coinData.dataCollection)]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
        },
        scales: {
          x: {
            grid: {
              borderWidth: 0,
              color: 'transparent'
            }
          },
          y: {
            grid: {
              borderWidth: 1,
              color: 'rgba(131, 131, 131, 0.35)',
            }
          },
        }
      }
    }
  );
}

