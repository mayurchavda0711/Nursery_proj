from django.urls import path
from .views import UserDetailsCreateView, LoginView, OrderCreateView

urlpatterns = [
    path("register/", UserDetailsCreateView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("orders/", OrderCreateView.as_view(), name="create-order"),
]
