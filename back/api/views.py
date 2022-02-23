from django.http import JsonResponse
from django.views.generic.list import BaseListView
from django.views.generic.detail import BaseDetailView
from django.db.models.aggregates import Count
from api.utils import make_tag_cloud, obj_to_post, prev_next_post
from blog.models import Post
from taggit.models import Tag


class ApiPostListView(BaseListView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        postlist = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=postlist, safe=False, status=200)


class ApiPostDetailView(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)
        post['prev'], post['next'] = prev_next_post(obj)
        return JsonResponse(data=post, safe=False, status=200)


class ApiTagCloudListView(BaseListView):
    queryset = Tag.objects.annotate(count=Count('post'))

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        
        taglist = make_tag_cloud(qs)

        return JsonResponse(data=taglist, safe=False, status=200)
