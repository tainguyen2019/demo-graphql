import { makeStyles, createStyles } from '@mui/styles';

const styles = createStyles({
  appName: {
    flex: 1,
  },
  appLinks: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
});

const useStyles = makeStyles(styles, { classNamePrefix: 'Nav' });

export default useStyles;
