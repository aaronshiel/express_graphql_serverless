import { 
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} from 'graphql'
import { Cmi5LaunchParametersInputType, DisplayedHintsInputType } from '../Models/ExperimentBase';
import { CafeSummaryInputType } from '../Models/CafeNotebookExperiment';
import CafeNotebookExperimentEntry from "../Models/CafeNotebookExperiment"

require('dotenv').config()

export const submitCafeNotebookExperiment = {
    type: GraphQLBoolean,
    args: {
        cmi5LaunchParameters: {type: Cmi5LaunchParametersInputType},
        activityId: {type: GraphQLString},
        notebookStateStringified: {type: GraphQLString},
        summary: {type: CafeSummaryInputType},
        displayedHints: {type: GraphQLList(DisplayedHintsInputType)}
    },
    // @ts-ignore
    async resolve(parent, args) {
        try{
            await CafeNotebookExperimentEntry.create({...args})
            return true;
        }catch(e){
            console.log(e)
            throw new Error(String(e))
        }
    }
}
export default submitCafeNotebookExperiment;