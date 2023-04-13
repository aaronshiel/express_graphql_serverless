import { 
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} from 'graphql'
import { Cmi5LaunchParametersInputType, DisplayedHintsInputType } from '../Models/ExperimentBase';
import FruitPickerNotebookExperimentEntry from "../Models/FruitPickerExperiment"
import { FruitPickerSummaryInputType } from '../Models/FruitPickerExperiment';

require('dotenv').config()

export const submitFruitPickerNotebookExperiment = {
    type: GraphQLBoolean,
    args: {
        cmi5LaunchParameters: {type: Cmi5LaunchParametersInputType},
        activityId: {type: GraphQLString},
        notebookStateStringified: {type: GraphQLString},
        summary: {type: FruitPickerSummaryInputType},
        displayedHints: {type: GraphQLList(DisplayedHintsInputType)}
    },
    // @ts-ignore
    async resolve(parent, args) {
        try{
            await FruitPickerNotebookExperimentEntry.create({...args})
            return true;
        }catch(e){
            console.log(e)
            throw new Error(String(e))
        }
    }
}
export default submitFruitPickerNotebookExperiment;