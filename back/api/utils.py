from blog.models import Post


def obj_to_post(obj):
    post = dict(vars(obj))

    if obj.modify_at:
        post['modify_at'] = obj.modify_at.strftime('%Y-%m-%d %H:%M')
    else:
        post['modify_at'] = ''
    
    if obj.tags:
        post['tags'] = [tag.name for tag in obj.tags.all()]
    else :
        post['tags'] = []
    
    if obj.owner:
        post['owner'] = obj.owner.username
    else:
        post['owner'] = 'Anonymous'
    
    del post['_state']

    return post

def prev_next_post(obj):
    try:
        prevObj = obj.get_prev()
        prevDict = {'id':prevObj.id, 'title':prevObj.title}
    except obj.DoesNotExist as e:
        prevDict = {}

    try:
        nextObj = obj.get_next()
        nextDict = {'id': nextObj.id, 'title':nextObj.title}
    except obj.DoesNotExist as e:
        nextDict = {}
    
    return prevDict, nextDict