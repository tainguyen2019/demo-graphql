import { Grid } from '@mui/material';
import { TodoQueryResponse } from 'relay/queries/__generated__/TodoQuery.graphql';
import TodoItem from '../todo-item';

type TodoListProps = {
  store: TodoQueryResponse;
  handleEdit: (Id: string) => VoidFunction;
  handleDelete: (Id: string) => VoidFunction;
};

const TodoList: React.FC<TodoListProps> = ({
  store,
  handleEdit,
  handleDelete,
}) => {
  const todos = store.todos?.data!;
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="stretch">
      {todos.map((todo) => (
        <TodoItem
          item={todo}
          handleEdit={handleEdit}
          key={todo?.id}
          handleDelete={handleDelete}
        />
      ))}
    </Grid>
  );
};

export default TodoList;
