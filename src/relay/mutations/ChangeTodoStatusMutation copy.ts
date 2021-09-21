import { graphql, commitMutation } from 'react-relay';
import { Environment } from 'relay-runtime';

interface Todo {
  id: string;
}

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation ChangeTodoStatusMutation($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      title
      completed
    }
  }
`;

const commit = (environment: Environment, complete: boolean, todo: Todo) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { complete, id: todo.id },
    },
  });
};

export default commit;
