import { makeStyles, createStyles } from '@mui/styles';

const styles = createStyles({
  root: {},
  loadingPage: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
});

const useStyles = makeStyles(styles, { classNamePrefix: 'App' });

export default useStyles;
