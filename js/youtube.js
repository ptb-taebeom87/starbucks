/*
강의는 25.유투브 영상배경-youtube iframe API(2)
youtube.js 소스받은곳
https://developers.google.com/youtube/iframe_api_reference?hl=ko
*/



// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//<div id="player"></div>
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',//최초 재생할 유튜브 영상 id
    playerVars:{
      autoplay: true, //자동재생유무
      loop:true, //반복재생유무
      playelist: 'An6LvWQuj_8'
    },
    events: {
      onReady: function(event){
        event.target.mute()//음소거처리
      }
    }
  });
}






