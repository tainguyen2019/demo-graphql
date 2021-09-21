import React, { Suspense } from 'react';
import './App.css';
import { graphql } from 'babel-plugin-relay/macro';
import { loadQuery, usePreloadedQuery } from 'react-relay';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './ReplayEnvironment';

// Define a query
const PostQuery = graphql`
  query AppQuery {
    post(id: 1) {
      id
      title
      body
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, PostQuery, {});

const PostComponent: React.FC = () => {
  const data = usePreloadedQuery(PostQuery, preloadedQuery);

  return (
    <div>
      <p>{JSON.stringify(data, null, ' ')}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <PostComponent />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
