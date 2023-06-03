import {MdDelete} from 'react-icons/md'
import './index.css'

const PlayListSection = props => {
  const {songsDetails, deleteSongsInList} = props
  const {imageUrl, name, genre, duration, id} = songsDetails

  const onClickBtn = () => {
    deleteSongsInList(id)
  }

  return (
    <li className="songs-list-container">
      <div className="img-text-card">
        <img src={imageUrl} alt="track" className="image-song" />
        <div className="text-content-card">
          <h1 className="songs-heading">{name}</h1>
          <p className="songs-paragraph">{genre}</p>
        </div>
      </div>
      <div className="duration-btn">
        <p className="duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="btn"
          onClick={onClickBtn}
        >
          <MdDelete size="20" />
        </button>
      </div>
    </li>
  )
}

export default PlayListSection
