import * as mongoose from "mongoose";
import { NotebookExperimentModel, NotebookExperimentSchema } from "./ExperimentBase";

import {GraphQLInt, GraphQLInputObjectType} from 'graphql'
const Schema = mongoose.Schema

export const FruitPickerSummaryInputType = new GraphQLInputObjectType({
    name: 'FruitPickerSummaryInputType',
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

export interface FruitPickerSimulationsSummaryModel {
    lowAccuracy: number;
    highAccuracy: number;
    averageAccuracy: number;
    averagePrecision: number;
    averageRecall: number;
    averageF1Score: number;
    lowF1Score: number;
    highF1Score: number;
}

export const FruitPickerSimulationsSummarySchema = new Schema({
    lowAccuracy: Number,
    highAccuracy: Number,
    averageAccuracy: Number,
    averagePrecision: Number,
    averageRecall: Number,
    averageF1Score: Number,
    lowF1Score: Number,
    highF1Score: Number
})

  
export interface FruitPickerNotebookExperimentModel extends NotebookExperimentModel{
    summary: FruitPickerSimulationsSummaryModel;
}

export const FruitPickerNotebookExperimentSchema = new Schema({ 
    summary: FruitPickerSimulationsSummarySchema
}).add(NotebookExperimentSchema);

export default mongoose.model('FruitPickerNotebookExperimentEntry', FruitPickerNotebookExperimentSchema);