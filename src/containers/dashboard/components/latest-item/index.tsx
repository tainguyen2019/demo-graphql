import { Grid, Paper, Typography } from '@mui/material';
import { ReactElement } from 'react';

type LastestItemProps = {
  name: string;
  children: ReactElement;
};

const LatestItem: React.FC<LastestItemProps> = ({ name, children }) => {
  return (
    <Grid
      item
      component={Paper}
      xs={12}
      sx={{
        fontWeight: 'bold',
        margin: 2,
        padding: 2,
        background: '#F0F8FF',
      }}
    >
      <Typography variant="h6" color="primary" sx={{ marginBottom: 1 }}>
        {name}
      </Typography>
      {children}
    </Grid>
  );
};

export default LatestItem;
