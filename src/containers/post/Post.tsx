import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { loadQuery, QueryRenderer, usePreloadedQuery } from 'react-relay';
import RelayEnvironment from 'relay/ReplayEnvironment';
import type {
  PostQuery,
  PostQueryResponse,
  PostQueryVariables,
} from './__generated__/PostQuery.graphql';

import UpdatePostMutation from 'relay/mutations/UpdatePostMutation';

interface Post {
  id: string;
  title: string;
}

// Define a query
const query = graphql`
  query PostQuery($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

const variables: PostQueryVariables = {
  options: {
    paginate: {
      page: 1,
      limit: 5,
    },
  },
};

const preloadedQuery = loadQuery(RelayEnvironment, query, variables);

export const PostComponent: React.FC = () => {
  const data = usePreloadedQuery(query, preloadedQuery) as PostQueryResponse;

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

export const PostComponentV2: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [selectedPost, setSelectedPost] = React.useState<Post | null>();

  const handleNextPage = () => {
    setPage((oldPage) => oldPage + 1);
  };

  const handlePrevPage = () => {
    setPage((oldPage) => oldPage - 1);
  };

  const handleEdit = (post: Post) => {
    setSelectedPost(post);
  };

  const handleSubmit = () => {
    UpdatePostMutation(
      RelayEnvironment,
      {
        id: selectedPost?.id!,
      },
      'Test Body'
    );
  };

  return (
    <div>
      <h1>Post Component using QueryRenderer</h1>
      <h4>Page : {page}</h4>
      <button onClick={handleNextPage}>Next</button>
      <button onClick={handlePrevPage}>Prev</button>
      <div>
        Selected post: <input value={`${selectedPost?.title}`} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <QueryRenderer<PostQuery>
        environment={RelayEnvironment}
        query={query}
        variables={{
          options: {
            paginate: {
              page,
              limit: 5,
            },
          },
        }}
        render={({ props }) => {
          if (props) {
            return (
              <ul>
                {props.posts?.data?.map((post) => (
                  <li>
                    <p>
                      {post?.id} {post?.title}
                      <button
                        onClick={() =>
                          handleEdit({ id: post?.id!, title: post?.title! })
                        }
                      >
                        Edit
                      </button>
                    </p>
                  </li>
                ))}
              </ul>
            );
          }
          return <div>Loading</div>;
        }}
      />
    </div>
  );
};
