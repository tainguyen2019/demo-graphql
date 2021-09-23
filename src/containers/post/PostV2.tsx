import React from 'react';
import { loadQuery, usePreloadedQuery } from 'react-relay';
import RelayEnvironment from 'relay/RelayEnvironment';
import type {
  PostQuery,
  PostQueryVariables,
} from 'relay/queries/__generated__/PostQuery.graphql';
import { query } from 'relay/queries/Post';

const variables: PostQueryVariables = {
  options: {
    paginate: {
      page: 1,
      limit: 5,
    },
  },
};

const preloadedQuery = loadQuery<PostQuery>(RelayEnvironment, query, variables);

export const PostComponentV2: React.FC = () => {
  const data = usePreloadedQuery<PostQuery>(query, preloadedQuery);

  return (
    <div>
      <h1>Post Component using preloadedQuery</h1>
      <ul>
        {data.posts?.data?.map((post) => (
          <li>
            <p>
              {post?.id} {post?.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostComponentV2;
