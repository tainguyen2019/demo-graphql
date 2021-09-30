import { commitMutation } from 'react-relay';
import { Environment } from 'relay-runtime';
import { graphql } from 'babel-plugin-relay/macro';

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation CreateTodoMutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      completed
    }
  }
`;

const commit = (environment: Environment, todo: TodoInputs) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      input: todo,
    },
  });
};

export default commit;
