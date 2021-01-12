import React from 'react'
import {Howl, Howler} from 'howler'

class App extends React.Component {
  componentDidMount() {
    var Radio = function(stations) {
      var self = this
      self.stations = stations
      self.index = 0
      // Setup the display for each station.
      for (var i = 0; i < self.stations.length; i++) {
        let titleDiv = document.getElementById(['title' + i])
        titleDiv.innerHTML =
          '<b>' + self.stations[i].freq + '</b> ' + self.stations[i].title
        let stationDiv = document.getElementById(['station' + i])
        stationDiv.addEventListener(
          'click',
          function(index) {
            var isNotPlaying =
              self.stations[index].howl && !self.stations[index].howl.playing()
            radio.stop()
            if (isNotPlaying || !self.stations[index].howl) {
              radio.play(index)
            }
          }.bind(self, i)
        )
      }
    }
    Radio.prototype = {
      play: function(index) {
        var self = this
        var sound
        index = typeof index === 'number' ? index : self.index
        var data = self.stations[index]
        if (data.howl) {
          sound = data.howl
        } else {
          sound = data.howl = new Howl({
            src: data.src,
            html5: true,
            format: ['mp3', 'aac']
          })
        }
        sound.play()
        self.toggleStationDisplay(index, true)
        self.index = index
      },
      stop: function() {
        var self = this
        var sound = self.stations[self.index].howl
        self.toggleStationDisplay(self.index, false)
        if (sound) {
          sound.stop()
        }
      },
      toggleStationDisplay: function(index, state) {
        var self = this
        let stationDiv = document.getElementById(['station' + index])
        stationDiv.style.backgroundColor = state
          ? 'rgba(255, 255, 255, 0.33)'
          : ''
        let liveDiv = document.getElementById(['live' + index])
        liveDiv.style.opacity = state ? 1 : 0
        let playingDiv = document.getElementById(['playing' + index])
        playingDiv.style.display = state ? 'block' : 'none'
      }
    }
    var radio = new Radio([
      {
        freq: '89.5',
        title: 'Radio 1',
        src: 'http://24.132.246.121:8004/;',
        howl: null
      },
      {
        freq: '90.2',
        title: 'Radio 2',
        src: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p',
        howl: null
      },
      {
        freq: '91.8',
        title: 'Radio 3',
        src: 'https://icecast.omroep.nl/radio1-bb-mp3',
        howl: null
      },
      {
        freq: '94.8',
        title: 'Radio 4',
        src: 'http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-eieuk_backup',
        howl: null
      },
      {
        freq: '103.3',
        title: 'Radio 90',
        src: 'http://streamdelta.lokaalradio.nl:9005/;stream.nsv',
        howl: null
      }
    ])
  }
  render() {
    return (
      <div>
        <div className="padding" />
        <div id="station0" className="station">
          <div className="title">
            <div id="title0" className="subtitle" />
            <div id="live0" className="live">
              LIVE
            </div>
            <div id="playing0" className="playing">
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
            </div>
          </div>
        </div>
        <div id="station1" className="station">
          <div className="title">
            <div id="title1" className="subtitle" />
            <div id="live1" className="live">
              LIVE
            </div>
            <div id="playing1" className="playing">
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
            </div>
          </div>
        </div>
        <div id="station2" className="station">
          <div className="title">
            <div id="title2" className="subtitle" />
            <div id="live2" className="live">
              LIVE
            </div>
            <div id="playing2" className="playing">
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
            </div>
          </div>
        </div>
        <div id="station3" className="station">
          <div className="title">
            <div id="title3" className="subtitle" />
            <div id="live3" className="live">
              LIVE
            </div>
            <div id="playing3" className="playing">
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
            </div>
          </div>
        </div>
        <div id="station4" className="station">
          <div className="title">
            <div id="title4" className="subtitle" />
            <div id="live4" className="live">
              LIVE
            </div>
            <div id="playing4" className="playing">
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
            </div>
          </div>
        </div>
        <div className="padding" />
      </div>
    )
  }
}

export default App
