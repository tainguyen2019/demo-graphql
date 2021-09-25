import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link, { LinkProps } from 'components/Link';

const Navigation: React.FC = () => {
  const appLinks: LinkProps[] = [
    { name: 'All Posts', path: '/post' },
    { name: 'Photo Album', path: '/album' },
    { name: 'Your Todo', path: '/todo' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flex: 2 }}>
          Demo Relay GraphQL
        </Typography>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          {appLinks.map(({ name, path }) => (
            <Link key={path} name={name} path={path} />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
