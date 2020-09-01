import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client";
import { AUTH_TOKEN } from "./constants";

const httpLink = createHttpLink({
  uri: "https://graphql.fauna.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  const bootstrapToken: String | undefined = process.env.BOOTSTRAP_KEY;
  console.log(process.env.BOOTSTRAP_KEY);
  const authToken =
    window && window.localStorage && window.localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: authToken
        ? `Bearer ${authToken}`
        : `Bearer ${bootstrapToken}`,
    },
  };
});

export default authLink.concat(httpLink);
