import { CircularProgress, Grid } from '@mui/material';
import { QueryRenderer } from 'react-relay';
import {
  DashboardQuery,
  DashboardQueryResponse,
} from 'relay/queries/__generated__/DashboardQuery.graphql';
import { query } from 'relay/queries/Dashboard';
import relayEnvironment from 'relay/relayEnvironment';
import { computeData } from './utils';
import LatestList from './components/latest-list';
import DashboardOverview from './components/dashboard-overview';

const DashboardComponent: React.FC = () => {
  const queryRender = ({ props }: RenderQueryProps<DashboardQueryResponse>) => {
    if (!props) {
      return (
        <Grid container justifyContent="center" margin={2}>
          <CircularProgress
            style={{
              textAlign: 'center',
            }}
          />
        </Grid>
      );
    }

    const dashboardItems = computeData(props);
    const latestPosts = props.postData?.data!;
    const latestTodos = props.todoData?.data!;

    return (
      <>
        <DashboardOverview dashboardItems={dashboardItems} />
        <LatestList latestPosts={latestPosts} latestTodos={latestTodos} />
      </>
    );
  };

  return (
    <QueryRenderer<DashboardQuery>
      environment={relayEnvironment}
      query={query}
      variables={{
        options: {
          paginate: {
            page: 1,
            limit: 6,
          },
          sort: [
            {
              field: 'id',
              order: 'DESC',
            },
          ],
        },
      }}
      render={queryRender}
    />
  );
};

export default DashboardComponent;
