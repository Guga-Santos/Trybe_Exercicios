import requests
from parsel import Selector

ROOT_URL = "https://blog.betrybe.com/"
response = requests.get(ROOT_URL)
selector = Selector(text=response.text)

# thumbnail_url_selector = "div.image_container a::attr(href)"

# for url in selector.css(thumbnail_url_selector).getall():
#   thumb_response = requests.get(ROOT_URL + url)
#   thumb_selector = Selector(text=thumb_response.text)
#   book_title = thumb_selector.css("div.product_main h1").get()
#   print(book_title)
  


