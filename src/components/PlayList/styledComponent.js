import styled from 'styled-components'

export const SongCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SongImageAndName = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`
export const SongImage = styled.img`
  width: 200px;
  margin-right: 20px;
`
export const TrackNameAndGenre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const TrackName = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
`
export const TrackGenre = styled.p`
  font-size: 22px;
  color: #3b82f6;
  margin: 0px;
  padding-top: 10px;
`
export const DurationAndButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  font-size: 24px;
  margin-right: 20px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
