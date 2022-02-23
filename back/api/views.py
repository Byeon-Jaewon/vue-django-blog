from django.http import JsonResponse
from django.views.generic.list import BaseListView
from django.views.generic.detail import BaseDetailView
from api.utils import obj_to_post, prev_next_post
from blog.models import Post


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
