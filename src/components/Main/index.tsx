import React from 'react';
import { BackIcon, BellIcon, BottomMenu, Button, Container, EmailIcon, Header, HomeIcon, ProfileInfo, SearchIcon } from './styled';
import {ProfilePage} from '../ProfilePage';

const Main: React.FC = () => {
  return(
    <Container>
      <Header>
        <Button>
          <BackIcon />
        </Button>

          <ProfileInfo>
            <strong>Daiane Bittencourt</strong>
          <span>Junior Fullstack Developer</span>
          </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
    );
}

export {Main};
