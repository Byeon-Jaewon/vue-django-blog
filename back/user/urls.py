from user import views
from django.urls import path


app_name = 'user'

urlpatterns = [
    path('login/', views.ApiLoginView.as_view()),
    path('logout/', views.ApiLogoutView.as_view()),
    path('register/', views.ApiRegisterView.as_view()),
    path('password-change/', views.ApiPasswordChangeView.as_view()),
    path('me/', views.ApiMeView.as_view()),
]