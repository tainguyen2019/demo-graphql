import { DashboardQueryResponse } from 'relay/queries/__generated__/DashboardQuery.graphql';

export type DashboardItem = {
  name: string;
  value: number;
  icon: string;
};

export const computeData = (data: DashboardQueryResponse) => {
  const totalPosts = data.postData?.meta?.totalCount || 0;
  const totalTodos = data.todoData?.meta?.totalCount || 0;
  const totalPhotos = data.photoData?.meta?.totalCount || 0;
  const totalAlbums = data.albumData?.meta?.totalCount || 0;

  const dashboardItems: DashboardItem[] = [
    {
      name: 'Posts',
      value: totalPosts,
      icon: 'description',
    },
    {
      name: 'Todos',
      value: totalTodos,
      icon: 'listAlt',
    },
    {
      name: 'Photos',
      value: totalPhotos,
      icon: 'photo',
    },
    {
      name: 'Albums',
      value: totalAlbums,
      icon: 'photo_album',
    },
  ];

  return dashboardItems;
};
