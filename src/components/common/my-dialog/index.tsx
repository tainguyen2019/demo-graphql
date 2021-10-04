import {
  Grid,
  DialogTitle,
  IconButton,
  Dialog,
  DialogProps,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

type MyDialogProps = {
  title: string;
  onClose: React.MouseEventHandler;
} & DialogProps;

const MyDialog: React.FC<MyDialogProps> = ({
  title,
  onClose,
  children,
  ...dialogProps
}) => {
  return (
    <Dialog {...dialogProps} onClose={onClose}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
      >
        <Grid item>
          <DialogTitle>{title}</DialogTitle>
        </Grid>
        <Grid item>
          <IconButton title="Đóng" size="medium" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      {children}
    </Dialog>
  );
};

export default MyDialog;
