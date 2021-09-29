import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link, { LinkProps } from 'components/link';
import useStyles from './styles';

const Navigation: React.FC = () => {
  const classes = useStyles();

  const appLinks: LinkProps[] = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'All Posts', path: '/post' },
    { name: 'Photo Album', path: '/album' },
    { name: 'Your Todo', path: '/todo' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" className={classes.appName}>
          Demo Relay GraphQL
        </Typography>
        <Box className={classes.appLinks}>
          {appLinks.map(({ name, path }) => (
            <Link key={path} name={name} path={path} />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
