from django.urls import path
from . import views
urlpatterns=[
    path('',views.textAPI.as_view(), name="text-api"),
]