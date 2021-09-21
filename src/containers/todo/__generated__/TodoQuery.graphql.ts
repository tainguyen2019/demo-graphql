/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TodoQueryVariables = {
    id: string;
};
export type TodoQueryResponse = {
    readonly post: {
        readonly id: string | null;
        readonly title: string | null;
        readonly body: string | null;
    } | null;
};
export type TodoQuery = {
    readonly response: TodoQueryResponse;
    readonly variables: TodoQueryVariables;
};



/*
query TodoQuery(
  $id: ID!
) {
  post(id: $id) {
    id
    title
    body
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c135efb70c442dd2b31c61ea84f90526",
    "id": null,
    "metadata": {},
    "name": "TodoQuery",
    "operationKind": "query",
    "text": "query TodoQuery(\n  $id: ID!\n) {\n  post(id: $id) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd9f73ac7115d991da986a5152398a338';
export default node;
