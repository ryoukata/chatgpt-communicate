import {Configuration, OpenAIApi} from "openai";
import * as dotenv from "dotenv";
dotenv.config();

// set OpenAI config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
// set OpenAIAPI
const openai = new OpenAIApi(configuration);

// function to asd ChatGPT 
export async function askChatgpt(askContent: string, model = "gpt-3.5-turbo-0301") {
  const response = await openai.createChatCompletion({
    model: model,
    messages: [{role: "user", content: askContent}]
  });

  const answer = response.data.choices[0].message?.content;
  console.log(answer);
}

// ask
const request = "where is the capital of japan";
askChatgpt(request);