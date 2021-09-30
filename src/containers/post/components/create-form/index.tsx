import { Button, DialogContent, DialogActions, Grid } from '@mui/material';
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form';
import MyInput from 'components/my-input';
import MyDialog from 'components/my-dialog';

type PostFormProps = {
  open: boolean;
  onSubmit: SubmitHandler<PostInputs>;
  onClose: React.MouseEventHandler;
};

const initialValues: DefaultValues<PostInputs> = {
  title: '',
  body: '',
};

const PostForm: React.FC<PostFormProps> = ({ open, onSubmit, onClose }) => {
  const { handleSubmit, control } = useForm<PostInputs>({
    defaultValues: initialValues,
  });

  return (
    <MyDialog title="New post" open={open} onClose={onClose} fullWidth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={1} flexDirection="column">
            <Grid item>
              <MyInput
                autoFocus
                fullWidth
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
            <Grid item>
              <MyInput
                fullWidth
                multiline
                type="text"
                name="body"
                label="Body"
                control={control}
                rows={3}
                margin="normal"
                rules={{
                  required: 'Please fill in the Body field',
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

export default PostForm;
