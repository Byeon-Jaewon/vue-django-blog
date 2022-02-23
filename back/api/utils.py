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