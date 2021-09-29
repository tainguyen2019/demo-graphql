import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { Done as DoneIcon, Pending as PendingIcon } from '@mui/icons-material';

type TodoItemProps = {
  item: Todo;
  handleEdit?: (Id: string) => VoidFunction;
  handleDelete?: (Id: string) => VoidFunction;
  hideActions?: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  handleEdit,
  handleDelete,
  hideActions,
}) => {
  return (
    <Grid
      item
      component={Card}
      xs={4}
      md={3}
      sx={{
        display: 'flex',
        height: 'auto',
        flexDirection: 'column',
        padding: 2,
        margin: 1,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">{item?.user?.name}</Typography>
          {item?.completed && (
            <Chip
              label="Done"
              variant="outlined"
              color="success"
              icon={<DoneIcon />}
            />
          )}
          {!item?.completed && (
            <Chip
              label="Pending"
              variant="outlined"
              color="secondary"
              icon={<PendingIcon />}
            />
          )}
        </Box>

        <Typography sx={{ marginTop: 2 }}>{item?.title}</Typography>
      </CardContent>
      {!hideActions && (
        <CardActions>
          <Grid container justifyContent="space-around">
            {!item?.completed && (
              <Grid
                item
                xs={5}
                component={Button}
                onClick={handleEdit!(item?.id!)}
                variant="outlined"
              >
                Complete
              </Grid>
            )}
            <Grid
              item
              xs={5}
              component={Button}
              onClick={handleDelete!(item?.id!)}
              variant="outlined"
              color="secondary.main"
              borderColor="secondary.main"
            >
              Delete
            </Grid>
          </Grid>
        </CardActions>
      )}
    </Grid>
  );
};

export default TodoItem;
