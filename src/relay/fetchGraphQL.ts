import { Variables } from 'react-relay';
import { GraphQLResponse, ObservableFromValue } from 'relay-runtime';

const { REACT_APP_API_URL } = process.env;
const apiURL = REACT_APP_API_URL || '';

const headers = {
  Accept: 'application/json',
  'Content-type': 'application/json',
};

// Define a function that fetches the results of a request (query/mutation/etc)
// and returns its results as a Promise:
export const fetchGraphQL = (
  operation: any,
  variables: Variables
): ObservableFromValue<GraphQLResponse> => {
  const body = JSON.stringify({
    query: operation.text, // GraphQL text from input
    variables,
  });

  const response = fetch(apiURL, {
    method: 'POST',
    headers,
    body,
  }).then((res) => res.json());

  return response;
};
