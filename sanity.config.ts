import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemaTypes'
import { table } from '@sanity/table'
import { codeInput, CodeInput } from '@sanity/code-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion,} from './sanity/env'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/admin',
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  title :process.env.NEXT_PUBLIC_SANITY_TITLE as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,  
  apiVersion: '2021-03-25',

  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema :{types:schemas},
  plugins: [
    structureTool({structure}),
    table(),
    codeInput(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
