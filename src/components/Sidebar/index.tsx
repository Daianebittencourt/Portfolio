import React from 'react';
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import StickyBox from 'react-sticky-box';

const Sidebar: React.FC = () => {
  return (
  <Container>
    <SearchWrapper>
      <SearchInput placeholder="buscar no Twitter" />
      <SearchIcon />
    </SearchWrapper>
    <StickyBox>
    <Body>
     <List 
     title="Talvez você curta"
     elements={[
     <FollowSuggestion 
     name= 'Thalyta Campos'
     nickname= '@thalyta'
     />,
     <FollowSuggestion 
     name= 'Thalyta Campos'
     nickname= '@thalyta'
     />
    ]}
     />
      <List 
     title="Talvez você curta"
     elements={[
     <News />,
     <News />,
     <News />
    ]}
     />
      <List 
     title="Talvez você curta"
     elements={[
     <News />,
     <News />,
     <News />
    ]}
     />
      <List 
     title="Talvez você curta"
     elements={[
     <News />,
     <News />,
     <News />
    ]}
     />
      <List 
     title="Talvez você curta"
     elements={[
     <News />,
     <News />,
     <News />
    ]}
     />
    </Body>
    </StickyBox>
  </Container>
    );
}

export default Sidebar;