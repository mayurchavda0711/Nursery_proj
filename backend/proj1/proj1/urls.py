from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Backend Running Successfully!")

urlpatterns = [
    path("", home),                          # Root test URL
    path("admin/", admin.site.urls),         # Django admin
    path("api/", include("api.urls")),       # Include your app's API routes
]
