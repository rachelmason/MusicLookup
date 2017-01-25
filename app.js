function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList) {
    console.log(songList);
    document.getElementById('song-list').innerHTML = " "
    // This is where you task begins
    for (var i = 0; i < songList.length; i++) {
      var item = songList[i]

      document.getElementById('song-list').innerHTML += 
      
       `<div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="well well-bk">
              <h3>${item.title}</h3>
               <img src="${item.albumArt}">
                 <p> ${item.artist}</p>
                   <p> ${item.collection}</p>
                      <p>${item.price}</p>
                       <audio controls>
                       <source src="${item.preview}" type="audio/mp4">
                       </audio>
              </div>
            </div>
          </div>`
      

    }
  }


function onlyPlayOneIn(container) {
        container.addEventListener("play", function (event) {
            audio_elements = container.getElementsByTagName("audio")
            for (i = 0; i < audio_elements.length; i++) {
                audio_element = audio_elements[i];
                if (audio_element !== event.target) {
                    audio_element.pause();
                }
            }
        }, true);
    }
    document.addEventListener("DOMContentLoaded", function () {
        onlyPlayOneIn(document.body);
    });
}



var itunesCtrl = new ItunesController()
