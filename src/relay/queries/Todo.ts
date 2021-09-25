import { graphql } from 'babel-plugin-relay/macro';

// Define a query
export const query = graphql`
  query TodoQuery($options: PageQueryOptions) {
    todos(options: $options) {
      data {
        id
        title
        completed
        user {
          name
        }
      }
      meta {
        totalCount
      }
    }
  }
`;
