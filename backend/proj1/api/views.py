from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from .models import UserDetails
from .serializers import UserDetailsSerializer


class UserDetailsCreateView(generics.CreateAPIView):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer


class LoginView(generics.GenericAPIView):
    serializer_class = UserDetailsSerializer

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = UserDetails.objects.get(email=email)
        except UserDetails.DoesNotExist:
            return Response({"error": "User not found"}, status=404)

        if not check_password(password, user.password):
            return Response({"error": "Invalid password"}, status=400)

        return Response({"message": "Login successful", "name": user.name})