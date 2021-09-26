import {
  CircularProgress,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Paper,
  Typography,
} from '@mui/material';
import { QueryRenderer } from 'react-relay';
import RelayEnvironment from 'relay/RelayEnvironment';
import { query } from 'relay/queries/Album';
import {
  AlbumQuery,
  AlbumQueryResponse,
} from 'relay/queries/__generated__/AlbumQuery.graphql';

type AlbumQueryRender = {
  props: AlbumQueryResponse | null;
  error: Error | null;
};

const AlbumComponent: React.FC = () => {
  const queryRender = ({ props }: AlbumQueryRender) => {
    if (props) {
      const albums = props.albums?.data!;
      return (
        <Grid
          container
          padding={2}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {albums.map((album) => (
            <Grid
              item
              key={album?.id}
              xs={4}
              sx={{ height: 450, overflowY: 'scroll' }}
              margin={3}
              component={Paper}
            >
              <ImageList>
                <ImageListItem key="Subheader" cols={2}>
                  <ListSubheader component="div">
                    <Typography
                      variant="h6"
                      sx={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {album?.title}
                    </Typography>
                  </ListSubheader>
                </ImageListItem>
                {album?.photos!.data!.map((photo) => (
                  <ImageListItem key={photo?.url}>
                    <img src={photo?.url!} alt="test" />
                    <ImageListItemBar title={photo?.title} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          ))}
        </Grid>
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
      <QueryRenderer<AlbumQuery>
        environment={RelayEnvironment}
        query={query}
        variables={{
          options: {
            paginate: {
              page: 1,
              limit: 9,
            },
          },
        }}
        render={queryRender}
      />
    </Grid>
  );
};

export default AlbumComponent;
