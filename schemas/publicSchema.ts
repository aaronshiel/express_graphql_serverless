import { 
    GraphQLObjectType, GraphQLSchema, 
} from 'graphql'

// Queries
import fetchConfig from './query/fetchConfig'
import submitCafeNotebookExperiment from './mutation/submit-cafe-notebook-experiment'
import submitNmtNotebookExperiment from './mutation/submit-nmt-notebook-experiment'
import submitFruitPickerNotebookExperiment from './mutation/submit-fruit-picker-notebook-experiment'

const PublicRootQuery = new GraphQLObjectType({
    name: 'PublicRootQueryType',
    fields: {
        fetchConfig,
    }
});

const PublicMutation = new GraphQLObjectType({
    name: 'PublicMutation',
    fields: {
        submitCafeNotebookExperiment,
        submitNmtNotebookExperiment,
        submitFruitPickerNotebookExperiment
    }
});

export default new GraphQLSchema({
    query: PublicRootQuery,
    mutation: PublicMutation
});