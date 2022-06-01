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

const GET_ALL_NOTES = gql`
  query {
    events {
      id
      title
      description
    }
  }
`;

const CREATE_NOTES = gql`
  mutation Mutation($eventInput: EventInput) {
    createEvent(eventInput: $eventInput) {
      title
      description
    }
  }
`;
export { REGISTER, LOGIN, GET_USER_ID, GET_ALL_NOTES, CREATE_NOTES };
