import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { CssBaseline, Box } from '@mui/material';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Navigation from 'components/navigation';
import relayEnvironment from 'relay/relayEnvironment';
import PostComponent from 'containers/post';
import TodoComponent from 'containers/todo';
import AlbumComponent from 'containers/album';
import DashboardComponent from 'containers/dashboard';
import theme from 'theme';
import useStyles from 'App.styles';

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RelayEnvironmentProvider environment={relayEnvironment}>
          <Router>
            <Navigation />
            <Switch>
              <Route path="/post" exact component={PostComponent} />
              <Route path="/todo" exact component={TodoComponent} />
              <Route path="/album" exact component={AlbumComponent} />
              <Route path="/dashboard" exact component={DashboardComponent} />
              <Redirect from="/" to="/dashboard" exact />
            </Switch>
          </Router>
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </Box>
  );
};

export default App;
