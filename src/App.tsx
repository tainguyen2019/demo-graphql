import React, { Suspense } from 'react';
import './App.styles.ts';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from 'relay/RelayEnvironment';
import PostComponent from 'containers/post/Post';

import { CssBaseline, Box, CircularProgress } from '@mui/material';
import useStyles from 'App.styles';

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense
          fallback={<CircularProgress className={classes.loadingPage} />}
        >
          <PostComponent />
        </Suspense>
      </RelayEnvironmentProvider>
    </Box>
  );
};

export default App;
