import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Spacer from "../components/Spacer";
import Layout from "../components/Layout";
import theme from "../config/theme";
import Text from "../components/Text";
import Img from 'gatsby-image'

const TitleContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  @media (${theme.breakpoints.mediumAndUp}) {
    justify-content: flex-start;
  } ;
`;

const Divider = styled.div`
  width: 70px;
  height: 7.5px;
  background: ${theme.colors.primary100};
  margin: 0 auto;
  @media (${theme.breakpoints.mediumAndUp}) {
    margin: 0;
  } ;
`;

const BackText = styled(Text)`
  width: 100%;
  @media (${theme.breakpoints.mediumAndUp}) {
    text-align: left;
  } ;
`;

const BlogTitle = styled(Text)`
  width: 100%;
  @media (${theme.breakpoints.mediumAndUp}) {
    text-align: left;
  } ;
`;

const BodyStyles = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
    @media (${theme.breakpoints.mediumAndUp}) {
      text-align: left;
    }
  }

  h1 {
    font-size: ${theme.fontScale.x5};
    font-weight: ${theme.fontWeight.medium};
    margin-top: 2rem;
  }
  h2 {
    font-size: ${theme.fontScale.x4};
    font-weight: ${theme.fontWeight.medium};
  }
  h3 {
    font-size: ${theme.fontScale.x2};
    font-weight: ${theme.fontWeight.light};
    color: ${theme.colors.grey30};
  }

  li,p {
    font-size: 1.125rem;
    font-weight: ${theme.fontWeight.normal};
    color: rgba(68, 68, 68);
    line-height: 1.6;
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
  img {
    width: 100%;
  }
`;
export default function BlogPost({ data }) {
  return (
    <Layout>
      <Img fluid={data.mdx.frontmatter.featureImage.childImageSharp.fluid} />
      <Spacer height="x8" />
      <BlogTitle
        tag="h1"
        size="x7"
        weight="medium"
        lineHeight={1}
        alignOnMobile={true}
      >
        {data.mdx.frontmatter.title}
      </BlogTitle>
      <Spacer height="x4" />
      <BlogTitle
        tag="h2"
        size="x4"
        weight="normal"
        lineHeight={1}
        alignOnMobile={true}
      >
        {data.mdx.frontmatter.subtitle}
      </BlogTitle>
      <Spacer height="x4" />
      <TitleContainer>
        <Text tag="p" size="x3" weight="normal" lineHeight={1.5}>
          {`by ${data.mdx.frontmatter.author}`}
        </Text>
        <Spacer width="x4" />
        <Text
          tag="h1"
          size="x3"
          color={theme.colors.primary100}
          weight="light"
          lineHeight={1.5}
        >
          {data.mdx.frontmatter.date}
        </Text>
      </TitleContainer>
      <Spacer height="x4" />
      <Divider />
      <Spacer height="x4" />
      <BodyStyles>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </BodyStyles>
      <Spacer height="x4" />
      <Link
        to="/"
        css={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      >
        <BackText
          tag="h1"
          size="x3"
          weight="normal"
          color={theme.colors.grey30}
          cursor="pointer"
          lineheight={1.5}
        >
          Back
        </BackText>
      </Link>
    </Layout>
  );
}
export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        author
        subtitle
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;
