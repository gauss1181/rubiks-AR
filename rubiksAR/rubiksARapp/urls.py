from django.conf.urls import patterns
from django.conf.urls import url
from rubiksARapp import views

urlpatterns = patterns('',
        url(r'^$', views.index, name='index'))
