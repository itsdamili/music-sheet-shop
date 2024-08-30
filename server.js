const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const gql = require('graphql-tag');

const typeDefs = gql`
  type NewsArticle {
    id: ID!
    title: String!
    content: String!
    publishedAt: String!
  }

  # Define the Query type with the "news" field
  type Query {
    news: [NewsArticle!]!
  }
`;

const resolvers = {
  Query: {
    news: () => [
      {
        id: '1',
        title: 'Breaking News: Apollo Server Rocks!',
        content: 'Apollo Server is an open-source GraphQL server that enables you to build a GraphQL API...',
        publishedAt: '2024-08-30T12:00:00Z',
      },
      {
        id: '2',
        title: 'GraphQL: The Future of APIs?',
        content: 'GraphQL is a powerful query language for APIs that allows clients to request exactly the data they need...',
        publishedAt: '2024-08-29T15:30:00Z',
      },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});