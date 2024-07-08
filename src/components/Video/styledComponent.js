import styled from 'styled-components'

export const VideoList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: auto;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 48%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 0;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 15px 10px;
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileTitle = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  margin-top: 0;
`

export const ProfilePara = styled.p`
  font-family: 'roboto';
  font-size: 14px;
  color: #64748b;
  margin-top: 5px;
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    margin-right: 10px;
  }
`

export const ViewsAndPublish = styled.div`
  display: flex;
  align-items: center;
`
