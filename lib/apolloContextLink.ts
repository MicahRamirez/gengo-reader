import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://graphql.fauna.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  let token: String | undefined = process.env.BOOTSTRAP_KEY;
  if (window.localStorage) {
    token = localStorage.get("gengo_token");
  }
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export default authLink.concat(httpLink);
