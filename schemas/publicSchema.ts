import { 
    GraphQLObjectType, GraphQLSchema, 
} from 'graphql'

// Queries
import fetchConfig from './query/fetchConfig'

const PublicRootQuery = new GraphQLObjectType({
    name: 'PublicRootQueryType',
    fields: {
        fetchConfig
    }
});

export default new GraphQLSchema({
    query: PublicRootQuery
});