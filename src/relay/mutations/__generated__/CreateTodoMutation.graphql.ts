/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateTodoInput = {
    title: string;
    completed: boolean;
};
export type CreateTodoMutationVariables = {
    input: CreateTodoInput;
};
export type CreateTodoMutationResponse = {
    readonly createTodo: {
        readonly id: string | null;
        readonly title: string | null;
        readonly completed: boolean | null;
    } | null;
};
export type CreateTodoMutation = {
    readonly response: CreateTodoMutationResponse;
    readonly variables: CreateTodoMutationVariables;
};



/*
mutation CreateTodoMutation(
  $input: CreateTodoInput!
) {
  createTodo(input: $input) {
    id
    title
    completed
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
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "createTodo",
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
        "name": "completed",
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
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "447314b529ff2f37e6c2e7f5d40f3637",
    "id": null,
    "metadata": {},
    "name": "CreateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    id\n    title\n    completed\n  }\n}\n"
  }
};
})();
(node as any).hash = '24c8886a06b8bfe30db0d3db3b560e5d';
export default node;
