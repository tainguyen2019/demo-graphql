import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Navigation: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flex: 2 }}>
          Demo Relay GraphQL
        </Typography>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
          <Button href="/post" color="info">
            All posts
          </Button>
          <Button href="/album" color="info">
            Photo Album
          </Button>
          <Button href="/todo" color="info">
            Your Todo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
