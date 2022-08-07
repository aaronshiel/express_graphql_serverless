import mongoose, {Document} from 'mongoose'
import { 
    GraphQLObjectType,
    GraphQLString
} from 'graphql'
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
    testString: String,
});

export const ConfigType = new GraphQLObjectType({
    name: 'ConfigType',
    fields: () => ({
        testString: { type: GraphQLString },
    })
})

export interface ConfigModel extends Document{
    testString: string,
}

export default mongoose.model('Config', ConfigSchema);