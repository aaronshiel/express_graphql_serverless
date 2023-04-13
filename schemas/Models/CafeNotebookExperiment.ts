import * as mongoose from "mongoose";
import { NotebookExperimentModel, NotebookExperimentSchema } from "./ExperimentBase";

import {GraphQLInt, GraphQLInputObjectType} from 'graphql'
const Schema = mongoose.Schema

export const CafeSummaryInputType = new GraphQLInputObjectType({
    name: 'CafeSummaryInputType',
    fields: () => ({
        lowAccuracy: {type: GraphQLInt},
        highAccuracy: {type: GraphQLInt},
        averageAccuracy: {type: GraphQLInt},
        averagePrecision: {type: GraphQLInt},
        averageRecall: {type: GraphQLInt},
        averageF1Score: {type: GraphQLInt},
        lowF1Score: {type: GraphQLInt},
        highF1Score: {type: GraphQLInt},
    })
})

export interface CafeSimulationsSummaryModel {
    lowAccuracy: number;
    highAccuracy: number;
    averageAccuracy: number;
    averagePrecision: number;
    averageRecall: number;
    averageF1Score: number;
    lowF1Score: number;
    highF1Score: number;
}

export const CafeSimulationsSummarySchema = new Schema({
    lowAccuracy: Number,
    highAccuracy: Number,
    averageAccuracy: Number,
    averagePrecision: Number,
    averageRecall: Number,
    averageF1Score: Number,
    lowF1Score: Number,
    highF1Score: Number
})

  
export interface CafeNotebookExperimentModel extends NotebookExperimentModel{
    summary: CafeSimulationsSummaryModel;
}

export const CafeNotebookExperimentSchema = new Schema({ 
    summary: CafeSimulationsSummarySchema
}).add(NotebookExperimentSchema);

export default mongoose.model('CafeNotebookExperimentEntry', CafeNotebookExperimentSchema);