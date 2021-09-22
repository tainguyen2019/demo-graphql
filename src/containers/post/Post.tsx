import React, { useState } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import RelayEnvironment from 'relay/RelayEnvironment';
import type {
  PostQuery,
  PostQueryResponse,
} from './__generated__/PostQuery.graphql';

// import UpdatePostMutation from 'relay/mutations/UpdatePostMutation';
import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';

type PostQueryRender = {
  props: PostQueryResponse | null;
  error: Error | null;
};

const LIMIT = 5;

// Define a query
const query = graphql`
  query PostQuery($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

const PostComponent: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const queryRender = ({ props }: PostQueryRender) => {
    if (props) {
      const posts = props.posts?.data;
      setTotalPosts(Number(props.posts?.meta?.totalCount));

      return (
        <Grid container justifyContent="center">
          {posts?.map((post) => (
            <Grid item component={Card} key={post?.id} xs={4} md={3} margin={2}>
              <CardContent>
                <Typography
                  variant="h5"
                  style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {post?.title}
                </Typography>
                <Typography variant="body2">{post?.body}</Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      );
    }
    return <CircularProgress />;
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4">List of Posts</Typography>
      </Grid>
      <Grid item container justifyContent="center" xs={12}>
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
      {totalPosts > 0 && (
        <Grid item container justifyContent="center" xs={12}>
          <Pagination
            page={page}
            count={Math.ceil(totalPosts / LIMIT)}
            onChange={handleChangePage}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default PostComponent;
