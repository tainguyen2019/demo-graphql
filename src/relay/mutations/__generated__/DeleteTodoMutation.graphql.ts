/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteTodoMutationVariables = {
    id: string;
};
export type DeleteTodoMutationResponse = {
    readonly deleteTodo: boolean | null;
};
export type DeleteTodoMutation = {
    readonly response: DeleteTodoMutationResponse;
    readonly variables: DeleteTodoMutationVariables;
};



/*
mutation DeleteTodoMutation(
  $id: ID!
) {
  deleteTodo(id: $id)
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
    "kind": "ScalarField",
    "name": "deleteTodo",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7589b35d34e0635b238087902f8b9bba",
    "id": null,
    "metadata": {},
    "name": "DeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTodoMutation(\n  $id: ID!\n) {\n  deleteTodo(id: $id)\n}\n"
  }
};
})();
(node as any).hash = 'fb91d2eb08da707b729f53214c4cba46';
export default node;
