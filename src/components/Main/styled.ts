import styled, {css} from 'styled-components';

import {ArrowLeft, Home, Search, Notifications, Email } from '../../styles/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

@media (min-width: 500px) {
border-left: 1px solid var(--gray);
border-right: 1px solid var(--gray);
/* border-color: #7a7a7a; */
}

  /* background-color: red; */
`;

export const Header = styled.div`
z-index: 2;
  position:  sticky;
  top: 0;
  background-color: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

`;

export const Button = styled.button`
  padding: 8px;
  border-radius: 50%;

  outline: 0;
  cursor: pointer;

  &:hover{
  background-color: var(--twitter-dark-hover);
  border-radius: 50%; 

}
`;



export const ProfileInfo = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;

  > strong {
    font: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const BottomMenu = styled.div`
position: fixed;
bottom: 0;
left: 0;
z-index: 2;

display: flex;
justify-content: space-between;

padding: 8px min(46px, max(10vw, 10px));

background-color: var(--primary);
width: 100%;
border-top: 1px solid var(--outline);

@media (min-width: 500px) {
  display: none;
}
`;

export const iconCSS = css`
width: 31px;
height: 31px;

cursor: pointer;

fill: var(--gray);

&:hover,
&.active{
fill: var(--twitter);
}

`;

export const HomeIcon = styled(Home)`${iconCSS}`;

export const SearchIcon = styled(Search)`${iconCSS}`;

export const BellIcon = styled(Notifications)`${iconCSS}`;
export const EmailIcon = styled(Email)`${iconCSS}`;


