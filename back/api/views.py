
from django.http import JsonResponse
from django.views.generic.list import BaseListView
from django.views.generic.detail import BaseDetailView
from django.views.generic.edit import BaseCreateView, BaseUpdateView, BaseDeleteView
from django.db.models.aggregates import Count
from api.utils import make_tag_cloud, obj_to_post, prev_next_post
from user.views import MyLoginRequiredMixin, OwnerOnlyMixin
from blog.models import Post
from taggit.models import Tag


class ApiPostListView(BaseListView):
    def get_queryset(self):
        tagname = self.request.GET.get('tagname')
        if tagname:
            qs = Post.objects.filter(tags__name=tagname)
        else:
            qs = Post.objects.all()
        return qs

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


class ApiPostCreateView(MyLoginRequiredMixin, BaseCreateView):
    model = Post
    fields = '__all__'

    def form_valid(self, form):
        form.instance.owner = self.request.user
        self.object = form.save()
        post = obj_to_post(self.object)
        return JsonResponse(data=post, safe=True, status=201)
    
    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiPostUpdateView(OwnerOnlyMixin, BaseUpdateView):
    model = Post
    fields = '__all__'

    def form_valid(self, form):
        self.object = form.save()
        post = obj_to_post(self.object)
        return JsonResponse(data=post, safe=True, status=200)
    
    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiPostDeleteView(OwnerOnlyMixin, BaseDeleteView):
    model = Post
    
    def delete(self, request, *args: str, **kwargs):
        self.object = self.get_object()
        self.object.delete()
        return JsonResponse(data={}, safe=True, status=204)
