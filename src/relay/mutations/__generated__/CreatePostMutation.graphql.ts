/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreatePostInput = {
    title: string;
    body: string;
};
export type CreatePostMutationVariables = {
    input: CreatePostInput;
};
export type CreatePostMutationResponse = {
    readonly createPost: {
        readonly id: string | null;
        readonly title: string | null;
        readonly body: string | null;
    } | null;
};
export type CreatePostMutation = {
    readonly response: CreatePostMutationResponse;
    readonly variables: CreatePostMutationVariables;
};



/*
mutation CreatePostMutation(
  $input: CreatePostInput!
) {
  createPost(input: $input) {
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
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "createPost",
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
    "name": "CreatePostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreatePostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "42ebe8e8dd832f8abc79fbebd5563420",
    "id": null,
    "metadata": {},
    "name": "CreatePostMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePostMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a255a80d339284b5abec93c7085e189c';
export default node;
