import * as React from 'react';
import {useStaticQuery, Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import Spacer from '../components/Spacer';
import Welcome from '../components/Welcome';
import BlogPosts from '../templates/BlogPosts';
import Text from '../components/Text';
import styled from 'styled-components';
import theme from '../config/theme';

// styles
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
  width: 70%;
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
  font-size: ${theme.fontScale.x4};
  font-weight: ${theme.fontWeight.medium};
  line-height: 0px;
`;

const BlogAuthor = styled.p`
  font-size: ${theme.fontScale.x2};
  font-weight: ${theme.fontWeight.light};
`;

const IndexPage = () => {
  return (
    <Layout>
      <Welcome />
      <Spacer height="x8" />
      <Spacer height="x8" />
      <BlogPosts />
    </Layout>
  );
};

export default IndexPage;
