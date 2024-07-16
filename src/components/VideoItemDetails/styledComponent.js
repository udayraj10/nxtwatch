import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin-left: 20%;

  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`

export const VideoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  padding: 20px;
  margin-top: 80px;

  @media screen and (max-width: 767px) {
    padding: 0px;
  }
`

export const VideoPlayer = styled.div`
  height: 80%;

  @media screen and (max-width: 576px) {
    height: 40%;
  }
`

export const VideoDetails = styled.div`
  padding: 10px;

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`

export const ViewLikeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ViewSection = styled.div`
  display: flex;
  align-items: center;
`

export const VideoPara = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  color: #64748b;
  margin-right: 15px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const LikeButton = styled.button`
  background-color: transparent;
  font-family: 'roboto';
  font-size: 16px;
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: 15px;
`

export const DislikeButton = styled(LikeButton)`
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
`

export const SaveButton = styled(LikeButton)`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }
`

export const ProfileName = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  margin-top: 0;
  margin-bottom: 0px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const SubscriberCount = styled.p`
  font-family: 'roboto';
  font-size: 14px;
  color: #64748b;
  margin-top: 5px;
`

export const Description = styled.p`
  font-family: 'roboto';
  font-size: 14px;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
  margin-top: 5px;
`

export const LoaderContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FailureSection = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const FailureImage = styled.img`
  width: 400px;

  @media screen and (max-width: 576px) {
    width: 300px;
  }
`

export const FailureHead = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`

export const FailurePara = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => (props.isDark ? '#fff' : '#475569')};
  margin: 5px;

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  height: 40px;
  width: 80px;
  font-family: 'roboto';
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`
