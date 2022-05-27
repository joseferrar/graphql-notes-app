import { gql } from "@apollo/client";

const REGISTER = gql`
  mutation Mutation($userInput: UserInput) {
    createUser(userInput: $userInput) {
      username
      email
      password
    }
  }
`;

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
      tokenExpiration
    }
  }
`;

export { REGISTER, LOGIN };
