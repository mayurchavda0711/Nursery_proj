from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import UserDetails, Order

class UserDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDetails
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    # Validate Phone Number
    def validate_phone(self, value):
        if len(value) != 10 or not value.isdigit():
            raise serializers.ValidationError("Phone number must be exactly 10 digits.")
        return value

    # Hash password before saving
    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"
