import {
  CircularProgress,
  Fab,
  Grid,
  Pagination,
  Tooltip,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { QueryRenderer } from 'react-relay';
import { useState } from 'react';
import { query } from 'relay/queries/Todo';
import {
  TodoQuery,
  TodoQueryResponse,
} from 'relay/queries/__generated__/TodoQuery.graphql';
import relayEnvironment from 'relay/environment';
import ChangeTodoStatusMutation from 'relay/mutations/ChangeTodoStatusMutation';
import DeleteTodoMutation from 'relay/mutations/DeleteTodoMutation';
import CreateTodoMutation from 'relay/mutations/CreateTodoMutation';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';

const LIMIT = 9;

const TodoComponent: React.FC = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const handleSubmit = (todo: TodoInputs) => {
    CreateTodoMutation(relayEnvironment, { ...todo, completed: false });
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if (value) {
      setPage(value);
    }
  };

  const handleEdit = (todoId: string) => () => {
    ChangeTodoStatusMutation(relayEnvironment, true, todoId);
  };

  const handleDelete = (todoId: string) => () => {
    DeleteTodoMutation(relayEnvironment, { id: todoId });
  };

  const queryRender = ({ props }: RenderQueryProps<TodoQueryResponse>) => {
    if (!props) {
      return (
        <CircularProgress
          style={{
            textAlign: 'center',
          }}
        />
      );
    }

    const totalTodos = props.todos?.meta?.totalCount || 0;
    const todos = props.todos?.data!;

    return (
      <>
        <TodoList
          data={todos}
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
        environment={relayEnvironment}
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
      <Tooltip title="New Todo">
        <Fab
          color="primary"
          sx={{ position: 'fixed', bottom: '5%', right: '5%' }}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <TodoForm open={open} onClose={handleClose} onSubmit={handleSubmit} />
    </Grid>
  );
};

export default TodoComponent;
