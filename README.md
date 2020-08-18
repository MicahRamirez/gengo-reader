# App to make the process of reviewing foreign language articles between student and teacher easier and more interactive

# Components

- React (NextJS) + Material UI on Vercel Serverless
- GQL Interface to Datastore in FaunaDB (https://fauna.com/)
- Python (Fast)Api: Article Parser using Python Scrapy on Vercel Serverless
- Auth provided by FaunaDB Auth Capabilities
- (Stretch) Tokenizer Service most likely on AWS Fargate (Tokenizer requires specific system deps so can't be ran in severless environ)
- (Stretch) Chat Service

# Typedefs for Data

# Python Article Parser HOW-TO

Python dev workflow relies on pipenv https://pipenv-fork.readthedocs.io/en/latest/
pipenv works very similar to familiar tool sets like yarn and npm while simultaneously utilizing important python dev workflow concepts virtualenvs etc

### Testing and working on an article scraper

1. `pipenv shell`
2. `scrapy shell <DESIRED_URL>`
3. Use scrapy selectors to testing parsing the desired article

Uses Scrapy https://docs.scrapy.org/en/latest/
