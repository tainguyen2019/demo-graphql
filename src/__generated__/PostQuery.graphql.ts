/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PostQueryVariables = {};
export type PostQueryResponse = {
    readonly post: {
        readonly id: string | null;
        readonly title: string | null;
        readonly body: string | null;
    } | null;
};
export type PostQuery = {
    readonly response: PostQueryResponse;
    readonly variables: PostQueryVariables;
};



/*
query PostQuery {
  post(id: 1) {
    id
    title
    body
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": 1
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "post",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
      }
    ],
    "storageKey": "post(id:1)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PostQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "809889f82ed2c236ba9ace843341ebd0",
    "id": null,
    "metadata": {},
    "name": "PostQuery",
    "operationKind": "query",
    "text": "query PostQuery {\n  post(id: 1) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ad8eea6675f8a9ad26b4babb83279041';
export default node;
