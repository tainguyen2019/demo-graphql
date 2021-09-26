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
export type AlbumQueryVariables = {
    options?: PageQueryOptions | null;
};
export type AlbumQueryResponse = {
    readonly albums: {
        readonly data: ReadonlyArray<{
            readonly id: string | null;
            readonly title: string | null;
            readonly photos: {
                readonly data: ReadonlyArray<{
                    readonly title: string | null;
                    readonly url: string | null;
                } | null> | null;
            } | null;
        } | null> | null;
        readonly meta: {
            readonly totalCount: number | null;
        } | null;
    } | null;
};
export type AlbumQuery = {
    readonly response: AlbumQueryResponse;
    readonly variables: AlbumQueryVariables;
};



/*
query AlbumQuery(
  $options: PageQueryOptions
) {
  albums(options: $options) {
    data {
      id
      title
      photos {
        data {
          title
          url
          id
        }
      }
    }
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
  "name": "url",
  "storageKey": null
},
v5 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AlbumQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AlbumsPage",
        "kind": "LinkedField",
        "name": "albums",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Album",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
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
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AlbumQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AlbumsPage",
        "kind": "LinkedField",
        "name": "albums",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Album",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "56d70b0313ac323a59277b4a320f3a6d",
    "id": null,
    "metadata": {},
    "name": "AlbumQuery",
    "operationKind": "query",
    "text": "query AlbumQuery(\n  $options: PageQueryOptions\n) {\n  albums(options: $options) {\n    data {\n      id\n      title\n      photos {\n        data {\n          title\n          url\n          id\n        }\n      }\n    }\n    meta {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7910734f7f0ffdc9baaf24efeb638279';
export default node;
