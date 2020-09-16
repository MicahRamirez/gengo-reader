# App to make the process of reviewing foreign language articles between student and teacher easier and more interactive

# Components

- (Serverless) NextJS(React) + Material UI on Vercel Serverless
- (Serverless Datastore) GQL Interface to Datastore in FaunaDB (https://fauna.com/)
- (Serverless API) Python FastApi: Article Parser Endpoint using Python Scrapy on Vercel Serverless
- Auth provided by FaunaDB Auth Capabilities
- (Stretch) Tokenizer Service most likely on AWS Fargate (Tokenizer requires specific system deps so can't be ran in severless environ)
- (Stretch) Chat Service

# Python Article Parser HOW-TO

Python dev workflow relies on pipenv https://pipenv-fork.readthedocs.io/en/latest/
pipenv works very similar to familiar tool sets like yarn and npm while simultaneously utilizing important python dev workflow concepts virtualenvs etc

Running backend service
`uvicorn main:app -reload`

### Testing and working on an article scraper

1. `pipenv shell`
2. `scrapy shell <DESIRED_URL>`
3. Use scrapy selectors to testing parsing the desired article

Uses Scrapy https://docs.scrapy.org/en/latest/

# Fauna Authentication

1. Use buildtime secret known as a bootstrap token to have authorization to invoke login/registration GQL calls. These calls invoke custom resolvers which point to fql functions. You can see the FQL queries in the `/fql_functions` directory.
2. After a successful call, we receive an auth token which will be used as the new bearer token

## Bootstrap Token Role Access

1. Bootstrap token should have read, create access to Accounts, function access to login and register, read access to the unique_Accounts index

## GQL Types

Types are generated from the schema and the queries defined under src/queries, if you make changes to the schema or queries, the types need to be regenerated manually (for now)
