from django.urls import path
from .views import UserDetailsCreateView
from .views import UserDetailsCreateView, LoginView

urlpatterns = [
    path('register/', UserDetailsCreateView.as_view(), name='register'),
    path("login/", LoginView.as_view(), name="login"),
]
