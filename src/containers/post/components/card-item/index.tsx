import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
} from '@mui/material';

type CardItemProps = {
  item: {
    readonly id: string | null;
    readonly title: string | null;
    readonly body: string | null;
  } | null;
  handleEdit: (Id: string) => VoidFunction;
};

const CardItem: React.FC<CardItemProps> = ({ item, handleEdit }) => {
  return (
    <Grid
      item
      component={Card}
      key={item?.id}
      xs={4}
      md={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
      }}
      margin={1}
    >
      <CardContent style={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {item?.id}. {item?.title}
        </Typography>
        <Typography variant="body2">{item?.body}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleEdit(item?.id!)}
        >
          Edit
        </Button>
      </CardActions>
    </Grid>
  );
};

export default CardItem;
