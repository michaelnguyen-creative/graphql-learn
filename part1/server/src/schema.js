// Schema for GraphQL server
const gql = require('graphql-tag');

// Define two object types: Track & Author
// Track type has a title, author, thumbnail, length, & modules fields
// Author type has a name & photo fields
const typeDefs = gql`
    "Query to get tracks array for the homepage grid"
    type Query {
        track(id: ID!): Track
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

// export module
module.exports = typeDefs;