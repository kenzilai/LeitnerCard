from django.db import models

class Card(models.Model):
    front = models.TextField(blank=False, null=False)
    back = models.TextField(blank=False, null=False)
    image = models.ImageField(upload_to='uploads/media/img', blank=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.front