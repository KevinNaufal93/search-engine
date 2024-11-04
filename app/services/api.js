import OpenAI from "openai";

const configuration = {
    apiKey:process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true
}

console.log(process.env, process.env.OPENAI_API_KEY);

export const searchApi = {

    searchTrendingTopic: async (topic) => {
        try {
            const openai = new OpenAI(configuration);
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are an expert analyst on trending topics on twitter/X. Give response in JSON, Put the requested query inside an object called content, and sentiment metric inside metric, metric can only be either Positive, Neutral, or Negative" },
                    { role: "user", content: `What can you tell me about the sentiment analysis of this topic ${topic}, on twitter/X ? please make it brief, no point or numbering format, and write the sentiment metric in metric object just using either Positive, Neutral, or Negative`},
                ],
            });        
            const topics = completion.choices[0].message.content;
            const parsedTopics = JSON.parse(topics);
            return parsedTopics;
          } catch (error) {
            console.error("Error fetching trending topics:", error);
            throw new Error('Search failed', error);
          }
    },

    generateTrendingTopic: async (topic) => {
        try {
            const openai = new OpenAI(configuration);
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are an expert analyst on trending topics on twitter/X. Give response in Array with objects and put in each object the short title and its sentiment with only either Positive, Neutral or Negative. Dont include syntax such as json, n, or ``` " },
                    { role: "user", content: `Generate 6 trending topics of X or Twitter with their sentiments`},
                ],
            });        

            const topics = completion.choices[0].message.content;
            const parseTopic = JSON.parse(topics)
            return parseTopic;
          } catch (error) {
            console.error("Error generating trending topics:", error);
            throw new Error('Search failed', error);
          }
    },

  };