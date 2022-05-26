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
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

export { REGISTER, LOGIN };
