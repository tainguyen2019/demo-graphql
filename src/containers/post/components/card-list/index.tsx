import React from 'react';
import { Grid } from '@mui/material';
import CardItem from '../card-item';

type CardListProps = {
  data: ReadonlyArray<Post>;
  handleEdit?: (Id: string) => VoidFunction;
  hideActions?: boolean;
};

const CardList: React.FC<CardListProps> = ({ data, ...props }) => {
  return (
    <Grid container alignItems="stretch" justifyContent="center">
      {data.map((item) => (
        <CardItem key={item?.id} item={item} {...props} />
      ))}
    </Grid>
  );
};

export default CardList;
