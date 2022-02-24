from django.views.generic import ListView, DetailView, TemplateView

from blog.models import Post


class PostListView(TemplateView):
    template_name = 'blog/post_list.html'

class PostDetailView(TemplateView):
    template_name = 'blog/post_detail.html'
