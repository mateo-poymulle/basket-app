from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import Shoes, Activity, ExtendedUser
from rest_framework.exceptions import ValidationError




class ActivityCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoes
        fields = "__all__"


class ActivitySerializer(serializers.ModelSerializer):
    shoes = ActivityCourseSerializer()

    class Meta:
        model = Activity
        fields = "__all__"



class ShoesSerializer(serializers.ModelSerializer):
    activities = ActivitySerializer(many=True, read_only=True)
    custom_field = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Shoes
        fields = "__all__"

    def validate_name(self, name):
        if name == 'name not valid':
            raise ValidationError("name is not valid")
        return name

    def get_custom_field(self, shoe):
        return shoe.activities.count()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "password"]

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
        )
        ExtendedUser.objects.create(user=user)
        return user

class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model =get_user_model()
        fields= "__all__"
