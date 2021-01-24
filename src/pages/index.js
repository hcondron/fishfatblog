import * as React from 'react';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import styled from 'styled-components';
import theme from '../config/theme';

// styles
const pageStyles = {
  color: '#232129',
  margin: '0 auto',
  maxWidth: '900px',
  fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
};
const WelcomeText = styled.h1`
  font-size: ${theme.fontScale.x7};
  color: ${theme.colors.secondary100};
  font-weight: ${theme.fontWeight.semibold};
  line-height: 0px;
  position: relative;
`;

const Border = styled.div`
  height: 10px;
  width: ${({width}) => width};
  background-color: ${theme.colors.primary100};
  bottom: 10px;
  position: absolute;
`;

const WelcomeTextContainer = styled.div`
  position: absolute;
`;

const SubText = styled.h3`
  font-size: ${theme.fontScale.x5};
  font-weight: ${theme.fontWeight.light};
  line-height: 0px;
`;

const AuthorText = styled.h4`
  font-size: ${theme.fontScale.x4};
  font-weight: ${theme.fontWeight.light};
  color: ${({color}) => color};
  line-height: 0px;
`;

const BlogPostContainer = styled.div`
  position: relative;
  :hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  width: 270px;
  height: 270px;
  margin-bottom: 45px;
`;

const BlogBoxRed = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: '#232129';
  border: ${theme.borderWidth} solid ${theme.colors.primary100};
`;
const BlogBoxBlack = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  right: 0;
  background-color: '#232129';
  border: ${theme.borderWidth} solid ${theme.colors.secondary100};
`;

const Blogs = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TitleText = styled.h3`
  font-size: ${theme.fontScale.x5};
  font-weight: ${theme.fontWeight.medium};
`;

const BlogAuthor = styled.p`
  font-size: ${theme.fontScale.x3};
  font-weight: ${theme.fontWeight.light};
`;

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Header />
      <Spacer height="x8" />
      <Spacer height="x8" />
      <WelcomeTextContainer>
        <Border width="400px" />
        <WelcomeText> WELCOME TO </WelcomeText>
      </WelcomeTextContainer>
      <Spacer height="x8" />
      <Spacer height="x8" />
      <Spacer height="x2" />
      <WelcomeTextContainer>
        <Border width="250px" />
        <WelcomeText> FISH FAT</WelcomeText>
      </WelcomeTextContainer>
      <Spacer height="x8" />
      <Spacer height="x8" />
      <SubText>Unravelling the mysteries of this pale blue dot, </SubText>
      <SubText>one blog post at a time.</SubText>
      <div style={{display: 'flex'}}>
        <AuthorText color={theme.colors.secondary100}>by</AuthorText>
        <Spacer width="x1" />
        <AuthorText color={theme.colors.primary100} style={{cursor: 'pointer'}}>
          @harcon_
        </AuthorText>
      </div>
      <Spacer height="x8" />
      <Blogs>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
          return (
            <BlogPostContainer>
              <BlogBoxRed />
              <BlogBoxBlack>
                <div
                  style={{
                    padding: '5%',
                    margin: '0 auto',
                    alignSelf: 'flex-end',
                  }}>
                  <TitleText>
                    Learning GoLang by building cool shite and stuff
                  </TitleText>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <BlogAuthor>by Harry Condron</BlogAuthor>
                    <BlogAuthor>02.03.21</BlogAuthor>
                  </div>
                  <div
                    style={{
                      width: '25px',
                      height: '7.5px',
                      backgroundColor: theme.colors.primary100,
                    }}></div>
                </div>
              </BlogBoxBlack>
            </BlogPostContainer>
          );
        })}
      </Blogs>
    </main>
  );
};

export default IndexPage;