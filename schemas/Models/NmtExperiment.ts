import * as mongoose from "mongoose";
import { NotebookExperimentModel, NotebookExperimentSchema } from "./ExperimentBase";

import {GraphQLBoolean, GraphQLInputObjectType} from 'graphql'
const Schema = mongoose.Schema

export const NMTSummaryInputType = new GraphQLInputObjectType({
    name: 'NMTSummaryInputType',
    fields: () => ({
        callsFitOnTexts: {type: GraphQLBoolean},
        callsTextsToSequences: {type: GraphQLBoolean},
        callsPadSequences: {type: GraphQLBoolean},
        callsPadSequencesWithPaddingPost: {type: GraphQLBoolean},
        callsPadSequencesTwice: {type: GraphQLBoolean},
        callsPadSequencesTwiceWithPaddingPost: {type: GraphQLBoolean},
        callsReshape: {type: GraphQLBoolean},
        callsReshapeOnXAndY: {type: GraphQLBoolean},
        callsArgmax: {type: GraphQLBoolean},
        hasValidationOutput: {type: GraphQLBoolean},
        dataIsNumpyArray: {type: GraphQLBoolean},
        keywordZeroLookup: {type: GraphQLBoolean},
        preprocessedDataCorrectDimensions: {type: GraphQLBoolean},
        outputCorrectlyFormatted: {type: GraphQLBoolean},
    })
})

export interface NMTSimulationsSummaryModel {
  callsFitOnTexts: boolean;
  callsTextsToSequences: boolean;
  callsPadSequences: boolean;
  callsPadSequencesWithPaddingPost: boolean;
  callsPadSequencesTwice: boolean;
  callsPadSequencesTwiceWithPaddingPost: boolean;
  callsReshape: boolean;
  callsReshapeOnXAndY: boolean;
  callsArgmax: boolean;
  hasValidationOutput: boolean;
  dataIsNumpyArray: boolean;
  keywordZeroLookup: boolean;
  preprocessedDataCorrectDimensions: boolean;
  outputCorrectlyFormatted: boolean;
}

export const NMTSimulationsSummarySchema = new Schema({
  // Before run
  callsFitOnTexts: Boolean,
  callsTextsToSequences: Boolean,
  callsPadSequences: Boolean,
  callsPadSequencesWithPaddingPost: Boolean,
  callsPadSequencesTwice: Boolean,
  callsPadSequencesTwiceWithPaddingPost: Boolean,
  callsReshape: Boolean,
  callsReshapeOnXAndY: Boolean,
  callsArgmax: Boolean,
  hasValidationOutput: Boolean,
  // Post run
  dataIsNumpyArray: Boolean,
  keywordZeroLookup:Boolean,
  preprocessedDataCorrectDimensions:Boolean,
  outputCorrectlyFormatted: Boolean
})

  
export interface NMTNotebookExperimentModel extends NotebookExperimentModel{
    summary: NMTSimulationsSummaryModel;
}

export const NMTNotebookExperimentSchema = new Schema({ 
    summary: NMTSimulationsSummarySchema
}).add(NotebookExperimentSchema);

export default mongoose.model('NMTNotebookExperimentEntry', NMTNotebookExperimentSchema);