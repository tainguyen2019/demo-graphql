import { commitMutation } from 'react-relay';
import { Environment } from 'relay-runtime';
import { graphql } from 'babel-plugin-relay/macro';

interface Post {
  id: string;
}

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation UpdatePostMutation($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

const commit = (environment: Environment, post: Post, body?: string) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      id: post.id,
      input: { body },
    },
  });
};

export default commit;
