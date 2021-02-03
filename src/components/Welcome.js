import * as React from 'react';
import Spacer from '../components/Spacer';
import Text from '../components/Text';
import styled from 'styled-components';
import theme from '../config/theme';

// styles
const Border = styled.div`
  height: 10px;
  width: 115%;
  background-color: ${theme.colors.primary100};
  bottom: 12.5px;
  position: absolute;
`;

const WelcomeTextContainer = styled.div`
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
`;

const SubText = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  @media (${theme.breakpoints.mediumAndUp}) {
    width: 85%;
    justify-content: flex-start;
    text-align: left;
  } ;
`;

const AuthorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (${theme.breakpoints.mediumAndUp}) {
    justify-content: left;
  } ;
`;

const MobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  @media (${theme.breakpoints.mediumAndUp}) {
    justify-content: flex-start;
    align-self: flex-start;
  } ;
`;

const Welcome = () => {
  return (
    <>
      <MobileWrapper>
        <WelcomeTextContainer>
          <Border width="400px" />
          <Text
            tag="h1"
            size="x7"
            weight="semibold"
            lineHeight={1.5}
            style={{position: 'relative'}}>
            {' '}
            WELCOME TO{' '}
          </Text>
        </WelcomeTextContainer>
      </MobileWrapper>
      <Spacer height="x8" />
      <Spacer height="x8" />
      <MobileWrapper>
        <WelcomeTextContainer>
          <Border width="250px" />
          <Text
            tag="h1"
            size="x7"
            align="center"
            weight="semibold"
            lineHeight={1.5}
            style={{position: 'relative'}}>
            FISH FAT
          </Text>
        </WelcomeTextContainer>
      </MobileWrapper>
      <Spacer height="x8" />
      <Spacer height="x8" />
      <Spacer height="x8" />
      <SubText>
        <Text tag="h3" size="x5" weight="light">
          Learning more about our pale blue dot, <br></br> one story at a time.
        </Text>
      </SubText>
      <Spacer height="x4" />
      <AuthorContainer style={{display: 'flex', width: '100%'}}>
        <Text tag="h4" size="x4" weight="light">
          by
        </Text>
        <Spacer width="x1" />
        <Text
          tag="a"
          href="https://twitter.com/_harcon"
          size="x4"
          weight="light"
          style={{textDecoration: 'none'}}
          color={theme.colors.primary100}
          cursor="pointer">
          @_harcon
        </Text>
      </AuthorContainer>
    </>
  );
};

export default Welcome;
