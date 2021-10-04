import { Button, DialogContent, DialogActions, Grid } from '@mui/material';
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form';
import MyInput from 'components/common/my-input';
import MyDialog from 'components/common/my-dialog';

type TodoFormProps = {
  open: boolean;
  onSubmit: SubmitHandler<TodoInputs>;
  onClose: React.MouseEventHandler;
};

const initialValues: DefaultValues<TodoInputs> = {
  title: '',
};

const TodoForm: React.FC<TodoFormProps> = ({ open, onSubmit, onClose }) => {
  const { handleSubmit, control } = useForm<TodoInputs>({
    defaultValues: initialValues,
  });

  return (
    <MyDialog title="New Todo" open={open} onClose={onClose} fullWidth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={1} flexDirection="column">
            <Grid item>
              <MyInput
                autoFocus
                fullWidth
                multiline
                rows={3}
                type="text"
                name="title"
                label="Title"
                control={control}
                margin="normal"
                rules={{
                  required: 'Please fill in the Title field',
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container justifyContent="flex-end" spacing={2} margin={2}>
            <Grid item>
              <Button onClick={onClose} color="secondary" variant="outlined">
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button type="submit" color="primary" variant="outlined">
                Submit
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </form>
    </MyDialog>
  );
};

export default TodoForm;
