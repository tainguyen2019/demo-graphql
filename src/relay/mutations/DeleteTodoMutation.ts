import { commitMutation } from 'react-relay';
import { Environment } from 'relay-runtime';
import { graphql } from 'babel-plugin-relay/macro';

interface Todo {
  id: string;
}

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation DeleteTodoMutation($id: ID!) {
    deleteTodo(id: $id)
  }
`;

const commit = (environment: Environment, todo: Todo) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      id: todo.id,
    },
  });
};

export default commit;
