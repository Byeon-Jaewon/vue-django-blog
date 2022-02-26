from django.contrib.auth.mixins import LoginRequiredMixin, AccessMixin
from django.contrib.auth import login, get_user, logout, update_session_auth_hash
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.cache import never_cache
from django.views.generic.edit import BaseCreateView
from django.http import JsonResponse
from .forms import MyUserCreationForm

# Create your views here.
class ApiLoginView(LoginView):
    def form_valid(self, form):
        user = form.get_user()
        login(self.request, user)
        userDict = vars(user)
        del userDict['_state'], userDict['password']
        return JsonResponse(data=userDict, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)

class ApiRegisterView(BaseCreateView):
    form_class = MyUserCreationForm

    def form_valid(self, form):
        self.object = form.save()
        userDict = {
            'id': self.object.id,
            'username': self.object.username,
        }
        return JsonResponse(data=userDict, safe=True, status=201)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiLogoutView(LogoutView):
    @method_decorator(never_cache)
    def dispatch(self, request, *arg, **kwargs):
        logout(request)
        return JsonResponse(data={}, safe=True, status=200)


class ApiPasswordChangeView(PasswordChangeView):
    def form_valid(self, form):
        form.save()
        update_session_auth_hash(self.request, form.user)
        return JsonResponse(data={}, safe=True, status=200)
    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiMeView(View):
    def get(self, request, *args, **kwargs):
        user = get_user(request)
        if user.is_authenticated:
            userDict = {
                'id' : user.id,
                'username' : user.username,
            }
        else:
            userDict = {
                'username' : 'anonymous'
            }
        return JsonResponse(data=userDict, safe=True, status=200)


class MyLoginRequiredMixin(LoginRequiredMixin):
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated :
            data = {'message': 'login required(401)'}
            return JsonResponse(data=data, safe=True, status=401)
        return super().dispatch(request,*args, **kwargs)


class OwnerOnlyMixin(AccessMixin):
    def dispatch(self, request, *args, **kwargs):
        self.object = self.get_object()
        if request.user != self.object.owner :
            data = {'message':'Owner only can update and delete'}
            return JsonResponse(data=data, safe=True, status=403)
        return super().dispatch(request,*args,**kwargs)
