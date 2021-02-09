from django.db import models
#from accounts.models import Profile
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.

class Question(models.Model):
    user = models.ForeignKey(User, to_field="username", on_delete=models.SET_DEFAULT, default='탈퇴한 사용자')
    subject = models.CharField(max_length=200)
    content = models.TextField()
    create_date = models.DateTimeField()

    def __str__(self):
        return self.subject

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(User, to_field="username", on_delete=models.SET_DEFAULT,default='탈퇴한 사용자')
    content = models.TextField()
    create_date=models.DateTimeField()