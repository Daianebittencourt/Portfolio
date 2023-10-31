import styled from 'styled-components';

// import {Chat, Rocketseat ,Favorite} from '../../styles/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid #2f3336;
  
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray)
`;

export const Icon = styled.img`
  margin-left: 35px;
  margin-right:9px;
`;
export const Body = styled.div`
  display: flex ;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.img`
width: 49px;
height: 49px;
border-radius: 50%;
flex-shrink: 0;
background-color: var(--gray);
position: absolute;
top:0;
left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
  /* background-color: red; */
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

  >strong{
    margin-right: 5px;
  }

  >span, time{
color: var(--gray)
  }
  //tres pontinhos ...
  > strong, span{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px){
    width: 63%;
  }

  >img{
    cursor: pointer;
    &:hover{
      opacity: 0.7;
    }
  }
`;
export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size:14px;

  &:nth-child(1){
    color: var(--gray);
  }
  &:nth-child(2){
    color: var(--retweet);
  }
  &:nth-child(3){
    color: var(--like);
  }

  `;
export const CommentIcon = styled.img`
  margin-right: 5px;
  `;
export const RetweetIcon = styled.img`
margin-right: 5px;
`;
export const LikeIcon = styled.img`
margin-right: 5px;
`;
export const Dot = styled.div`
  background-color: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;

  `;

export const ImageContent = styled.div`
margin-top: 12px;
width: 100%;
height: min(285px, max(175px, 41vw));

background-color: var(--outline);
border-radius: 14px;

cursor: pointer;
&:hover{
  opacity: 0.7;
}
`;