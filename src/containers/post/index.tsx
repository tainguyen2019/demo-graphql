import React, { useState } from 'react';
import { QueryRenderer } from 'react-relay';
import { CircularProgress, Grid, Pagination } from '@mui/material';
import RelayEnvironment from 'relay/RelayEnvironment';
import type {
  PostQuery,
  PostQueryResponse,
} from 'relay/queries/__generated__/PostQuery.graphql';
import UpdatePostMutation from 'relay/mutations/UpdatePostMutation';

import { query } from 'relay/queries/Post';
import CardList from './components/card-list';

type PostQueryRender = {
  props: PostQueryResponse | null;
  error: Error | null;
};

const LIMIT = 6;

const PostComponent: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleEdit = (postId: string) => () => {
    UpdatePostMutation(RelayEnvironment, { id: postId }, 'New Body');
  };

  const queryRender = ({ props }: PostQueryRender) => {
    if (props) {
      setTotalPosts(props.posts?.meta?.totalCount!);

      return (
        <>
          <CardList store={props} handleEdit={handleEdit} />
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
    }

    return (
      <CircularProgress
        style={{
          textAlign: 'center',
        }}
      />
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
        environment={RelayEnvironment}
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
