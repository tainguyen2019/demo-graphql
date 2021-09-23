import { graphql } from 'babel-plugin-relay/macro';

// Define a query
export const query = graphql`
  query PostQuery($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;
