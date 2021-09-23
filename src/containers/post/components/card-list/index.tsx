import React from 'react';
import { Grid } from '@mui/material';
import { PostQueryResponse } from 'relay/queries/__generated__/PostQuery.graphql';
import CardItem from '../card-item';

type CardListProps = {
  store: PostQueryResponse;
  handleEdit: (Id: string) => VoidFunction;
};

const CardList: React.FC<CardListProps> = ({ store, handleEdit }) => {
  const posts = store.posts?.data!;

  return (
    <Grid container alignItems="stretch" justifyContent="center">
      {posts.map((item) => (
        <CardItem item={item} handleEdit={handleEdit} key={item?.id} />
      ))}
    </Grid>
  );
};

export default CardList;
