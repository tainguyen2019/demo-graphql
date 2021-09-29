import { makeStyles, createStyles } from '@mui/styles';

const styles = createStyles({
  link: {
    textTransform: 'uppercase',
    fontWeight: 500,
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      borderBottom: '2px solid #FFA726',
      marginBottom: '-2px',
    },
  },
  linkActive: {
    borderBottom: '2px solid #FFA726',
    marginBottom: '-2px',
  },
});

const useStyles = makeStyles(styles, { classNamePrefix: 'Link' });

export default useStyles;
