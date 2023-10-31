import React from 'react';

import {Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Folloowage, EditButton, Hello } from './styles';
import Feed from '../Feed';
import perfil from '../../assets/perfil.jpg'
import hello from '../../assets/heloo.png'
const ProfilePage: React.FC = () => {
  return (
  <Container>
    <Banner>
      <Hello src={hello} />
      <Avatar src={perfil} />
    </Banner>
    <ProfileData>
      <EditButton outlined>GitHub</EditButton>
    <h1>Daiane Bittencourt </h1>
    <h2>Junior Fullstack Developer</h2>
    <p>Fullstack Developer at <a href="https://www.linkedin.com/company/ubicua-cloud/">@UbicuaCloud</a> | Follow me on LinkedIn <a href="https://www.linkedin.com/in/daianebittencourtdasilva/">@DaianeBittencourt</a>
    {/* </p>
      <p> */}
    </p>
    <ul>
      <li>
        <LocationIcon />
        São Paulo, Brasil
      </li>
      <li>
        <CakeIcon />
        Born October 2, 2000
      </li>
    </ul>
    <Folloowage>
      <span>seguindo <strong>94</strong> 
      </span>
      <span>
         <strong>500</strong> seguidores
      </span>
    </Folloowage>
    </ProfileData>
    <Feed />
  </Container>
    );
}

export {ProfilePage};