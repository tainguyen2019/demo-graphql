import { Card, CardContent, Grid, Typography, Icon } from '@mui/material';
import { DashboardItem } from 'containers/dashboard/utils';

type DashboardOverViewProps = {
  dashboardItems: DashboardItem[];
};

const DashboardOverview: React.FC<DashboardOverViewProps> = ({
  dashboardItems,
}) => {
  return (
    <Grid container justifyContent="center" alignItems="stretch" wrap="nowrap">
      {dashboardItems.map(({ name, value, icon }) => (
        <Grid item key={name} component={Card} xs={4} md={3} margin={2}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Icon color="primary" sx={{ fontSize: '4rem' }}>
              {icon}
            </Icon>
            <Typography sx={{ fontWeight: 'bold' }}>
              {value} {name}
            </Typography>
          </CardContent>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardOverview;
