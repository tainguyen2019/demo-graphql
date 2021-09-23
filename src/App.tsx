import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { CssBaseline, Box } from '@mui/material';
import useStyles from 'App.styles';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Navigation from 'components/navigation';
import RelayEnvironment from 'relay/RelayEnvironment';
import PostComponent from 'containers/post';
import TodoComponent from 'containers/todo';
import AlbumComponent from 'containers/album';
import PostComponentV2 from 'containers/post/PostV2';
import theme from 'theme';

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <Router>
            <Navigation />

            <Switch>
              <Route path="/post" exact component={PostComponent} />
              <Route path="/todo" exact component={TodoComponent} />
              <Route path="/album" exact component={AlbumComponent} />
              <Route path="/post-v2" exact component={PostComponentV2} />
              <Redirect from="/" to="/post" exact />
            </Switch>
          </Router>
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </Box>
  );
};

export default App;
