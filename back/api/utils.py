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

def make_tag_cloud(qs):
    minCount = min(tag.count for tag in qs)
    maxCount = max(tag.count for tag in qs)

    def get_weight_function(minWeight, maxWeight):
        if minCount == maxCount:
            factor = 1.0
        else :
            factor = (maxWeight - minWeight) / (maxCount - minCount)
        
        def func(count):
            weight = round(minWeight + (factor * (count - minCount)))
            return weight
        
        return func
    
    weight_function = get_weight_function(1, 3)
    tagList = []
    for tag in qs:
        weight = weight_function(tag.count)
        tagList.append({
            'name':tag.name,
            'count':tag.count,
            'weight':weight,
        })
        
    return tagList