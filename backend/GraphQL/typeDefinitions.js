const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Book{
        id: ID,
        title: String,
        author: String,
        pages: Float,
    },

    type Query{
        books: [Book],
        book(id:ID!): Book
    },

    input BookCreationInput{
        title: String!,
        author: String!,
        pages: Float!
    },

    input BookUpdateInput{
        title: String,
        author: String,
        pages: Float
    },

    type Mutation{
        createBook(input:BookCreationInput!):Book!
    },

    type Mutation{
        updateBook(chosenBookID: ID!, input:BookUpdateInput!):Book!
    },

    type Mutation{
        deleteBook(chosenBookID: ID!): Book!
    }
`;

module.exports = typeDefs;