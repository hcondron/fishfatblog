import * as React from 'react';
import {useStaticQuery, Link, graphql} from 'gatsby';
import Spacer from '../components/Spacer';
import Text from '../components/Text';
import styled from 'styled-components';
import theme from '../config/theme';

// styles
const BlogPostContainer = styled.div`
  position: relative;
  :hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  background-color: #F8F8FF;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 45px;
  @media (${theme.breakpoints.mediumAndUp}) {
    width: 270px;
    height: 270px;
    margin: 0;
  }
`;

const BlogBoxRed = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #F8F8FF;
  border: ${theme.borderWidth} solid ${theme.colors.primary100};
`;
const BlogBoxBlack = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #F8F8FF;
  top: 0;
  right: 0;
  background-color: '#232129';
  border: ${theme.borderWidth} solid ${theme.colors.secondary100};
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
    `,
  );
  return (
    <Blogs>
      {data.allMdx.edges.map(item => {
        return (
          <Link
            to={item.node.frontmatter.slug}
            css={{textDecoration: 'none', color: 'inherit'}}>
            <BlogPostContainer>
              <BlogBoxRed />
              <BlogBoxBlack>
                <div
                  style={{
                    width: '90%',
                    padding: '5%',
                    margin: '0 auto',
                    alignSelf: 'flex-end',
                  }}>
                  <Text tag="h3" size="x4" weight="medium" lineHeight={1.5}>
                    {item.node.frontmatter.title}
                  </Text>
                  <Spacer height="x2" />
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      tag="p"
                      size="x2"
                      weight="light"
                      lineHeight={
                        1.5
                      }>{`by ${item.node.frontmatter.author}`}</Text>
                    <Text tag="p" size="x2" weight="light" lineHeight={1.5}>
                      {item.node.frontmatter.date}
                    </Text>
                  </div>
                  <Spacer height="x4" />
                  <div
                    style={{
                      width: '25px',
                      height: '7.5px',
                      backgroundColor: theme.colors.primary100,
                    }}></div>
                </div>
              </BlogBoxBlack>
            </BlogPostContainer>
          </Link>
        );
      })}
    </Blogs>
  );
};

export default BlogPosts;