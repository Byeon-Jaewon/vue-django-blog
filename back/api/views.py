from django.http import JsonResponse
from django.views.generic.list import BaseListView
from api.utils import obj_to_post
from blog.models import Post


class ApiPostListView(BaseListView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        postlist = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=postlist, safe=False, status=200)