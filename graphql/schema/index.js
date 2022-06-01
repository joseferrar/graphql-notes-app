const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}

type Event {
  id: ID!
  title: String!
  description: String!
}

type User {
  _id: ID!
  username: String!
  email: String!
  password: String
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input EventInput {
  title: String!
  description: String!
}

input UpdateInput {
  title: String!
  description: String!
}

input UserInput {
  username: String!
  email: String!
  password: String!
}

type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!

}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!
    deleteEvent(eventId: ID!): Event!
    updateEvent(eventId: ID!): Event!
    login(email: String!, password: String!): AuthData!
    getUser(userId: ID!): User!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
