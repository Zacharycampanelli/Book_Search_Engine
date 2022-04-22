import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
    mutation addUser($users: [ID]!) {
        addUser(users: $users) {
            users {

            }
        }
    }
`;

export const SAVE_BOOK = gql`
mutation saveBook($bookId, String!) {
    saveBook(bookId: $bookId) {
        _id
        username
        email
        savedBooks{
            bookId
            title
            authors
            description
            image
            link
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId, String!) {
    removeBook(bookId: $bookId) { 
        _id
        username
        email
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
`;
