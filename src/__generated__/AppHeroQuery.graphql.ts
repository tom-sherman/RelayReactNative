/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppHeroQueryVariables = {};
export type AppHeroQueryResponse = {
    readonly hero: {
        readonly name: string | null;
        readonly id: string | null;
    } | null;
};
export type AppHeroQuery = {
    readonly response: AppHeroQueryResponse;
    readonly variables: AppHeroQueryVariables;
};



/*
query AppHeroQuery {
  hero {
    __typename
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppHeroQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "hero",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppHeroQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "hero",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "695c8ebabd51e1460e3d9529d0d503e5",
    "id": null,
    "metadata": {},
    "name": "AppHeroQuery",
    "operationKind": "query",
    "text": "query AppHeroQuery {\n  hero {\n    __typename\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ab8c69e7e3f285f54fc4216f2cc80f0c';
export default node;
