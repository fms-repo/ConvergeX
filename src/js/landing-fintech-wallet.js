/**
 * @name video-banner
 * @function handle youtube video banner
 */

$(function(){
  var $youtubeElm = $('#youtube-liquid-bg'),
      $cover = $('#banner-cover'),
      isMobile = window.matchMedia(mq.mdDown).matches;
  // Initial youtube config
  $youtubeElm.YTPlayer({
    videoId: '0cdLuY6R_kI',
    repeat: true,
    width: '1080',
    height: '720',
    playerVars: {
      width: '1080',
      height: '720',
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:9000'
    },
    callback: function() {
      videoCallbackEvents();
    }
  });
  
  // Access all of YouTube's API events and methods by using player
  var videoCallbackEvents = function() {
    var player = $youtubeElm.data('ytPlayer').player;
    player.addEventListener('onStateChange', function(){
      if(isMobile) {
        player.pauseVideo();
      } else {
        $cover.hide();
      }
    });
  }
});


/**
 * @name Price Chart
 * @function handle feature chart
 */

var coinData = [
  {
    status: 'up',
    dataCollection: [11, 13, 10, 4, 10, 12, 13, 16, 17, 20, 16, 16, 13, 10, 4, 6, 8, 9, 13, 16, 17, 20, 14, 16]
  },
  {
    status: 'up',
    dataCollection: [13, 16, 17, 20, 16, 16, 13, 10, 11, 29, 10, 4, 10, 12, 4, 17, 20, 16, 6, 8, 9, 13, 16, 17]
  },
  {
    status: 'down',
    dataCollection: [10, 12, 13, 16, 17, 20, 16, 16, 13, 11, 8, 10, 4, 10, 4, 6, 8, 9, 13, 16, 17, 20, 16, 6]
  },
  {
    status: 'up',
    dataCollection: [11, 10, 10, 16, 16, 13, 10, 4, 6, 8, 9, 13, 16, 17, 20, 16, 16, 4, 10, 12, 13, 16, 17, 20]
  },
  {
    status: 'down',
    dataCollection: [11, 9, 10, 4, 10, 12, 13, 16, 17, 20, 16, 16, 13, 10, 4, 6, 8, 9, 13, 16, 17, 20, 16, 16]
  }
]

function chartConfig(st, values) {
  var color = '';
  var cl = '';
  var gradient = ctx.createLinearGradient(0, 0, 0, 450);
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

if($('#wallet-chart-price, #fintech-chart-price').length > 0) {
  for(var i = 0; i < coinData.length; i++) {
    var ctx = document.getElementById('chart_canvas'+i).getContext('2d');
    new Chart(
      ctx,
      {
        type: 'line',
        data: {
          labels: ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '00AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM'],
          datasets: [chartConfig(coinData[i].status, coinData[i].dataCollection)]
        },
        options: {
          plugins: {
            legend: {
              display: false
            },
          },
          scales: {
            y: {
              display: false,
              grid: {
                borderWidth: 0,
                color: 'transparent'
              }
            },
            x: {
              display: false,
              grid: {
                borderWidth: 0,
                color: 'transparent'
              }
            }
          }
        }
      }
    );
  }
}
