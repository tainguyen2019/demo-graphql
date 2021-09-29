import React, { useState } from 'react';
import { QueryRenderer } from 'react-relay';
import { CircularProgress, Grid, Pagination } from '@mui/material';
import relayEnvironment from 'relay/relayEnvironment';
import type {
  PostQuery,
  PostQueryResponse,
} from 'relay/queries/__generated__/PostQuery.graphql';
import UpdatePostMutation from 'relay/mutations/UpdatePostMutation';

import { query } from 'relay/queries/Post';
import CardList from './components/card-list';

const LIMIT = 6;

const PostComponent: React.FC = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if (value) {
      setPage(value);
    }
  };

  const handleEdit = (postId: string) => () => {
    UpdatePostMutation(relayEnvironment, { id: postId }, 'New Body');
  };

  const queryRender = ({ props }: RenderQueryProps<PostQueryResponse>) => {
    if (!props) {
      return (
        <CircularProgress
          style={{
            textAlign: 'center',
          }}
        />
      );
    }

    const totalPosts = props.posts?.meta?.totalCount! || 0;
    const posts = props.posts?.data!;

    return (
      <>
        <CardList data={posts} handleEdit={handleEdit} />
        {totalPosts > 0 && (
          <Grid item container justifyContent="center" xs={12} marginTop={1}>
            <Pagination
              page={page}
              count={Math.ceil(totalPosts / LIMIT)}
              onChange={handleChangePage}
              variant="outlined"
              color="primary"
            />
          </Grid>
        )}
      </>
    );
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={1}
      marginY={1}
      padding={1}
    >
      <QueryRenderer<PostQuery>
        environment={relayEnvironment}
        query={query}
        variables={{
          options: {
            paginate: {
              page,
              limit: LIMIT,
            },
          },
        }}
        render={queryRender}
      />
    </Grid>
  );
};

export default PostComponent;
