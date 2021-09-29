import { useState } from 'react';
import {
  CircularProgress,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Pagination,
  Paper,
  Typography,
} from '@mui/material';
import { QueryRenderer } from 'react-relay';
import relayEnvironment from 'relay/relayEnvironment';
import { query } from 'relay/queries/Album';
import {
  AlbumQuery,
  AlbumQueryResponse,
} from 'relay/queries/__generated__/AlbumQuery.graphql';

const LIMIT = 10;

const AlbumComponent: React.FC = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if (value) {
      setPage(value);
    }
  };

  const queryRender = ({ props }: RenderQueryProps<AlbumQueryResponse>) => {
    if (!props) {
      return (
        <CircularProgress
          style={{
            textAlign: 'center',
          }}
        />
      );
    }

    const albums = props.albums?.data!;
    const totalAlbums = props.albums?.meta?.totalCount || 0;
    return (
      <>
        <Grid container justifyContent="center" alignItems="center">
          {albums.map((album) => (
            <Grid
              item
              key={album?.id}
              xs={6}
              md={4}
              sx={{
                height: 450,
                overflowY: 'scroll',
                margin: 2,
                paddingX: 2,
              }}
              component={Paper}
            >
              <ImageList>
                <ImageListItem key="Subheader" cols={2}>
                  <ListSubheader>
                    <Typography
                      variant="h6"
                      sx={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {album?.id}. {album?.title}
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
        {totalAlbums > 0 && (
          <Grid item container justifyContent="center" xs={12} marginTop={1}>
            <Pagination
              page={page}
              count={Math.ceil(totalAlbums / LIMIT)}
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
      <QueryRenderer<AlbumQuery>
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
    </Grid>
  );
};

export default AlbumComponent;
