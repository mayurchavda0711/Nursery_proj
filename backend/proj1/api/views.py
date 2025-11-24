from rest_framework import generics, permissions
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from .models import UserDetails, Order
from .serializers import UserDetailsSerializer, OrderSerializer

# CREATE ORDER
class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.AllowAny]

# LIST ORDERS
class OrderListView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.AllowAny]

# SIGN UP
class UserDetailsCreateView(generics.CreateAPIView):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer
    permission_classes = [permissions.AllowAny]

# LOGIN
class LoginView(generics.GenericAPIView):
    serializer_class = UserDetailsSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = UserDetails.objects.get(email=email)
        except UserDetails.DoesNotExist:
            return Response({"error": "User not found"}, status=404)

        if not check_password(password, user.password):
            return Response({"error": "Invalid password"}, status=400)

        return Response({
            "message": "Login successful",
            "name": user.name,
            "email": user.email,
            "phone": user.phone
        }, status=200)
