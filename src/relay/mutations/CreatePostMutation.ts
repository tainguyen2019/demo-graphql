import { commitMutation } from 'react-relay';
import { Environment } from 'relay-runtime';
import { graphql } from 'babel-plugin-relay/macro';

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const commit = (environment: Environment, post: PostInputs) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { title: post.title, body: post.body },
    },
  });
};

export default commit;
