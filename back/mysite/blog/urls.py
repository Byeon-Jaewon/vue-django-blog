from django import views
from django.urls import path

app_name = 'blog'
urlpattern = [
    path('post/list/', views.PostListView.as_view(), name='post_list'),
    path('post/<int:pk>/', views.PostDetailView.as_view(), name='post_detail'),
]