import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: yellowgreen;
  }
`;

export const Button2 = styled.button`
  padding: 10px 20px;
  margin-top: 300px;
  margin-right: 50px;
  width: 30px;
  height: 40px;
  font-size: 16px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const Li = styled.li`
  padding: 18px;
  border: 1px solid yellowgreen;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  background-image: url('/배경.jpg');
  background-size: cover;
  background-position: center center;
`;

export const LeftContainer = styled.div`
  text-align: center;
  flex: 1;
`;

export const SearchInput = styled.input`
  text-align: center;
  margin-right: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
`;

export const MarkerContentContainer = styled.div`
  background-color: transparent;
  text-align: center;
  align-items: center;
  display: flex;
`;
export const MarkerContent = styled.div`
  /* margin-top: 30px; */
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ThumbnailImage = styled.img`
  /* width: 100px;
  height: 100px;
  margin: 5px; */
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 12px;
`;

export const MapContainer = styled.div`
  width: 60%;
  height: 800px;
`;

export const ContentWrapper = styled.div`
  background-color: transparent;
  padding: 20px;
`;

export const StyledUl = styled.ul`
  height: 760px;
  overflow-y: hidden; /* 숨김 */
  scrollbar-width: none; /* Firefox 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE/Edge 스크롤바 숨김 */

  /* Webkit 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none;
  }
  /* 마우스 오버시 스크롤 표시  */
  &:hover {
    overflow-y: scroll;
  }
`;

export const StyledIframe = styled.iframe`
  width: 900px;
  height: 800px;
  overflow-y: hidden;
`;
