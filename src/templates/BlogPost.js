import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Spacer from '../components/Spacer';
import Layout from '../components/Layout';
import theme from '../config/theme';

const BlogTitle = styled.h1`
  font-size: ${theme.fontScale.x7};
  font-weight: ${theme.fontWeight.medium};
  line-height: 0px;
  width: 60%;
`;

const DateText = styled.h1`
  font-size: ${theme.fontScale.x4};
  font-weight: ${theme.fontWeight.light};
  color: ${theme.colors.primary100};
`;

const TitleContainer = styled.div`
  display: flex;
  vertical-align: top;
  width: 100%;
  justify-content: space-between;
`;
const AuthorText = styled.p`
  font-size: ${theme.fontScale.x5};
  line-height: 0px;
  font-weight: ${theme.fontWeight.light};
`;

const Divider = styled.div`
  width: 70px;
  height: 7.5px;
  background: ${theme.colors.primary100};
`;

const BackButton = styled.h1`
  color: ${theme.colors.grey30};
  font-size: ${theme.fontScale.x3};
  font-weight: ${theme.fontWeight.normal};
`;

const BodyStyles = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${theme.colors.secondary100};
  }

  h1 {
    font-size: ${theme.fontScale.x5};
    font-weight: ${theme.fontWeight.medium};
    line-height: 15px;
    margin-top: 2rem;
  }
  h2 {
    font-size: ${theme.fontScale.x4};
    font-weight: ${theme.fontWeight.normal};
    line-height: 7.5px;
  }
  h3 {
    font-size: ${theme.fontScale.x3};
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.grey30};
    line-height: 5px;
  }

  p {
    font-size: ${theme.fontScale.x3};
    font-weight: ${theme.fontWeight.normal};
  }

  strong {
    font-weight: ${theme.fontWeight.bold};
  }
  em {
    font-style: italic;
  }
  ul,
  ol {
    font-size: ${theme.fontScale.x4};
    font-weight: ${theme.fontWeight.normal};
  }
  hr {
    border: 0;
    height: 2px;
    background: ${theme.colors.grey30};
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 60%;
  }
  iframe {
    width: 100%;
    height: 490px;
    border: none;
    box-sizing: border-box;
  }
`;
export default function BlogPost({data}) {
  return (
    <Layout>
      <BackButton>Back</BackButton>
      <TitleContainer>
        <BlogTitle>{data.mdx.frontmatter.title}</BlogTitle>
        <DateText>{data.mdx.frontmatter.date}</DateText>
      </TitleContainer>
      <AuthorText>{`by ${data.mdx.frontmatter.author}`}</AuthorText>
      <Spacer height="x2" />
      <Divider />
      <Spacer height="x4" />
      <BodyStyles>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </BodyStyles>
    </Layout>
  );
}
export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date
        author
        excerpt
        slug
        title
      }
      body
    }
  }
`;
