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

const GET_USER_ID = gql`
  mutation getUser($userId: ID!) {
    getUser(userId: $userId) {
      username
      email
    }
  }
`;

export { REGISTER, LOGIN, GET_USER_ID };
