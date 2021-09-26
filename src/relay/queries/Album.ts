import { graphql } from 'babel-plugin-relay/macro';

// Define a query
export const query = graphql`
  query AlbumQuery($options: PageQueryOptions) {
    albums(options: $options) {
      data {
        id
        title
        photos {
          data {
            title
            url
          }
        }
      }
      meta {
        totalCount
      }
    }
  }
`;
