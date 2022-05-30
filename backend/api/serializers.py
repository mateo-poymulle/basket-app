from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import Shoes, ExtendedUser, Activity
from rest_framework.exceptions import ValidationError




class ActivityShoesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoes
        fields = "__all__"


class ActivitySerializer(serializers.ModelSerializer):
    shoe = ActivityShoesSerializer()

    class Meta:
        model = Activity
        fields = "__all__"



class ShoesSerializer(serializers.ModelSerializer):
    activities = ActivitySerializer(many=True, read_only=True)
    custom_field = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Shoes
        fields = "__all__"

    def validate_title(self, title):
        if title == 'name not valid':
            raise ValidationError("name is not valid")
        return title

    def get_custom_field(self, shoe):
        return shoe.activities.count()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ["first_name", "last_name", "email", "username", "password"]

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password'],


        )
        ExtendedUser.objects.create(user=user)
        return user

class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model =get_user_model()
        fields= "__all__"
