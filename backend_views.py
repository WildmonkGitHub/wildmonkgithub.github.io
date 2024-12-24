import requests
from django.http import HttpResponse
from django.template import loader

response =  requests.get('https://www.youtube.com/watch?v=OymDLjYbH3o&t=2s') 
html = response.text

x = html
e = x.find('{"videoViewCountRenderer":{"viewCount":{"simpleText":"')
i = 0
parental_views = []
e = e + 53
while (x[e] != 's'):
    e = e + 1
    parental_views.append(x[e])

i = 0
s = ""

for i in range(len(parental_views)):
    s = s + parental_views[i]


def testing(request):
  template = loader.get_template('index.html')
  context = {
    'viewses': '554',
  }
  return HttpResponse(template.render(context, request))