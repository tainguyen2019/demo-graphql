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
        readonly title: string | null;
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
    "cacheID": "22217f270a3eab728243a756257434bb",
    "id": null,
    "metadata": {},
    "name": "ChangeTodoStatusMutation",
    "operationKind": "mutation",
    "text": "mutation ChangeTodoStatusMutation(\n  $id: ID!\n  $input: UpdateTodoInput!\n) {\n  updateTodo(id: $id, input: $input) {\n    id\n    title\n    completed\n  }\n}\n"
  }
};
})();
(node as any).hash = '8408224fbe4ec92086012e85807b516c';
export default node;
