import React from 'react';
import { Body, Avatar, CommentIcon, Container, Content, Description, Dot, Header, Icons, LikeIcon, RetweetIcon, Retweeted, Status, Icon, ImageContent } from './styles';
// import { Avatar } from '../ProfilePage/styles';
import arrows from '../../assets/arrows-clockwise-fill.svg';
import retweet from '../../assets/arrows-clockwise-fill (1).svg';
import chat from '../../assets/chat-circle-dots-bold.svg';
import fav from '../../assets/heart-fill.svg'
import perfil from '../../assets/perfil.jpg'

// import { Container } from './styles';

const Tweet: React.FC = () => {
  return (
  <Container>
    <Retweeted>
      <Icon src={arrows}/>
      Você retweetou
    </Retweeted>
    <Body>
      <Avatar src={perfil} />
      <Content>
        <Header>
        <strong>Daiane Bittencourt</strong>
        <span>@daiane</span>
        <Dot />
        <time>27 de out</time>
        </Header>
        <Description>Pra cimaaaaa</Description>
      <ImageContent/>
      <Icons>
        <Status>
          <CommentIcon src={chat} />
          18
        </Status>
        <Status>
          <RetweetIcon src={retweet} />
          30
        </Status>
        <Status>
          <LikeIcon src={fav} />
          999
        </Status>
      </Icons>
      </Content>
    </Body>
  </Container>
    );
}

export {Tweet};