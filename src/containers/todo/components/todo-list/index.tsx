import { Grid } from '@mui/material';
import TodoItem from '../todo-item';

type TodoListProps = {
  data: ReadonlyArray<Todo>;
  handleEdit?: (Id: string) => VoidFunction;
  handleDelete?: (Id: string) => VoidFunction;
  hideActions?: boolean;
};

const TodoList: React.FC<TodoListProps> = ({ data, ...props }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="stretch">
      {data.map((todo) => (
        <TodoItem item={todo} key={todo?.id} {...props} />
      ))}
    </Grid>
  );
};

export default TodoList;
