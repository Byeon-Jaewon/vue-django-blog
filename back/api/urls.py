from api import views
from django.urls import path


app_name = 'api'

urlpatterns = [
    path('post/list/', views.ApiPostListView.as_view()),
    path('post/<int:pk>/', views.ApiPostDetailView.as_view()),
    path('tag/cloud/', views.ApiTagCloudListView.as_view()),

    path('post/create/', views.ApiPostCreateView.as_view()),
    path('post/<int:pk>/update/', views.ApiPostUpdateView.as_view()),
    path('post/<int:pk>/delete/', views.ApiPostDeleteView.as_view()),
]