import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #152850;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 55vh;
  background-size: cover;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 5%;
  padding-bottom: 20px;
`
export const BannerTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 48px;
  margin: 0px;
`
export const BannerSubTitle = styled.p`
  font-family: Roboto;
  font-size: 24px;
  padding-top: 10px;
  margin: 0px;
`
export const MusicPlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55vh;
  background-color: #152850;
  min-height: 45vh;
`
export const HeadingAndSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #152850;
  position: fixed;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`
export const Heading = styled.h1``
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding-right: 10px;
`
export const SearchInput = styled.input`
  background-color: transparent;
  color: #cbd5e1;
  border: none;
  outline: none;
  height: 30px;
  padding-left: 10px;
  margin-right: 10px;
`
export const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6%;
`
export const NoResults = styled.p`
  font-size: 50px;
`
export const PlayListContainer = styled.ul`
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 6%;
  overflow-y: auto;
`
