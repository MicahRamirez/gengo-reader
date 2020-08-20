
import os
from fastapi import FastAPI, Response, status
from pydantic import BaseModel
import requests
from bs4 import BeautifulSoup
from faunadb import query as q
from faunadb.objects import Ref
from faunadb.client import FaunaClient


app = FastAPI()


class ReadingReference(BaseModel):
    url: str


NHK_PREFIX = 'https://www3.nhk.or.jp/news/easy/'
faunadb_secret = os.getenv('FAUNADB_SECRET')
client = FaunaClient(secret=faunadb_secret)


@app.post("/", status_code=200)
async def scrape_article(article: ReadingReference, response: Response):
    if NHK_PREFIX in article.url:
        try:
            # see if an article exists
            client.query(q.get(
                q.match(q.index('reading_by_url'), article.url)))
            return {"success": True, "status": "DocumentExisted"}
        except:
            # scrape article and save
            article = requests.get(article.url)
            soup = BeautifulSoup(article.content, 'html.parser')
            article_body_text = soup.find(
                class_='article-main__body').get_text()
            article_title_text = soup.find(
                class_='article-main__title').get_text()
            client.query(q.create(q.collection('Reading'), {
                "data": {"reading_url": article.url, "article_title": article_title_text, "text": article_body_text}
            }))
            response.status_code = status.HTTP_201_CREATED
            return {"success": True, "status": "CreatedDocument"}
    else:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return {"success": False, "status": "UnknownArticleType"}
