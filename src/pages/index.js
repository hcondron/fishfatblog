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
