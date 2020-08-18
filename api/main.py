
from fastapi import FastAPI
from pydantic import BaseModel
from datetime import date
from . import nhk_spider

import scrapy
app = FastAPI()


class ReadingReference(BaseModel):
    url: str


class Reading(BaseModel):
    url: str
    title: str
    text: str
    published_at: date


class ScrapedNHKArticle(Reading):
    token_map: dict


NHK_PREFIX = 'https://www3.nhk.or.jp/news/easy/'


@app.post("/scrape")
async def scrape_article(article: ReadingReference):
    if NHK_PREFIX in article.url:
        test = '1'
    return 'hello world'
