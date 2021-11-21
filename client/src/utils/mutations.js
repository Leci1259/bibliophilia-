import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput) {
    saveBook(input: $input) {
        _id: ID
        username: String!
        password: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID! {
    removeBook(bookId: $bookId) {
        _id: ID
        username: String!
        password: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
  }
`;