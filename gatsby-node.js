exports.createPages = async ({actions, graphql}) => {
  const {data} = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);

  //create pages for posts
  data.allMdx.edges.forEach((item, idx) => {
    actions.createPage({
      path: item.node.frontmatter.slug,
      component: require.resolve('./src/templates/BlogPost.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: item.node.id,
      },
    });
  });
};
