import scrapy

class NHKEasySpider(scrapy.Spider):
  name = 'nhkeasy'

  def __init__(self, category=None, *args, **kwargs):
    super(NHKEasySpider, self).__init__(*args, **kwargs)
    self.start_urls = ['https://www3.nhk.or.jp/news/easy' % self.article_suffix] # /blahvlah/blahblah

  def start_requests(self):
    for url in self.start_urls:
      yield scrapy.Request(url=self.url, callback=self.parse)
  def parse(self, response):