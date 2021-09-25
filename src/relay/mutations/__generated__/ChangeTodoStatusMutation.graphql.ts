/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateTodoInput = {
    title?: string | null;
    completed?: boolean | null;
};
export type ChangeTodoStatusMutationVariables = {
    id: string;
    input: UpdateTodoInput;
};
export type ChangeTodoStatusMutationResponse = {
    readonly updateTodo: {
        readonly id: string | null;
        readonly completed: boolean | null;
    } | null;
};
export type ChangeTodoStatusMutation = {
    readonly response: ChangeTodoStatusMutationResponse;
    readonly variables: ChangeTodoStatusMutationVariables;
};



/*
mutation ChangeTodoStatusMutation(
  $id: ID!
  $input: UpdateTodoInput!
) {
  updateTodo(id: $id, input: $input) {
    id
    completed
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
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "updateTodo",
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
    "name": "ChangeTodoStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangeTodoStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bbd70318da7827a56274c5fd7421f326",
    "id": null,
    "metadata": {},
    "name": "ChangeTodoStatusMutation",
    "operationKind": "mutation",
    "text": "mutation ChangeTodoStatusMutation(\n  $id: ID!\n  $input: UpdateTodoInput!\n) {\n  updateTodo(id: $id, input: $input) {\n    id\n    completed\n  }\n}\n"
  }
};
})();
(node as any).hash = '0be46c4ea644c00c0128a9275d2da2cf';
export default node;
