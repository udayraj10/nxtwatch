import styled from 'styled-components'

export const SaveList = styled.li`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`

export const SaveThumbnail = styled.img`
  width: 50%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const SaveDetailsDesktop = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 50%;

  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const SaveDetailsMobile = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 15px 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const SaveProfile = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`

export const SaveDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const SaveTitle = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};

  @media screen and (max-width: 576px) {
    font-size: 18px;
    margin-top: 0px;
  }
`

export const SavePara = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  color: #64748b;
  margin-top: 5px;
  margin-right: 15px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
    margin-right: 10px;
  }
`

export const ViewsAndPublish = styled.div`
  display: flex;
  align-items: center;
`
