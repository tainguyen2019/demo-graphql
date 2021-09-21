import React, { Suspense } from 'react';
import './App.css';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './relay/ReplayEnvironment';

import { PostComponent, PostComponentV2 } from 'containers/post/Post';
import TodoComponent from 'containers/todo/Todo';

const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <PostComponent />
        <PostComponentV2 />
        <TodoComponent />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
