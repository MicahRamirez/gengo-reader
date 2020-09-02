import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation doLogin($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const REGISTER = gql`
  mutation doRegistration(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    register(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      email
    }
  }
`;

export const GET_LOGGED_IN_USER = gql`
  query getUser {
    getLoggedInUser {
      email
      _id
      firstName
      lastName
    }
  }
`;
