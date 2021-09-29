import { Grid } from '@mui/material';
import PostList from 'containers/post/components/card-list';
import TodoList from 'containers/todo/components/todo-list';
import LatestItem from '../latest-item';

type LatestListProps = {
  latestPosts: ReadonlyArray<Post>;
  latestTodos: ReadonlyArray<Todo>;
};

const LatestList: React.FC<LatestListProps> = ({
  latestPosts,
  latestTodos,
}) => {
  return (
    <Grid container>
      <LatestItem name="Latest Todos">
        <TodoList data={latestTodos} hideActions={true} />
      </LatestItem>
      <LatestItem name="Latest Posts">
        <PostList data={latestPosts} hideActions={true} />
      </LatestItem>
    </Grid>
  );
};

export default LatestList;
