## Getting Started

First, create local .env file:

```env
OPENAI_API_KEY=somekey
```

and then run the development server:

```bash
npm install
# then
npm run dev
```
## About search-engine
search-engine is a web application that was made to give sentiment analysis of a trending topic based on OpenAI LLM's analysis.
It's made to mimic the UI of google landing page, although the search bar return the guided-query analysis rather than list of finding for that topics.
Aside from search bar, client can also get random topics from "I'm feeling wild today!" button, and then analyze the choosen topic, but beware that sentiment might change right away depending on recent updates of the topic or LLM's query result.

## Approach
The approach I'm using to develop this app for rapid but continous development, meaning that for short amount of time, the progress of development has to have tangible result while maintaining room/state for future improvement, such as foundations of framework, store, pagination, file structure, etc. For example while it might sounds overkill for the current development to use global store future development might benefit from already setup store that can be replicated, or tidy file structure but also still accomodate flexibility for rapid development (such as services in app folder).
There are several components that I have build for the long run such as loading spinner or error page but there's also some that I also build for the sake of experimenting such as big loading spinner for sentiment analysis loading, that might replace the loading spinner or be replaced by it depending on future development styles, overall it's good to have options.

## Libraries
1. React-Dom: As mentioned above, if it's going to have more features and functionalities just simple HTML Link won't do, although for the current development might be overkill, it's best to set this up for now to speed up pagination and navigation.
2. Redux: Same as above, I used it not just for keeping store but to maintain dynamic pagination routing through action that's performed, for storing global state and APIs response management to global state, will speed up complex future development.
3. mdi (Material Icons): Although i only have one use for it now, huge collection of icon will speed up UI development without worrying searching and importing images/icons
4. OpenAi: To replicate the sentiment analysis from X API, I choose OpenAi to have query interactions. among other LLM, OpenAi is the easiest to integrate and well known in dev forums (LLMD Reddit and StackOverflow) should i have concern that too specific regarding the usage. Also for rapid, and continous development allows for multiple system message that make my complex query doable in short time.

## Future Improvements
1. Refactor: API services will be taken out and be made in server folders, or deployed separately. Make common components into shared-components and transfer all logics from them to page or regular components instead.
2. Add Server Repo and Database: LLM uses token whom usage can be effectively optimized through reformatting query, although this is the effective way to optimize token usage, with dedicated backend server and database, we can store the most common keyword instead and store the analysis, and then we can modify current flow to find in our local database first and return the stored analysis if its exist rather than spending token to get same result. And of course with dedicated backend server and database lots of new features and functionalties will be open to explore.
3. Improve color scheme and loading transition


