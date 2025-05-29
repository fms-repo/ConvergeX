/**
 * @name video-iframe
 * @function handle youtube video iframe
 */

// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.


document.addEventListener('DOMContentLoaded', function() {
  var player;
  function onYouTubeIframeAPIReady(id) {
    player = new YT.Player('video_iframe', {
      height: '360',
      width: '640',
      videoId: id,
      playerVars : {
        autoplay: 1,
        rel: 0,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 3. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    // event.target.playVideo();
  }

  // 4. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      // setTimeout(stopVideo, 6000);
      done = true;
    }
  }

  function playVideo() {
    player.playVideo();
  }

  function stopVideo() {
    player.stopVideo();
  }
  var videoModal = document.getElementById('video_modal');
  var instances = M.Modal.init(videoModal, {
    onOpenEnd: function(e, btn) {
      var videoId = btn.getAttribute("data-video");
      onYouTubeIframeAPIReady(videoId);
    },
    onCloseEnd: function() {
      stopVideo();
    }
  });
});

$(function() {
  $('#video_modal.modal .modal-close').click(function(){
    stopVideo();
  })
});
