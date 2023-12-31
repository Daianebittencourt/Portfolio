import styled, {css} from 'styled-components';

import {Home, Notifications, Email, FavoriteBorder, Person, ExitToApp} from '../../styles/Icons'
import { Favorite } from 'styled-icons/material-outlined';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px){
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  width: 41px;
  height: 41px;
  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  >span{
    display: none;  
  }

  @media (min-width: 1280px){
    >span{
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;
  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child{
    margin-top: 33px;
    width: 40px;
    height: 40px;

    >span{
      display: none;
    }

    @media (min-width: 1280px){
      width: 100%;
      height: unset;

      >span{
        display: inline;
        cursor: pointer;
      }

    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover, &.active{
    span, svg{
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const IconCSS = css`
flex-shrink: 0;
width: 30px;
height: 30px;
color: var(--white)
`;

export const HomeIcon = styled(Home)`
  ${IconCSS}
`;

export const BellIcon = styled(Notifications)`
${IconCSS}
`;

export const EmailIcon = styled(Email)`
${IconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
${IconCSS}
`;

export const ProfileIcon = styled(Person)`
${IconCSS}
`;

export const BotSide = styled.div`
margin-top: 20px;
display: flex;
align-items: center;

`;

export const Avatar = styled.img`
width: 39px;
height: 39px;
flex-shrink: 0;
border-radius: 50%;
background-color: var(--gray);

`;

export const ProfileData = styled.div`
display: none;

@media(min-width: 1280px){
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  font-size:14px;
>span{
  color: var(--gray)
}
}
`;
/* 
export const TopSider = styled.div`

`; */


export const ExitIcon = styled(ExitToApp)`
display: none;
@media (min-width: 1280px){
  display: inline-block;
  width: 25px;
  height: 25px;
  color: var(--white);
  margin-left: 30px;
  cursor: pointer;
  &:hover{
    >path{
      color: var(--like);
    }
  }
}
`;
