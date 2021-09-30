import React, { useState } from 'react';
import { QueryRenderer } from 'react-relay';
import {
  CircularProgress,
  Fab,
  Grid,
  Pagination,
  Tooltip,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import relayEnvironment from 'relay/relayEnvironment';
import type {
  PostQuery,
  PostQueryResponse,
} from 'relay/queries/__generated__/PostQuery.graphql';
import UpdatePostMutation from 'relay/mutations/UpdatePostMutation';
import CreatePostMutation from 'relay/mutations/CreatePostMutation';
import { query } from 'relay/queries/Post';
import CardList from './components/card-list';
import PostForm from './components/create-form';

const LIMIT = 6;

const PostComponent: React.FC = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const handleSubmit = (post: PostInputs) => {
    CreatePostMutation(relayEnvironment, post);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Grid item container justifyContent="center" xs={12}>
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

      <Tooltip title="New Post">
        <Fab
          color="primary"
          sx={{ position: 'fixed', bottom: '5%', right: '5%' }}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <PostForm open={open} onClose={handleClose} onSubmit={handleSubmit} />
    </Grid>
  );
};

export default PostComponent;
