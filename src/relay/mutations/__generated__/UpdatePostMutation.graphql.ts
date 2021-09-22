/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdatePostInput = {
    title?: string | null;
    body?: string | null;
};
export type UpdatePostMutationVariables = {
    id: string;
    input: UpdatePostInput;
};
export type UpdatePostMutationResponse = {
    readonly updatePost: {
        readonly id: string | null;
        readonly title: string | null;
        readonly body: string | null;
    } | null;
};
export type UpdatePostMutation = {
    readonly response: UpdatePostMutationResponse;
    readonly variables: UpdatePostMutationVariables;
};



/*
mutation UpdatePostMutation(
  $id: ID!
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
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
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "updatePost",
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
    "name": "UpdatePostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdatePostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6be2e67f64b91ddcd411dab4229fe439",
    "id": null,
    "metadata": {},
    "name": "UpdatePostMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePostMutation(\n  $id: ID!\n  $input: UpdatePostInput!\n) {\n  updatePost(id: $id, input: $input) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e49db2f3a674db8209a573d4c1ba5cd4';
export default node;
