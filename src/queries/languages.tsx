import { gql } from "@apollo/client";

export const GET_LANGUAGES = gql`
  query getAllLanguages {
    getAllLanguages {
      code
      display_string
      language_string
    }
  }
`;
