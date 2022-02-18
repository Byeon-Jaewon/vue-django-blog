from django.db import models
from django.urls import reverse

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=50, verbose_name='제목')
    description = models.CharField(max_length=100, blank=True, verbose_name='요약')
    content = models.TextField(verbose_name='내용')
    create_at = models.DateTimeField(auto_now_add=True, verbose_name='생성일')
    modify_at = models.DateTimeField(auto_now=True, verbose_name='수정일')

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('blog:post_detail', args=(self.id,))
    
    def get_prev(self):
        return self.get_previous_by_modify_at()
    
    def get_next(self):
        return self.get_next_by_modify_at()