//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(songList){
  console.log(songList);
  //setting songs to empty string
  var songs = '';
  //setting listOfSongs to be set in HTML
  var listOfSongs = document.getElementById('song-list');
  
  //Looping through songList to iterate 50 times. Listing by name, title, price etc.

  for (var i = 0; i < songList.length; i++) {
    var currentSong = songList[i];
    songs += '<li class="list-group-item">'+ '<strong>' + currentSong.title + '</strong>' + '  By:  ' + currentSong.artist + '<br>' + 'From The Album: ' + currentSong.collection 
     + '<br>' + '<img style ="float: bottom;" src=' + currentSong.albumArt + '/>' + '<br>' + '$' + '<em>' + currentSong.price + '</em>' + '<br>' + 
     '<audio controls><source src="' + currentSong.preview + '" type="audio/MP4"></audio>';
  }
  //set the unodered list in HTML to empty string
    listOfSongs.innerHTML = songs;
}

var currentPlay;
var nextPlay;

document.addEventListener('play', function(e){
   var audios = document.getElementsByTagName('audio');
   for(var i = 0, len = audios.length; i < len;i++){
       if(audios[i] != e.target){
           audios[i].pause();
       }
   }
}, true);