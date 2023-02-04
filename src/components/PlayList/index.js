import {AiOutlineDelete} from 'react-icons/ai'
import {
  SongCard,
  SongImageAndName,
  SongImage,
  TrackNameAndGenre,
  TrackName,
  TrackGenre,
  DurationAndButton,
  Duration,
  DeleteButton,
} from './styledComponent'

const PlayList = props => {
  const {onDelete, trackDetails} = props
  const {id, imageUrl, name, genre, duration} = trackDetails
  const onDeleteSong = () => {
    onDelete(id)
  }
  return (
    <SongCard>
      <SongImageAndName>
        <SongImage src={imageUrl} alt="track" />
        <TrackNameAndGenre>
          <TrackName>{name}</TrackName>
          <TrackGenre>{genre}</TrackGenre>
        </TrackNameAndGenre>
      </SongImageAndName>
      <DurationAndButton>
        <Duration>{duration}</Duration>
        <DeleteButton data-testid="delete" type="button" onClick={onDeleteSong}>
          <AiOutlineDelete size={20} color="#ffffff" />
        </DeleteButton>
      </DurationAndButton>
    </SongCard>
  )
}

export default PlayList
