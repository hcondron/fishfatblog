import * as React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Spacer from "../components/Spacer";
import Text from "../components/Text";
import styled from "styled-components";
import theme from "../config/theme";

// styles
const BlogPostContainer = styled.div`
  position: relative;
  :hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  background-color: #f8f8ff;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 45px;
  @media (${theme.breakpoints.mediumAndUp}) {
    width: 600px;
    margin-bottom: 60px;
  }
`;

const BlogBoxRed = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #f8f8ff;
  border: ${theme.borderWidth} solid ${theme.colors.primary100};
`;
const BlogBoxBlack = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f8f8ff;
  top: 0;
  right: 0;
  flex-direction: column;
  background-color: "#232129";
  border: ${theme.borderWidth} solid ${theme.colors.secondary100};
  @media (${theme.breakpoints.mediumAndUp}) {
    flex-direction: row;
  }
`;

const BlogPostImage = styled.img`
  height: 100%;
  width: 100%;
`;

const Blogs = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  @media (${theme.breakpoints.mediumAndUp}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  padding: 2%;
  padding-right: 2.5%;
  height: 70%;
  width: 100%;
  box-sizing: border-box;
  @media (${theme.breakpoints.mediumAndUp}) {
    width: 70%;
    height: 100%;
  }
`;

const BlogDescContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  padding-top: 0;
  padding-bottom: 2%;
  padding-right: 2%;
  margin: 0 auto;
  padding-left: 2%;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  @media (${theme.breakpoints.mediumAndUp}) {
    width: 30%;
    height: 100%;
    padding-top: 2%;
    padding-left: 0;
  }
`;

const AuthorAndDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (${theme.breakpoints.mediumAndUp}) {
    flex-direction: column;
  }
`;

const BlogTitleContainer = styled.div`
  width: 95%;
  @media (${theme.breakpoints.mediumAndUp}) {
    width: 100%;
  }
`;

const BoxGraphic = styled.div`
  display: none;
  width: 25px;
  height: 7.5px;
  background-color: ${theme.colors.primary100};
  @media (${theme.breakpoints.mediumAndUp}) {
    display: flex;
  }
`;

const BlogPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                date
                slug
                excerpt
                title
                author
              }
            }
          }
        }
      }
    `
  );
  return (
    <Blogs>
      {data.allMdx.edges.map((item) => {
        return (
          <Link
            to={item.node.frontmatter.slug}
            css={{ textDecoration: "none", color: "inherit" }}
          >
            <BlogPostContainer>
              <BlogBoxRed />
              <BlogBoxBlack>
                <ImageContainer>
                  <BlogPostImage src="https://epsilon.psyche.co/images/ea9b484b-2dff-4bf9-b47b-250c1bef659e/1500x1500.jpg" />
                </ImageContainer>
                <BlogDescContainer>
                  <BlogTitleContainer>
                    <Text tag="h3" size="x3" weight="medium" lineHeight={1.25}>
                      {item.node.frontmatter.title}
                    </Text>
                  </BlogTitleContainer>
                  <AuthorAndDateContainer>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text tag="p" size="x2" weight="light" lineHeight={1.2}>
                          by
                        </Text>
                        <Spacer width="x1" />
                        <Text
                          tag="p"
                          size="x2"
                          weight="normal"
                          color={theme.colors.primary100}
                          lineHeight={1.5}
                        >
                          {item.node.frontmatter.author}
                        </Text>
                      </div>
                    </div>
                    <Spacer height="x2" />
                    <Text tag="p" size="x2" weight="normal" lineHeight={1.2}>
                      {item.node.frontmatter.date}
                    </Text>
                    <Spacer height="x4" />
                    <BoxGraphic />
                  </AuthorAndDateContainer>
                </BlogDescContainer>
              </BlogBoxBlack>
            </BlogPostContainer>
          </Link>
        );
      })}
    </Blogs>
  );
};

export default BlogPosts;
