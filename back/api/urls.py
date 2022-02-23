from api import views
from django.urls import path


app_name = 'api'

urlpatterns = [
    path('post/list/', views.ApiPostListView.as_view()),
    path('post/<int:pk>/', views.ApiPostDetailView.as_view()),
]