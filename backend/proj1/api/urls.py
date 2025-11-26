from django.urls import path
from .views import UserDetailsCreateView, LoginView, OrderCreateView, OrderListView,OrderDeleteView

urlpatterns = [
    path("register/", UserDetailsCreateView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("orders/", OrderCreateView.as_view(), name="create-order"),
    path("orders/list/", OrderListView.as_view(), name="list-orders"),
    path("orders/delete/<str:order_id>/", OrderDeleteView.as_view(), name="delete-order"),

]
