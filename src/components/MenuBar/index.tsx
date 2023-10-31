import React from 'react';
import Button from '../Button';
import { Container, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, TopSider, ExitIcon, BotSide, Avatar, ProfileData } from './styles';
import  laptop  from '../../assets/rocket-launch-bold.svg';
import perfil from '../../assets/perfil.jpg'
// import { Container } from './styles';

const MenuBar: React.FC = () => {
  return(
    <Container>
      <TopSider>
        <Logo src={laptop} />

        <MenuButton>
          <HomeIcon />
            <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
            <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
            <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
            <span>Favoritos</span>
        </MenuButton>

        <MenuButton className='active'>
          <ProfileIcon />
            <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Contact me</span>
        </Button>

      </TopSider>
      <BotSide>
        <Avatar src={perfil}/>
        <ProfileData>
          <strong>Daiane Bittencourt</strong>
          <span>Fullstack Developer</span>
        </ProfileData>
        <ExitIcon />
      </BotSide>
    </Container>
    );
}

export default MenuBar;