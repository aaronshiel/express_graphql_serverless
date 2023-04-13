import mongoose, {Document} from 'mongoose'
const Schema = mongoose.Schema;
import { LaunchParameters } from "@xapi/cmi5";
import { INotebookContent } from "@jupyterlab/nbformat";
import {GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLInt} from "graphql"

const AgentSchema = new Schema({
  objectType: { type: String, default: 'Agent' },
  mbox: { type: String },
  mbox_sha1sum: { type: String },
  openid: { type: String },
  account: { type: Schema.Types.Mixed },
  name: { type: String },
});

const LaunchParametersSchema = new Schema({
  endpoint: { type: String},
  fetch: { type: String},
  actor: { type: AgentSchema },
  registration: { type: String },
  activityId: { type: String },
});

const NotebookCellSchema = new Schema({
  cell_type: String,
  metadata: Schema.Types.Mixed,
  source: String,
  outputs: [Schema.Types.Mixed],
});
  
const NotebookMetadataSchema = new Schema({
  kernelspec: Schema.Types.Mixed,
  language_info: Schema.Types.Mixed,
});
  
const NotebookContentSchema = new Schema({
  cells: [NotebookCellSchema],
  metadata: NotebookMetadataSchema,
  nbformat: Number,
  nbformat_minor: Number,
});

const DisplayedHintsSchema = new Schema({
  message: String,
  conditionDescription: String
});

export const NotebookExperimentSchema = new Schema({ 
    cmi5LaunchParameters: {type: LaunchParametersSchema},
    activityId: {type: String},
    notebookStateStringified: {type: String},
    displayedHints: {type: [DisplayedHintsSchema]},
});

export interface NotebookExperimentModel extends Document{
    cmi5LaunchParameters: LaunchParameters;
    activityId: string;
    notebookStateStringified: string;
    displayedHints: string[];
}

const AccountInputType = new GraphQLInputObjectType({
  name: 'AccountInputType',
  fields: () => ({
      homePage: { type: GraphQLString },
      name: { type: GraphQLString },
  })
})

const ActorInputType = new GraphQLInputObjectType({
  name: 'ActorInputType',
  fields: () => ({
      objectType: { type: GraphQLString },
      name: { type: GraphQLString },
      mbox: { type: GraphQLString },
      mbox_sha1sum:  { type: GraphQLString },
      account:  { type: AccountInputType },
      openid:  { type: GraphQLString },
  })
})

export const Cmi5LaunchParametersInputType = new GraphQLInputObjectType({
  name: 'Cmi5LaunchParametersType',
  fields: () => ({
      endpoint: { type: GraphQLString },
      fetch: { type: GraphQLString },
      registration: { type: GraphQLString },
      activityId: { type: GraphQLString },
      actor: {type: ActorInputType}
  })
})

const NotebookCellInputType = new GraphQLInputObjectType({
  name: 'NotebookCellType',
  fields: () => ({
    cell_type: { type: GraphQLString },
    metadata: { type: GraphQLString },
    source: { type: GraphQLString },
    outputs: { type: new GraphQLList(GraphQLString) },
  }),
});

const NotebookMetadataInputType = new GraphQLInputObjectType({
  name: 'NotebookMetadataInputType',
  fields: () => ({
    kernelspec: { type: GraphQLString },
    language_info: { type: GraphQLString },
  }),
});

export const NotebookContentInputType = new GraphQLInputObjectType({
  name: 'NotebookContentInputType',
  fields: () => ({
    cells: { type: new GraphQLList(NotebookCellInputType) },
    metadata: { type: NotebookMetadataInputType },
    nbformat: { type: GraphQLInt },
    nbformat_minor: { type: GraphQLInt },
  }),
});

export const DisplayedHintsInputType = new GraphQLInputObjectType({
  name: 'DisplayedHintsInputType',
  fields: () => ({
    message: { type: GraphQLString },
    conditionDescription: { type: GraphQLString },
  }),
});