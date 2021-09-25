import { QueryRenderer } from 'react-relay';
import { useState } from 'react';
import { query } from 'relay/queries/Todo';
import {
  TodoQuery,
  TodoQueryResponse,
} from 'relay/queries/__generated__/TodoQuery.graphql';
import RelayEnvironment from 'relay/RelayEnvironment';
import ChangeTodoStatusMutation from 'relay/mutations/ChangeTodoStatusMutation';
import TodoList from './components/todo-list';
import { CircularProgress, Grid, Pagination } from '@mui/material';
import DeleteTodoMutation from 'relay/mutations/DeleteTodoMutation';

type TodoQueryRender = {
  props: TodoQueryResponse | null;
  error: Error | null;
};

const LIMIT = 9;

const TodoComponent: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalTodos, setTotalTodos] = useState(0);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleEdit = (todoId: string) => () => {
    ChangeTodoStatusMutation(RelayEnvironment, true, { id: todoId });
  };

  const handleDelete = (todoId: string) => () => {
    DeleteTodoMutation(RelayEnvironment, { id: todoId });
  };

  const queryRender = ({ props }: TodoQueryRender) => {
    if (props) {
      setTotalTodos(props.todos?.meta?.totalCount!);

      return (
        <>
          <TodoList
            store={props}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />

          {totalTodos > 0 && (
            <Grid item container justifyContent="center" xs={12} marginTop={1}>
              <Pagination
                page={page}
                count={Math.ceil(totalTodos / LIMIT)}
                onChange={handleChangePage}
                variant="outlined"
                color="primary"
              />
            </Grid>
          )}
        </>
      );
    }

    return (
      <CircularProgress
        style={{
          textAlign: 'center',
        }}
      />
    );
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={1}
      marginY={1}
      padding={1}
    >
      <QueryRenderer<TodoQuery>
        environment={RelayEnvironment}
        query={query}
        variables={{
          options: {
            paginate: {
              page,
              limit: LIMIT,
            },
          },
        }}
        render={queryRender}
      />
    </Grid>
  );
};

export default TodoComponent;
