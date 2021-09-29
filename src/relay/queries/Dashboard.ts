import { graphql } from 'babel-plugin-relay/macro';

// Define a query
export const query = graphql`
  query DashboardQuery($options: PageQueryOptions) {
    todoData: todos(options: $options) {
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
    postData: posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
    photoData: photos(options: $options) {
      data {
        id
        title
        url
      }
      meta {
        totalCount
      }
    }
    albumData: albums(options: $options) {
      meta {
        totalCount
      }
    }
  }
`;
