import { 
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} from 'graphql'
import { Cmi5LaunchParametersInputType, DisplayedHintsInputType } from '../Models/ExperimentBase';
import NMTNotebookExperimentEntry, { NMTSummaryInputType } from "../Models/NmtExperiment"

require('dotenv').config()

export const submitNmtNotebookExperiment = {
    type: GraphQLBoolean,
    args: {
        cmi5LaunchParameters: {type: Cmi5LaunchParametersInputType},
        activityId: {type: GraphQLString},
        notebookStateStringified: {type: GraphQLString},
        summary: {type: NMTSummaryInputType},
        displayedHints: {type: GraphQLList(DisplayedHintsInputType)}
    },
    // @ts-ignore
    async resolve(parent, args) {
        try{
            await NMTNotebookExperimentEntry.create({...args})
            return true;
        }catch(e){
            console.log(e)
            throw new Error(String(e))
        }
    }
}
export default submitNmtNotebookExperiment;