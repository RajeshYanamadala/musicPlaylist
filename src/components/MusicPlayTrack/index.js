import {Component} from 'react'
import PlayListSection from '../PlayListSection'

import './index.css'

class MusicPlayTrack extends Component {
  state = {songsNewList: []}

  deleteSongsInList = id => {
    const {initialTracksList} = this.props
    const updateSongsList = initialTracksList.filter(
      eachSong => eachSong.id === id,
    )
    return updateSongsList
  }

  render() {
    const {initialTracksList} = this.props

    return (
      <div className="app-container">
        <div className="singer-section">
          <h1>Ed Shreeran</h1>
          <p>Singer</p>
        </div>
        <div className="bottom-section">
          <div className="play-list-search">
            <h1 className="songs-list-heading">Songs Playlist</h1>
            <input type="search" className="search-input" />
          </div>
          <ul className="songs-under-list-container">
            {initialTracksList.map(eachSong => (
              <PlayListSection
                songsDetails={eachSong}
                key={eachSong.id}
                deleteSongsInList={this.deleteSongsInList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MusicPlayTrack
