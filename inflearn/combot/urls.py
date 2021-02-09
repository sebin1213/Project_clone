from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'combot'

urlpatterns =[
    path('', views.index, name='index'),
    path('<int:question_id>/', views.community_post, name='community_post'),
    path('answer/create/<int:question_id>/', views.answer_create, name='answer_create'), #답변을 등록하는 url
    path('question/create/', views.question_create,name='question_create'),
]
