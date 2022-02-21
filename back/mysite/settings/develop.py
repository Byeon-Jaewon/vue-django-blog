from .base import *

SECRET_KEY = 'django-insecure-kp8slr^#y#g_w!_w^5w#ooq&bpdd9u1jcpe247sx4f7^^2%sdv'

DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}