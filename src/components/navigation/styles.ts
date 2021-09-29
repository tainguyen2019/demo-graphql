import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const styles = ({ breakpoints }: Theme) =>
  createStyles({
    appName: {
      [breakpoints.up('md')]: {
        flex: 1,
      },
      [breakpoints.down('md')]: {
        display: 'none',
      },
    },
    appLinks: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Nav' });

export default useStyles;
