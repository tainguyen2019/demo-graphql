/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type OperatorKindEnum = "GTE" | "LIKE" | "LTE" | "NE" | "%future added value";
export type SortOrderEnum = "ASC" | "DESC" | "%future added value";
export type PageQueryOptions = {
    paginate?: PaginateOptions | null;
    slice?: SliceOptions | null;
    sort?: Array<SortOptions | null> | null;
    operators?: Array<OperatorOptions | null> | null;
    search?: SearchOptions | null;
};
export type PaginateOptions = {
    page?: number | null;
    limit?: number | null;
};
export type SliceOptions = {
    start?: number | null;
    end?: number | null;
    limit?: number | null;
};
export type SortOptions = {
    field?: string | null;
    order?: SortOrderEnum | null;
};
export type OperatorOptions = {
    kind?: OperatorKindEnum | null;
    field?: string | null;
    value?: string | null;
};
export type SearchOptions = {
    q?: string | null;
};
export type DashboardQueryVariables = {
    options?: PageQueryOptions | null;
};
export type DashboardQueryResponse = {
    readonly todoData: {
        readonly data: ReadonlyArray<{
            readonly id: string | null;
            readonly title: string | null;
            readonly completed: boolean | null;
            readonly user: {
                readonly name: string | null;
            } | null;
        } | null> | null;
        readonly meta: {
            readonly totalCount: number | null;
        } | null;
    } | null;
    readonly postData: {
        readonly data: ReadonlyArray<{
            readonly id: string | null;
            readonly title: string | null;
            readonly body: string | null;
        } | null> | null;
        readonly meta: {
            readonly totalCount: number | null;
        } | null;
    } | null;
    readonly photoData: {
        readonly data: ReadonlyArray<{
            readonly id: string | null;
            readonly title: string | null;
            readonly url: string | null;
        } | null> | null;
        readonly meta: {
            readonly totalCount: number | null;
        } | null;
    } | null;
    readonly albumData: {
        readonly meta: {
            readonly totalCount: number | null;
        } | null;
    } | null;
};
export type DashboardQuery = {
    readonly response: DashboardQueryResponse;
    readonly variables: DashboardQueryVariables;
};



/*
query DashboardQuery(
  $options: PageQueryOptions
) {
  todoData: todos(options: $options) {
    data {
      id
      title
      completed
      user {
        name
        id
      }
    }
    meta {
      totalCount
    }
  }
  postData: posts(options: $options) {
    data {
      id
      title
      body
    }
    meta {
      totalCount
    }
  }
  photoData: photos(options: $options) {
    data {
      id
      title
      url
    }
    meta {
      totalCount
    }
  }
  albumData: albums(options: $options) {
    meta {
      totalCount
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "options"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "options",
    "variableName": "options"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completed",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "PageMetadata",
  "kind": "LinkedField",
  "name": "meta",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "alias": "postData",
  "args": (v1/*: any*/),
  "concreteType": "PostsPage",
  "kind": "LinkedField",
  "name": "posts",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
      "kind": "LinkedField",
      "name": "data",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "body",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": "photoData",
  "args": (v1/*: any*/),
  "concreteType": "PhotosPage",
  "kind": "LinkedField",
  "name": "photos",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Photo",
      "kind": "LinkedField",
      "name": "data",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
},
v9 = {
  "alias": "albumData",
  "args": (v1/*: any*/),
  "concreteType": "AlbumsPage",
  "kind": "LinkedField",
  "name": "albums",
  "plural": false,
  "selections": [
    (v6/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardQuery",
    "selections": [
      {
        "alias": "todoData",
        "args": (v1/*: any*/),
        "concreteType": "TodosPage",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DashboardQuery",
    "selections": [
      {
        "alias": "todoData",
        "args": (v1/*: any*/),
        "concreteType": "TodosPage",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/)
    ]
  },
  "params": {
    "cacheID": "fedf88fefe6195cf87a8d1f49eeb1bd9",
    "id": null,
    "metadata": {},
    "name": "DashboardQuery",
    "operationKind": "query",
    "text": "query DashboardQuery(\n  $options: PageQueryOptions\n) {\n  todoData: todos(options: $options) {\n    data {\n      id\n      title\n      completed\n      user {\n        name\n        id\n      }\n    }\n    meta {\n      totalCount\n    }\n  }\n  postData: posts(options: $options) {\n    data {\n      id\n      title\n      body\n    }\n    meta {\n      totalCount\n    }\n  }\n  photoData: photos(options: $options) {\n    data {\n      id\n      title\n      url\n    }\n    meta {\n      totalCount\n    }\n  }\n  albumData: albums(options: $options) {\n    meta {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '143290d5fb97ba6380f989fe22532468';
export default node;
