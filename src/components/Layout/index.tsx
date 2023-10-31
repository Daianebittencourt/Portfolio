import React from 'react';
import { Container, Wrapper } from './styles';
import { Main } from '../Main';
import Sidebar from '../Sidebar';

import MenuBar from '../MenuBar';

// import { Container } from './styles';

const Layout: React.FC = () => {
  return(
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}

export {Layout};